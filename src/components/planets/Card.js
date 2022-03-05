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

const PlanetCard = ({ person }) => {

    return (
        <Container to={'/planets/' + getDataId(person.url)}>
            <CustonCard>
                <DataContainer>
                    <DataLabel>Name </DataLabel>
                    <DataValue>{person.name}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Climate </DataLabel>
                    <DataValue>{person.climate}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Diameter </DataLabel>
                    <DataValue>{person.diameter}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Population </DataLabel>
                    <DataValue>{person.population}</DataValue>
                </DataContainer>
            </CustonCard>
        </Container>
    )
}

export default PlanetCard;