import React from 'react'
import { getDataId } from './actions'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled(Link)`
    display:flex;
    width:25px;
    height:25px;
    border-radius:3px;
    text-decoration:none;
    cursor:pointer;
    background:rgba(25, 118, 210, .6);
    &:hover{
    background:rgba(25, 118, 210, .9);
    }
`;

const Text = styled.p`
    margin:auto;
    font-size:12px;
    font-weight:700;
    text-decoration:none;
    color:#333;
`;

const getLinkFromType = (type) => {
    switch (type) {
        case "PERSON":
            return "/people/"
        case "FILM":
            return "/films/"
        case "PLANET":
            return "/planets/"
        case "SPECIES":
            return "/species/"
        case "SHIP":
            return "/starships/"
        case "VEHICLE":
            return "/vehicles/"
        default:
            break;
    }
}

const DataTablet = ({ link, type }) => {

    const id = getDataId(link);

    return (
        <Container to={getLinkFromType(type) + id}>
            <Text>
                {id}
            </Text>
        </Container>
    )
}

export default DataTablet