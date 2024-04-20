import { useFileChange } from "../hooks/useFileChange";
import { useHandleUpload } from "../hooks/useHandleUpload";
import '../styles/FileUploder.css'
import { useRef } from "react";

const FileUploder = ({ onJsonDataChange }) => {
    const fileInputRef = useRef(null);
    const { file, error, handleFileChange, setError, jsonContent, disablebtn, setDisableBtn } = useFileChange(fileInputRef);
    const handleUpload = useHandleUpload(file, jsonContent, onJsonDataChange, setError, setDisableBtn);
    const buttonClassName = disablebtn ? 'disabled-button' : 'enabled-button';

    return (
        <div className="fileupload_main">
            <div className="select_file">
                <input
                    type="file"
                    id="files"
                    accept=".json"
                    onChange={handleFileChange}
                    ref={fileInputRef}

                />
                <label className="file_label" for="files">Select file</label>
                <span style={{fontSize:'24px'}}>{file ? file.name : ''}</span>
                {error && <p style={{ fontSize:'24px', color: 'red' }}>{error}</p>}
            </div>
            <div>
            <button className={buttonClassName} onClick={handleUpload}>Upload</button>
            </div>

        </div>
    );
}
export default FileUploder