import React from 'react';
import { useCategories, useArticles } from '../api/hooks';
import { buildQuery } from '../utils/common';
import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import { PAGE_SIZE } from '../utils/constants';

const queryClient = new QueryClient();
const wrapper = ({ children }: any) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

test('should return 75 article categories ', async () => {
  const { result, waitFor } = renderHook(() => useCategories(), { wrapper });

  await waitFor(() => result.current.isSuccess);
  expect(result.current.data).toHaveLength(75);
});

test('should return no more than $PAGE_SIZE articles', async () => {
  const query = buildQuery(1, '', null, null);
  const { result, waitFor } = renderHook(() => useArticles(query), { wrapper });

  await waitFor(() => result.current.isSuccess);
  const articles = result.current.data?.results;
  expect(articles?.length).toBeLessThanOrEqual(PAGE_SIZE);
});

test('should return articles from `sport` category ', async () => {
  const query = buildQuery(1, 'sport', null, null);
  const { result, waitFor } = renderHook(() => useArticles(query), { wrapper });

  await waitFor(() => result.current.isSuccess);
  const firstArticle = result.current.data?.results?.shift();
  expect(firstArticle?.sectionId).toBe('sport');
});

test('should return articles from certain date: `2021-10-01` ', async () => {
  const date = new Date('2021-10-01');
  const query = buildQuery(1, '', date, date);
  const { result, waitFor } = renderHook(() => useArticles(query), { wrapper });

  await waitFor(() => result.current.isSuccess);
  const firstArticle = result.current.data?.results?.shift();
  expect(firstArticle?.webPublicationDate.slice(0, 10)).toBe('2021-10-01');
});
