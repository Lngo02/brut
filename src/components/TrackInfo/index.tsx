/**
 * Render if user has successfully logged in.
 */

import { IProps } from "../../interfaces";
import { H1, TickerContent, TickerWrapper } from "./styles";

const TrackInfo = ({track}:IProps) => {

    if (!track || track.id === '') return null;

    // If theres more than one
    let trackArtist = track.artists[0].name;
    if (track.artists.length > 1) {
        for (let i = 1; i < track.artists.length; i++) {
            trackArtist += ', ' + track.artists[i].name;
        }
    }
    console.log(track.artists);

    return (
        <>
            <H1>{track.name}</H1>
            <TickerWrapper>
                <TickerContent>{trackArtist}</TickerContent>
            </TickerWrapper>
        </>
    )
};

export default TrackInfo;