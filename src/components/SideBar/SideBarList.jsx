/** left sidebarlist component */

import '../SideBar/SideBar.scss';
import '../App.scss';
import ListItem from '../ListItem/ListItem';
import { Link, NavLink } from 'react-router-dom';

const SideBarList = ({ check, lis, sliceValue }) => {

  const length = check ? sliceValue : lis.length;
  return (
    <div className="sideBarList">
      {
        lis.slice(0, length).map(
          (lis) => {
            return (
              <Link to={lis.path} className="side-link">
                <ListItem text={lis.text} icon={lis.icon} value={lis.value} key={lis.id} />
              </Link>
            )
          }
        )
      }
    </div>
  )
}

export default SideBarList;
