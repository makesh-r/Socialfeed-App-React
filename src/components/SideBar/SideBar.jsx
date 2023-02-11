/** left side bar component */

import './SideBar.scss';
import '../App.scss';
import { useState } from 'react';
import SideBarButton from '../Button/SideBarButton';
import SideBarList from './SideBarList';
import SideBarHeader from './SideBarHeader';
import SideBarText from './SideBarText';
import { lis, lis1 } from '../Data';

function SideBar({ side }) {

  /** states and functions to toggle the left sidebar seemore button */

  const [check, setCheck] = useState(true);
  const [check1, setCheck1] = useState(true);
  const handleCheck = () => {
    check ? setCheck(false) : setCheck(true)
  }
  const handleCheck1 = () => {
    check1 ? setCheck1(false) : setCheck1(true)
  }
  return (
    <div className="sideBarContainer" id={side}>
      <div className="sideBarWrapper">
        <SideBarHeader />
        <SideBarList check={check} lis={lis} sliceValue={5} />
        <SideBarButton check={check} handleCheck={handleCheck} />
        <SideBarText />
        {/* <SideBarList check={check1} lis={lis1} sliceValue={3} /> */}
        {/* <SideBarButton check={check1} handleCheck={handleCheck1} /> */}
      </div>
    </div>
  )
}

export default SideBar;