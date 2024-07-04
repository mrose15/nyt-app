'use client';

import { useState } from 'react';
import { Input, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

interface SearchProps {
  onSearch: (value: string) => void;
}

const SearchComponent: React.FC<SearchProps> = ({ onSearch }) => {
  const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;
  const [searchValue, setSearchValue] = useState('');

  // Change event handler to correctly update state and call onSearch prop
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
  };

  // Add onKeyDown event to handle search on pressing 'Enter'
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchValue);
    }
  };

  return (
    <>
      <Input.Label>Search New York Times articles</Input.Label>
      <Input
        leftSection={icon}
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default SearchComponent;
