import { FC } from 'react';
import Calculator from './components/calculator';
import { Container, Wrapper } from './styles';

const App: FC = ()  => {
  return (
    <Container >
      <Wrapper>
        <Calculator />
      </Wrapper>
    </Container>
  );
}

export default App;
