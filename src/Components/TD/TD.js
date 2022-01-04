import React from 'react';

const TD = ({ dt }) => {
    const { _id, first_name, last_name, email, gender, ip_address } = dt;

    const handleDeleteRow = id => {
        const url = `http://localhost:5000/data/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Data has Deleted');
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
            <button onClick={() => handleDeleteRow(_id)} className=" btn bg-info border-0">Delete</button>
        </tr>
    );
};

export default TD;