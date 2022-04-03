import React from 'react';
import Divider from '@mui/material/Divider';

import {
    StyledTaskManagerWrapper,
    StyledTaskManagerTitle,
    StyledTypography
} from './TaskManagerStyled';
import { Task } from '../../types/types';

interface TaskManagerProps {
    taskManagerTitle: string;
    tasks: Task[]
}

const TaskManager = ({ taskManagerTitle, tasks }: TaskManagerProps): React.ReactElement => {
    return (
        <StyledTaskManagerWrapper elevation={3}>
            <StyledTaskManagerTitle variant='h6'>
                {taskManagerTitle}
            </StyledTaskManagerTitle>
            <Divider />
            {
                tasks.length > 0? '':<StyledTypography variant='subtitle1'>
                    No Avaiable Tasks in {taskManagerTitle} status 
                </StyledTypography> 
            }
        </StyledTaskManagerWrapper>
    )
};

export default TaskManager;