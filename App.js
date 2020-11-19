import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './Components/Home';
import MyText from './Components/MyText'

export default function App() {
  return (
  <Router>
    <Stack key="root">

      <Scene 
      key="home" 
      component={Home} 
      title="Home"
      initial
      />

      <Scene 
      key="text" 
      component={MyText} 
      title="Text"
      />

    </Stack>
  </Router>
  );
}


