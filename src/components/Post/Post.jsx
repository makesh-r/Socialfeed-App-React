/** post component to show the messages */

import React, { useState } from 'react';
import Moment from 'react-moment';
import './Post.scss'
import profilePic from '../profilePic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Warn from './Warn';

const Post = ({ data, handleDelete }) => {

    const [warn, setWarn] = useState(false)
    const handleWarn = () => {
        setWarn(!warn);
    }

    return (
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postProfile">
                        <div className="postProfileImgHolder">
                            <img src={profilePic} alt="" className="postProfileImg" />
                        </div>
                        <div className="postProfileName">
                            <span className="Name"><b>Makesh</b></span>
                            <span className="Profession">ASE</span>
                            <span className="date"><Moment fromNow>{data.timeStamp}</Moment></span>
                        </div>
                    </div>
                    <div className="postEdit">
                        <FontAwesomeIcon icon={faTrash} className="postEditIcon" onClick={handleWarn} />
                    </div>
                </div>
                {warn &&
                    <Warn
                        handleWarn={handleWarn}
                        handleDelete={handleDelete}
                        id={data.id}
                    />
                }
                <div className="postBottom">
                    {/* render text messages */}
                    {data.text.length > 0 &&
                        <div className="postTextContainer">{data.text}</div>
                    }
                    {/* render attachments */}
                    {data.attachment.length > 0 &&
                        data.attachment.map(
                            (files, index) => <div className='postImageContainer' key={index}><iframe src={files} alt="" className='postAttachment' /></div>
                        )
                    }
                    {/* render pictures taken using webcamera */}
                    {data.camera.length > 0 &&
                        data.camera.map(
                            (images, index) => <div className='postImageContainer' key={index}><img src={images} alt="" className='postImage' /></div>
                        )
                    }
                    {/* render audio messages */}
                    {data.mic.length > 0 &&
                        data.mic.map(
                            (audio, index) => <div className='postAudioContainer' key={index}><audio src={audio} controls className='audio' /></div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Post;