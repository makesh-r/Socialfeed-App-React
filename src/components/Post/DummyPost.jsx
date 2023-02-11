import React from 'react'
import './Post.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const DummyPost = ({ name, profession, date, profilePic, text }) => {
    return (
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postProfile">
                        <div className="postProfileImgHolder">
                            <img src={profilePic} alt="" className="postProfileImg" />
                        </div>
                        <div className="postProfileName">
                            <span className="Name"><b>{name}</b></span>
                            <span className="Profession">{profession}</span>
                            <span className="date">{date}</span>
                        </div>
                    </div>
                    <div className="postEdit">
                        <FontAwesomeIcon icon={faTrash} className="postEditIcon" />
                    </div>

                </div>
                <div className="postBottom">
                    <div className="postTextContainer">
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DummyPost
