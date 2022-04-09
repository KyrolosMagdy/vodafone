import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { StyledBoxWrraper } from '../StyledSigninModal';

interface CreateTaskmodelProps {
  open: boolean;
  handleClose: () => void;
}

const CreateTaskModel = ({
  open,
  handleClose,
}: CreateTaskmodelProps): React.ReactElement => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <StyledBoxWrraper>
        <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ textAlign: 'center'}}>
          Create new Task
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Here we should add details about the created task.
        </Typography>
      </StyledBoxWrraper>
    </Modal>
  );
};

export default CreateTaskModel;
