import styled from "styled-components";

export const AlignStartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`;

export const FlexDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: right;
  position: relative;
`;

export const RegisterText = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 20.16px;
  text-align: center;
  color: rgba(110, 128, 176, 1);
`;

export const TextDiv = styled.div`
  display: inline-block;
  margin: 0;
  text-align: center;
  line-height: 60px;
`;

export const RegisterButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--main-font);
  font-size: 12px;
  font-weight: 500;
  color: black;
`;

export const EyeDiv = styled.span`
  position: absolute;
  right: 15px;
  bottom: 10px;
`;
