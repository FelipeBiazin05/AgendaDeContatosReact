import Form from "./containers/formulario";
import Header from "./containers/header";
import GlobalStyle, { Container } from "./styles";

function App() {
  return (
    <Container>
      <GlobalStyle />
        <Header />
        <Form />
    </Container>
  )
}

export default App;
