import { useEffect, useState } from 'react';
import Login from '../Login';
import TrackInfo from '../TrackInfo/index';
import { getAccessToken } from '../../auth';

function App() {
  // Check if logged in.
  const [token, setToken] = useState<string | null>(null);

  // Instantiating variables for use with spotify api auth
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  // Every time the app component renders, we check if there is the token.
  // 'Effect' refers to the function that needs to run after component render
  useEffect(() => {
    if (!token) {
      getToken();
    }
  });

  const getToken = async () => {
    // If there is a code, we can get the token.
    if (code) {
      const accessToken = await getAccessToken(clientId, code);
      setToken(accessToken);
    }
  }


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
