/** share component */

import React, { useState, useEffect, } from 'react';
import './Share.scss';
import moment from 'moment';
import { nanoid } from 'nanoid';
import Card from './Card';
import Popup from './Popup';
import Camera from './Camera';
import Mic from './Mic';
import Post from '../Post/Post';
import Voice from './Voice';

const Share = () => {
    const [filename, setFileName] = useState([]);

    /** state as an object to store data */

    const [data, setData] = useState(
        {
            id: nanoid(),
            attachment: [],
            camera: [],
            text: "",
            mic: [],
            timeStamp: moment().format()
        }
    )

    /** state as an array of objects to store data  - get data from local storage */

    const [datas, setDatas] = useState(
        () => {
            const savedDatas = localStorage.getItem('datas');
            return savedDatas ? JSON.parse(savedDatas) : [];
        }
    )

    /** states to open and close the camera, mic and attachment */

    const [isShowVideo, setIsShowVideo] = useState(false);
    const [isShowMic, setIsShowMic] = useState(false);
    const [isShowFile, setIsShowFile] = useState(false);

    /** sets data in local storage whenever [datas] changes */

    useEffect(() => localStorage.setItem('datas', JSON.stringify(datas)), [datas]);

    /** function to add text messages - update the state with the input text value */

    const handleChange = (e) => setData((previousState) => { return { ...previousState, text: e.target.value } })

    /** function to add attachments - update the state with the attached file*/

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFileName([...filename, file.name])
        getBase64(file).then(base64 => { setData({ ...data, attachment: [...data.attachment, base64] }) });
    }

    /** function to get the base64 stirng of attachments */

    const getBase64 = (attachment) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(attachment);
        });
    }

    /** functions to open and close attachments, webcam and mic */

    const handleCam = () => {
        setIsShowVideo(!isShowVideo);
    }

    /** function to delete the entire post - deletes after posting */

    const deletePost = (id1) => setDatas(datas.filter((data) => data.id !== id1));

    /** function to post the send the post */

    const handleSubmit = () => {
        if (!data.text && data.attachment.length === 0 && data.camera.length === 0 && data.mic.length === 0) {
            alert("Empty messages are not allowed.");
        }
        else {
            setDatas([data, ...datas]);
            localStorage.setItem('datas', JSON.stringify(datas)); /*sets data in local storage*/
            setData(
                {
                    id: nanoid(),
                    timeStamp: moment().format(),
                    attachment: [],
                    camera: [],
                    text: "",
                    mic: [],
                }
            )
            setFileName([])
        }
    }

    return (
        <>
            <Card
                data={data}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isShowFile={isShowFile}
                setIsShowFile={setIsShowFile}
                filename={filename}
                handleCam={handleCam}
                isShowMic={isShowMic}
                setIsShowMic={setIsShowMic}
            />

            {/* conditionally renders a react modal that shows attach files option */}
            {isShowFile &&
                <Popup
                    handleFile={() => setIsShowFile(!isShowFile)}
                    handleFileChange={handleFileChange}
                    filename={filename}
                />
            }

            {/* conditionally renders the webcam component to capture photo */}

            {isShowVideo && <Camera handleCam={handleCam} setData={setData} />}

            {/* condittionally renders the media recorder component to record the audio*/}

            {isShowMic &&
                // <Mic handleMic={() => setIsShowMic(!isShowMic)} setData={setData} />
                <Voice setData={setData}/>
            }

            {/* renders the post component to show the messages */}
            {datas.length > 0 &&
                datas.map(
                    (data) => <Post data={data} handleDelete={deletePost} key={data.id} />
                )
            }

        </>
    );
}

export default Share;