import { Box } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import Header from '@/components/Header/Header';
import ArticleList from '../components/Articles/ArticleList.client';

export default function HomePage() {
  return (
    <>
      <Header />
      <Box mb="xxl">
        <Welcome />
      </Box>
      <ArticleList query="aviation" />
    </>
  );
}
