export default function ResultViewer({ image }) {
  return (
    <div className="text-center mt-6">
      <img
        src={image}
        className="w-full max-w-md mx-auto rounded-lg shadow"
        alt="Result"
      />

      <a
        href={image}
        download
        className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Download HD
      </a>
    </div>
  );
}