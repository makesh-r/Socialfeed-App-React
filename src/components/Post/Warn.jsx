import React from 'react'
import Modal from 'react-modal';
import './Post.scss'

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

const Warn = ({ handleWarn, handleDelete, id }) => {
    return (
       <Modal isOpen={true} onRequestClose={handleWarn} style={customStyles}>
        <div className="warn-container">
            <div className="warn-top">
                <span>Do you want to delete this post?</span>
            </div>
            <div className="warn-bottom">
                <button className='warn-button'onClick={() => { handleDelete(id) }}>Yes</button>
                <button className='warn-button' onClick={handleWarn}>No</button>
            </div>
        </div>
       </Modal>
    )
}

export default Warn
