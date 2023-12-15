import { useEffect, useState } from 'react';
import Login from '../Login';
import TrackInfo from '../TrackInfo/index';
import { getAccessToken } from '../../auth';
import axios from 'axios';
import Nav from '../Nav';
import { IUser } from '../../interfaces/User';

function App() {
  // Check if logged in.
  const [token, setToken] = useState<string | null>(null);
  // Profile State (For the User image)
  const [profile, setProfile] = useState<IUser | null>(null);

  // Instantiating variables for use with spotify api auth
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  // Every time the app component renders, we check if there is the token.
  // 'Effect' (or Side Effects) refers to the function that needs to run after component render
  // E.g. fetching data, directly updating the DOM, timers
  // userEffect(<function>, <dependency>)
  // No dependency passed => runs on every render
  // Empty array [] dependency => runs only on the first render
  // [prop, state] => Runs on the first render and any time any dependency value changes
  // So, we only want this to run if token has changed (in case token changes after first time)
  useEffect(() => {
    if (!token) {
      getToken();
    }
    if (token) {
      getUserInfo();
    }
  }, [token]);

  const getToken = async () => {
    // If there is a code, we can get the token.
    if (code) {
      const accessToken = await getAccessToken(clientId, code);
      setToken(accessToken);
      console.log(accessToken);
    }
  }

  // Get the Users Info
  const getUserInfo = async () => {
    // Axios Response with data of type IUser
    const { data } =  await axios.get<IUser>('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    });
    setProfile(data);
  }

  if (!token) {
    return (
      <>
        <Login/>
      </>
    );
  } else {
    return (
      <>
        <Nav 
          profile={profile}
        />
        <TrackInfo/>
      </>
    )
  }
}

export default App;
