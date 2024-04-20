import {useState } from 'react';
import './App.css';
import FileUploder from './component/FileUploder.js'
import Table from './component/Table.js';


function App() {
  const [jsonData, setJsonData] = useState([]);

  const handleJsonDataChange = (data) => {
    setJsonData(data);
  };

  return (
    <div className="App">
      <h1>JSON File Uploader</h1>
      <FileUploder className="fileuploder" onJsonDataChange={handleJsonDataChange} />

      {
        jsonData.length > 0
          ? <Table
            data={jsonData}
            searchable
            sortable
          /> : null
      }

    </div>
  );
}

export default App;
