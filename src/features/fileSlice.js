import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { database, storage } from "../firebase/firebaseConfig";
import {
  ref as dbRef,
  push,
  set,
  get,
  remove,
  update,
} from "firebase/database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export const fetchFiles = createAsyncThunk("files/fetchFiles", async () => {
  const snapshot = await get(dbRef(database, "documents"));

  if (!snapshot.exists()) {
    return [];
  }

  const data = snapshot.val();

  return Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));
});

export const uploadFile = createAsyncThunk(
  "files/uploadFile",
  async ({ file, category, description }) => {
    const filePath = `documents/${Date.now()}_${file.name}`;
    const fileRef = storageRef(storage, filePath);

    await uploadBytes(fileRef, file);
    const downloadURL = await getDownloadURL(fileRef);

    const newDocRef = push(dbRef(database, "documents"));

    const fileData = {
      fileName: file.name,
      fileType: file.type || "Unknown",
      fileSize: `${(file.size / 1024).toFixed(2)} KB`,
      uploadDate: new Date().toLocaleDateString(),
      downloadURL,
      storagePath: filePath,
      category,
      description,
    };

    await set(newDocRef, fileData);

    return {
      id: newDocRef.key,
      ...fileData,
    };
  }
);

export const deleteFile = createAsyncThunk(
  "files/deleteFile",
  async ({ id, storagePath }) => {
    if (storagePath) {
      const fileRef = storageRef(storage, storagePath);
      await deleteObject(fileRef);
    }

    await remove(dbRef(database, `documents/${id}`));
    return id;
  }
);

export const updateFileMetadata = createAsyncThunk(
  "files/updateFileMetadata",
  async ({ id, updatedData }) => {
    await update(dbRef(database, `documents/${id}`), updatedData);
    return { id, updatedData };
  }
);

const initialState = {
  files: [],
  loading: false,
  error: null,
  searchTerm: "",
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.files = action.payload;
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(uploadFile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.loading = false;
        state.files.unshift(action.payload);
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteFile.fulfilled, (state, action) => {
        state.files = state.files.filter((file) => file.id !== action.payload);
      })

      .addCase(updateFileMetadata.fulfilled, (state, action) => {
        const { id, updatedData } = action.payload;
        const index = state.files.findIndex((file) => file.id === id);

        if (index !== -1) {
          state.files[index] = {
            ...state.files[index],
            ...updatedData,
          };
        }
      });
  },
});

export const { setSearchTerm } = fileSlice.actions;
export default fileSlice.reducer;