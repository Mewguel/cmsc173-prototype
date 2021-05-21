import React from 'react';
import { theme } from './theme';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>PANTRY POINT</Heading>
          <Box direction='row' justify='between' margin='justify'>
            <Button onClick={() => {}}>MAP</Button>
            <Button onClick={() => {}}>REGISTER</Button>
            <Button onClick={() => {}}>ABOUT</Button>
          </Box>
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
