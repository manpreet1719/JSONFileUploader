import React from 'react';
import '../styles/TableHeader.css'

const TableHeader = ({ columns, sortable, sortConfig, requestSort }) => {
    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th  className="table-header-cell" key={column.key} onClick={() => sortable && requestSort(column.key)}>
                        {column.label}
                        {sortable && sortConfig.key === column.key && (
                            <span>{sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'}</span>
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
