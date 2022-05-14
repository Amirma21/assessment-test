import styled from "styled-components";

export const BodyContainer = styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: space-around;
align-items: center;
`

export const SideBarContaner = styled.div`
height: 80%;
background-color: #7c3aed;
border-radius: 15px;
${({ isExpand }) => !isExpand ? `width: 5%;` : `width:25%`}
`

export const CountdownContainer = styled.div`
width: 70%;
height: 80%;
background-color: #a855f7;
border-radius: 15px;

`

export const IconContainer = styled.div`
display: inline-block;
font-size:30px;
cursor: pointer;
margin: 5px 0 0 10px;
color: #c7d2fe;
font-weight: bold;
`