import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export default async function Dashboard() {
  const docsRef = collection(db, "documents");
  const snapshot = await getDocs(docsRef);

  const items = snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data()
  }));

  return (
    <main className="p-10">
      <h2 className="text-3xl font-bold">Your Documents</h2>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {items.map((i) => (
          <a
            key={i.id}
            href={`/result/${i.id}`}
            className="border rounded-lg p-4"
          >
            <img src={i.url} className="w-full rounded" />
            <p className="text-center mt-2">{i.id}</p>
          </a>
        ))}
      </div>
    </main>
  );
}