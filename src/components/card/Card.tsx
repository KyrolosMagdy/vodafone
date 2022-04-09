import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

import {
  StyledContainer,
  StyledCardWrapper,
  StyledCardTitle,
  CardInfoWrapper,
  StyledCardDate,
} from './CardStyled';
import { Task, User } from '../../types/types';
import moment from 'moment';

interface CardProps {
  task: Task;
  assignedUser: User;
}

const Card = ({ task, assignedUser }: CardProps): React.ReactElement => {
  return (
    <StyledContainer>
      <StyledCardWrapper>
        <CardInfoWrapper>
          <StyledCardTitle variant='h6'>{task.title}</StyledCardTitle>
          <StyledCardDate>
            {moment(task.createdAt).format('MMMM Do YYYY')}
          </StyledCardDate>
        </CardInfoWrapper>
        <Avatar alt={assignedUser.name} src={assignedUser.avatar} />
      </StyledCardWrapper>
      <Stack direction='row' spacing={1}>
        <IconButton disabled={task.status === 1}>
          <ArrowCircleLeftIcon color='secondary'/>
        </IconButton>
        <IconButton aria-label='right' disabled={task.status === 5}>
          <ArrowCircleRightIcon color='secondary'/>
        </IconButton>
      </Stack>
    </StyledContainer>
  );
};

export default Card;
