'use client';

import React, { useEffect, useState } from 'react';
import { SimpleGrid, Image } from '@mantine/core';
import { Article, fetchArticles } from './Articles.server';

interface ArticlesProps {
  query: string;
}

const ArticleList: React.FC<ArticlesProps> = ({ query }) => {
  const NYT_DOMAIN = 'https://www.nytimes.com';
  const [articleList, setArticleList] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles(query).then(setArticleList);
  }, [query]); //only re-run the effect if the query changes

  return (
    <SimpleGrid cols={3}>
      {articleList.length > 0 ? (
        articleList.map((article) => (
          <div key={article._id}>
            <Image
              radius="md"
              h={200}
              src={`${NYT_DOMAIN}/${article.multimedia[0].url}`}
              alt={article.headline.main}
            />
            <h2>{article.headline.main}</h2>
            <p>{article.snippet}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </SimpleGrid>
  );
};

export default ArticleList;
