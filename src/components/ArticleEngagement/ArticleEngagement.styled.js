import styled from "styled-components";

export const EngagementSection = styled.section`
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid #e5e5e5;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 18px;
  font-size: 28px;
  color: #111;
`;

export const ReactionsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 36px;
`;

export const ReactionButton = styled.button`
  min-width: 96px;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 100px;
  border: 1px solid ${({ active }) => (active ? "#e6643a" : "#ddd")};
  background: ${({ active }) => (active ? "#e6643a" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#111")};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const CommentForm = styled.form`
  display: grid;
  gap: 12px;
  margin-bottom: 32px;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 18px;
  resize: vertical;
  font-size: 16px;
  font-family: inherit;
`;

export const SubmitButton = styled.button`
  width: fit-content;
  min-height: 46px;
  padding: 0 20px;
  border: none;
  border-radius: 100px;
  background: #111;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;

export const CommentsList = styled.div`
  display: grid;
  gap: 16px;
`;

export const Comment = styled.article`
  padding: 18px;
  border-radius: 18px;
  background: #f7f3ef;

  p {
    margin: 8px 0 0;
    line-height: 1.6;
  }
`;

export const CommentAuthor = styled.h3`
  margin: 0 0 4px;
  font-size: 17px;
  color: #111;
`;

export const CommentDate = styled.span`
  font-size: 13px;
  color: #777;
`;

export const EmptyText = styled.p`
  margin: 0;
  color: #777;
`;
