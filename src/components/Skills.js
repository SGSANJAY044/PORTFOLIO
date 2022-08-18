import React from 'react'
import styled from 'styled-components'
import Circle from './Circle'
import Circle2 from './Circle2'
import Circle3 from './Circle3'
import Circle4 from './Circle4'
import Skilldiv from './Skilldiv'
import { Fade } from 'react-reveal'
function Skills() {
  return (
    <CC>
      <Title>
        <Fade duration={3000}>
            <span>SKILLS</span>
        </Fade>
      </Title>
    <Container>
      <C1>
        <Fade left>
        <Content>
        <h1>Frontend</h1>
        <Circle num="73" stop="#e90e63" start="#673ab7"/>
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
        </Fade>
        <Empty/>
        <Fade right>
         <Content>
        <h1>UI&UX</h1>
        <Circle2 num="68" stop="#e90e63" start="#673ab7"/>
        <Line>
            <p>Adobe XD</p>
            <Skilldiv sw="55" cl="#e91e63"/>
            <p>Figma</p>
            <Skilldiv sw="95" cl="#e96e99"/>
            <p>Design Principles</p>
          <Skilldiv sw="65" cl="#986df0"/>
            <p>Ux Methodologies</p>
            <Skilldiv sw="75" cl="#673af7"/>
        </Line>
        </Content>
        </Fade>
        </C1>
        <C2>
          <Fade left>
         <Content>
        <h1>AI & ML</h1>
        <Circle3 num="59" stop="#e90e63" start="#673ab7"/>
        <Line>
            <p>Supervised</p>
            <Skilldiv sw="65" cl="#e91e63"/>
            <p>Unsupervised</p>
            <Skilldiv sw="80" cl="#e96e99"/>
            <p>Reinforcement</p>
          <Skilldiv sw="75" cl="#986df0"/>
            <p>DL</p>
            <Skilldiv sw="40" cl="#673af7"/>
        </Line>
        </Content>
          </Fade>
          <Empty/>
          <Fade right>
         <Content>
        <h1>Backend</h1>
        <Circle4 num="86" stop="#e90e63" start="#673ab7"/>
        <Line>
            <p>Python</p>
            <Skilldiv sw="90" cl="#e91e63"/>
            <p>Mangodb</p>
            <Skilldiv sw="50" cl="#e96e99"/>
            <p>SQL</p>
          <Skilldiv sw="65" cl="#986df0"/>
            <p>PHP</p>
            <Skilldiv sw="85" cl="#673af7"/>
        </Line>
        </Content>
          </Fade>
        </C2>
    </Container>
    </CC>
  )
}
const Empty=styled.div`
height:45vh;
width:15%;`
const Title=styled.div`
height:10vh;
text-align:center;
span{
    color:#36323C;
    font-size: 240%;
    font-weight:900;
    position: relative;
 &:after{
  content:"";
  height:5px;
  background:rgb(255,200,0);
  position:absolute;
  bottom:-15%;
  right:15%;
  left:15%;
}
`
const CC=styled.div`
width:100%;
height:90vh;`
const Container=styled.div`
width:100%;
height:80vh;
background:#f8d49a;
`
const C1=styled.div`
display:flex;`
const C2=styled.div`
display:flex;`
const Content=styled.div`
width:40%;
margin:0 5%;
height:45vh;
display:flex;
align-items:center;
position:relative;
p{
  font-size:15px;
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
padding-left:5%;
`
export default Skills