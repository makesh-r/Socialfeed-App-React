/** options in the left side bar */

import './ListItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListItem = ({ icon, text, value}) => {
    return (
        <div className="sideBarListItem">
            <div className='listIconContainer'><FontAwesomeIcon icon={icon} className='sideBarIcon' /></div>
            <div className='listTextContainer'><span className='sideBarListText'>{text}</span></div>
            <div className="listBadgeContainer"><span className="sideBarListBadge">{value}</span></div>
        </div>
    );
}

export default ListItem;