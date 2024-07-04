import { Group, Container } from '@mantine/core';
import { Welcome } from '../Welcome/Welcome';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const Header = () => (
  <Container mb={50} mt={50}>
    <Group justify="flex-end" mb={20}>
      <ColorSchemeToggle />
    </Group>
    <Group justify="space-between">
      <Welcome />
    </Group>
  </Container>
);

export default Header;
