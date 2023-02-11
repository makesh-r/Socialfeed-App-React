/** data file that stores the data of left sidebar */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faFilePen, faUser, faUsers, faIdCard, faChevronDown, faTrash, faBrain } from '@fortawesome/free-solid-svg-icons'
import { nanoid } from 'nanoid';

export const lis = [
    {
        id: nanoid(),
        text: 'Buzz Home',
        icon: faFileLines,
        value: 5,
        path: '/buzhome'
    },
    {
        id: nanoid(),
        text: 'My Buzz Posts',
        icon: faFileLines,
        value: 6,
        path: '/buzz'
    },
    {
        id: nanoid(),
        text: 'Draft Posts',
        icon: faFilePen,
        value: 7,
        path: '/draft'
    },
    {
        id: nanoid(),
        text: 'My Followers',
        icon: faUser,
        value: 8,
        path: '/'
    },
    {
        id: nanoid(),
        text: 'I am Following',
        icon: faUser,
        value: 9,
        path: '/'
    },
    {
        id: nanoid(),
        text: 'My Teams',
        icon: faUsers,
        value: 10,
        path: '/'
    },
    {
        id: nanoid(),
        text: 'My Response',
        icon: faIdCard,
        value: 11,
        path: '/'
    },
    {
        id: nanoid(),
        text: 'Friend Requests',
        icon: faUsers,
        value: 21,
        path: '/'
    },
    {
        id: nanoid(),
        text: 'Bin',
        icon: faTrash,
        value: 17,
        path: '/'
    },
    {
        id: nanoid(),
        text: 'Outbox',
        icon: faIdCard,
        value: 19,
        path:'/'

    },
];

export const lis1 = [
    {
        id: nanoid(),
        text: 'My Artefacts',
        icon: faIdCard,
        value: 12
    },
    {
        id: nanoid(),
        text: 'New Modules',
        icon: faIdCard,
        value: 13
    },
    {
        id: nanoid(),
        text: 'New Skills',
        icon: faBrain,
        value: 14
    },
    {
        id: nanoid(),
        text: 'My Artefacts',
        icon: faIdCard,
        value: 12
    },
    {
        id: nanoid(),
        text: 'New Modules',
        icon: faIdCard,
        value: 13
    },
    {
        id: nanoid(),
        text: 'New Skills',
        icon: faIdCard,
        value: 14
    }
];


// useEffect(
    //     () => {
    //         const datas = JSON.parse(localStorage.getItem('datas'));
    //         if (datas) {
    //             setDatas(datas);
    //         }
    //     },
    //     []
    // );

    // isShowMic ? stopRecording() : startRecording();
        // isShowMic ? captureAudio():

            // reader.onerror = error => reject(error);


            // const capturePhoto = useCallback(
            //     async () => {
            //         const imagesrc = videoElement.current.getScreenshot();
            //         setData(
            //             (previousState) => {
            //                 return { ...previousState, camera: [...previousState.camera, imagesrc] }
            //             }
            //         )
            //     },
            //     [videoElement]
            // )
            // const captureAudio = async () => {
            //     const text = await new Response(mediaBlobUrl).text();
            //     setData(
            //         (previousState) => {
            //             return { ...previousState, mic: [...previousState.mic, text] }
            //         }
            //     )
            // };

            // <DummyPost name="Jane" profession="Artist" date="15 hours ago" profilePic={Jane} text="hello....."/>
            // <DummyPost name="Jhon Doe" profession="Blogger" date="a day ago" profilePic={profilePic} text="howdy..."/>
            // <DummyPost name="Jane" profession="Artist" date="2 days ago" profilePic={Jane} text="Hi all ..."/>
            // <DummyPost name="Jhon Doe" profession="Blogger" date="3 days ago" profilePic={profilePic} text="hi.. this is jhon doe"/>



             // function handleAudioStop(data) {
    //     console.log(data)
    //     setAudioDetails(data);
    //     setData(
    //         (previousState) => {
    //             return { ...previousState, mic: [...previousState.mic, audioDetails.url] }
    //         }
    //     )
    // }
    // function handleAudioUpload(file) {
    //     console.log(file);
    // }
    // function handleCountDown(data) {
    //     console.log(data);
    // }

    // function handleReset() {
    //     const reset = {
    //         url: null,
    //         blob: null,
    //         chunks: null,
    //         duration: {
    //             h: 0,
    //             m: 0,
    //             s: 0
    //         }
    //     };
    //     setAudioDetails(reset);
    // }



    // <Recorder
                //     record={true}
                //     title={"New recording"}
                //     audioURL={audioDetails.url}
                //     showUIAudio
                //     handleAudioStop={data => handleAudioStop(data)}
                //     handleAudioUpload={data => handleAudioUpload(data)}
                //     handleCountDown={data => handleCountDown(data)}
                //     handleReset={() =>handleReset()}
                //     mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
                // />



                // const [audioDetails, setAudioDetails] = useState(
                //     {
                //         url: null,
                //         blob: null,
                //         chunks: null,
                //         duration: {
                //             h: 0,
                //             m: 0,
                //             s: 0
                //         }
                //     }
                // )
