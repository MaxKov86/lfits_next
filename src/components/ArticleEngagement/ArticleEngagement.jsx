"use client";

import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import AuthBox from "../AuthBox/AuthBox";
import {
  addComment,
  getUserReaction,
  listenToArticleReactions,
  listenToComments,
  setReaction,
} from "../../firebase/articleEngagementApi";

import {
  Comment,
  CommentAuthor,
  CommentDate,
  CommentForm,
  CommentInput,
  CommentsList,
  EmptyText,
  EngagementSection,
  ReactionButton,
  ReactionsRow,
  SectionTitle,
  SubmitButton,
} from "./ArticleEngagement.styled";

const ArticleEngagement = ({ articleId }) => {
  const [user, setUser] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [myReaction, setMyReaction] = useState(null);

  useEffect(() => {
    const unsubscribeComments = listenToComments(articleId, setComments);

    const unsubscribeReactions = listenToArticleReactions(articleId, (data) => {
      setLikes(data.likes);
      setDislikes(data.dislikes);
    });

    return () => {
      unsubscribeComments();
      unsubscribeReactions();
    };
  }, [articleId]);

  useEffect(() => {
    const loadMyReaction = async () => {
      if (!user) {
        setMyReaction(null);
        return;
      }

      const reaction = await getUserReaction({
        articleId,
        userId: user.uid,
      });

      setMyReaction(reaction?.value || null);
    };

    loadMyReaction();
  }, [articleId, user]);

  const handleReaction = async (value) => {
    try {
      if (!user) {
        toast.error("Увійдіть, щоб поставити реакцію");
        return;
      }

      await setReaction({
        articleId,
        user,
        value,
      });

      setMyReaction((prev) => (prev === value ? null : value));
    } catch (error) {
      toast.error("Не вдалося зберегти реакцію");
    }
  };

  const handleSubmitComment = async (event) => {
    event.preventDefault();

    if (!user) {
      toast.error("Увійдіть, щоб коментувати");
      return;
    }

    if (!commentText.trim()) {
      return;
    }

    try {
      await addComment({
        articleId,
        user,
        text: commentText.trim(),
      });

      setCommentText("");
      toast.success("Коментар додано");
    } catch (error) {
      toast.error("Не вдалося додати коментар");
    }
  };

  const handleUserChange = useCallback((currentUser) => {
    setUser(currentUser);
  }, []);

  return (
    <EngagementSection>
      <SectionTitle>Реакції</SectionTitle>

      <ReactionsRow>
        <ReactionButton
          type="button"
          active={myReaction === 1}
          onClick={() => handleReaction(1)}
        >
          👍 {likes}
        </ReactionButton>

        <ReactionButton
          type="button"
          active={myReaction === -1}
          onClick={() => handleReaction(-1)}
        >
          👎 {dislikes}
        </ReactionButton>
      </ReactionsRow>

      <SectionTitle>Коментарі</SectionTitle>

      <AuthBox onUserChange={handleUserChange} />

      <CommentForm onSubmit={handleSubmitComment}>
        <CommentInput
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
          placeholder="Напишіть коментар..."
          rows={4}
        />

        <SubmitButton type="submit">Додати коментар</SubmitButton>
      </CommentForm>

      <CommentsList>
        {comments.length === 0 ? (
          <EmptyText>Поки що коментарів немає.</EmptyText>
        ) : (
          comments.map((comment) => (
            <Comment key={comment.id}>
              <CommentAuthor>{comment.userName}</CommentAuthor>
              <CommentDate>
                {comment.createdAt?.toDate
                  ? comment.createdAt.toDate().toLocaleString("uk-UA")
                  : ""}
              </CommentDate>
              <p>{comment.text}</p>
            </Comment>
          ))
        )}
      </CommentsList>
    </EngagementSection>
  );
};

export default ArticleEngagement;
