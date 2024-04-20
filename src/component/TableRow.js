import '../styles/TableRow.css'
const TableRow = ({ rowData, columns }) => {
    return (
        <tr className="table-row">
            {columns.map((column) => (
                <td key={column.key}>{rowData[column.key]}</td>
            ))}
        </tr>
    );
};

export default TableRow;
