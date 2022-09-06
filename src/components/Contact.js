import { MailOutline } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
function Contact() {
  return (
    <CC>
        <Fade>
        <Title>
            <span>
            Let's Get in Touch
            </span>
        </Title>
        </Fade>
    <Container>
        <Contant>
            <Fade duration={2000}>
            <img src='/Contact.svg'></img>
            </Fade>
            <Main>
                <Fade bottom>
                <h2>Say hello..!</h2>
                </Fade>
            <Fade bottom delay={400}>
            <Form>
                <Flex>
                <input type="text" id="name" placeholder='Name'/>
                <input type="email" id="mail" placeholder='Email'/>
                </Flex>
                <Int>
                <input type="text" id="message" placeholder='Type your message here.....'/>
                </Int>
            </Form>
            </Fade>
            <Fade top delay={600}>
            <Send>
                <MO/>
                Send me
            </Send>
            </Fade>
            </Main>
        </Contant>
    </Container>
    </CC>
  )
}
const CC=styled.div`
height:100vh;
width:100%;
@media(max-width:360px){
    height:75vh;
}`
const Title=styled.div`
padding-left:5%;
height:20vh;
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
const Container=styled.div`
height:70vh;
width:100%;
display:flex;
@media(max-width:360px){
    margin-top:30px;
}
`
const Send=styled.div`
@media(max-width:360px){
    font-size:220%;
    width:150px;
    text-align:center;
    color:rgb(255,200,0);
    background:black;
}
cursor:pointer;
margin-top:5%;
display:flex;
margin-left:25%;
align-items:center;
border-radius:5%;
font-size:120%; 
font-weight:300;
color:#00000;
width:100px;
&:hover{
    color:rgb(255,200,0);
    background:black;
}
`
const MO=styled(MailOutline)`
color:rgb(255,200,0);
&:hover{
    opacity:1;
}
@media(max-width:360px){
    display:none !important;
}
`
const Int=styled.div`
height:60px;
width:95%;
border-radius:5%;
background:rgba(211,211,211,.2);
border:none;
border-bottom: 3px solid rgb(255,200,0);  
margin-top:10%;
#message{
    background:rgba(211,211,211,.0);
    border:none;
}
`
const Contant=styled.div`
height:70vh;
width:100%;
img{
    @media(max-width:940px){
    display:none;
    }
    height:85%;
    margin: 2% 3%
}
display:flex;`
const Main=styled.div`
padding-top:5%;
width:100%;
h2{
    text-align:center;
    font-weight:900;
    color:rgb(255,200,0);
    font-size:200%;
    margin:0;
    
}
@media(max-width:360px){
    h2{
        text-align:left;
    }
}
`
const Form=styled.div`
@media(max-width:360px){
    margin:0;
    height:30vh;
}
input:focus{
     outline: none !important;
}
height:40vh;
padding-top:10%;
margin-left:25%;
`
const Flex=styled.div`
#name{
    height:30px;
    width:30%;
    border-radius:10%;
    background:rgba(211,211,211,.2);
    border:none;
    border-bottom: 3px solid rgb(255,200,0);
    margin-right:10%;
}
#mail{
    height:30px;
    width:45%;
    border-radius:10%;
    background:rgba(211,211,211,.2);
    border:none;
    border-bottom: 3px solid rgb(255,200,0); 
}
`
export default Contact