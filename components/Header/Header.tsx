import { Group, Container } from '@mantine/core';
import { Welcome } from '../Welcome/Welcome';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export default function Header() {
  return (
    <Container mb={50} mt={50}>
      <Group justify="space-between">
        <Welcome />
        <ColorSchemeToggle />
      </Group>
    </Container>
  );
}
