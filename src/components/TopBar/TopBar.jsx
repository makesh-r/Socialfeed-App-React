/** topbar component */

import '../App.scss';
import './TopBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'

const TopBar = ({ showHam }) => {
    return (
        <div className="topBarContainer">
            <div className="topBarWrapper">
                <div className="topBarLeft">
                    <div className='topBarBack'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div className='topBarText1'>
                        <span>Dashboard</span>
                    </div>
                    <div className='topBarForward'>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className='topBarText2'>
                        <span><b>SocialFeed</b></span>
                    </div>
                </div>
                <div className='topBarRight'onClick={showHam}>
                    <FontAwesomeIcon icon={faBars} className="hamIcon"/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;