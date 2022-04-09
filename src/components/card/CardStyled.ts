import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

export const StyledContainer = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.common.silver,
    padding: '6px',
    color: theme.palette.common.white,
    margin: '0.5rem',
}));

export const StyledCardWrapper = styled('div')(({ theme }) => ({
    color: theme.palette.common.white,
    display: 'flex',
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
    color: theme.palette.common.white,
    fontSize: '12px'
}));