import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { StyledBoxWrraper } from './StyledSigninModal';

interface SigninModalProps {
    open: boolean;
    handleClose: () => void;
} 

const SigninModal = ({open, handleClose}: SigninModalProps): React.ReactElement => {

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <StyledBoxWrraper>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </StyledBoxWrraper>
      </Modal>
  );
};

export default SigninModal;
