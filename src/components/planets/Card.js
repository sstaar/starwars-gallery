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
`;

const PlanetCard = ({ planet }) => {

    return (
        <Container to={'/planets/' + getDataId(planet.url)}>
            <CustonCard>
                <DataContainer>
                    <DataLabel>Name </DataLabel>
                    <DataValue>{planet.name}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Climate </DataLabel>
                    <DataValue>{planet.climate}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Diameter </DataLabel>
                    <DataValue>{planet.diameter}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Population </DataLabel>
                    <DataValue>{planet.population}</DataValue>
                </DataContainer>
            </CustonCard>
        </Container>
    )
}

export default PlanetCard;