import './Share.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useReactMediaRecorder } from "react-media-recorder";
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

const Mic = ({ handleMic, setData,}) => {

    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true });

    const captureAudio = async () => {
        const text = await new Response(mediaBlobUrl).text();
        setData(
            (previousState) => {
                return { ...previousState, mic: [...previousState.mic, text] }
            }
        )
    };

    return (
        <Modal isOpen={true} onRequestClose={handleMic} style={customStyles}>
            <div className='micHolder'>
                {console.log("mic")}
                <FontAwesomeIcon icon={faXmark} className="closeMic" onClick={handleMic} />
                <p><b>Audio status:</b>{status}</p>
                <audio src={mediaBlobUrl} controls className='audioHolder' />
                <div className="micBtnHolder">
                    <button onClick={startRecording} className="micBtn">Start</button>
                    <button onClick={stopRecording} className="micBtn">Stop</button>
                    <button onClick={captureAudio} className="micBtn">Save</button>
                    {/* <button onClick={deleteAudio} className="cameraBtn">Delete</button> */}
                </div>
            </div>
        </Modal>
    )
}

export default Mic
