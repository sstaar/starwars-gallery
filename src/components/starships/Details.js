import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import DataTablet from '../utils/DataTablet';
import DetailsLoading from './DetailsLoading';

const Container = styled(Card)`
    /* margin: 50px auto ; */
    /* height:46px; */
    /* margin:5px; */
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
        starship: {},
        loading: true
    });

    const { starship, loading } = data;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios(`https://swapi.dev/api/starships/${id}`)
                console.log(response)
                setData({ starship: response.data, loading: false });
            } catch (error) {
                console.log(error)
            }
        };
        getData();
    }, [])

    if (loading)
        return <DetailsLoading />
    return (
        <Container>
            <DataContainer>
                <DataLabel>Name </DataLabel>
                <DataValue>{starship.name}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Cargo Capacity </DataLabel>
                <DataValue>{starship.cargo_capacity}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Consumables </DataLabel>
                <DataValue>{starship.consumables}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Cost In Credits </DataLabel>
                <DataValue>{starship.cost_in_credits}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Crew </DataLabel>
                <DataValue>{starship.crew}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Hyperdrive Rating </DataLabel>
                <DataValue>{starship.hyperdrive_rating}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Length </DataLabel>
                <DataValue>{starship.length}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Manufacturer </DataLabel>
                <DataValue>{starship.manufacturer}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Max Atmosphering Speed </DataLabel>
                <DataValue>{starship.max_atmosphering_speed}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>model </DataLabel>
                <DataValue>{starship.model}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Passengers </DataLabel>
                <DataValue>{starship.passengers}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Starship Class </DataLabel>
                <DataValue>{starship.starship_class}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Films </DataLabel>
                <TabletsContainer>
                    {starship.films.map((item, key) => <DataTablet key={key} type="FILM" link={item} />)}
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Pilots </DataLabel>
                <TabletsContainer>
                    {starship.pilots.map((pilot, key) => <DataTablet key={key} type="PERSON" link={pilot} />)}
                </TabletsContainer>
            </DataContainer>
        </Container>
    )
}

export default Details