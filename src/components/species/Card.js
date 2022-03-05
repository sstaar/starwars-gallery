import React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import { getDataId } from '../utils/actions';

const Container = styled(Link)`
    /* margin: 50px auto ; */
    /* height:46px; */
    /* margin:5px; */
    /* border-radius:3px; */
    /* width:19%; */
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
`;

const itemCard = ({ item }) => {

    return (
        <Container to={'/species/' + getDataId(item.url)}>
            <CustonCard>
                <DataContainer>
                    <DataLabel>Name </DataLabel>
                    <DataValue>{item.name}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Language </DataLabel>
                    <DataValue>{item.language}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Classification </DataLabel>
                    <DataValue>{item.classification}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Average Lifespan </DataLabel>
                    <DataValue>{item.average_lifespan}</DataValue>
                </DataContainer>
            </CustonCard>
        </Container>
    )
}

export default itemCard