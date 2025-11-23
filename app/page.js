export default function Page() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold">DocClean – AI Document Cleaner</h1>
      <p className="mt-4 text-gray-500">
        Upload documents → Clean → Download HD version
      </p>

      <a
        href="/upload"
        className="mt-6 inline-block bg-blue-600 text-white px-5 py-3 rounded-lg"
      >
        Start Cleaning
      </a>
    </main>
  );
}