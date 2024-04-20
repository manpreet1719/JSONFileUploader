import { useState } from "react";

export const useFileChange = (fileInputRef) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [jsonContent, setJsonContent] = useState({});
  const [disablebtn,setDisableBtn] = useState(false);


  const handleFileChange = (event) => {
    setDisableBtn(false);
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === 'application/json') {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const jsonContent = JSON.parse(e.target.result);

            if (ValidJson(jsonContent)) {
              console.log(selectedFile);
              setFile(selectedFile);
              setJsonContent(jsonContent);
              setError('');
              
            } else {
              setFile(null);
              setError('JSON file does not match the specified format.');
              setDisableBtn(true);

            }
          } catch (error) {
            setFile(null);
            setError('Error parsing JSON file.');
            setDisableBtn(true);

          }
        };
        reader.readAsText(selectedFile);

      } else {
        setFile(null);
        setError('Please upload a JSON file.');
        setDisableBtn(true);

      }
      fileInputRef.current.value = null;
    }
  };

  const ValidJson = (jsonContent) => {
    if (!Array.isArray(jsonContent)) {
      return false;
    }

    for (const obj of jsonContent) {
      if (typeof obj !== 'object' || Array.isArray(obj)) {
        return false;
      }


      for (const key in obj) {
        if (Array.isArray(obj[key]) || typeof obj[key] === 'object') {
          return false;
        }
      }
    }
    return true;
  };

  return { file, error, handleFileChange, setError,jsonContent ,disablebtn,setDisableBtn};
};
