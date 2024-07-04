'use client';

import { useState } from 'react';
import { Autocomplete, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function SearchComponent() {
  const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;
  const [searchValue, setSearchValue] = useState('');

  const data = [
    { value: 'Article 1', label: 'Article 1' },
    { value: 'Article 2', label: 'Article 2' },
  ];

  const handleSelect = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <Autocomplete
      label="Search New York Times articles"
      leftSection={icon}
      data={data}
      value={searchValue}
      onChange={setSearchValue}
      onOptionSubmit={handleSelect}
    />
  );
}

export default SearchComponent;
