
import { Route, Routes } from "react-router-dom";
import { ApiKey, Login } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/">  
          <Route path="admin">
            <Route path="api-key" element={<ApiKey />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
