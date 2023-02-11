import React from 'react'
import './Share.scss';
import profilePic from '../profilePic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faCamera, faMicrophone, faPaperPlane, } from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize';

const Card = ({ data, handleChange, handleSubmit, isShowFile, setIsShowFile, filename, handleCam, isShowMic, setIsShowMic }) => {

    return (

        <div className="shareContainer">
            {console.log("card")}
            <div className="shareWrapper">
                <div className="shareTop">
                    <div className="shareImgHolder">
                        <img src={profilePic} alt="" className='shareImg' />
                    </div>
                    <div className="shareTextHolder">
                        <form onSubmit={(e) => { e.preventDefault() }}>
                            <div className="shareCenter">
                                <TextareaAutosize
                                    placeholder="Share something here.."
                                    className='shareText'
                                    value={data.text}
                                    onChange={handleChange}
                                    minRows={1}
                                    maxRows={6}
                                />
                                <FontAwesomeIcon icon={faPaperPlane} className="send-icon" onClick={handleSubmit} />
                            </div>

                        </form>
                    </div>
                </div>
                <div className="shareBottom">
                    <div className="shareFiles">
                        <div className='openAttachment' onClick={() => setIsShowFile(!isShowFile)}>
                            <FontAwesomeIcon icon={faPaperclip} className='shareFilesIcon' />
                            <span className='shareFilesText'>Any attachment</span>
                        </div>
                        {filename.length > 0 &&
                            filename.map((file) => { return <div className='attachedFiles1'>{file}<br /></div> })
                        }
                    </div>
                    <div className="shareFiles">
                        <div className="openCamera " onClick={handleCam}>
                            <FontAwesomeIcon icon={faCamera} className='shareFilesIcon' />
                            <span className='shareFilesText'>Capture it</span>
                        </div>
                        {data.camera.length > 0 &&
                            data.camera.map((image) => { return <div><img className='previewImage' src={image} alt="" /><br /></div> })
                        }
                    </div>
                    <div className="shareFiles">
                        <div className="openMic" onClick={() => setIsShowMic(!isShowMic)}>
                            <FontAwesomeIcon icon={faMicrophone} className='shareFilesIcon' />
                            <span className='shareFilesText'>Say it</span>
                        </div>
                        {data.mic.length > 0 &&
                            data.mic.map((audio) => { return <div><audio src={audio} controls className='audio1' /><br /></div> })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
