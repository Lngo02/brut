import { redirectToAuthCodeFlow } from "../../auth";
import { IUser } from "../../interfaces/User";

interface IProps {
    profile?: IUser; // User Profile
}

const Nav = ({profile}:IProps) => {

    const clientId: string = import.meta.env.VITE_CLIENT_ID;

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