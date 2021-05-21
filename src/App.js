import React from 'react';
import { theme } from './theme';
import { Box, Heading, Grommet } from 'grommet';
import { AppBar } from './components/AppBar';
import { NavButtonBox } from './components/NavButtonBox';
import { NavButton } from './components/NavButton';
import './styles.css';

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <NavButtonBox>
            <Heading level='2' margin='none' className='squada-one'>PANTRY POINT</Heading>
          </NavButtonBox>
          <NavButtonBox>
            <NavButton href=''>MAP</NavButton>
            <NavButton href=''>REGISTER</NavButton>
            <NavButton href=''>ABOUT</NavButton>
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
