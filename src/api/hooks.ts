import { useQuery, UseQueryResult } from 'react-query';
import { fetchArticles, fetchCategories } from '../api/calls';
import { ArticleCategory, ArticleResponse } from '../models';

export const useArticles = (query: string): UseQueryResult<ArticleResponse> => {
  return useQuery(['articles', query], () => fetchArticles(query), {
    select: data => data.response,
  });
};

export const useCategories = (): UseQueryResult<ArticleCategory[]> => {
  return useQuery('categories', fetchCategories);
};
