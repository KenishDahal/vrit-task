'use client'; 

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col p-4">
        <div className="text-2xl py-5 font-bold mb-6">Dashboard</div>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Overview
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Analytics
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center gap-x-3">
          <h1 className="text-xl font-semibold"> Overview</h1>
          <div className="space-x-4 flex flex-col gap-y-1">
            <button className="px-1 py-2 bg-black text-xs text-white rounded hover:bg-blue-600 w-20">
              Notifications
            </button>
            <button className="px-3 py-2 text-xs bg-red-700 text-white rounded hover:bg-red-600">
              Logout
            </button>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Total Users</h2>
              <p className="text-2xl font-bold">1,240</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">New Signups</h2>
              <p className="text-2xl font-bold">94</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Active Sessions</h2>
              <p className="text-2xl font-bold">320</p>
            </div>
          </div>

          {/* Charts or Other Content */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <ul>
                <li className="mb-4">
                  <span className="font-semibold">Zukerberg</span> signed up for an account.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">John</span> purchased a subscription.
                </li>
                <li className="mb-4">
                  <span className="font-semibold">Billgates</span> updated his profile.
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
