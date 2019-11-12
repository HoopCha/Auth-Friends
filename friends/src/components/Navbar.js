import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components'

const Div = styled.div `
    height:10vh;
    background:slategrey;
    display:flex;
    justify-content:space-evenly;
    width:100vw;
`

const H1 = styled.h1 `
    
`

const Button = styled.button `
margin-top:40%;
border-radius:5px;
background:white
width:100%;
font-size:1.25em;
    :hover{background:blue;
        color:white;
    }
`

const Navbar = () => {

    const logout = () => {
        localStorage.removeItem("token");
    }

    return (
        <Div>
            <H1>Client-Side Authentication</H1>
            <NavLink to='/login'>
                    <Button onClick={logout}>Log Out</Button>
            </NavLink>
        </Div>
    )
}
export default Navbar;