import React from 'react';
import { Pages } from './pages';
import { Category, Search } from './components';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;
const Nav = styled.nav`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to='/'>DeliCo</Logo>
        </Nav>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
};

export default App;
