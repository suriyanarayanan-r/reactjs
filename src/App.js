import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorMsg from "./elements/ErrorMsg";
import HomePage from "./elements/HomePage";
import Project from "./elements/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reactjs" element={<HomePage />} />
        <Route path="/reactjs/projects" element={<Project />} />
        <Route path="/*" element={<ErrorMsg />} />
        <Route path="/*/*" element={<ErrorMsg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
