import styled from "styled-components";

const buttonColor = '#fff';
const buttonActiveColor = '#0f1013';
const orangeColor = '#ff8585';
const greenColor = '#43ffdc';
const bgDark = '#2e323c';
const bgMinimumDark = '#292d36';
const operatorDisplayColor = '#9ea2ac';
const mobileDevicePX = '470px';

export const Wrapper = styled.div`
width: 290px;
height: 450px;
margin: 0 auto;
display: flex;
flex-wrap:wrap;
border-radius: 20px;
border: 1px solid lightgrey;
background: ${bgMinimumDark};
@media (max-width: ${mobileDevicePX}) {
    width: 95%;
    height: 520px;
  }
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
height: 135px;
`;

export const Operator = styled.span`
display: block;
padding: 0;
margin: 0;
line-height: 1.5;
font-size: smaller;
color: ${operatorDisplayColor};
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
background: ${bgMinimumDark};
color: ${props => props.className.includes('orange') ? orangeColor : props.className.includes('green') ? greenColor : buttonColor};
flex-basis: ${props => props.className.includes('long-btn') ? '40%' : 'none' };
&:active {
    box-shadow: inset 20px 20px 15px ${buttonActiveColor};
    opacity: 0.6;
}
@media (max-width: ${mobileDevicePX}) {
  flex: 1 0 18%;
  flex-basis: ${props => props.className.includes('long-btn') ? '40%' : 'none' };
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
