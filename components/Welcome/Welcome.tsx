import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="left">
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: '#A77CE8', to: '#627af7', deg: 90 }}
        >
          New York Times Article Search
        </Text>
      </Title>
    </>
  );
}
