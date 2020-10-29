import styled from "styled-components";

export const Subtitle = styled.h3`
  background-color: var(--light-blue);
  width: 60vw;
  border-radius: 10px;
`;

export const ColumnSection = styled.section`
  display: flex;
  flex-direction: column;
`;
export const RowSection = styled.section`
  display: flex;
  flex-direction: row;
`;

export const DashboardBody = styled.section`
  text-align: center;
  margin: 2rem auto;
  width: 60%;
`;

export const Count = styled.span`
  background-color: var(--main-pink);
`;

/* --------- Loader CSS --------- */ 
export const Loader = styled.div`
  margin-top: 250px;
  margin-left: 650px;
  width: fit-content;
`;

export const DotDiv = styled.div` 
  width: 50px;
  height: 50px;
  border: 3px solid hsl(197, 100%, 40%, 100);
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin .5s linear 4s infinite;
  margin: auto;
`;