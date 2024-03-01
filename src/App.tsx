import { MantineProvider } from "@mantine/core";
import { Content } from "./Content";

import "./App.css";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Content />
    </MantineProvider>
  );
}

export default App;
