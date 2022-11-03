
import { Route, Routes } from "react-router-dom";
import { Account, ApiKey, Confirmation, ForgotPassword, Login, Registration, Tables } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Registration />} />
        <Route path="forgot-password" element={<ForgotPassword /> } />
        <Route path="confirmation" element={<Confirmation title="Change Password" message="Your password has been changed." /> } />
        <Route path="/">  
          <Route path="settings">
            <Route path="api-key" element={<ApiKey />} />
            <Route path="tables" element={<Tables />} />
          </Route>
          <Route path="data-management">
            <Route path="account" element={<Account />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
