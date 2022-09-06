import React,{ useState }from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Home } from '@material-ui/icons'
import { Info } from '@material-ui/icons'
import Paper  from '@material-ui/icons/Description'
import { Computer } from '@material-ui/icons'
import { PermContactCalendar } from '@material-ui/icons'
function Header() {
    window.onscroll=function(){stFunction()}
    const [sideNavstate,setSideNavState]=useState(false);
    var st=document.getElementById("nav")
    var cl=document.getElementById("item")
    var sticky=0
    function stFunction(){
        if (window.pageYOffset == sticky) {
            st.style.background="transparent";
            st.style.boxShadow="none";
            st.style.color="black";
        } else {
            st.style.background="white";
            st.style.boxShadow="rgb(0 0 0 / 69%) -10px 12px 20px -15px";
            st.style.color="rgb(255,200,0)";
        }
    }
  return (
    <Container id='nav'>
        <a>
            <img src='logo.png'/>
        </a>
        <Menu>
            <a>
                <span id='item'>Home</span>
            </a>
            <a>
                <span>About</span>
            </a>
            <a>
                <span>Papers</span>
            </a>            
            <a>
                <span>Projects</span>
            </a>
            <a>
                <span>Contact</span>
            </a>
        </Menu>
        <Three fontSize='large' onClick={() =>setSideNavState(true)}/>
        <SideNav show={sideNavstate}>
            <Close onClick={() =>setSideNavState(false)}/>
            <li><H/><a href='#'>Home</a></li>
            <li><A /><a href='#'>About</a></li>
            <li><P /><a href='#'>Papers</a></li>
            <li><Po /><a href='#'>Projects</a></li>
            <li><C /><a href='#'>Contact</a></li>
        </SideNav>
    </Container>
  )
}
const Container=styled.div`
max-width:100%;
z-index:1;
display: flex;
position:fixed;
align-items: center;
padding: 0 20px;
top: 0;
right: 0;
left: 0;
height: 70px;
a{
    img{
        height: 40px;
    }
}
@media(max-width:360px){
    padding:0 0;
}
overflow-x: hidden;
`
const Menu=styled.div`
display:flex;
justify-content: center;
flex: 1;
@media(max-width:673px){
    display:none;
}
a{
    cursor: pointer;
    display:flex;
    padding: 0 20px;
    span{
        font-size: 20px;
        font-weight: bold;
        // color: rgb(255, 200, 0);
        position: relative;
        &:after{
            content:"";
            height: 2px;
            background: rgb(255, 200 ,0);
            position: absolute;
            right: 20%;
            left: 20%;
            bottom: -3px;
            opacity: 1;
            tranform-origin: right center;
            transition: all 400ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform: scaleX(0);
        } 
    }
    &:hover{
        span{
            color:black;
        }
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
}

`
const SideNav=styled.div`
@media(min-width:673px){
    display:none;
}
cursor:pointer;
position: fixed;
top:0;
right: 0;
bottom: 0;
width: 300px;
box-shadow: rgb(0 0 0 / 69%) -10px 0px 30px -13px;
background: white;
padding: 20px;
display: flex;
flex-direction:column;
list-style: none;
transform: ${prop => prop.show ? 'translateX(0)' : 'translateX(100%)'};
li{
    display:flex;
    align-items:center;
    padding: 15px 0;
    border-bottom:1px solid rgba(255, 200, 0,0.5);
    a{
        padding: 0 5px;
        font-size:20px;
        color: black;
        font-weight: 500;
        font-famliy:Imapct;
    }
}
`
const Three=styled(MenuIcon)`
margin-bottom:20px;
opacity: 0;
color: rgb(255, 200 ,0);
margin-left: auto;
&:hover{
    color: rgb(0, 0, 0);
}
@media(max-width:673px){
    cursor: pointer;
    opacity: 1;
}
`
const Close=styled(CloseIcon)`
margin-left:auto;
color: red;
cursor: pointer;
border-radius: 50%;
&:hover{
    opacity: 80%;
    background: red;
    color: white;
}
`
const H=styled(Home)`
&:hover{
   color: rgb(0, 0, 0); 
}
color:rgb(255,200,0);`
const A=styled(Info)`
&:hover{
   color: rgb(0, 0, 0); 
}
color:rgb(255,200,0);`
const P=styled(Paper)`
&:hover{
   color: rgb(0, 0, 0); 
}
color:rgb(255,200,0);`
const Po=styled(Computer)`
&:hover{
   color: rgb(0, 0, 0); 
}
color:rgb(255,200,0);`
const C=styled(PermContactCalendar)`
&:hover{
   color: rgb(0, 0, 0); 
}
color:rgb(255,200,0);`
export default Header