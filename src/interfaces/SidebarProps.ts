/**
 * Interface for the Sidebar component props.
 */

import React from "react";
import { ITrack } from "../types";

export interface ISidebarProps {
    token: string;
    tracks: string[];
    playlists: string[];
    getTracks: any; // For now, we are just passing down the things because its a small enough app.
    track: ITrack | null;
    setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>; // Set State Action
}