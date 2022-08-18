import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup';
function Circle2(data) {
  let st="377-377"+"*("+data.num+"/100)";
  let ds=eval(st);
  return (
    <Container sum={ds}>
       <Outer>
        <Inner>
            <Text><CountUp end={data.num} suffix="%"/></Text>
        </Inner>
       </Outer>
       <svg width="160px" height="160px">
            <linearGradient id="GradientColor2">
               <stop offset="-1%" stop-color={data.start} />
               <stop offset="100%" stop-color={data.stop} />
            </linearGradient>
         <circle cx="70" cy="70" r="60" stroke-linecap="round" />
        </svg>
    </Container>
  )
}
const Container=styled.div`
height:140px;
width:170px;
position:relative;
circle{
    fill:none;
    stroke: url(#GradientColor2);
    stroke-width:15px;
    stroke-dasharray: 377;
    stroke-dashoffset: 377;
    animation: animt 2s linear forwards;
}
svg{
    position:absolute;
    top:0;
    left:0;
}
@keyframes animt{
  100%{
    stroke-dashoffset:${data => `${data.sum}`};
  }
}
`
const Outer=styled.div`
height:140px;
width:140px;
border-radius:50%;
padding:20px;
box-shadow: 6px 6px 10px 1px rgba(0,0,0,0.15),
            -4px -4px 5px -1px rgba(0,0,0,0.4);
`
const Inner=styled.div`
display:flex;
align-items:center;
justify-content:center;
height:100px;
width:100px;
border-radius:50%;
box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.15),
            inset -4px -4px 6px -1px rgba(0,0,0,0.7),
            -0.5px -0.5px 0px rgba(0,0,0,0.4),
            -0.5px -0.5px 0px rgba(0,0,0,0.15), 
            0px 12px 10px -10px rgba(0,0,0,0.05);`
const Text=styled.div`
font-size:30px;
font-weight:600;
color:#36323C;
`
export default Circle2