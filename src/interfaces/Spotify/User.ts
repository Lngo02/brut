/**
 * A Spotify User Profile
 * https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile
 */

import { IImageObject } from "./ImageObject";

export interface IUser {
    country?: string;
    display_name: string;
    email?: string;
    explicit_content?: {
        filter_enabled: boolean;
        filter_locked: boolean;
    };
    external_urls: {
        spotify: string;
    };
    followers: {
        href: string;
        total: number;
    };
    href: string;
    id: string;
    images: IImageObject[];
    product?: string;
    type: string;
    uri: string;
}