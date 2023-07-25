import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Donor from "./pages/Dashboard/Donor";
import Hospital from "./pages/Dashboard/Hospital";
import OrganisationPage from "./pages/Dashboard/OrganisationPage";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import Donarlist from "./pages/Admin/Donarlist";
import AdminHome from "./pages/Admin/AdminHome";
import HospitalList from "./pages/Admin/HospitalList";
import OrgList from "./pages/Admin/OrgList";
import ApplyBloodBank from "./pages/ApplyBloodBank";
import BloodBankNotification from "./pages/BloodBankNotification";
import BloodBanks from "./pages/Admin/BloodBanks";
import GetBloodBank from "./pages/GetBloodBank";
import FindBlood from "./pages/FindBlood";
import BloodRequests from "./pages/BloodRequests";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blood-bank-notification"
          element={
            <ProtectedRoute>
              <BloodBankNotification />
            </ProtectedRoute>
          }
        />


        <Route
          path="/blood-bank"
          element={
            <ProtectedRoute>
              <BloodBanks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donor-list"
          element={
            <ProtectedRoute>
              <Donarlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/apply-blood-bank"
          element={
            <ProtectedRoute>
              <ApplyBloodBank />
            </ProtectedRoute>
          }
        />

        <Route
          path="/get-blood-bank"
          element={
            <ProtectedRoute>
              <GetBloodBank />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blood-request"
          element={
            <ProtectedRoute>
              <BloodRequests />
            </ProtectedRoute>
          }
        />

        <Route
          path="/find-blood"
          element={
            <ProtectedRoute>
              <FindBlood />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital-list"
          element={
            <ProtectedRoute>
              <HospitalList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/org-list"
          element={
            <ProtectedRoute>
              <OrgList />
            </ProtectedRoute>
          }
        />
        <Route path="/donor" element={
          <ProtectedRoute>
            <Donor />
          </ProtectedRoute>
        } />
        <Route path="/organisation" element={
          <ProtectedRoute>
            <OrganisationPage />
          </ProtectedRoute>
        } />
        <Route path="/hospital" element={
          <ProtectedRoute>
            <Hospital />
          </ProtectedRoute>
        } />
        <Route path="/consumer" element={
          <ProtectedRoute>
            <Consumer />
          </ProtectedRoute>
        } />
        <Route path="/donation" element={
          <ProtectedRoute>
            <Donation />
          </ProtectedRoute>
        } />
        <Route path="/analytics" element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        } />
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
