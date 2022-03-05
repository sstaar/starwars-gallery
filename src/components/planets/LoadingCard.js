import React from 'react'
import styled from "styled-components";
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';

const Container = styled(Card)`
    border-radius:3px;
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

const LoadingCard = () => {
    return (
        <Container>
            <DataContainer>
                <DataLabel>Name </DataLabel>
                <DataValue><Skeleton variant="text" width={160} /></DataValue>
            </DataContainer>
            <DataContainer>
                <DataLabel>Climate </DataLabel>
                <DataValue><Skeleton variant="text" width={160} /></DataValue>
            </DataContainer>
            <DataContainer>
                <DataLabel>Diameter </DataLabel>
                <DataValue><Skeleton variant="text" width={160} /></DataValue>
            </DataContainer>
            <DataContainer>
                <DataLabel>Population </DataLabel>
                <DataValue><Skeleton variant="text" width={160} /></DataValue>
            </DataContainer>
        </Container>
    )
}

export default LoadingCard