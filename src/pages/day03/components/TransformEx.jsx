export default function TransformEx() {
  return (
    <div className="space-y-10 p-10">
      {/* scale */}
      <div>
        <h2 className="text-xl font-bold mb-3">scale</h2>

        <div className="w-32 h-32 bg-blue-950 rounded-lg shadow-lg hover:scale-110 duration-500"></div>
      </div>

      {/* rotate */}
      <div>
        <h2 className="text-xl font-bold mb-3">rotate</h2>

        <div className="w-32 h-32 bg-blue-950 rounded-lg shadow-lg hover:rotate-180 duration-300"></div>
      </div>

      {/* translate */}
      <div>
        <h2 className="text-xl font-bold mb-3">translate</h2>

        <div className="w-32 h-32 bg-blue-950 rounded-lg shadow-lg hover:-translate-y-10 duration-300"></div>
      </div>
    </div>
  );
}
