/** left sidebar header component */

import './SideBar.scss';
import '../App.scss';
import profilePic from '../profilePic.jpg';

const SideBarHeader = () => {
    return (
        <div className='sideBarProfile'>
            <div className="profileImgHolder">
                <img src={profilePic} alt="" className="profileImg" />
            </div>
            <div className="profileName">
                <span><b>Makesh</b></span>
            </div>
        </div>
    )
}

export default SideBarHeader;
