import { Box } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export default function Header() {
  return (
    <Box mb="xxl">
      <ColorSchemeToggle />
    </Box>
  );
}
