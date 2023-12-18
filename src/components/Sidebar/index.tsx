import Select from 'react-select';
import { ISidebarProps } from '../../interfaces/SidebarProps';
import Controls from '../Controls';
import TrackImage from '../TrackImage';
import { ControlContainer } from './styles';

const Sidebar = ({token, tracks, playlists, getTracks, track, setTrack}:ISidebarProps) => {
   
    // Style the react-select
    const styles = {
        menuList: (styles: any) => {
            return {
                ...styles,
                maxHeight: '25vh'
            };
        },
        option: (styles: any, {isFocused}:{isFocused:any}) => {
            return {
                ...styles,
                backgroundColor: isFocused ? '#999999' : null,
                color: '#333333'
            }   
        }
    }

    const handleChange = ((e:any) => {
        getTracks(e.id);
    })

    return (
        <>
            <ControlContainer>
                <Controls
                    token={token}
                    tracks={tracks}
                    setTrack={setTrack}
                />
                <Select
                    options={playlists}
                    menuPlacement='auto'
                    getOptionLabel={(e:any)=>e.name}
                    styles={styles}
                    onChange={handleChange}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                        ...theme.colors,
                        primary: 'black',
                        primary25: 'grey',
                        primary50: 'grey',
                        primary75: 'black',
                        neutral0: 'white',
                        neutral5: 'white',
                        neutral10: 'white',
                        neutral20: 'black',
                        neutral30: 'black',
                        neutral40: 'white',
                        neutral50: 'black',
                        neutral60: 'black',
                        neutral70: 'white',
                        neutral80: 'black',
                        neutral90: 'white',
                        },
                    })}
                />
            </ControlContainer>
            <TrackImage
                track={track}
            />
        </>
    )
}

export default Sidebar;