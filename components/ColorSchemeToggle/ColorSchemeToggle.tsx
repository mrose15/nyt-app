'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="right">
      <Button
        leftSection={<IconSun size={14} />}
        variant="default"
        onClick={() => setColorScheme('light')}
      >
        Light
      </Button>
      <Button
        leftSection={<IconMoon size={14} />}
        variant="default"
        onClick={() => setColorScheme('dark')}
      >
        Dark
      </Button>
    </Group>
  );
}
