import styled, { keyframes } from 'styled-components';
import { BACKGROUND_COLOR } from '../App/styles';

export const TrackDetails = styled.div`
    min-width: 68vw;
    min-height: 80vh;
    display: flex;
    justify-content: space-betwene;
    margin: 0;
    background-color: ${BACKGROUND_COLOR}
`

export const H1 = styled.h1`
    color: black;
    font-weight: bold;
    font-size: 10vh;
    padding-left: 0.5em;
    max-width: 50vw;
`

/**
 * Keyframes to make the ticker
 */
export const slide = keyframes`
    0% {
        transform: translateX(+100%)
    }
    100% {
        transform: translateX(-100%)
    }
`

/**
 * Contains the ticker
 */
export const TickerWrapper = styled.div`
    height: 3em;
    margin: 0;
    overflow: hidden;
    align-text: bottom;
`

/**
 * Ticks along the box
 */
export const TickerContent = styled.div`
    font-size: 4vh;
    display: flex;
    justify-content: space-between;
    font-style: italic;
    animation: ${slide} 8s linear infinite;
    color: black;
` 

export const RotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg)
    }
`

export const Container = styled.div`
    position: absolute;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    top: 30%;
    right: 40%;
    border-radius: 50%;
    animation: ${RotateAnimation} 10s linear infinite;
`

export const Text = styled.span`
    position: absolute;
    top: 40%;
    left: 40%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    text-transform: uppercase;
    color: black;
`

export const Circle = styled.div`
    position: sticky;
    width: 50px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid black;
`