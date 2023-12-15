import { redirectToAuthCodeFlow } from "../../auth";
import { IUser } from "../../interfaces/User";

interface NavProps {
    profile?: IUser | null; // User Profile
}

const Nav = ({profile}:NavProps) => {

    const clientId = import.meta.env.VITE_CLIENT_ID;

    const handleClick = async () => {
        await redirectToAuthCodeFlow(clientId);
    }

    return (
        <>
            <h1>Brut</h1>
            {!profile ? (
                <button onClick={handleClick}>Login</button>
            ) : (
                // Render image of profile
                <img src={profile.images[0].url}></img>
            )}
            
        </>
    )
}

export default Nav;