// src/App.tsx
import React from 'react';
import Menu from './components/Menu';
import styled from 'styled-components';
import logo from './assets/logo.png';

const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background: linear-gradient(90deg, rgba(253, 106, 52, 1) 0%, rgba(255, 223, 89, 1) 100%);
  padding: 5px;
  border-radius: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, rgba(255, 223, 89, 1) 0%, rgba(253, 106, 52, 1) 100%);
  }
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  border-radius: 50%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Footer = styled.footer`
  background-color: #f1f1f1;
  padding: 10px;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header>
        <Logo src={logo} alt="Logo" />
        <Title>Ivi Alfajores</Title>
      </Header>

      <main>
        <Menu />
      </main>
      <Footer>
        <p>&copy; 2024 ivialfajores. Todos os direitos reservados.</p>
      </Footer>
    </AppContainer>
  );
};

export default App;
