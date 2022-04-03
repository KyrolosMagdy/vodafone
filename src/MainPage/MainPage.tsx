import React from 'react';
import Grid from '@mui/material/Grid';

import TaskManager from '../components/taskManager/TaskManager'; 

const MainPage = (): React.ReactElement => {
    return (
        <Grid container justifyContent='center' sx={{gridGap: '2rem', marginTop: '2rem'}}>
            <TaskManager taskManagerTitle='To Do' tasks={[]} />
            <TaskManager taskManagerTitle='Progress' tasks={[]} />
            <TaskManager taskManagerTitle='QA' tasks={[]} />
            <TaskManager taskManagerTitle='Done' tasks={[]} />
            <TaskManager taskManagerTitle='Deplyed' tasks={[]} />
        </Grid>    
    )
};

export default MainPage;