import { redirectToAuthCodeFlow } from "../../auth";
import { IProps } from "../../interfaces";
import { Profile, Button, H1, Navbar } from "./styles";

const Nav = ({profile}:IProps) => {

    const clientId: string = import.meta.env.VITE_CLIENT_ID;

    const handleClick = async () => {
        await redirectToAuthCodeFlow(clientId);
    }

    return (
        <>
            <Navbar>
                <H1>Brut</H1>
                {!profile ? (
                    <Button onClick={handleClick}>Login</Button>
                ) : (
                    // Render image of profile
                    // Profile is defined as a styled <img>
                    <Profile
                        profile={profile}
                    />
                )}
            </Navbar>
        </>
    )
}

export default Nav;