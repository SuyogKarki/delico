import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    object-fit: cover;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const Searched = () => {
  const location = useLocation();
  const name = location.pathname.split('/')[2];
  const [result, setResult] = useState([]);
  const getSearched = async name => {
    try {
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
      const recipes = await res.json();
      setResult(recipes.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSearched(name);
  }, [name]);
  return (
    <Grid>
      {result.map(item => (
        <Card key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img src={item.image} alt='' />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};

export default Searched;
