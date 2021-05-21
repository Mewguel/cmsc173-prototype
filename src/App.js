import React from 'react';
import { theme } from './theme';
import { Box, Heading, Grommet } from 'grommet';
import { AppBar } from './components/AppBar';
import { NavButtonBox } from './components/NavButtonBox';
import { NavButton } from './components/NavButton';

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <NavButtonBox>
            <Heading level='2' margin='none'>PANTRY POINT</Heading>
          </NavButtonBox>
          <NavButtonBox>
            <NavButton>MAP</NavButton>
            <NavButton>REGISTER</NavButton>
            <NavButton>ABOUT</NavButton>
          </NavButtonBox>
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            app body
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
