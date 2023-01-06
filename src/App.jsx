import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth, Landing, Admin,Student,Teacher } from "@/layouts";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/student/*" element={<Student />} />
      <Route path="/teacher/*" element={<Teacher />} />
      {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
      <Route path="*" element={<Landing />} />

    </Routes>
  );
}

export default App;
