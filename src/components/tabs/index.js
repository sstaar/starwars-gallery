import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
    margin: 50px auto ;
    height:46px;
    border-radius:3px;
    width:80%;
    display:flex;
    justify-content:space-around;
    background:rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 0px 20px 10px rgba(255,255,255,0.1); 
    box-shadow: 0px 0px 15px 10px rgba(255,255,255,0.1);
`;

const CustomLinkStyled = styled(Link)`
    text-decoration:none;
    display:flex;
    margin: auto;
    width:16.66%;
    height: 100%;
    color:${props => props.active ? "#fff" : "#333"};
    background: ${props => props.active ? "rgba(0, 0, 0, .9)" : "none"};
`;

const LinkTextStyled = styled.p`
    margin:auto;
`;

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <CustomLinkStyled
            to={to}
            {...props}
            active={match}
        >

            <LinkTextStyled active={match}>
                {children}
            </LinkTextStyled>
        </CustomLinkStyled>
    );
}

const Tabs = () => {

    return (
        <Container>
            <CustomLink to="/people">People</CustomLink>
            <CustomLink to="/planets" >Planets</CustomLink>
            <CustomLink to="/species" >Species</CustomLink>
            <CustomLink to="/starships" >Starships</CustomLink>
            <CustomLink to="/films" >Films</CustomLink>
            <CustomLink to="/vehicles" >Vehicles</CustomLink>
        </Container>
    )
};

export default Tabs;