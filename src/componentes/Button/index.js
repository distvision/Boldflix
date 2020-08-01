import styled from 'styled-components';

const Button = styled.button`
  color: var(--white);
  border: 0px solid var(--white);
  background-color: #500060;
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;
