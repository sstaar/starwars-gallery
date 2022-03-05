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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
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

const filmCard = ({ film }) => {

    return (
        <Container to={'/films/' + getDataId(film.url)}>
            <CustonCard>
                <DataContainer>
                    <DataLabel>Title </DataLabel>
                    <DataValue>{film.title}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Director </DataLabel>
                    <DataValue>{film.director}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Producer </DataLabel>
                    <DataValue>{film.producer}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Release Date </DataLabel>
                    <DataValue>{film.release_date}</DataValue>
                </DataContainer>
            </CustonCard>
        </Container>
    )
}

export default filmCard