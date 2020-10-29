import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 20px;
`;

export const Labels = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 30px;
  color: rgb(122, 140, 168);
`;

export const Input = styled.input`
  background: #e8e8ed;
  border-radius: 18px;
  width: 272px;
  height: 50.96px;
  border: none;
  text-align-last: center;
  position: relative;
`;

export const DropInput = styled.select`
  background: #e8e8ed;
  border-radius: 18px;
  width: 272px;
  height: 50.96px;
  border: none;
  font-family: var(--main-font);
  font-weight: 500;
  font-size: 12px;
  text-align-last: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
