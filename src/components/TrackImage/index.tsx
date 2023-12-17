import { IProps } from "../../interfaces";
import { Box, Image } from "./styles";

const TrackImage = ({track}: IProps) => {
    
    if (!track || !track.image) return <Box/>
    
    return (
        <>
            <Box>
                <Image image={track.image}/> 
            </Box>
        </>
    )
}

export default TrackImage;