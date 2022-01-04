import React from 'react';

const Pagination = ({ dataPerPage, totalData, paginate }) => {
    console.log(totalData);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers);
    return (
        <>
            <nav>
                <ul className='pagination ms-5'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a onClick={() => paginate(number)} href='!#' className='page-link bg-info text-white fw-bold'>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Pagination;