import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Profile from "./profile/Profile";
import FarmerOne from "./profile/farmer/One";
import FarmerTwo from "./profile/farmer/Two";
import FarmerThree from "./profile/farmer/Three";
import FarmerFour from "./profile/farmer/Four";
import FarmerFive from "./profile/farmer/Five";
import FarmerSix from "./profile/farmer/Six";
import FarmerSeven from "./profile/farmer/Seven";
import PilotOne from "./profile/pilot/One";
import PilotTwo from "./profile/pilot/Two";
import PilotThree from "./profile/pilot/Three";
import PilotFour from "./profile/pilot/Four";
import FarmOne from "./profile/farm/One";
import FarmTwo from "./profile/farm/Two";
import FarmThree from "./profile/farm/Three";
import Farm from "./profile/Farm";
import Farmer from "./profile/Farmer";
import Farmland from "./profile/Farmland";
import MyBookings from "./dashboard/farmer/MyBookings";
import ServiceRequest from "./dashboard/farmer/ServiceRequest";
import FarmerManagement from "./dashboard/farmer/FarmerManagement";
import DroneManagement from "./dashboard/drone/DroneManagement";
import PilotManagement from "./dashboard/pilot/PilotManagement";
import FarmManagement from "./dashboard/farm/FarmManagement";
import Maintenance from "./dashboard/farmer/Maintenance";
import BookDroneServiceOne from "./dashboard/farmer/BookDroneServiceOne";
import BookDroneServiceTwo from "./dashboard/farmer/BookDroneServiceTwo";
import BookDroneServiceThree from "./dashboard/farmer/BookDroneServiceThree";
import DroneSimulation from "./dashboard/farmer/DroneSimulation";
import CreateDroneSimulation from "./dashboard/farmer/CreateDroneSimulation.js";
import PilotDashboard from "./dashboard/pilot/PilotDashboard";
import DroneOne from "./profile/drone/One";
import AdminAccess from "./common/adminaccess/AdminAccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/profile">
          <Route path="" element={<Profile />} />
          <Route path="farmer/1" element={<FarmerOne />} />
          <Route path="farmer/2" element={<FarmerTwo />} />
          <Route path="farmer/3" element={<FarmerThree />} />
          <Route path="farmer/4" element={<FarmerFour />} />
          <Route path="farmer/5" element={<FarmerFive />} />
          <Route path="farmer/6" element={<FarmerSix />} />
          <Route path="farmer/7" element={<FarmerSeven />} />
          <Route path="pilot/1" element={<PilotOne />} />
          <Route path="pilot/2" element={<PilotTwo />} />
          <Route path="pilot/3" element={<PilotThree />} />
          <Route path="pilot/4" element={<PilotFour />} />
          <Route path="farm/1" element={<FarmOne />} />
          <Route path="farm/2" element={<FarmTwo />} />
          <Route path="farm/3" element={<FarmThree />} />
          <Route path="drone/1" element={<DroneOne />} />

          <Route path="farmer" element={<Farmer />} />
          <Route path="farm" element={<Farm />} />
          <Route path="farmland" element={<Farmland />} />
        </Route>

        <Route path="/dashboard">
          <Route path="farmer/myBookings" element={<MyBookings />} />
          <Route path="farmer/bookDroneServiceOne" element={<BookDroneServiceOne />} />
          <Route path="farmer/bookDroneServiceTwo/:id" element={<BookDroneServiceTwo />} />
          <Route path="farmer/bookDroneServiceThree/:id" element={<BookDroneServiceThree />} />
          <Route path="farmer/serviceReports" element={<ServiceRequest />} />
          <Route path="farmer/maintenance" element={<Maintenance />} />
          <Route path="farmer/dronesimulation" element={<DroneSimulation />} />
          <Route path="farmer/dronesimulation/create" element={<CreateDroneSimulation />} />

          <Route path="pilot" element={<PilotDashboard />} />
          {/* <Route path="pilot/myschedule" element={<MySchedule />} /> */}

          <Route path="farmer/management" element={<FarmerManagement />} />
          <Route path="drone/management" element={<DroneManagement />} />
          <Route path="pilot/management" element={<PilotManagement />} />
          <Route path="farm/management" element={<FarmManagement />} />
        </Route>

        <Route path="/adminaccess" element={<AdminAccess />} />
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
