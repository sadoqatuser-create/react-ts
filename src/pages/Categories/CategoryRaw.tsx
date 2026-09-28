// import React from 'react';
// import { useDeleteCategoryMutation, useUpdateCategoryMutation } from './categoryApi';
// import { CategoryRawProps } from './types';
// import { FaEdit, FaTrash } from 'react-icons/fa';

// export const CategoryRaw: React.FC<CategoryRawProps> = ({ item, index }) => {
//   const [deleteCategory] = useDeleteCategoryMutation();
//   const [updateCategory] = useUpdateCategoryMutation();

//   const handleDelete = async () => {
//     await deleteCategory(item.id);
//   };

//   const handleEdit = async () => {
//     const newName = prompt("Yangi nomni kiriting:", item.name);
//     if (newName && newName !== item.name) {
//       await updateCategory({ id: item.id, name: newName });
//     }
//   };

//   return (
//     <tr className="transition-colors hover:bg-blue-50/40">
//       <td className="px-5 py-4 font-medium text-slate-500 sm:px-6">
//         {String(index + 1).padStart(2, '0')}
//       </td>
//       <td className="px-5 py-4 font-semibold text-slate-800 sm:px-6">
//         {item.name}
//       </td>
//       <td className="px-5 py-4 sm:px-6">
//         <div className="flex justify-end gap-2">
//           <button
//             type="button"
//             onClick={handleEdit}
//             title="Tahrirlash"
//             className="inline-flex size-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
//           >
//             <FaEdit />
//           </button>
//           <button
//             type="button"
//             onClick={handleDelete}
//             title="O'chirish"
//             className="inline-flex size-9 items-center justify-center rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
//           >
//             <FaTrash />
//           </button>
//         </div>
//       </td>
//     </tr>
//   );
// };