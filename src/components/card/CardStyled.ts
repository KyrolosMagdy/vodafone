import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

export const StyledCardWrapper = styled(Card)(({ theme }) => ({
    margin: '0.5rem',
    backgroundColor: theme.palette.common.silver,
    color: theme.palette.common.white,
    display: 'flex',
    padding: '6px',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

export const CardInfoWrapper = styled('span')(({ theme }) => ({
    display: 'grid',
}));

export const StyledCardTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.vodafoneRed,
}));

export const StyledCardDate = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white
}));