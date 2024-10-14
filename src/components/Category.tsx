// src/components/Category.tsx
import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import MenuItem from './MenuItem';
import styled from 'styled-components';

interface Props {
  category: string;
  items: MenuItemType[];
}

const CategoryContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryTitle = styled.h2`
  color: #ff6347;
  border-bottom: 2px solid #ff6347;
  display: inline-block;
  margin-bottom: 10px;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

const Category: React.FC<Props> = ({ category, items }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category}</CategoryTitle>
      <ItemsContainer>
        {items.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CategoryContainer>
  );
};

export default Category;
