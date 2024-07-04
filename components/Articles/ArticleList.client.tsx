'use client';

import React, { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Card, SimpleGrid, Image, Button, Group, Accordion, Text, Collapse } from '@mantine/core';
import { Article, fetchArticles } from './Articles.server';
import classes from './ArticleList.module.css';

interface ArticlesProps {
  query: string;
}

const ArticleList: React.FC<ArticlesProps> = ({ query }) => {
  const NYT_DOMAIN = 'https://www.nytimes.com';
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [openArticleId, setOpenArticleId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenArticleId(openArticleId === id ? null : id);
  };

  useEffect(() => {
    fetchArticles(query).then(setArticleList);
  }, [query]); //only re-run the effect if the query changes

  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" verticalSpacing="xl">
      {articleList.length > 0 ? (
        articleList.map((article) => (
          <Card
            key={article._id}
            className={classes.article}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
          >
            <Card.Section>
              <Image
                h={150}
                src={`${NYT_DOMAIN}/${article.multimedia[0].url}`}
                alt={article.headline.main}
              />
            </Card.Section>
            <h2 className={classes.articleTitle}>{article.headline.main}</h2>
            <Collapse
              mb={20}
              in={openArticleId === article._id}
              transitionDuration={300}
              transitionTimingFunction="linear"
            >
              <Text size="md">{article.snippet}</Text>
            </Collapse>
            <Group justify="space-between">
              <Button variant="outline" color="#A77CE8" onClick={() => toggle(article._id)}>
                {`${openArticleId === article._id ? 'Close' : 'View'} Snippet`}
              </Button>
              <Button
                variant="gradient"
                gradient={{ from: '#A77CE8', to: '#627af7', deg: 45 }}
                component="a"
                target="_blank"
                href={article.web_url}
              >
                Read More
              </Button>
            </Group>
          </Card>
        ))
      ) : (
        <p>Articles are loading...</p>
      )}
    </SimpleGrid>
  );
};

export default ArticleList;
