import styled from "styled-components";

const buttonColor = '#673ab7';
const buttonActiveColor = '#b499e6';

export const Wrapper = styled.div`
padding: 10px;
width: 440px;
height: 580px;
margin: 0 auto;
display: flex;
flex-wrap:wrap;
border-radius: 20px;
border: 1px solid lightgrey;
`;

export const Screen = styled.div`
height: 70px;
border-radius: 5px;
width: 100%;
margin: 20px;
padding: 10px;
font-size: xx-large;
backgroundColor: lightgrey;
border: 1px solid darkgrey;
text-align: right;
outline: 0;
overflow: overlay;
`;

export const Key = styled.button`
border-radius: 20px;
margin: 20px;
padding: 10px;
text-align: center;
flex: 1 0 15%;
background: none;
border: none;
font-size: x-large;
cursor: pointer;
outline: 0;
border: 1px solid ${buttonColor};
&:active {
    box-shadow: inset 0px 0px 5px ${buttonActiveColor};
}
`;
