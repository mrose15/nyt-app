'use client';

import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import ArticleList from '../components/Articles/ArticleList.client';
import SearchComponent from '../components/Search/Search';

const HomePage = () => {
  const [query, setQuery] = useState('aviation');
  const [noResults, setNoResults] = useState(false); // Step 1: New state to track no results

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setNoResults(false); // Reset no results state on new search
  };

  // Step 2: Update to handle no results from `ArticleList`
  const handleNoResults = (isEmpty: boolean) => {
    setNoResults(isEmpty);
  };

  return (
    <>
      <Header />
      <SearchComponent onSearch={handleSearch} />
      <ArticleList query={query} onNoResults={handleNoResults} />
      {noResults && (
        <div>No results found for &quot;{query}&quot;. Please try another search.</div>
      )}{' '}
    </>
  );
};

export default HomePage;
