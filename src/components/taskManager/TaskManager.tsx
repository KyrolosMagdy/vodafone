import React from 'react';
import Divider from '@mui/material/Divider';

import {
  StyledTaskManagerWrapper,
  StyledTaskManagerTitle,
  StyledTypography,
} from './TaskManagerStyled';
import { Task } from '../../types/types';
import Card from '../card/Card';

interface TaskManagerProps {
  taskManagerTitle: string;
  tasks: Task[];
}

const TaskManager = ({
  taskManagerTitle,
  tasks,
}: TaskManagerProps): React.ReactElement => {
  return (
    <StyledTaskManagerWrapper elevation={3}>
      <StyledTaskManagerTitle variant='h6'>
        {taskManagerTitle}
      </StyledTaskManagerTitle>
      <Divider />
      {tasks.length > 0 ? (
        tasks.map((task) => <Card key={task.id} />)
      ) : (
        <StyledTypography variant='subtitle1'>
          No Avaiable Tasks in {taskManagerTitle} status
        </StyledTypography>
      )}
    </StyledTaskManagerWrapper>
  );
};

export default TaskManager;
