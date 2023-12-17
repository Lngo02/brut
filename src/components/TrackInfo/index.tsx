/**
 * Render if user has successfully logged in.
 */

import { IProps } from "../../interfaces";
import { H1 } from "./styles";

const TrackInfo = ({track}:IProps) => {

    if (!track || track.id === '') return null;

    return (
        <>
            <H1>{track.name}</H1>
        </>
    )
};

export default TrackInfo;