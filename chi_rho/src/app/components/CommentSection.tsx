// Comments.tsx
// 'use client'
// import React, { useState } from 'react';
// import CommentList from './CommentList';
// import CommentForm from './CommentForm';

// interface Comment {
//   id: number;
//   author: string;
//   text: string;
//   date: string;
// }

// const Comments: React.FC = () => {
//   const [comments, setComments] = useState<Comment[]>([]);

//   const addComment = (author: string, text: string) => {
//     const newComment = {
//       id: comments.length + 1,
//       author,
//       text,
//       date: new Date().toLocaleDateString(),
//     };
//     setComments([...comments, newComment]);
//   };

//   return (
//     <div className="space-y-8">
//       <CommentList comments={comments} />
//       <CommentForm onAddComment={addComment} />
//     </div>
//   );
// };

// export default Comments;
