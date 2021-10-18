import axios from 'axios';
import config from '../config/config';
import { ArticleResponse, ArticleCategoryResponse, ArticleCategory } from '../models';
import { PAGE_SIZE } from '../utils/constants';

const baseURL = config.apiURL;
const apiKey = config.apiKey;

export const fetchArticles = async (query: string): Promise<ArticleResponse> => {
  const url = `${baseURL}/search?${query}&show-fields=thumbnail,trailText&page-size=${PAGE_SIZE}&api-key=${apiKey}`;
  const res = await axios.get<ArticleResponse>(url);
  return res.data;
};

export const fetchCategories = async (): Promise<ArticleCategory[]> => {
  const url = `${baseURL}/sections?&api-key=${apiKey}`;
  const res = await axios.get<ArticleCategoryResponse>(url);
  return res.data.response.results;
};
