import { Group, Container } from '@mantine/core';
import { Welcome } from '../Welcome/Welcome';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import SearchComponent from '../Search/Search';

export default function Header() {
  return (
    <Container mb={50} mt={50}>
      <Group justify="flex-end" mb={20}>
        <ColorSchemeToggle />
      </Group>
      <Group justify="space-between">
        <Welcome />
        <SearchComponent />
      </Group>
    </Container>
  );
}
