import React from 'react'
import styled from 'styled-components'
import { Facebook } from '@material-ui/icons'
import { LinkedIn } from '@material-ui/icons'
import { GitHub } from '@material-ui/icons'
import { Instagram } from '@material-ui/icons'
import Fade from 'react-reveal/Fade';
function Intro() {
  return (
    <Container>
        <Content>
          <Fade top delay={500}>
          <h1>Hey<p>!</p></h1>
          </Fade>
          <Fade left >
          <h2><span>I'm</span>Sanjay</h2>
          <p>Freelance Frontend Developer</p>
          </Fade>
          <Fade delay={500}>
          <button>Hire Me</button>
          <div>
            <p><F fontSize='large'/></p>
            <p><In fontSize='large'/></p>
            <p><G fontSize='large'/></p>
            <p><I fontSize='large'/></p>
          </div>
          </Fade>
        </Content>
    </Container>
  )
}
const Container=styled.div`
background-position:center;
background-repeat:no-repeat;
background-size:cover;
height:89.5vh;
background-image:url("/Intro.jpg");
`
const Content=styled.div`
height:89.5vh;
padding-top:6%;
padding-left:6%;
width: 50%;
h1{
  margin: 0px ;
  height:100px;
  p{
    margin: 0;
    font-size: 140%; 
    color:#000000;
  }
  display:flex;
  align-items:center;
    font-size: 360%;
  text-shadow: ; 10pcx 1
  text-shadow: ;105%;
    font-weight: bolder;
    color:rgba(255, 200 ,0);
  text-shadow: 4px 0px 2px #2C3E50;
}
span{
  margin-right:40px;
  z-index: ;
 position: relative;
 &:after{
  content:"";
  height:5px;
  background:rgb(255,200,0);
  position:absolute;
  top:0;
  right:0;
  left:0;
 } 
}
h2{
  display:flex;
  font-size:360%;
  font-family:Times New Roman;
  margin-top:0px;
  margin-bottom: 0px ;
}
p{
  margin-top: 2% ;
  font-family:Monaco;
  font-size:200%;
  font-weight: 900;
  color:#2C3E50;
} 
div{
  display:flex;
  p{
    margin-top: auto;
    color:#000000;
    padding: 0 5%;
  }
}
button{
   color:#000000;
  font-family:Monaco;
  font-weight: bolder;
  border:none;
  font-size:200%;
  border-radius:15%;
  background:rgb(255,200,0);
  border: 1px solid rgb(255,200,0);
  margin-bottom:15%;
  &:hover{
    background: rgba(255, 200, 0, 0.4);
    border: 1px solid rgb(255,200,0);
  }
}
`
const F=styled(Facebook)`
&:hover{
  color:rgba(255, 200 ,0)
}
`
const In=styled(LinkedIn)`
&:hover{
  color:rgba(255, 200 ,0)
}
`
const G=styled(GitHub)`
&:hover{
  color:rgba(255, 200 ,0)
}
`
const I=styled(Instagram)`
&:hover{
  color:rgba(255, 200 ,0)
}`
export default Intro