import styled from "styled-components";

export const RequestImg = styled.img`
    margin-left: 20px;
    margin-top: 20px;
    width: 40px;
`;

export const ProfileImg = styled.img`
    float: right;
    margin-top: 20px;
    margin-right: 20px;
    width: 40px;
`;

export const NetworkWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SearchWrapper = styled.span`
`;

export const Form = styled.form`
    display: flex;  
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
`;

export const SearchInput = styled.input`
    background: #E8E8ED;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 18px;
    border: none;
    height: 40px;
    width: 296px;
    text-align-last: center;
    margin-top: 100px;
    @media (max-width: 320px) {
        width: 200px;
   }
`;

export const FlexDiv = styled.div`
	display: flex;
    flex-direction: row;
	justify-content: space-between;
	align-items: ${props => (props.alignItems ? props.alignItems : null)};
`;