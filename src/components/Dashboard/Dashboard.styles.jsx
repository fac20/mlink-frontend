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
  justify-content: space-between;
`;

export const DashboardBody = styled.section`
  text-align: center;
  margin: 2rem auto;
  width: 60%;
`;

export const CountContainer = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--main-pink);
  width: 2rem;
  height: 2rem;
  @media (min-width: 640px) {
    margin-bottom: 0.2rem;
  }
`;

export const Count = styled.span`
  border-radius: 50%;
  float: right;
  background-color: var(--main-pink);
  width: 2rem;
  height: 2rem;
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
  animation: spin 0.5s linear 0s infinite;
  margin: auto;
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
