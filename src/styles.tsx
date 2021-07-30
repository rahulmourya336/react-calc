import styled from "styled-components";

const buttonColor = '#fff';
const buttonActiveColor = '#0f1013';
const orangeColor = '#ff8585';
const greenColor = '#43ffdc';
const bgDark = '#2e323c';
const bgMinimumDark = '#292d36';

export const Wrapper = styled.div`
width: 290px;
height: 450px;
margin: 0 auto;
display: flex;
flex-wrap:wrap;
border-radius: 20px;
border: 1px solid lightgrey;
`;

export const Screen = styled.div`
width: 100%;
font-size: xx-large;
background: ${bgMinimumDark};
text-align: right;
outline: 0;
overflow: overlay;
color: #fff;
border-radius: 5px 5px 0 0;
padding: 45px 10px 0 10px;
margin: 0px;
`;

export const ScreenWrapper = styled.div`
display:flex;
flex: 1;
overflow: auto;
text-align: right;
`;

export const Key = styled.button`
border-radius: 11px;
margin: 10px;
text-align: center;
flex: 1 0 15%;
border: none;
font-size: x-large;
cursor: pointer;
outline: 0;
background: #292D36;
color: ${props => props.className === 'orange' ? orangeColor : props.className === 'green' ? greenColor : buttonColor};
flex-basis: ${props => props.className === 'long-btn' ? '40%' : 'none' };
&:active {
    box-shadow: inset 0px 0px 5px ${buttonActiveColor};
}
`;

export const KeyContainer = styled.div`
background: ${bgDark};
margin: 0px;
padding: 0px;
display: flex;
flex-wrap: wrap;
border-radius: 0 0 5px 5px;
`;

export const Container = styled.div`
margin: 20px  0 0 0;
`;
