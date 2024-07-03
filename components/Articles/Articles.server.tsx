export interface Multimedia {
  url: string;
}

export interface Article {
  _id: string;
  headline: { main: string };
  snippet: string;
  multimedia: Multimedia[];
  web_url: string;
}

export async function fetchArticles(query: string): Promise<Article[]> {
  const apiKey = process.env.NEXT_PUBLIC_NYT_API_KEY;
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(query)}&api-key=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.response.docs);
    return data.response.docs;
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    return [];
  }
}
