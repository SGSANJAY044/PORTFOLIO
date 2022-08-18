import React from 'react'
import styled from 'styled-components'

function Skilldiv(data) {
  return (
    <Container>
        <Progress size={data.sw} col={data.cl}>
        </Progress>
    </Container>
  )
}
const Container=styled.div`
position:relative;
width:350px;
border-radius:5px;
height:8px;
opacity:70%;
margin-bottom:4%;
`
const Progress=styled.div`
position: relative;
border-radius:5px;
width:${data => `${data.size}%`};
height:100%;
background:${data => `${data.col}`};
transform:scaleX(0);
transform-origin:left;
animation: animate 1s 2s cubic-bezier(1,0,0.5,1) forwards;
@keyframes animate{
  100%{
    transform:scaleX(1);
  }
}
`
export default Skilldiv