import React, { useState } from 'react'
import trainers from './trainers'
import { Link } from 'react-router-dom'
import { Dropdown, Table} from 'react-bootstrap'

function TrainersListO() {

    const [data, setDate] = useState(trainers);

  return (
    <div className='text-center'>
        <Table className="table table-bordered border-white text-white text-center w-100 bg-dark">
            <thead style={{ backgroundColor: "black",}}>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Profiles</th>
            </tr>
            </thead>
            <tbody>
            {data.map((cl) => {
                return (
                <tr>
                    <td>{cl.firstName}</td>
                    <td>{cl.lastName}</td>
                    <td>{cl.Email}</td>
                    <td>{cl.Phone}</td>
                    <td>{cl.Address}</td>
                    <td>
                    <button
                        className="btn text-white"
                        style={{ backgroundColor: "#f36100" }}
                    >
                        <Link to={`/trainers/${trainers.email}`}>View Profile</Link>
                    </button>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </Table>
    </div>
  )
}

export default TrainersListO