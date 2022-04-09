import React from 'react';
import Divider from '@mui/material/Divider';

import { selectAllUsers } from '../../features/users/usersSlice';

import {
  StyledTaskManagerWrapper,
  StyledTaskManagerTitle,
  StyledTypography,
} from './TaskManagerStyled';
import { Task, User } from '../../types/types';
import Card from '../card/Card';
import { useAppSelector } from '../../app/hooks';

interface TaskManagerProps {
  taskManagerTitle: string;
  tasks: Task[];
}

const TaskManager = ({
  taskManagerTitle,
  tasks,
}: TaskManagerProps): React.ReactElement => {
  
  const users = useAppSelector(selectAllUsers);

  const handleGetAssignedUser = (userId: number) => {
    return users.find(user => user.id === userId) as User;
  }

  console.log('tasks: ', tasks)
  return (
    <StyledTaskManagerWrapper elevation={3}>
      <StyledTaskManagerTitle variant='h6'>
        {taskManagerTitle}
      </StyledTaskManagerTitle>
      <Divider />
      {tasks.length > 0 ? (
        tasks.map((task) => <Card key={task.id} task={task} assignedUser={handleGetAssignedUser(task.assignedTo)}/>)
      ) : (
        <StyledTypography variant='subtitle1'>
          No Avaiable Tasks in {taskManagerTitle} status
        </StyledTypography>
      )}
    </StyledTaskManagerWrapper>
  );
};

export default TaskManager;
