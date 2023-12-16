/**
 * Interface for a Spotify Track.
 * https://developer.spotify.com/documentation/web-api/reference/get-track
 */

import { IImageObject } from "./ImageObject";

export interface IPlaylistTrackObject {
    track: ITrackObject; // TODO: Could also be an Episode Object
}


export interface ITrackObject {
    album: IAlbum[];
    uri: string; 
}

interface IAlbum {
    album_type: 'album' | 'single' | 'compilation';
    total_tracks: number;
    available_markets: string[];
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: IImageObject[];
    name: string;
    release_date: string;
    release_date_precision: 'year' | 'month' | 'day';
    restrictions: {
        reason: 'market' | 'product' | 'explicit';
    };
    type: 'album';
    uri: string;
}