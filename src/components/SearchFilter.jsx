import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/fileSlice";

function SearchFilter() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.files.searchTerm);

  return (
    <div className="card">
      <h2>Search Files</h2>
      <p className="card-text">
        Quickly find your saved documents by file name.
      </p>

      <input
        type="text"
        placeholder="Search by file name..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </div>
  );
}

export default SearchFilter;