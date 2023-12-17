/**
 * Common Types
 */
import { ITrack } from '../types';
import { ISpotify } from './index';

/**
 * Component Props
 */
export interface IProps {
    /**
     * User Spotify Profile
     */
    profile?: ISpotify.User | null;
    /**
     * Spotify Token
     */
    token?: string;
    /**
     * Array of Uris
     */
    tracks?: string[];
    /**
     * Setting specific track beting played.
     */
    track?: ITrack | null;
    /**
     * React Set State function for setting track
     */
    setTrack?: React.Dispatch<React.SetStateAction<ITrack | null>>; // Set State Action
    /**
     * Array of playlists
     */
    playlists?: string[];
    /**
     * Function for getting tracks
     * For now, we are just passing down the things because its a small enough app.
     */
    getTracks?: any;
}