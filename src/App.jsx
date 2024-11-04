import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/Auth/SignupPage';
import LoginPage from './pages/Auth/LoginPage';
import ForgetPassword from './pages/Auth/ForgetPassword';
import VerifyOtp from './pages/Auth/VerifyOtp';
import ChangePassword from './pages/Auth/ChangePassword';
import Home from './pages/Home/Home';
import VehicleListing from './pages/VehicleListing/VehicleListing';
import VehicleDetails from './pages/VehicleListing/VehicleDetails';
import Order from './pages/Order/Order';
import OrderHistory from './pages/Order/OrderHistory';
function App() {

  return (
    <Router>

<Routes>
<Route path="/signup" element={<SignUpPage />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/forgetPassword" element={<ForgetPassword />} />
<Route path="/createNewPassword" element={<ChangePassword />} />
<Route path="/verifyOtp" element={<VerifyOtp />} />
<Route path="/" element={<Home />} />
<Route path="/vehicle-listing" element={<VehicleListing />} />
<Route path="/vehicle-details/:vehicleId" element={<VehicleDetails />} />
<Route path="/order" element={<Order />} />
<Route path="/order-history" element={<OrderHistory />} />
      </Routes>
    </Router>
  )
}

export default App
