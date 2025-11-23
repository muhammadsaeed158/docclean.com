export default function PricingCard({ title, price, features }) {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-4xl font-bold mt-2">
        ${price}
        <span className="text-sm text-gray-500">/month</span>
      </p>

      <ul className="mt-4 space-y-2 text-gray-700">
        {features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Choose Plan
      </button>
    </div>
  );
}