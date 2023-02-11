/** see more button in the left side bar */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import '../SideBar/SideBar.scss';
import '../App.scss';

const SideBarButton = ({ check, handleCheck }) => {
    return(
        <div className='sideBarButtonHolder'>
          <button className='sideBarButton' onClick={handleCheck}>
            <b>{check? "See More" : "See Less"}</b>
            <FontAwesomeIcon icon={check ? faChevronDown:faChevronUp} className="btnIcon"/>
          </button>
        </div>
    );
}

export default SideBarButton;