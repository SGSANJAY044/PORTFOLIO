import React from 'react'
import styled from 'styled-components'
import { FavoriteBorder } from '@material-ui/icons'
import { Favorite } from '@material-ui/icons'
function divider() {
  return (
    <Div>
      <span>
      <FavoriteBorder fontSize='small' />
      <div>
      <Favorite fontSize='small'/>
      </div>
      </span>
    </Div>
  )
}
const Div=styled.div`
display: block;
text-align:center;
color:red;
margin:100px;
span{
  position:relative;
  div{
    position:absolute;
    right:46%;
    bottom:2%;
    opacity:0;
    &:hover{
      opacity:1;
    }
  }
  &:before{
      margin-left: auto;
      content:"_______________";
      color:red;
      position:relative;
      bottom:13px;
  }
  &:after{
      margin-right:auto;
      content:"_______________";
      color:  red;
      position: relative;
      bottom:13px;
  }
}
`

export default divider