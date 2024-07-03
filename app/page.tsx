import Header from '@/components/Header/Header';
import ArticleList from '../components/Articles/ArticleList.client';

export default function HomePage() {
  return (
    <>
      <Header />
      <ArticleList query="aviation" />
    </>
  );
}
