// ArticleList.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleList from './ArticleList.client';
import { useArticles } from './useArticles';

jest.mock('./useArticles');

const mockUseArticles = useArticles as jest.Mock;

describe('ArticleList', () => {
  const mockArticles = [
    {
      _id: '1',
      headline: { main: 'Test Headline 1' },
      multimedia: [{ url: 'test1.jpg' }],
      snippet: 'Test Snippet 1',
      web_url: 'https://example.com/test1',
    },
    {
      _id: '2',
      headline: { main: 'Test Headline 2' },
      multimedia: [],
      snippet: 'Test Snippet 2',
      web_url: 'https://example.com/test2',
    },
  ];

  const mockOnNoResults = jest.fn();

  beforeEach(() => {
    mockUseArticles.mockReturnValue({
      articleList: mockArticles,
      //openArticleId: null,
      //toggle: jest.fn(),
      isLoading: false,
      error: null,
    });
  });

  it('renders articles', () => {
    render(<ArticleList />);
    expect(screen.getByText('Test Headline 1')).toBeInTheDocument();
  });

  it('renders articles correctly', () => {
    render(<ArticleList query="" onNoResults={mockOnNoResults} articles={[]} />);

    expect(screen.getByText('Test Headline 1')).toBeInTheDocument();
    expect(screen.getByText('Test Headline 2')).toBeInTheDocument();
    expect(screen.getByText('Test Snippet 1')).toBeInTheDocument();
    expect(screen.getByText('Test Snippet 2')).toBeInTheDocument();
    expect(screen.getAllByRole('img').length).toBe(2);
  });

  it('calls onNoResults with false when articles are present', () => {
    render(<ArticleList query="" onNoResults={mockOnNoResults} articles={[]} />);

    expect(mockOnNoResults).toHaveBeenCalledWith(false);
  });

  it('calls onNoResults with true when no articles are present', () => {
    mockUseArticles.mockReturnValueOnce({
      articleList: [],
      openArticleId: null,
      toggle: jest.fn(),
    });

    render(<ArticleList query="" onNoResults={mockOnNoResults} articles={[]} />);

    expect(mockOnNoResults).toHaveBeenCalledWith(true);
  });

  it('toggles snippet view on button click', () => {
    const toggleMock = jest.fn();
    mockUseArticles.mockReturnValueOnce({
      articleList: mockArticles,
      openArticleId: '1',
      toggle: toggleMock,
    });

    render(<ArticleList query="" onNoResults={mockOnNoResults} articles={[]} />);

    const viewButton = screen.getAllByText('Close Snippet')[0];
    fireEvent.click(viewButton);

    expect(toggleMock).toHaveBeenCalledWith('1');
  });
});
