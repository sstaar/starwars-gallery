import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import LoadingCard from './LoadingCard';

const Container = styled.div`
    display:flex ;
    flex-wrap:wrap;
    width:80%;
    /* gap:5px */
    margin:auto;
`;

const ButtonsContainer = styled.div`
    width:100%;
    display: flex;
    gap:1%;
    margin-top:26px;
`;

const Button = styled.button`
    cursor:pointer;
    width:49.5%;
    background:${props => props.disabled ? "#C8C8C8" : "#fff"};
    cursor:${props => props.disabled ? "not-allowed" : "pointer"};
    color:${props => props.disabled ? "#969696" : "#333"};
    border:none;
    border-radius:3px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const ButtonText = styled.p`
    font-size:20px;
    font-weight:700;
`;

const Vehicles = () => {

    const [data, setData] = useState({
        vehicles: [],
        loading: true,
        page: 1,
        next: false,
        previous: false,
    })

    const { vehicles, loading, page, next, previous } = data;

    const handleChangePage = (isNext) => {
        if (isNext && next)
            setData({ ...data, page: page + 1, loading: true });
        if (!isNext && previous)
            setData({ ...data, page: page - 1, loading: true });
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://swapi.dev/api/vehicles/?page=${page}`);
                setData({
                    loading: false,
                    vehicles: response.data.results,
                    next: response.data.next,
                    previous: response.data.previous,
                    page
                });
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [loading])

    if (loading)
        return (
            <Container>
                <Grid container spacing={2}>
                    {[...Array(10)].map((item, key) => <Grid key={key} item xs={6} md={6}> <LoadingCard /> </Grid>)}
                </Grid>
                <ButtonsContainer>
                    <Button disabled={true} onClick={() => handleChangePage(null)}>
                        <ButtonText >Previous</ButtonText>
                    </Button>
                    <Button disabled={true} onClick={() => handleChangePage(true)}>
                        <ButtonText  >Next</ButtonText>
                    </Button>
                </ButtonsContainer>
            </Container>
        )
    return (
        <Container>
            <Grid container spacing={2}>
                {vehicles.map((vehicle, key) => <Grid key={key} item xs={6} md={6}> <Card vehicle={vehicle} /> </Grid>)}
            </Grid>
            <ButtonsContainer>
                <Button disabled={!previous} onClick={() => handleChangePage(null)}>
                    <ButtonText>Previous</ButtonText>
                </Button>
                <Button disabled={!next} onClick={() => handleChangePage(true)}>
                    <ButtonText >Next</ButtonText>
                </Button>
            </ButtonsContainer>
        </Container>
    )
};

export default Vehicles;