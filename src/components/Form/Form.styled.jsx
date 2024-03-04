import styled from 'styled-components';

export const Input = styled.input`
  width: 240px;
  height: 40px;
  margin-right: 8px;
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #9371ae;
  outline: 1px solid #6d4b88;
  font-size: 16px;
`;

export const FormButton = styled.button`
  margin-bottom: 20px;
  padding: 10px 15px;
  font-size: 16px;
  background-color: #6d4b88;
  border-radius: 6px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
      rgba(50, 151, 211, 0.3) 0 0 0 4px;
  }
`;
