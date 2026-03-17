import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFile, updateFileMetadata } from "../features/fileSlice";

function FileCard({ file }) {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(file.fileName);
  const [category, setCategory] = useState(file.category);
  const [description, setDescription] = useState(file.description || "");

  const handleDelete = () => {
    dispatch(deleteFile({ id: file.id, storagePath: file.storagePath }));
  };

  const handleSave = () => {
    dispatch(
      updateFileMetadata({
        id: file.id,
        updatedData: {
          fileName: title,
          category,
          description,
        },
      })
    );
    setIsEditing(false);
  };

  const isImage = file.fileType && file.fileType.startsWith("image/");

  return (
    <div className="file-card">
      {isImage ? (
        <img src={file.downloadURL} alt={file.fileName} className="preview" />
      ) : (
        <div className="preview file-box">FILE</div>
      )}

      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Personal">Personal</option>
            <option value="Academic">Academic</option>
            <option value="Office">Office</option>
            <option value="Certificates">Certificates</option>
          </select>

          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </>
      ) : (
        <>
          <h3>{file.fileName}</h3>
          <p><strong>Type:</strong> {file.fileType}</p>
          <p><strong>Size:</strong> {file.fileSize}</p>
          <p><strong>Category:</strong> {file.category}</p>
          <p><strong>Date:</strong> {file.uploadDate}</p>
          <p><strong>Description:</strong> {file.description || "No description"}</p>
        </>
      )}

      <div className="btn-group">
        <a href={file.downloadURL} target="_blank" rel="noreferrer">
          View
        </a>

        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default FileCard;