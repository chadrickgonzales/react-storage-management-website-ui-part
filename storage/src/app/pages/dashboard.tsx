export default function Dashboard() {
  return (
   <div className="h-full bg-brand-off-white text-brand-white p-10 rounded-3xl overflow-y-auto">
      <div className="flex flex-row gap-6 h-full">
        {/* Left Column */}
        <div className="flex flex-col gap-6 w-1/2">
          <div className="bg-red-400 h-2/6 rounded-2xl shadow-md flex items-center justify-center">
            Box 1
          </div>
          <div className="bg-pink-400 h-2/3 rounded-2xl shadow-md flex items-center justify-center">
            Box 2
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 w-2/3">
          <div className="bg-green-400 h-full rounded-2xl shadow-md flex items-center justify-center">
            Box 3
          </div>
        </div>
      </div>
    </div>
  );
}