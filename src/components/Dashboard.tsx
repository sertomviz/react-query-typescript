import React, { FC, useState } from 'react';
import { Grid, Container } from '@mui/material';
import { ArticleTile } from './article';
import { ArticleCategory } from '../models';
import { useArticles, useCategories } from '../api/hooks';
import { NavBar } from './NavBar';
import { Pagination, Error, Progress, DisplayCenter, NoArticles } from './ui';
import { MAX_PAGES } from '../utils/constants';
import { buildQuery } from '../utils/common';

export const Dashboard: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);

  const query = buildQuery(page, selectedCategory, dateFrom, dateTo);

  const { data: categories, isLoading: categoryLoading, isError: categoryLoadingError, isSuccess: isSuccessCategories } = useCategories();
  const {
    data: articlesData,
    isLoading: articlesLoading,
    isError: articlesLoadingError,
    isSuccess: isSuccessArticles,
  } = useArticles(query);

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
    setPage(1);
  };

  const handleDateToChange = (date: Date | null) => {
    setDateTo(date);
    setPage(1);
  };

  return (
    <>
      <Container maxWidth='lg'>
        {categoryLoading && (
          <DisplayCenter>
            <Progress />
          </DisplayCenter>
        )}
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
        {isError && (
          <DisplayCenter>
            <Error />
          </DisplayCenter>
        )}
        {isLoading && (
          <DisplayCenter>
            <Progress />
          </DisplayCenter>
        )}
        {isSuccess && articlesData && (
          <>
            <Grid container spacing={3}>
              {articlesData.results.length > 0 ? (
                articlesData.results.map((article, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <ArticleTile article={article} />
                  </Grid>
                ))
              ) : (
                <DisplayCenter>
                  <NoArticles />
                </DisplayCenter>
              )}
            </Grid>
            <Pagination page={page} count={articlesData.pages > MAX_PAGES ? MAX_PAGES : articlesData.pages} onChange={handlePageChange} />
          </>
        )}
      </Container>
    </>
  );
};
