import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
function About() {
  return (
    <Container>
        <Title>
            <Fade>
            <span>About</span>
            </Fade>
        </Title>
        <Content>
            <img src='/border1.png'/>
            <Text>
                <Fade right cascade duration={1000}>
                    <div>
                    <p>IT'S NICE TO MEET YOU!, My name is SANJAY</p>
                    <p> a, Enginnering student with the experience of Buliding</p>
                    <p> Web App and had a enough Knowledge of C, C++, Python,</p>
                    <p>Node, React.js, JavaScript, HTML,CSS,Git/Github,SQL</p>
                    <p>and Mangodb.Even Machine Learning and  Deep Learning </p>
                    <p>concepts.I prefer to keep learning, continue challenging</p>
                    <p>myself and do interesting things that matter.You can hire</p>
                    <p>me for Front-end works</p>
                    </div>
                </Fade>
            </Text>
        </Content>
    </Container>
  )
}
const Text=styled.div`
display:flex;
justify-content:center;
align-items:center;
font-size:3.3vh;
font-weight:600;
color:#2E424D;
font-family: Monaco;
div{
    display:block;
}
p{
    margin:0;
}
`
const Container=styled.div`
height:90vh;
width:100%;
`
const Content=styled.div`
display:flex;
justify-content:center;
height: 75vh;
width: 70%;
margin-left:15%;
@media(max-width:940px){
    width:100%;
    height:90vh;
    margin-left:0;
}
margin-top:2%;
position: relative;
 img{
  height:100%;
  width:100%;
  position:absolute;
   right:0;
    left:0;
    bottom:0;
    top: 0;
    object-fit: cover;
}
`
const Title=styled.div`
padding-left:5%;
padding-top:2%;
span{
    color:#36323C;
    font-size: 340%;
    font-weight:900;
    position: relative;
 &:after{
  content:"";
  height:5px;
  background:rgb(255,200,0);
  position:absolute;
  bottom:-15%;
  right:45%;
  left:0;
}
`
export default About