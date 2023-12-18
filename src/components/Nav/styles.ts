import styled from 'styled-components';
import { BACKGROUND_COLOR } from '../App/styles';
import { ISpotify } from '../../interfaces';

export const Navbar = styled.header`
    width: 100vw;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${BACKGROUND_COLOR};
    border-bottom: 2px solid #000;
    padding: 1em 1em 1em 0;
    box-sizing: border-box;
`;

// Anything tagged with <H1> is now a <h1>, but with this styling
export const H1 = styled.h1`
    color: black;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: 0.5em;
    text-transform: uppercase;
    font-weight: bold;

    @media(max-width: 800px) {
        margin-top: 4px;
        margin-bottom: 4px;
        font-size: 2em;
    }
`;

interface IProfileProps {
    profile: ISpotify.User;
}

export const Profile = styled.image<IProfileProps>`
    border: 2px solid #000;
    background-image: ${props => `url(${props.profile?.images[0].url})`};
    width: 3em;
    height: 3em;
    background-size: cover;
    filter: grayscale(1);
`;

export const Button = styled.button`
    height: 2.5em;
    padding-right: 2em;
    padding-left: 2em;
    border: 0 0 0;
    background: black;
    color: white;
`;