import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

export default async function ResultPage({ params }) {
  const ref = doc(db, "documents", params.id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return <p className="p-10">Document not found ❌</p>;
  }

  const data = snap.data();

  return (
    <main className="p-10">
      <h2 className="text-3xl font-bold">Processed Document</h2>

      <img src={data.url} className="mt-5 w-full max-w-md rounded shadow" />

      <a
        download
        href={data.url}
        className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        Download HD
      </a>
    </main>
  );
}