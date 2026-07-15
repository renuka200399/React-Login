function AuthTabs({ activeTab, setActiveTab }) {
  const tabs = ["Phone", "Email"];

  return (
    <div className="flex rounded-lg overflow-hidden border border-gray-300">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 py-3 text-sm font-semibold transition-all duration-300 ${
            activeTab === tab
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default AuthTabs;