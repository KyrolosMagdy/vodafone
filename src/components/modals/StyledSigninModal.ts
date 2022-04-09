import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledBoxWrraper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.common.white,
  p: 4,
  zIndex: theme.zIndex.modal + 5,
  padding: '1rem',
  [theme.breakpoints.down('md')]: {
    width: '80vw',
  },
}));
