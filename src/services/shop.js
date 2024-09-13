import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_FIREBASE } from "../firebase/database";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
  tagTypes: ["userImage", "userLocation"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getProductsByCategory: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (response) => {
        const data = Object.entries(response).map((item) => ({
          ...item[1],
          id: item[0],
        }));

        return data;
      },
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}.json`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetProductQuery,
} = shopApi;
