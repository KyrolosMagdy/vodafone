import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const StyledTaskManagerWrapper = styled(Paper)(({ theme }) => ({
    width: '15rem',
    minHeight: '70vh'
}));

export const StyledTaskManagerTitle = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.common.vodafoneSilver,
    fontWeight: 'bold',
    marginTop: '0.75rem',
    marginBottom: '0.75rem'
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    margin: '0.75rem',
}))