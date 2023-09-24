import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }
    // You can now use the selectedFile variable to upload the file to a server
    console.log(selectedFile);
  };

  return (
    <div>
      <h2>File Upload Example</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select a file:
          <input type="file" onChange={handleFileSelect} />
        </label>
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FileUpload;
