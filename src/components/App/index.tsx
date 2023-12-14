import { useState } from 'react';
import Login from '../Login';
import TrackInfo from '../TrackInfo/index';

function App() {
  // Check if logged in.
  const [token, setToken] = useState<string | null>(null);

  if (!token) {
    return (
      <>
        <Login></Login>
      </>
    );
  } else {
    return (
      <>
        <TrackInfo></TrackInfo>
      </>
    )
  }
}

export default App;
