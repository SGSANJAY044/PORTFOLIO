import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
function Myworks() {
  return (
    <Container>
      <Fade duration={1000}>
      <Head>
        <span>
          RECENT WORKS
        </span>
      </Head>
      </Fade>
      <Content>
      <Fade left>
      <a> <span id='ts'><img src='tesla.jpeg'/></span></a> 
      </Fade>
      <Fade bottom delay={500}>
      <a><span id='ag'><img src='Agri.jpg'/></span></a>
      </Fade>
      <Fade right delay={700}>
      <a><span id='dy'><img src='disney.webp'/></span></a>  
      </Fade>
      </Content>
    </Container>
  )
}
const Container=styled.div`
height:100vh;
margin:5% 0;
@media(max-width:360px){
  margin:0;
}
overflow-x:hidden;
`
const Head=styled.div`
@media(max-width:360px){
  font-size:60%;
  margin:20px 0;
}
text-align:center;
span{
    color:#36323C;
    font-size: 300%;
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
const Content=styled.div`
@media(max-width:360px){
  justify-content:center;
  margin:0;
  a{
    height:130px !important;
    margin:10px  !important;
  font-size:150% !important; 
  }
}
display:flex;
margin:10% 4%;
justify-content:space-between;
@media(max-width:1200px){
  display:flex;
  flex-direction:column;
}
a{
  @media(max-width:1200px){
  border:none;
  width:20%;
  margin:10% 0;
  margin-left:20%;
  margin-right:20%;
} 
  cursor:pointer;
  border-top:5px solid rgb(0,0,0);
  transition: transform 1s;
  transform-style: preserve-3d;
  display:block;
  height:180px;
  font-size: 200%; 
  color: white;
  font-weight:600;
  img{
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    height:100%;
    object-fit: fill;
  }
  #ts{
    position: relative;
    
    &:after{
      content:"Tesla Clone";
      height:5px;
      position:absolute;
      bottom:300%;
      right:30%;
    }}
    #ag{
      position: relative;
      
      &:after{
        content:"Agriculture Automation";
        height:5px;
        position:absolute;
        bottom:300%;
        right:10%;
      }}
      #dy{
        position: relative;
        &:after{
          content:"Disney Plus Clone";
          height:5px;
          position:absolute;
          bottom:300%;
          right:10%;
        }}
        &:hover{
          border-top:5px solid rgb(255,200,0);
          @media(max-width:1200px){
              border:none;
               transform: rotateX(360deg); 
                  }
          transform: rotateY(360deg);
        }
}
`
export default Myworks