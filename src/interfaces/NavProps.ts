/**
 * Interface for the Nav Component Props
 */

import { IUser } from "./Spotify/User";

export interface INavProps {
    profile?: IUser | null; // User Profile
}
