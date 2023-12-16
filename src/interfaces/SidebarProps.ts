/**
 * Interface for the Sidebar component props.
 */

export interface ISidebarProps {
    token: string | null;
    playlists: Array<string>;
    getTracks: any; // For now, we are just passing down the things because its a small enough app.
}