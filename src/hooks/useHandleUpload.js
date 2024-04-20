
export const useHandleUpload = (file, jsonContent, onJsonDataChange, setError,setDisableBtn) => {

    const handleUpload = () => {
        if (file) {
         
            onJsonDataChange(jsonContent);
           
        } else {
            setError('Please upload a JSON file.');
            
        }
    };

    return handleUpload;
};