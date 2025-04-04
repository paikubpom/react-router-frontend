import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

function Stats() {
  return <h3 className="text-center text-2xl font-bold mt-10">Stats Page</h3>;
}

function Settings() {
  return <h3 className="text-center text-2xl font-bold mt-10">Setting Page</h3>;
}

function Dashboard() {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-10">Dashboard</h2>
      <nav>
        <Link to="/dashboard/stats">Stats</Link> |
        <Link to="/dashboard/settings">Setting</Link> |
      </nav>
      <Routes>
        <Route path="stats" element={<Stats />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
