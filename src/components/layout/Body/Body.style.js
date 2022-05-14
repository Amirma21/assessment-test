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

export const IconContainer = styled.div`
display: inline-block;
font-size:30px;
cursor: pointer;
margin: 5px 0 0 10px;
color: #e2e8f0;
font-weight: bold;
`

export const CountdownContainer = styled.div`
width: 70%;
height: 80%;
background-color: #a855f7;
border-radius: 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

export const Title = styled.h2`
font-size: 30px;
font-weight: bold;
color: #e2e8f0;
letter-spacing: 2px;
margin: 0;
`

export const Indicator = styled.div`
width: 60%;
height: 8px;
background-color: #94a3b8;
border-radius: 4px;
`

export const Number = styled.span`
font-size: 40px;
font-weight: bold;
color:#e2e8f0;
${({ count }) => !count > 20 ? `color:red` : `color:#e2e8f0`}
`

export const Span = styled.div`
height: 8px;
background-color: purple;
border-radius: 4px;
direction: rtl;
`