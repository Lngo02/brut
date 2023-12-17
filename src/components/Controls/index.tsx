import SpotifyPlayer from "react-spotify-web-playback";
import { IControlProps } from "../../interfaces/ControlProps";
import { IState } from "../../types";

const Controls = ({token, tracks, setTrack}: IControlProps) => {
    return (
        <>
            <SpotifyPlayer
                token={token}
                uris={tracks}
                hideCoverArt={true}
                hideAttribution={true}
                inlineVolume={false}
                callback={ (state: IState) => {
                    // Local State
                    setTrack(state.track)
                }}
            />
        </>
    )
}

export default Controls;