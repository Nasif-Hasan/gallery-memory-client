import React from 'react';

const ReviewRow = ({ rev, handleDelete, handleStatusUpdate }) => {
    console.log(rev);
    const { _id, serviceName, customer, email, photoURL, review, status } = rev

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>

            <td>
                {serviceName}
            </td>

            <td>{review}</td>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-md text-green-600">{status ? status : 'Update'}</button>
            </th>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-md text-red-600 font-bold">X</button>
                </label>
            </th>
        </tr>
    );
};

export default ReviewRow;