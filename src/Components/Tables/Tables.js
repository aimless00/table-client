import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Pagination from '../Pagination/Pagination';
import TD from '../TD/TD';

const Tables = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);



    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(result => setData(result))
        setLoading(false);
    }, [data])

    // Get current posts
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <>
            <div className='m-5'>
                <input type="text" class="form-control" placeholder="Search............."
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                ></input>
            </div>
            <Table striped variant="dark" bordered hover size="sm">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Ip Adress</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentData.filter(dt => {
                            if (search === "") {
                                return dt
                            }
                            else if (dt.first_name.toLowerCase().includes(search.toLocaleLowerCase())) {
                                return dt
                            }
                        }).map(dt => <TD
                            key={dt._id}
                            dt={dt}
                        ></TD>
                        )
                    }
                </tbody>
            </Table>
            <Pagination
                dataPerPage={dataPerPage}
                totalData={data.length}
                paginate={paginate}
            />
        </>
    );
};

export default Tables;