import React, {useState, useRef} from 'react'
import './Share.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Webcam from 'react-webcam';
import Modal from 'react-modal';
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

const videoConstraints = {
    width: 300,
    height: 300,
}

const Camera = ({ handleCam, setData }) => {

    const [imgsrc, setImgSrc] = useState("");
    const [photo, setPhoto] = useState(true);

    /** for capturing photo */
    const videoElement = useRef(null);

    /** takes picture using webcam and save it in the state */
    const capturePhoto = () => {
        setImgSrc(videoElement.current.getScreenshot());
        setPhoto(false)
    }

    const savePhoto = () => {
        setData(
            (previousState) => {
                return { ...previousState, camera: [...previousState.camera, imgsrc] }
            }
        )
        setPhoto(true)
    }

    return (
        <Modal isOpen={true} onRequestClose={handleCam} style={customStyles}>
            {console.log("camera")}
            {photo ?
                <div className='cameraHolder'>
                    <FontAwesomeIcon icon={faXmark} className="closeMic" onClick={handleCam} />
                    <Webcam audio={false} ref={videoElement} videoConstraints={videoConstraints} screenshotFormat={'image/jpeg'} />
                    <div className="cameraBtnHolder">
                        <button onClick={capturePhoto} className="cameraBtn">Take photo</button>
                    </div>
                </div>
                :
                <div className='cameraHolder'>
                    <img src={imgsrc} alt="" className='captured-image' />
                    <div className="cameraBtnHolder">
                        <button className="cameraBtn" onClick={savePhoto}>Save</button>
                        <button className="cameraBtn" onClick={() => setPhoto(true)}>Retake</button>
                    </div>
                </div>

            }
        </Modal>
    )
}

export default Camera
