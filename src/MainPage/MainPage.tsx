import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';

import TaskManager from '../components/taskManager/TaskManager';
import LoaderComponent from '../components/loaderComponent/loaderComponent';
import SigninModal from '../components/modals/signinModal';
import CreateTaskModel from '../components/modals/createTaskModel/createTaskModel';
import { Task } from '../types/types';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  fetchTasksAsync,
  selectLoadingState,
  selectTasks,
  selectisTaskModelOpen,
  toggleCreateTaskModelState
} from '../features/tasks/taskSlice';
import {
  fetchUsersAsync,
  selectUserLoadingStatus,
  selectIsModalOpen,
  toggleSigninModal,
} from '../features/users/usersSlice';

import { StyledCallToAction } from '../components/header/HeaderStyled';

const MainPage = (): React.ReactElement => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const isTasksLoading = useAppSelector(selectLoadingState);
  const isUsersLoading = useAppSelector(selectUserLoadingStatus);
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const isTaskModalOpen = useAppSelector(selectisTaskModelOpen);
  const CreatedTasks = useAppSelector(selectTasks);


  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTasksAsync());
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  useEffect(() => {
    setTasks(CreatedTasks);
  }, [CreatedTasks])

  return (
    <div>
      <LoaderComponent
        open={isTasksLoading === 'loading' || isUsersLoading === 'loading'}
      />
      <SigninModal
        open={isModalOpen}
        handleClose={() => dispatch(toggleSigninModal())}
      />
      <CreateTaskModel 
        open={isTaskModalOpen}
        handleClose={() => dispatch(toggleCreateTaskModelState())}
      />
      <Grid container sx={{ justifyContent: 'flex-end'}}>
          <Grid item sx={{margin: '1rem'}}> 
              <StyledCallToAction color='secondary' variant='contained' onClick={() => dispatch(toggleCreateTaskModelState())}>
              <AddIcon />
              Create Task
          </StyledCallToAction>
          </Grid>
          
      </Grid>
      <Grid
        container
        justifyContent='center'
        sx={{ gridGap: '2rem', marginTop: '2rem' }}
      >
        <TaskManager taskManagerTitle='To Do' tasks={ tasks.filter((ts) => ts.status === 1 ) ?? []} />
        <TaskManager taskManagerTitle='Progress' tasks={tasks.filter((ts) => ts.status === 2 ) ?? []} />
        <TaskManager taskManagerTitle='QA' tasks={tasks.filter((ts) => ts.status === 3 ) ?? []} />
        <TaskManager taskManagerTitle='Done' tasks={tasks.filter((ts) => ts.status === 4 ) ?? []} />
        <TaskManager taskManagerTitle='Deplyed' tasks={tasks.filter((ts) => ts.status === 5 ) ?? []} />
      </Grid>
    </div>
  );
};

export default MainPage;
