import React from 'react';
import Menu from './components/Menu';
import styled from 'styled-components';
import logo from './assets/logo.png';

const AppContainer = styled.div`
  text-align: center;
  font-family: 'Roboto', 'Arial', sans-serif;
  background-color: #f8f8f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(135deg, #ff6b6b, #ff8e3c);
  padding: 5px;
  border-radius: 0 0 20px 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05) rotate(5deg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h1`
  font-size: 2.2em;
  font-weight: bold;
  margin-left: 20px;
  text-transform: uppercase;
  letter-spacing: 0px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Footer = styled.footer`
  background-color: #f9f9f9;
  padding: 15px 0;
  text-align: center;
  font-size: 0.9em;
  margin-top: auto;
`;

const Content = styled.div`
  margin-top: calc(${Header} {
    padding-top + padding-bottom
  } + ${Header} {
    height
  }); /* Ajuste este valor para a altura total do header */
  flex-grow: 1;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header>
        <Logo src={logo} alt="Logo" />
        <Title>Ivi Alfajores</Title>
      </Header>

      <Content>
        <main>
          <Menu />
        </main>
      </Content>

      <Footer>
        <p>&copy; 2024 ivialfajores. Todos os direitos reservados.</p>
      </Footer>
    </AppContainer>
  );
};

export default App;