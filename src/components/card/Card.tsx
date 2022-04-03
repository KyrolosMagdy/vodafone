import React from 'react';
import Avatar from '@mui/material/Avatar';

import {
    StyledCardWrapper,
    StyledCardTitle,
    CardInfoWrapper,
    StyledCardDate
} from './CardStyled'

const Card = ():React.ReactElement => {
    return (
      <StyledCardWrapper>
        <CardInfoWrapper>
          <StyledCardTitle variant='h6'>Lol</StyledCardTitle>
          <StyledCardDate>
            kldhfkdshk
        </StyledCardDate>
        </CardInfoWrapper>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        
      </StyledCardWrapper>
    );
};

export default Card;