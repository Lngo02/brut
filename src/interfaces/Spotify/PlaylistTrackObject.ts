/**
 * Interface for a Spotify Track.
 * https://developer.spotify.com/documentation/web-api/reference/get-track
 */

import { ImageObject } from "./ImageObject";

export interface PlaylistTrackObject {
    track: TrackObject; // TODO: Could also be an Episode Object
}

export interface TrackObject {
    album: Album[];
    uri: string; 
}

interface Album {
    album_type: 'album' | 'single' | 'compilation';
    total_tracks: number;
    available_markets: string[];
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: ImageObject[];
    name: string;
    release_date: string;
    release_date_precision: 'year' | 'month' | 'day';
    restrictions: {
        reason: 'market' | 'product' | 'explicit';
    };
    type: 'album';
    uri: string;
}