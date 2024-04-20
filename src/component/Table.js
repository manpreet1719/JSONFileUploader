import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { useSearchableTable } from "../hooks/useSearchableTable";
import { useSortableTable } from "../hooks/useSortableTable";
import '../styles/Table.css'
import {useState , useRef} from "react";
import { debounce } from "../utils/helper";

const Table = ({ data, searchable, sortable }) => {
    const columns = data.length > 0 ? Object.keys(data[0]).map((key) => ({ key, label: key.toUpperCase() })) : [];
    const { sortedData, requestSort, sortConfig } = useSortableTable(data);
    const [searchTerm, setSearchTerm] = useState("");
    const { filteredData } = useSearchableTable(sortedData(), searchTerm);
    const inputValueRef = useRef("");
    

    const handleChange = (event) => {
        inputValueRef.current = event.target.value;
    };

    const debounceHandleChange = debounce(() => {
        setSearchTerm(inputValueRef.current);
    }, 300);

    const handleInputChange = (event) => {
        handleChange(event);
        debounceHandleChange();
    };
    
    return (
        <div className="table_main">
            {searchable && (
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={handleInputChange}
                />
            )}
            <table className="table">
                <TableHeader columns={columns} sortable={sortable} sortConfig={sortConfig} requestSort={requestSort} />
                <tbody>
                    {filteredData.map((row, rowIndex) => (
                        <TableRow key={rowIndex} rowData={row} columns={columns} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;