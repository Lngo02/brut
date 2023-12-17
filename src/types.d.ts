/**
 * Declaration file
 */

// https://github.com/gilbarbara/react-spotify-web-playback/blob/main/src/types/spotify.ts#L18
export interface ITrack {
    artists:[{
        name: string,
        uri: string,
    }];
    durationMs: number;
    id: string;
    image: string;
    name: string;
    uri: string;
}

/**
 * https://github.com/gilbarbara/react-spotify-web-playback/blob/main/src/types/common.ts#L139C1-L162C2
 */
export interface IState {
    currentDeviceId: string;
    deviceId: string;
    devices: SpotifyDevice[];
    error: string;
    errorType: ErrorType | null;
    isActive: boolean;
    isInitializing: boolean;
    isMagnified: boolean;
    isPlaying: boolean;
    isSaved: boolean;
    isUnsupported: boolean;
    needsUpdate: boolean;
    nextTracks: SpotifyTrack[];
    playerPosition: 'bottom' | 'top';
    position: number;
    previousTracks: SpotifyTrack[];
    progressMs: number;
    repeat: RepeatState;
    shuffle: boolean;
    status: Status;
    track: SpotifyTrack;
    volume: number;
}