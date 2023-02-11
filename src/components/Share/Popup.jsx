/** popup modal to show attachments option */

import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './Popup.scss';
Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Popup = ({ handleFile, handleFileChange, filename }) => {

  return (
    <Modal isOpen={true} onRequestClose={handleFile} style={customStyles}>
      <div className="modalContainer">
        {console.log("pop")}
        <div className="modalTop" onClick={handleFile}>
          <FontAwesomeIcon icon={faXmark} className="closeIcon" />
        </div>
        <div className="modalCenter">
          <input
            type="file"
            id="actbtn"
            onChange={handleFileChange}
            hidden
          />
          <label htmlFor='actbtn' className='modalBtn'>Add file</label>
        </div>
        <div className="modalBottom">
          <div><b>File Attached:</b>{filename.length >0 && filename.map((file) => {return <div>{file}<br/></div>})}</div>
        </div>
      </div>
    </Modal>
  )
}

export default Popup;