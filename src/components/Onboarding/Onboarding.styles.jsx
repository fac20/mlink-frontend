import react from "react";
import styled from "styled-components";

export const PageWrapper = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: var(--main-font);
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--main-pink);
  line-height: 54px;
`;

export const Subtitle = styled.h2`
  font-family: var(--main-font);
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 22.5px;
  margin-top: 8px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Image = styled.img`
  margin-top: 8px;
  padding-left: 2rem;
`;

export const Text = styled.h4`
  font-family: var(--main-font);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
`;

export const GetStartedBtn = styled.button`
  background-color: var(--main-pink);
  width: 241.35px;
  height: 2.5rem;
  border: none;
  border-radius: 20px;
  font-family: var(--main-font);
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  margin-top: 8px;
  text-align: center;
  color: #ffffff;
`;
