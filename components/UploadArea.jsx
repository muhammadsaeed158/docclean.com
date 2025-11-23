"use client";

import { useState } from "react";

export default function UploadArea({ onUpload }) {
  const [file, setFile] = useState(null);

  return (
    <div className="border rounded-lg p-6 bg-white shadow text-center">
      <input
        type="file"
        className="block mx-auto"
        onChange={(e) => setFile(e.target.files[0])}
      />

      {file && (
        <p className="mt-2 text-gray-700">
          Selected: <strong>{file.name}</strong>
        </p>
      )}

      <button
        disabled={!file}
        onClick={() => onUpload(file)}
        className={`mt-4 px-6 py-2 rounded-lg text-white ${
          file ? "bg-green-600 hover:bg-green-700" : "bg-gray-400"
        }`}
      >
        Upload & Process
      </button>
    </div>
  );
}