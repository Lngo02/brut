import Select from 'react-select';
import { ISidebarProps } from '../../interfaces/SidebarProps';

const Sidebar = ({playlists}:ISidebarProps) => {
   
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
        console.log(e);
    })

    return (
        <>
            <Select
                options={playlists}
                getOptionLabel={(e:any)=>e.name}
                styles={styles}
                onChange={handleChange}
            />
        </>
    )
}

export default Sidebar;