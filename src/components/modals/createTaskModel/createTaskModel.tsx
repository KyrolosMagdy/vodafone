import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { StyledBoxWrraper } from '../StyledSigninModal';
import { StyledFormWrapper } from './styledCreateTaskModel';

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
        <Typography
          id='modal-modal-title'
          variant='h6'
          component='h2'
          sx={{ textAlign: 'center' }}
        >
          Create new Task
        </Typography>
        <StyledFormWrapper>
          <TextField label='Task Title' color='secondary' fullWidth />
          <TextField label='Description' color='secondary' fullWidth />
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={'hjf'}
            label='Age'
            onChange={(e) => console.log('e')}
            fullWidth
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Button variant='contained' type='submit' color='secondary'>
            {' '}
            Submit{' '}
          </Button>
        </StyledFormWrapper>
      </StyledBoxWrraper>
    </Modal>
  );
};

export default CreateTaskModel;
