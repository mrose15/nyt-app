import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import ArticleList from '../components/Articles/ArticleList.client';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <ArticleList query="aviation" />
    </>
  );
}
