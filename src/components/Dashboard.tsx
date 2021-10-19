import React, { FC, useState } from 'react';
import { Grid, Container } from '@mui/material';
import { ArticleTile } from './article';
import { ArticleCategory } from '../models';
import { useQuery } from 'react-query';
import { fetchArticles, fetchCategories } from '../api/calls';
import { NavBar } from './NavBar';
import { Pagination, Error, Progress } from './ui';
import { MAX_PAGES } from '../utils/constants';
import { format, isValid } from 'date-fns';

export const Dashboard: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);

  const buildQuery = (): string => {
    const p = `page=${page}`;
    const c = selectedCategory ? `section=${selectedCategory}` : null;
    const df = dateFrom && isValid(dateFrom) ? `from-date=${format(dateFrom, 'yyyy-MM-dd')}` : null;
    const dt = dateTo && isValid(dateTo) ? `to-date=${format(dateTo, 'yyyy-MM-dd')}` : null;
    return [p, c, df, dt].filter(e => e).join('&');
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
  const { data: articlesData, isLoading: articlesLoading, isError: articlesLoadingError, isSuccess: isSuccessArticles } = useArticles();

  const isLoading = categoryLoading || articlesLoading;
  const isError = categoryLoadingError || articlesLoadingError;
  const isSuccess = isSuccessCategories && isSuccessArticles;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleCategoryChange = (event: React.SyntheticEvent, value: ArticleCategory | null) => {
    setSelectedCategory(value ? value.id : '');
    setPage(1);
  };

  const handleDateFromChange = (date: Date | null) => {
    setDateFrom(date);
  };

  const handleDateToChange = (date: Date | null) => {
    setDateTo(date);
  };

  return (
    <>
      <Container maxWidth='lg'>
        {categoryLoading && <Progress />}
        {isSuccessCategories && categories && (
          <NavBar
            categories={categories}
            dateFrom={dateFrom}
            dateTo={dateTo}
            onCategoryChange={handleCategoryChange}
            onDateFromChange={handleDateFromChange}
            onDateToChange={handleDateToChange}
          />
        )}
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
