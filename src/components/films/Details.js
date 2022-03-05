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
    width: 50%;
    display:flex;
    gap: 5px;
    flex-wrap:wrap;
`;

const Details = () => {

    let { id } = useParams();

    const [data, setData] = useState({
        film: {},
        loading: true,
        error: false
    });

    const { film, loading, error } = data;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios(`https://swapi.dev/api/films/${id}`)
                setData({ film: response.data, loading: false });
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
                <DataLabel>Title </DataLabel>
                <DataValue>{film.title}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Director </DataLabel>
                <DataValue>{film.director}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Episode </DataLabel>
                <DataValue>{film.episode_id}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Opening Crawl </DataLabel>
                <DataValue>{film.opening_crawl}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Producer </DataLabel>
                <DataValue>{film.producer}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Release Date </DataLabel>
                <DataValue>{film.release_date}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>StarShips </DataLabel>
                <TabletsContainer>
                    {film.starships.map((item, key) => <DataTablet key={key} type="SHIP" link={item} />)}
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Vehicles </DataLabel>
                <TabletsContainer>
                    {film.vehicles.map((item, key) => <DataTablet key={key} type="VEHICLE" link={item} />)}
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Planets </DataLabel>
                <TabletsContainer>
                    {film.species.map((item, key) => <DataTablet type="PLANET" link={item} />)}
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Species </DataLabel>
                <TabletsContainer>
                    {film.species.map((item, key) => <DataTablet key={key} type="SPECIES" link={item} />)}
                </TabletsContainer>
            </DataContainer>
        </Container>
    )
}

export default Details