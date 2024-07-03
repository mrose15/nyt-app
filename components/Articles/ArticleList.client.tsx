'use client';

import React, { useEffect, useState } from 'react';
import { Article, fetchArticles } from './Articles.server';

interface ArticlesProps {
  query: string;
}

const ArticleList: React.FC<ArticlesProps> = ({ query }) => {
  const [articleList, setArticleList] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles(query).then(setArticleList);
  }, [query]); //only re-run the effect if the query changes

  return (
    <div>
      {articleList.length > 0 ? (
        articleList.map((article) => (
          <div key={article._id}>
            <h2>{article.headline.main}</h2>
            <p>{article.snippet}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArticleList;
