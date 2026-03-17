import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiles } from "../features/fileSlice";
import FileCard from "./FileCard";

function FileList() {
  const dispatch = useDispatch();
  const { files, searchTerm, loading, error } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  const filteredFiles = files.filter((file) =>
    `${file.fileName} ${file.fileType} ${file.category} ${file.uploadDate}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="loading-text">Loading...</p>;
  if (error) return <p className="loading-text">Error: {error}</p>;

  return (
    <div>
      <h2 className="section-title">All Documents</h2>

      <div className="file-grid">
        {filteredFiles.length > 0 ? (
          filteredFiles.map((file) => <FileCard key={file.id} file={file} />)
        ) : (
          <div className="no-files">No files found.</div>
        )}
      </div>
    </div>
  );
}

export default FileList;