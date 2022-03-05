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
        person: {},
        loading: true
    });

    const { person, loading } = data;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios(`https://swapi.dev/api/people/${id}`)
                setData({ person: response.data, loading: false });
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
                <DataValue>{person.name}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Gender </DataLabel>
                <DataValue>{person.gender}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Birth Year </DataLabel>
                <DataValue>{person.birth_year}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Height </DataLabel>
                <DataValue>{person.height}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Mass </DataLabel>
                <DataValue>{person.mass}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Hair Color </DataLabel>
                <DataValue>{person.hair_color}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Eye Color </DataLabel>
                <DataValue>{person.eye_color}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Skin color </DataLabel>
                <DataValue>{person.skin_color}</DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>StarShips </DataLabel>
                <TabletsContainer>
                    {person.starships.map((item, key) => <DataTablet key={key} type="SHIP" link={item} />)}
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Films </DataLabel>
                <TabletsContainer>
                    {person.films.map((item, key) => <DataTablet key={key} type="FILM" link={item} />)}
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Vehicles </DataLabel>
                <TabletsContainer>
                    {person.vehicles.map((item, key) => <DataTablet key={key} type="VEHICLE" link={item} />)}
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Home World </DataLabel>
                <TabletsContainer>
                    <DataTablet type="PLANET" link={person.homeworld} />
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Species </DataLabel>
                <TabletsContainer>
                    {person.species.map((item, key) => <DataTablet key={key} type="SPECIES" link={item} />)}
                </TabletsContainer>
            </DataContainer>
        </Container>
    )
}

export default Details