import React from 'react'
import styled from 'styled-components'
import Circle from './Circle'
import Skilldiv from './Skilldiv'
function Skillsbox(data) {
  return (
    <Content>
        <h1>Frontend</h1>
        <Circle num={data.per} stop={data.stop} start={data.start}/>
        <Line>
            <p>Html</p>
            <Skilldiv sw="90" cl="#e91e63"/>
            <p>CSS</p>
            <Skilldiv sw="70" cl="#e96e99"/>
            <p>JS</p>
          <Skilldiv sw="85" cl="#986df0"/>
            <p>React</p>
            <Skilldiv sw="75" cl="#673af7"/>
        </Line>
        </Content>
  )
}
const C1=styled.div`
display:flex;`
const C2=styled.div`
display:flex;`
const Content=styled.div`
width:40%;
margin:0 5%;
height:50vh;
display:flex;
align-items:center;
position:relative;
p{
  font-size:20px;
  color:#36323C;
  margin:0;
}
h1{
  position:absolute;
  top:0;
  left:0;
  font-size:30px;
  font-weight:600;
   background: -webkit-linear-gradient(#e90e63, #673ab7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`
const Line=styled.div`
    
`
export default Skillsbox