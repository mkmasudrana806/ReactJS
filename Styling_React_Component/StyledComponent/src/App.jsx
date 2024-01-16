import { useState } from "react";
import "./App.css";
import Card from "./Card";
import {
  CenterContainer,
  Container,
} from "./styledComponents/Container.styled";
import { GlobalStyle } from "./styledComponents/Global.styled";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { ToggleButton } from "./styledComponents/Elements.styled";

function App() {
  const [isDark, setIsDark] = useState(false);
  // handle toggle theme toggle button
  const handleToggle = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isDark ? theme.dark : theme.light}>
        <Container>
          <ToggleButton onClick={handleToggle}>
            <div></div>
          </ToggleButton>
          <CenterContainer>
            <Card />
          </CenterContainer>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
