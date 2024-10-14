import React from 'react';
import Menu from './components/Menu';
import styled from 'styled-components';
import logo from './assets/logo.png';
import { FaInstagram } from 'react-icons/fa';

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
  background: linear-gradient(135deg, #FFD700, #FD6A34);
  padding: 10px;
  border-radius: 0 0 20px 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
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

const InstagramButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 1.3em;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    margin-right: 8px;
    font-size: 20px;
  }
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
        <InstagramButton href="https://www.instagram.com/ivialfajores" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          Siga no Instagram
        </InstagramButton>
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