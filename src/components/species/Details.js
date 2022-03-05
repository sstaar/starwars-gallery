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
        species: {},
        loading: true
    });

    const { species, loading } = data;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios(`https://swapi.dev/api/species/${id}`)
                setData({ species: response.data, loading: false });
            } catch (error) {
                console.log(error)
            }
        };
        getData();
    }, [id])

    if (loading)
        return <DetailsLoading />
    return (
        <Container>
            <DataContainer>
                <DataLabel>Name </DataLabel>
                <DataValue>{species.name}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Average Height </DataLabel>
                <DataValue>{species.average_height}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Average Lifespan </DataLabel>
                <DataValue>{species.average_lifespan}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Classification </DataLabel>
                <DataValue>{species.classification}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Designation </DataLabel>
                <DataValue>{species.designation}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Eye Colors </DataLabel>
                <DataValue>{species.eye_colors}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Hair Colors </DataLabel>
                <DataValue>{species.hair_colors}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Skin Colors </DataLabel>
                <DataValue>{species.skin_colors}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Language </DataLabel>
                <DataValue>{species.language}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>People </DataLabel>
                <TabletsContainer>
                    {species.people.map((person, key) => <DataTablet key={key} type="PERSON" link={person} />)}
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Films </DataLabel>
                <TabletsContainer>
                    {species.films.map((item, key) => <DataTablet key={key} type="FILM" link={item} />)}
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Home World </DataLabel>
                <TabletsContainer>
                    <DataTablet type="PLANET" link={species.homeworld} />
                </TabletsContainer>
            </DataContainer>
            <Divider />
        </Container>
    )
}

export default Details