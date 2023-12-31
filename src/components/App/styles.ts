import styled from 'styled-components';

export const BACKGROUND_COLOR:string = '#fff';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 87vh;
    width: 100vw;
    overflow: hidden;
    background-color: ${BACKGROUND_COLOR};

    @media (max-width: 800px) {
        flex-direction: column;
        max-height: 100vh;
    }
`;

// Track being played
export const TrackViewer = styled.div`
    diplay: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${BACKGROUND_COLOR};
    min-width: 70vw;

    @media (max-width: 800px) {
        font-size: 4vh;
        width: 90vw;
        height: 25vh;
    }
`;

// Side - Select track
export const Side = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 30vw;
    position: sticky;
    border-left: 2px solid #000;
    background: ${BACKGROUND_COLOR};

    @media (max-width: 800px) {
        font-size: 2vh;
        min-width: 95vw;
        height: 30vh;
        padding: 2vw 2vw;
        border-left: 0px;
    }
`;