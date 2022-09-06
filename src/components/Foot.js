import React from 'react'
import styled from 'styled-components'
import { Facebook } from '@material-ui/icons'
import { LinkedIn } from '@material-ui/icons'
import { GitHub } from '@material-ui/icons'
import { Instagram } from '@material-ui/icons'
import { Copyright } from '@material-ui/icons'
function Foot() {
  return (
    <Footer>
      <Icons>
            <p><F fontSize='large'/></p>
            <p><In fontSize='large'/></p>
            <p><G fontSize='large'/></p>
            <p><I fontSize='large'/></p>
      </Icons>
      <Text>
        <Copyright />2022 SANJAY S .All Rights Reserved
      </Text>
    </Footer>
  )
}
const Footer=styled.div`
overflow-x:hidden;
display:flex;
justify-content:center;
flex-direction:column;
height:200px;
width:100%;
background-color: #121212;
font-size:150%;
align-items:center;
@media(max-width:360px){
  height:40vh;
  display:block;
  font-size:120%;
}
`
const Text=styled.div`
@media(max-width:360px){
  padding:0;
}
padding-top:2%;
`
const Icons=styled.div`
@media(max-width:360px){
  margin:0;
  p{
    margin:25px !important;
  }
}
display:flex;
margin-right:11%;
p{
  margin: 0 15%;
  font-size: 140%; 
  color: 	rgb(245,255,250,0.3);
  }`
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
export default Foot