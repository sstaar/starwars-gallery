import React, { useState } from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';

const Container = styled(Card)`
    /* margin: 50px auto ; */
    /* height:46px; */
    /* margin:5px; */
    border-radius:3px;
    /* width:19%; */
`;

const DataContainer = styled.div`
    display:flex;
    margin:10px;
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

const PersonCard = ({ person, link }) => {

    const [data, setDate] = useState({
        person: link ? {} : person,
        loading: link ? true : false,

    })
    console.log(person);

    return (
        <Container>
            <DataContainer>
                <DataLabel>Name </DataLabel>
                <DataValue>{person.name}</DataValue>
            </DataContainer>
            <DataContainer>
                <DataLabel>Gender </DataLabel>
                <DataValue>{person.gender}</DataValue>
            </DataContainer>
            <DataContainer>
                <DataLabel>Mass </DataLabel>
                <DataValue>{person.mass}</DataValue>
            </DataContainer>
            <DataContainer>
                <DataLabel>Height </DataLabel>
                <DataValue>{person.height}</DataValue>
            </DataContainer>
        </Container>
    )
}

export default PersonCard