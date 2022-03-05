import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import DataTablet from '../utils/DataTablet';
import DetailsLoading from './DetailsLoading';
import NotFound from '../utils/NotFound';

const Container = styled(Card)`
    border-radius:3px;
    width:80%;
    margin:auto;
    padding:40px;
`;

const DataContainer = styled.div`
    display:flex;
    margin:15px 0;
`;

const DataLabel = styled.p`
    color:#333;
    margin:0 5px 0 0;
    width:50% ;
`;

const DataValue = styled.p`
    font-weight:600;
    color:#333;
    margin:0;
    width: 50%;
`;

const TabletsContainer = styled.div`
    border-radius:50%;
    display:flex;
    gap: 5px;
`;

const Details = () => {

    let { id } = useParams();

    const [data, setData] = useState({
        vehicle: {},
        loading: true,
        error: false
    });

    const { vehicle, loading, error } = data;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios(`https://swapi.dev/api/vehicles/${id}`)
                setData({ vehicle: response.data, loading: false });
            } catch (error) {
                setData({ ...data, loading: false, error: true });
            }
        };
        getData();
    }, [])// eslint-disable-line

    if (loading)
        return <DetailsLoading />
    if (error)
        return <NotFound />
    return (
        <Container>
            <DataContainer>
                <DataLabel>Name </DataLabel>
                <DataValue>{vehicle.name}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Cargo Capacity </DataLabel>
                <DataValue>{vehicle.cargo_capacity}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Consumables </DataLabel>
                <DataValue>{vehicle.consumables}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Cost In Credits </DataLabel>
                <DataValue>{vehicle.cost_in_credits}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Crew </DataLabel>
                <DataValue>{vehicle.crew}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>length </DataLabel>
                <DataValue>{vehicle.length}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Manufacturer </DataLabel>
                <DataValue>{vehicle.manufacturer}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Max Atmosphering Speed </DataLabel>
                <DataValue>{vehicle.max_atmosphering_speed}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Model </DataLabel>
                <DataValue>{vehicle.model}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Passengers </DataLabel>
                <DataValue>{vehicle.passengers}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Vehicle Class </DataLabel>
                <DataValue>{vehicle.vehicle_class}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Films </DataLabel>
                <TabletsContainer>
                    {vehicle.films.map((item, key) => <DataTablet key={key} type="FILM" link={item} />)}
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Pilots </DataLabel>
                <TabletsContainer>
                    {vehicle.pilots.map((item, key) => <DataTablet key={key} type="PERSON" link={item} />)}
                </TabletsContainer>
            </DataContainer>
        </Container>
    )
}

export default Details