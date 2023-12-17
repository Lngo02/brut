import styled, { keyframes } from 'styled-components';

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
    align-text: bototm;
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