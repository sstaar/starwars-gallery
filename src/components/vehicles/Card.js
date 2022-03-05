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

const vehicleCard = ({ vehicle }) => {

    console.log(vehicle);

    return (
        <Container to={'/vehicles/' + getDataId(vehicle.url)}>
            <CustonCard>
                <DataContainer>
                    <DataLabel>Name </DataLabel>
                    <DataValue>{vehicle.name}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Crew </DataLabel>
                    <DataValue>{vehicle.crew}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Model </DataLabel>
                    <DataValue>{vehicle.model}</DataValue>
                </DataContainer>
                <DataContainer>
                    <DataLabel>Passengers </DataLabel>
                    <DataValue>{vehicle.passengers}</DataValue>
                </DataContainer>
            </CustonCard>
        </Container>
    )
}

export default vehicleCard