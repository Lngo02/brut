import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;

// Track being played
export const TrackViewer = styled.div`
    diplay: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    min-width: 70vw;
`;

// Side - Select track
export const Side = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 30vw;
    position: sticky;
    border-left: 2px solid #000;
    padding: 0px 10px;
    background: #fff;
`;