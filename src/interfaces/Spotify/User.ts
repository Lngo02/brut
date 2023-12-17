/**
 * A Spotify User Profile
 * https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile
 */

import { ImageObject } from "./ImageObject";

export interface User {
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
    images: ImageObject[];
    product?: string;
    type: string;
    uri: string;
}