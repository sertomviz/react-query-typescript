export interface Article {
  webTitle: string;
  webPublicationDate: string;
  sectionId: string;
  fields: {
    thumbnail: string;
    trailText: string;
  };
  webUrl: string;
}

export interface ArticleResponse {
  status: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  results: Article[];
}
export interface ArticleGenericResponse {
  response: ArticleResponse;
}
export interface ArticleCategory {
  id: string;
  webTitle: string;
}

export interface ArticleCategoryResponse {
  response: {
    status: string;
    total: number;
    results: ArticleCategory[];
  };
}
