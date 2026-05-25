export default function QAAdhocTrackerPortal() {
  const tasks = [
    {
      tester: "Tamilselvam",
      task: "Alexa Voice Validation",
      jira: "PROJVEGA-375060",
      plan: "Voice Regression Plan",
      module: "Audio",
      hours: 2.5,
      status: "Completed",
    },
    {
      tester: "Arun",
      task: "OTT Playback Validation",
      jira: "OTT-2451",
      plan: "Playback Smoke",
      module: "Playback",
      hours: 1.5,
      status: "In Progress",
    },
    {
      tester: "Karthik",
      task: "Remote Pairing Testing",
      jira: "BLE-874",
      plan: "BLE Functional",
      module: "Bluetooth",
      hours: 3,
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-lg p-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              QA Adhoc Task Tracker
            </h1>
            <p className="text-gray-500 mt-1">
              Regression & Adhoc Work Management Portal
            </p>
          </div>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition">
            + Add Adhoc Task
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-white rounded-3xl shadow p-5">
            <h2 className="text-gray-500 text-sm">Total Tasks</h2>
            <p className="text-3xl font-bold mt-2">42</p>
          </div>

          <div className="bg-white rounded-3xl shadow p-5">
            <h2 className="text-gray-500 text-sm">Total Hours</h2>
            <p className="text-3xl font-bold mt-2">96 hrs</p>
          </div>

          <div className="bg-white rounded-3xl shadow p-5">
            <h2 className="text-gray-500 text-sm">Pending Tasks</h2>
            <p className="text-3xl font-bold mt-2">7</p>
          </div>

          <div className="bg-white rounded-3xl shadow p-5">
            <h2 className="text-gray-500 text-sm">Regression Impact</h2>
            <p className="text-3xl font-bold mt-2">18%</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-5">Add Adhoc Task</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Employee Name"
              className="border rounded-2xl p-3"
            />

            <input
              type="text"
              placeholder="Jira ID"
              className="border rounded-2xl p-3"
            />

            <input
              type="text"
              placeholder="Task Name"
              className="border rounded-2xl p-3"
            />

            <input
              type="text"
              placeholder="Test Plan Name"
              className="border rounded-2xl p-3"
            />

            <select className="border rounded-2xl p-3">
              <option>Module</option>
              <option>Audio</option>
              <option>Playback</option>
              <option>Bluetooth</option>
            </select>

            <select className="border rounded-2xl p-3">
              <option>Priority</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <input
              type="time"
              className="border rounded-2xl p-3"
            />

            <input
              type="time"
              className="border rounded-2xl p-3"
            />

            <input
              type="number"
              placeholder="Total Hours"
              className="border rounded-2xl p-3"
            />
          </div>

          <textarea
            placeholder="Comments"
            className="border rounded-2xl p-3 w-full mt-4 h-28"
          />

          <div className="mt-5 flex gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-700">
              Save Task
            </button>

            <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-400">
              Reset
            </button>
          </div>
        </div>

        {/* Task Table */}
        <div className="bg-white rounded-3xl shadow-lg p-6 overflow-auto">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold">Recent Adhoc Activities</h2>

            <input
              type="text"
              placeholder="Search tester or Jira"
              className="border rounded-2xl p-3"
            />
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4 rounded-l-2xl">Tester</th>
                <th className="p-4">Task</th>
                <th className="p-4">Jira ID</th>
                <th className="p-4">Test Plan</th>
                <th className="p-4">Module</th>
                <th className="p-4">Hours</th>
                <th className="p-4 rounded-r-2xl">Status</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium">{item.tester}</td>
                  <td className="p-4">{item.task}</td>
                  <td className="p-4 text-blue-600 font-semibold">
                    {item.jira}
                  </td>
                  <td className="p-4">{item.plan}</td>
                  <td className="p-4">{item.module}</td>
                  <td className="p-4">{item.hours}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Weekly Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Weekly Team Summary
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Tamilselvam</span>
                  <span>18 hrs</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Arun</span>
                  <span>12 hrs</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full w-[60%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Karthik</span>
                  <span>9 hrs</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full w-[45%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Portal Features
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Real-time adhoc task tracking</li>
              <li>✔ Tester-wise effort visibility</li>
              <li>✔ Regression interruption monitoring</li>
              <li>✔ Jira integration support</li>
              <li>✔ Weekly/monthly reports</li>
              <li>✔ Export to Excel/PDF</li>
              <li>✔ Open visibility for all testers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
