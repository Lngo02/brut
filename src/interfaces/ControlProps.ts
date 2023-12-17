/**
 * Interface for Control component.
 */

import { ITrack } from "../types";

export interface IControlProps {
    token: string;
    tracks: string[];
    setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>; // Set State Action
}