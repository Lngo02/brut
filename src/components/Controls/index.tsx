import SpotifyPlayer from "react-spotify-web-playback";
import { IState } from "../../types";
import { IProps } from "../../interfaces";
import { useState } from "react";

const Controls = ({token, tracks, setTrack}: IProps) => {
    
    /**
     * Boolean state play, that indicates if somethin is played.
     * Controls playblack. 
     * Allows autoplay when we click on a playlist.
     */
    const [play, setPlay] = useState(true);
    
    return (
        <>
            <SpotifyPlayer
                token={token}
                play={play}
                uris={tracks}
                hideCoverArt={true}
                hideAttribution={true}
                inlineVolume={false}
                layout={'compact'}
                callback={ (state: IState) => {
                    // Local State
                    setTrack(state.track);
                    if (state.isPlaying) {
                        setPlay(true);
                    }
                }}
            />
        </>
    )
}

export default Controls;