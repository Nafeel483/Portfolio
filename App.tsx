
import React, { useEffect } from 'react';
import Root from './Src/setup';
const App = () => {

  return (
    <Root />
  );
};
export default App;


// rm -rf ios/build/; kill $(lsof -t -i:8081); react-native run-ios