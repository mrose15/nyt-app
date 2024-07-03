export interface Article {
  _id: string;
  headline: { main: string };
  snippet: string;
}

export async function fetchArticles(query: string): Promise<Article[]> {
  const apiKey = process.env.NEXT_PUBLIC_NYT_API_KEY;
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(query)}&api-key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.response.docs;
}

// Assuming you're calling this in an async context
async function logArticles() {
  try {
    const articles = await fetchArticles('aviation');
    console.log(articles);
  } catch (error) {
    console.error('Failed to fetch articles:', error);
  }
}

logArticles();
