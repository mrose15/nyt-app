import { useState, useEffect } from 'react';
import { Article, fetchArticles } from './Articles.server';

export const useArticles = (query: string) => {
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [openArticleId, setOpenArticleId] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles(query).then(setArticleList);
  }, [query]); //only re-run the effect if the query changes

  const toggle = (id: string) => {
    setOpenArticleId(openArticleId === id ? null : id);
  };

  return { articleList, openArticleId, toggle };
};
