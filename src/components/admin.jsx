import { useEffect, useState } from "react";

const AdminPage = () => {
  const [formData, setFormData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/fetchFormData");
        if (response.ok) {
          const data = await response.json();
          setFormData(data);
          setFilteredData(data);
        } else {
          console.error("Error fetching form data");
        }
      } catch (error) {
        console.error("Error fetching form data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = formData.filter(
      (entry) =>
        entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, formData]);

  const handleSortChange = (columnName) => {
    if (sortColumn === columnName) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnName);
      setSortDirection("asc");
    }
  };

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortColumn === "name") {
      return sortDirection === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortColumn === "email") {
      return sortDirection === "asc"
        ? a.email.localeCompare(b.email)
        : b.email.localeCompare(a.email);
    } else if (sortColumn === "number") {
      return sortDirection === "asc"
        ? a.number - b.number
        : b.number - a.number;
    } else if (sortColumn === "date") {
      return sortDirection === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    } else if (sortColumn === "time") {
      return sortDirection === "asc"
        ? new Date(a.time) - new Date(b.time)
        : new Date(b.time) - new Date(a.time);
    } else {
      return 0;
    }
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Form Data</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md mr-4 focus:outline-none"
        />
        <span>Sort by:</span>
        <div className="flex space-x-4 ml-4">
          <button
            onClick={() => handleSortChange("name")}
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            Name
          </button>
          <button
            onClick={() => handleSortChange("email")}
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            Email
          </button>
          <button
            onClick={() => handleSortChange("number")}
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            Number
          </button>
          <button
            onClick={() => handleSortChange("date")}
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            Date
          </button>
          <button
            onClick={() => handleSortChange("time")}
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            Time
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Number</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((entry) => (
              <tr key={entry._id} className="border-t border-gray-300">
                <td className="px-4 py-2">{entry.name}</td>
                <td className="px-4 py-2">{entry.email}</td>
                <td className="px-4 py-2">{entry.number}</td>
                <td className="px-4 py-2">
                  {new Date(entry.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  {new Date(entry.time).toLocaleTimeString()}
                </td>
                <td className="px-4 py-2">{entry.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
