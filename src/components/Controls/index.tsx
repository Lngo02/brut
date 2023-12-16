import SpotifyPlayer from "react-spotify-web-playback";
import { IControlProps } from "../../interfaces/ControlProps";

const Controls = ({token, tracks}: IControlProps) => {
    return (
        <>
            <SpotifyPlayer
                token={token}
                uris={tracks}
            />
        </>
    )
}

export default Controls;