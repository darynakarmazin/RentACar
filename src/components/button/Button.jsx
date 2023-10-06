import React from 'react';
import { ButonLoadMore } from './Button.styled';

export function Button({ onFindMore }) {
  return (
    <ButonLoadMore onClick={onFindMore} type="button">
      Load more
    </ButonLoadMore>
  );
}
