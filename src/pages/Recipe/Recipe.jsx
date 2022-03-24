import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 10rem;
`;

const Recipe = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  const getRecipe = async id => {
    try {
      const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
      const data = await res.json();
      setRecipe(data);
      console.log(recipe);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecipe(id);
  }, [id]);
  return (
    <Wrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt='' />
      </div>
      <Info>
        <ButtonContainer>
          <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>
            Instructions
          </Button>
          <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>
            Ingredients
          </Button>
        </ButtonContainer>
        {activeTab === 'instructions' ? (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
          </div>
        ) : (
          <ul>
            {recipe.extendedIngredients.map(i => (
              <li key={i.id}>
                {i.amount}
                {i.unit} {i.originalName}
              </li>
            ))}
          </ul>
        )}
      </Info>
    </Wrapper>
  );
};

export default Recipe;
