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
        planet: {},
        loading: true
    });

    const { planet, loading } = data;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios(`https://swapi.dev/api/planets/${id}`)
                console.log(response);
                setData({ planet: response.data, loading: false });
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
                <DataValue>{planet.name}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Climate </DataLabel>
                <DataValue>{planet.climate}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Diameter </DataLabel>
                <DataValue>{planet.diameter}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Population </DataLabel>
                <DataValue>{planet.population}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Gravity </DataLabel>
                <DataValue>{planet.gravity}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Orbital Period </DataLabel>
                <DataValue>{planet.orbital_period}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Rotation Period </DataLabel>
                <DataValue>{planet.rotation_period}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Surface Water </DataLabel>
                <DataValue>{planet.surface_water}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Terrain </DataLabel>
                <DataValue>{planet.terrain}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Residents </DataLabel>
                <TabletsContainer>
                    {planet.residents.map((item, key) => <DataTablet key={key} type="PERSON" link={item} />)}
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Films </DataLabel>
                <TabletsContainer>
                    {planet.films.map((item, key) => <DataTablet key={key} type="FILM" link={item} />)}
                </TabletsContainer>
            </DataContainer>
        </Container>
    )
}

export default Details