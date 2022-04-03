import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

export const StyledHeaderWrapper = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.common.silver,
}));

export const StyledCallToAction = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.common.vodafoneRed,
    color: theme.palette.common.white,
    padding: '0.5rem',
    borderRadius: '8px 25px',
    opacity: 0.75,
    cursor: 'pointer',
    '&:hover': {
        opacity: 1,
        backgroundColor: theme.palette.common.vodafoneRed,
        color: theme.palette.common.white,
    },
}));

export const StyledVodafoneLogo = styled('img')(({ theme }) => ({
    width: '8rem'
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between'
}))