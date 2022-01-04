import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import './TD.css'

const TD = ({ dt }) => {
    const { _id, first_name, last_name, email, gender, ip_address } = dt;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteRow = id => {
        const url = `https://whispering-savannah-60706.herokuapp.com/tablesData/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    handleClose()
                }
            })

    }
    return (
        <tr>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{ip_address}</td>
            <Button variant="primary" onClick={handleShow}>
                Delete
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='message1'>Are You Sure</Modal.Title>
                </Modal.Header>
                <Modal.Body className='message2'>Do you really want to delete these records? This process cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={() => handleDeleteRow(_id)} variant="primary" >
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>
    );
};

export default TD;