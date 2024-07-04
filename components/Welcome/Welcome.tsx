import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center">
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        >
          New York Times Article Search
        </Text>
      </Title>
    </>
  );
}
