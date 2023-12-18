/**
 * Render if user has successfully logged in.
 */

import { IProps } from "../../interfaces";
import { Circle, Container, H1, TickerContent, TickerWrapper, Text, TrackDetails } from "./styles";

const TrackInfo = ({track}:IProps) => {

    if (!track || track.id === '') return null;

    // Main Artist name
    const trackArtistRepeated = track.artists[0].name.length > 10 ? track.artists[0].name : (track.artists[0].name + ' ').repeat(Math.ceil(10/track.artists[0].name.length));

    // If theres more than one
    let trackArtist = track.artists[0].name;
    if (track.artists.length > 1) {
        for (let i = 1; i < track.artists.length; i++) {
            trackArtist += ', ' + track.artists[i].name;
        }
    }

    return (
        <>
            <TrackDetails>
                <Container>
                    <Circle>
                        {trackArtistRepeated.split('').map((char:string, index:number) => (
                            <Text
                                key={index}
                                style={{
                                    transform: `rotate(${(360 / trackArtistRepeated.length) * index}deg) translate(0,-80px) rotate(-${(360 / trackArtistRepeated.length) * index}deg)`,
                                }}>
                                {char}
                            </Text>
                        ))}
                    </Circle>
                </Container>
                <H1>{track.name}</H1>
            </TrackDetails>
            <TickerWrapper>
                <TickerContent>{trackArtist}</TickerContent>
            </TickerWrapper>
        </>
    )
};

export default TrackInfo;