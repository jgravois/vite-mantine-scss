import {
  Button,
  Center,
  PinInput,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";

// import styles from "./Content.module.css";
import styles from "./Content.module.scss";

export const Content = () => (
  <Center>
    <Stack>
      <Text>Enter your pin:</Text>
      <PinInput
        defaultValue="123"
        classNames={{ input: styles.input }}
        length={6}
      />
      <Button onClick={useMantineColorScheme().toggleColorScheme}>
        🌗 / ☀️
      </Button>
    </Stack>
  </Center>
);
