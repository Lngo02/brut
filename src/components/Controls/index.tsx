import SpotifyPlayer from "react-spotify-web-playback";
import { IState } from "../../types";
import { IProps } from "../../interfaces";

const Controls = ({token, tracks, setTrack}: IProps) => {
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