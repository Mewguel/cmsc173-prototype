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
          <Heading level='3' margin='none'>PANTRY POINT</Heading>
          <NavButtonBox>
            <NavButton onClick={() => {}}>MAP</NavButton>
            <NavButton onClick={() => {}}>REGISTER</NavButton>
            <NavButton onClick={() => {}}>ABOUT</NavButton>
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
