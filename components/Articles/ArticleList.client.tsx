'use client';

import React, { useEffect, useState } from 'react';
import { SimpleGrid, Image, Button, Group } from '@mantine/core';
import { Article, fetchArticles } from './Articles.server';
import classes from './ArticleList.module.css';

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
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
      {articleList.length > 0 ? (
        articleList.map((article) => (
          <div key={article._id} className={classes.article}>
            <Image
              radius="md"
              h={200}
              src={`${NYT_DOMAIN}/${article.multimedia[0].url}`}
              alt={article.headline.main}
            />
            <h2 className={classes.articleTitle}>{article.headline.main}</h2>
            <p>{article.snippet}</p>
            <Group justify="space-between">
              <Button variant="default">Click to View Snippet</Button>
              <Button variant="filled" component="a" href={article.web_url}>
                Click to Read More
              </Button>
            </Group>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </SimpleGrid>
  );
};

export default ArticleList;
