import React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import { getDataId } from '../utils/actions';

const Container = styled(Link)`
    text-decoration:none;
`;

const CustonCard = styled(Card)`
&:hover{
        background: #eee;
    }
`;

const DataContainer = styled.div`
    display:flex;
    margin:10px;
`;

const DataLabel = styled.p`
    color:#333;
    margin:0 5px 0 0;
    width:50%;
`;

const DataValue = styled.p`
    font-weight:600;
    color:#333;
    margin:0;
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

const starshipCard = ({ starship }) => {

    return (
        <Container to={'/starships/' + getDataId(starship.url)}>
            <CustonCard>
                <DataContainer>
                    <DataLabel>Name </DataLabel>
                    <DataValue>{starship.name}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Crew </DataLabel>
                    <DataValue>{starship.crew}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Model </DataLabel>
                    <DataValue>{starship.model}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Passengers </DataLabel>
                    <DataValue>{starship.passengers}</DataValue>
                </DataContainer>
            </CustonCard>
        </Container>
    )
}

export default starshipCard