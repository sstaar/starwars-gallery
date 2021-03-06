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

const People = () => {

    const [data, setData] = useState({
        people: [],
        loading: true,
        page: 1,
        next: false,
        previous: false,
    })

    //Spreading the data to make it easy to access
    const { people, loading, page, next, previous } = data;

    //The double check is only there to make sure nothing bad happens
    //For example a user can enable the button and click it
    const handleChangePage = (isNext) => {
        if (isNext && next)
            setData({ ...data, page: page + 1, loading: true });
        if (!isNext && previous)
            setData({ ...data, page: page - 1, loading: true });
    }

    useEffect(() => {
        //I made this function asynchronos to use await instead on then/catch
        const getData = async () => {
            try {
                const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
                setData({
                    loading: false,
                    people: response.data.results,
                    next: response.data.next,
                    previous: response.data.previous,
                    page
                });
            } catch (error) {
                console.log(error);
            }
        };
        getData();
        //Loading and page is on the array so that whenever the user changes the page i get the new data
    }, [loading, page])

    //I am using exactly 10 elements because the API doesn't seem to send any more
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
                {people.map((person, key) => <Grid key={key} item xs={6} md={6}> <Card person={person} /> </Grid>)}
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

export default People;