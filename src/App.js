
import { Route, Routes } from "react-router-dom";
import { Login } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin">
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
