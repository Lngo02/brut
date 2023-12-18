import styled from 'styled-components';
import Hero from '../../assets/brutLogin.jpg';
import { BACKGROUND_COLOR } from '../App/styles';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 87vh;
    margin: 0px;
    background: ${BACKGROUND_COLOR};
    background-image: url(${Hero});
    background-position: center;
    bacgkround-repeat: no-repeat;
    backgorund-size: cover;
    overflow: hidden;
`;

export const Right = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
`;

export const Left = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const P = styled.p`
    margin-top: 1em;
    margin-bottom: 2em;
    margin-left: 2em;
    margin-right: 1em;
    color: white;
`;