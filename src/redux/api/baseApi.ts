import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//https://campic-server-zeta.vercel.app
//http://localhost:5000

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://campic-server-zeta.vercel.app/api",
  }),
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/product",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    getAllProduct: builder.query({
      query: (options = {}) => {
        const { category, sortBy, price, searchTrams } = options;
        const queryParameters = new URLSearchParams({
          ...(category && { category }),
          ...(sortBy && { sortBy }),
          ...(price && { price }),
          ...(searchTrams && { searchTrams }),
        });
        return {
          url: `/product?${queryParameters.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (option) => ({
        url: `/product/${option.id}`,
        method: "PATCH",
        body: option.data,
      }),
      invalidatesTags: ["product"],
    }),
    updatePayment: builder.mutation({
      query: (data) => {
        return {
          method: "PUT",
          url: "/product/payment",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useDeleteProductMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useUpdatePaymentMutation,
} = baseApi;
