import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../features/fileSlice";

function UploadFile() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.files);

  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("Personal");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    dispatch(
      uploadFile({
        file,
        category,
        description,
      })
    );

    setFile(null);
    setCategory("Personal");
    setDescription("");
    e.target.reset();
  };

  return (
    <div className="card">
      <h2>Upload Document</h2>
      <p className="card-text">Upload PDFs, images, resumes, reports and certificates.</p>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Personal">Personal</option>
          <option value="Academic">Academic</option>
          <option value="Office">Office</option>
          <option value="Certificates">Certificates</option>
        </select>

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload File"}
        </button>
      </form>
    </div>
  );
}

export default UploadFile;