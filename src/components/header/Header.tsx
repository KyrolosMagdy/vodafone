import React from 'react';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import {
  StyledHeaderWrapper,
  StyledCallToAction,
  StyledVodafoneLogo,
  StyledToolbar
} from './HeaderStyled';
import VodefoneLogo from '../../assets/vodafone.svg';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const HeaderComponent = (): React.ReactElement => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll>
        <StyledHeaderWrapper position='static'>
          <StyledToolbar>
            <StyledVodafoneLogo src={VodefoneLogo} alt='logo' />
            <StyledCallToAction>Login</StyledCallToAction>
          </StyledToolbar>
        </StyledHeaderWrapper>
      </ElevationScroll>
    </Box>
  );
};

export default HeaderComponent;
