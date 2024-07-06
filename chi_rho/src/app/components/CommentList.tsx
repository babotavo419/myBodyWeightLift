// CommentList.tsx
// import React from 'react';

// interface Comment {
//   id: number;
//   author: string;
//   text: string;
//   date: string;
// }

// interface CommentListProps {
//   comments: Comment[];
// }

// const CommentList: React.FC<CommentListProps> = ({ comments }) => {
//   return (
//     <div className="space-y-4">
//       {comments.map(comment => (
//         <div key={comment.id} className="p-4 border rounded-lg shadow-sm">
//           <p className="text-sm text-gray-500">{comment.date}</p>
//           <h4 className="font-bold">{comment.author}</h4>
//           <p>{comment.text}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CommentList;
