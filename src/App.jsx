import { useState } from "react";

function App() {

  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState("");

  const [fileName, setFileName] = useState("");
  const [category, setCategory] = useState("Personal");
  const [description, setDescription] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();

    if (!fileName) {
      alert("Enter file name");
      return;
    }

    const newFile = {
      id: Date.now(),
      fileName,
      category,
      description,
      uploadDate: new Date().toLocaleDateString(),
    };

    setFiles([newFile, ...files]);

    setFileName("");
    setCategory("Personal");
    setDescription("");
  };

  const handleDelete = (id) => {
    setFiles(files.filter((f) => f.id !== id));
  };

  const filtered = files.filter((f) =>
    f.fileName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      <h1 className="title">Digital Document Manager</h1>

      {/* Upload Form */}

      <div className="card">

        <h2>Upload Document</h2>

        <form onSubmit={handleUpload} className="form">

          <input
            type="text"
            placeholder="File Name"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Personal</option>
            <option>Academic</option>
            <option>Office</option>
            <option>Certificates</option>
          </select>

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Upload</button>

        </form>

      </div>

      {/* Search */}

      <div className="card">

        <h2>Search Files</h2>

        <input
          type="text"
          placeholder="Search file..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* File List */}

      <h2 className="section">Documents</h2>

      <div className="grid">

        {filtered.length > 0 ? (
          filtered.map((file) => (
            <div className="file-card" key={file.id}>

              <h3>{file.fileName}</h3>

              <p><b>Category:</b> {file.category}</p>
              <p><b>Date:</b> {file.uploadDate}</p>
              <p>{file.description}</p>

              <button
                className="delete"
                onClick={() => handleDelete(file.id)}
              >
                Delete
              </button>

            </div>
          ))
        ) : (
          <p>No files added</p>
        )}

      </div>

    </div>
  );
}

export default App;