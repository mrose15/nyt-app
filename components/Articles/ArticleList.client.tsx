'use client';

import { Card, SimpleGrid, Image, Button, Group, Text, Collapse, Flex } from '@mantine/core';
import { useArticles } from './useArticles';
import classes from './ArticleList.module.css';

interface ArticlesProps {
  query: string;
  onNoResults: (isEmpty: boolean) => void;
}

const ArticleList: React.FC<ArticlesProps> = ({ query, onNoResults }) => {
  const NYT_DOMAIN = 'https://www.nytimes.com';
  const { articleList, openArticleId, toggle } = useArticles(query);

  const defaultImageURL = '/images/logo.png';

  // Invoke onNoResults based on the articleList length
  if (articleList.length === 0) {
    onNoResults(true);
  } else {
    onNoResults(false);
  }

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2 }}
      spacing="xl"
      verticalSpacing="xl"
      className={classes.articles}
    >
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
                src={
                  article.multimedia && article.multimedia[0]
                    ? `${NYT_DOMAIN}/${article.multimedia[0].url}`
                    : `${defaultImageURL}`
                }
                alt={article.headline.main}
              />
            </Card.Section>
            <Flex direction="column" justify="space-between" mih={150}>
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
            </Flex>
          </Card>
        ))
      ) : (
        <p>Articles are loading...</p>
      )}
    </SimpleGrid>
  );
};

export default ArticleList;
