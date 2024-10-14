// src/components/MenuItem.tsx
import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import styled from 'styled-components';

interface Props {
  item: MenuItemType;
}

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 12px;
  margin: 15px;
  padding: 15px;
  max-width: 600px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 12px;
  object-fit: cover;
  margin-right: 20px;
  border: 2px solid #FD6A34; // Border for a modern touch
`;

const Details = styled.div`
  text-align: left;
  flex: 1;
`;

const Title = styled.h3`
  margin: 0 0 10px 0;
  font-family: 'Arial', sans-serif; // Modern font
  color: #333;
`;

const Description = styled.p`
  margin: 0 0 10px 0;
  color: #666;
  font-size: 0.9rem;
`;

const Price = styled.span`
  font-weight: bold;
  color: #FD6A34;
  font-size: 2rem;
`;

const MenuItem: React.FC<Props> = ({ item }) => {
  return (
    <MenuItemContainer>
      <Image src={item.image} alt={item.name} />
      <Details>
        <Title>{item.name}</Title>
        <Description>{item.description}</Description>
        <Price>R$ {item.price.toFixed(2)}</Price>
      </Details>
    </MenuItemContainer>
  );
};

export default MenuItem;
