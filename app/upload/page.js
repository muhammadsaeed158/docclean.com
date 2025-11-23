"use client";

import { useState } from "react";
import { uploadToCloudinary } from "../../utils/cloudinary";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    // Upload to Cloudinary
    const imageUrl = await uploadToCloudinary(file);

    const docId = uuidv4();

    await setDoc(doc(db, "documents", docId), {
      url: imageUrl,
      createdAt: Date.now()
    });

    router.push(`/result/${docId}`);
  };

  return (
    <main className="p-10">
      <h2 className="text-3xl font-bold">Upload Document</h2>

      <input
        type="file"
        className="mt-4"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={handleUpload}
        className="mt-5 bg-green-600 text-white px-5 py-2 rounded-lg"
      >
        Upload & Process
      </button>
    </main>
  );
}