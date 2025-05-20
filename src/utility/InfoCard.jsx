

export const InfoCard = ({ title, items = [], bg = "bg-white" }) => (
    <div className={`${bg} shadow-md rounded-2xl p-6 hover:shadow-lg transition`}>
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-gray-800">
        {title}
        </h2>
        <ul className="space-y-2 text-gray-700 text-sm">
        {items?.length > 0 ? (
            items.map((item, index) => (
            <li key={index} className="pl-3 border-l-4 border-purple-400">
                {item}
            </li>
            ))
        ) : (
            <li className="text-gray-400 italic">No data available</li>
        )}
        </ul>
    </div>
);
