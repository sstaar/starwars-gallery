import React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { Skeleton } from '@mui/material';

const Container = styled(Card)`
    border-radius:3px;
    width:80%;
    margin:auto;
    padding:40px;
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

const TabletsContainer = styled.div`
    border-radius:50%;
    display:flex;
    gap: 5px;
`;

const DetailsLoading = () => {
    return (
        <Container>
            <DataContainer>
                <DataLabel>Name </DataLabel>
                <DataValue><Skeleton variant="text" width={160} /></DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Climate </DataLabel>
                <DataValue><Skeleton variant="text" width={160} /></DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Diameter </DataLabel>
                <DataValue><Skeleton variant="text" width={160} /></DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Population </DataLabel>
                <DataValue><Skeleton variant="text" width={160} /></DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Gravity </DataLabel>
                <DataValue><Skeleton variant="text" width={160} /></DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Orbital Period </DataLabel>
                <DataValue><Skeleton variant="text" width={160} /></DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Rotation Period </DataLabel>
                <DataValue><Skeleton variant="text" width={160} /></DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Skin color </DataLabel>
                <DataValue><Skeleton variant="text" width={160} /></DataValue>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>StarShips </DataLabel>
                <TabletsContainer>
                    <Skeleton variant="rectangular" width={"100%"} height={25} />
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Films </DataLabel>
                <TabletsContainer>
                    <Skeleton variant="rectangular" width={"100%"} height={25} />
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Vehicles </DataLabel>
                <TabletsContainer>
                    <Skeleton variant="rectangular" width={"100%"} height={25} />
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Home World </DataLabel>
                <TabletsContainer>
                    <Skeleton variant="rectangular" width={25} height={25} />
                </TabletsContainer>
            </DataContainer>
            <Divider />
            <DataContainer>
                <DataLabel>Species </DataLabel>
                <TabletsContainer>
                    <Skeleton variant="rectangular" width={"100%"} height={25} />
                </TabletsContainer>
            </DataContainer>
        </Container>
    )
}

export default DetailsLoading