import React, { FC, useState } from 'react';
import { Grid, Container } from '@mui/material';
import { ArticleTile } from './article';
import { ArticleCategory } from '../models';
import { useQuery } from 'react-query';
import { fetchArticles, fetchCategories } from '../api/calls';
import { NavBar } from './NavBar';
import { Pagination, Error, Progress } from './ui';
import { MAX_PAGES } from '../utils/constants';

export const Dashboard: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const buildQuery = (): string => {
    const p = `page=${page}`;
    const c = selectedCategory ? `section=${selectedCategory}` : '';
    return [p, c].join('&');
  };

  const useArticles = () => {
    const query = buildQuery();
    return useQuery(['articles', query], () => fetchArticles(query), {
      select: data => data.response,
    });
  };

  const useCategories = () => {
    return useQuery<ArticleCategory[], Error>('categories', fetchCategories);
  };

  const { data: categories, isLoading: categoryLoading, isError: categoryLoadingError, isSuccess: isSuccessCategories } = useCategories();
  const { data: articlesData, isLoading: articleLoading, isError: articleLoadingError, isSuccess: isSuccessArticles } = useArticles();

  const isLoading = categoryLoading || articleLoading;
  const isError = categoryLoadingError || articleLoadingError;
  const isSuccess = isSuccessCategories && isSuccessArticles;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleCategoryChange = (event: React.SyntheticEvent, value: ArticleCategory | null) => {
    setSelectedCategory(value ? value.id : '');
    setPage(1);
  };

  return (
    <>
      <Container maxWidth='lg'>
        {categoryLoading && <Progress />}
        {isSuccessCategories && categories && <NavBar categories={categories} onChange={handleCategoryChange} />}
        {isError && <Error />}
        {isLoading && <Progress />}
        {isSuccess && articlesData && (
          <>
            <Grid container spacing={3}>
              {articlesData.results.map((article, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <ArticleTile article={article} />
                </Grid>
              ))}
            </Grid>
            <Pagination page={page} count={articlesData.pages > MAX_PAGES ? MAX_PAGES : articlesData.pages} onChange={handlePageChange} />
          </>
        )}
      </Container>
    </>
  );
};
