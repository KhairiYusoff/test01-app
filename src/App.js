import { Route, Routes } from "react-router-dom";
import CatDetails from "./CatDetails";
import Cats from "./Cats";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cats />} />
        <Route path="/cat/:catId" element={<CatDetails />} />
      </Routes>
    </div>
  );
}

export default App;
