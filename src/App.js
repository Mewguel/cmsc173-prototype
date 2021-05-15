import React from 'react';
import { Grommet } from 'grommet';

const theme = {
    global: {
        font: {
            family: 'Arial',
            size: '100px',
            height: '100px',
        },
    },
};

function App() {
  return (
    <Grommet theme={theme}>
      <header className="App-header">
        Hello World
      </header>
    </Grommet>
  );
}

export default App;