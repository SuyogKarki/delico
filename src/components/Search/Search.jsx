import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
  margin: 1rem 20rem;

  div {
    width: 100%;
    position: relative;
    input {
      border: none;
      outline: none;
      background: linear-gradient(35deg, #494949, #313131);
      font-size: 1rem;
      color: white;
      padding: 0.7rem 3rem;
      border: none;
      border-radius: 1rem;
    }
    svg {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(100%, -50%);
      color: white;
    }
  }
`;

const Search = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const submitHandler = e => {
    e.preventDefault();
    navigate(`/result/${input}`);
    setInput('');
  };
  return (
    <Form onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input type='text' onChange={e => setInput(e.target.value)} value={input} />
      </div>
    </Form>
  );
};

export default Search;
