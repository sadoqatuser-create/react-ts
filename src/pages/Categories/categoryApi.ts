// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { Category } from './types';

// export const categoryApi = createApi({
//   reducerPath: 'categoryApi',
//   baseQuery: fetchBaseQuery({ baseUrl: '' }),
//   tagTypes: ['Categories'],
//   endpoints: (build) => ({
//     getCategories: build.query<Category[], void>({
//       query: () => 'categories',
//       providesTags: ['Categories'],
//     }),

//     addCategory: build.mutation<Category, Partial<Category>>({
//       query: (body) => ({
//         url: 'categories',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['Categories'],
//     }),

//     updateCategory: build.mutation<Category, { id: string } & Partial<Category>>({
//       query: ({ id, ...patch }) => ({
//         url: `categories/${id}`,
//         method: 'PATCH',
//         body: patch,
//       }),
//       invalidatesTags: ['Categories'],
//     }),

  
//     deleteCategory: build.mutation<{ success: boolean; id: string }, string>({
//       query: (id) => ({
//         url: `categories/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Categories'],
//     }),
//   }),
// });

// export const {
//   useGetCategoriesQuery,
//   useAddCategoryMutation,
//   useUpdateCategoryMutation,
//   useDeleteCategoryMutation,
// } = categoryApi;