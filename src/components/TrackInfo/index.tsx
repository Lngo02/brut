/**
 * Render if user has successfully logged in.
 */

import { IProps } from "../../interfaces";
import { H1, TickerContent, TickerWrapper } from "./styles";

const TrackInfo = ({track}:IProps) => {

    if (!track || track.id === '') return null;

    return (
        <>
            <H1>{track.name}</H1>
            <TickerWrapper>
                <TickerContent>track artist</TickerContent>
            </TickerWrapper>
        </>
    )
};

export default TrackInfo;