import { Navigate, Route, Routes } from 'react-router-dom'

import NavContextProvider from './context/navContext'
import NavLinkActivatorContextProvider from './context/navLinkActivatorContext'
import { useAuth } from './context/authContext'

// Pages
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import Customers from './pages/customers'
import Calculator from './pages/calculator'
import FinalCustomer from './pages/final-customers'
import ChangePassword from './pages/change-password'
import ChangeProfile from './pages/change-profile'
import ConfirmationList from './pages/confirmation-list'
import Wallet from './pages/wallet'
import AddWallet from './pages/add-wallet'
import Payments from './pages/payments'
import Rewards from './pages/rewards'
import RoomPrice from './pages/room-price'
import TransportPrice from './pages/transport-price'
import SightseeingPrice from './pages/sightseeing-price'
import PrivacyPolicy from './pages/privacy-policy'
import RefundPolicy from './pages/refund-policy'
import TermsAndConditions from './pages/terms-and-conditions'

import Destinations from './pages/admin/destinations'
import Hotels from './pages/admin/hotels'
import Sightseeing from './pages/admin/sightseeing'
import Activities from './pages/admin/activities'
import Transportation from './pages/admin/transportation'
import Currencies from './pages/admin/currencies'

function App() {
  const { loggedIn, authUser } = useAuth()
  const adminRole = 'Admin'
  console.log(loggedIn)

  return (
    <div className="App">
      <NavContextProvider>
        <NavLinkActivatorContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                loggedIn ? (
                  <Navigate to={'/dashboard'} />
                ) : (
                  <Navigate to={'/login'} />
                )
              }
            />
            {/* Auth */}
            <Route
              path="/login"
              element={loggedIn ? <Navigate to={'/'} /> : <Login />}
            />
            <Route
              path="/register"
              element={loggedIn ? <Navigate to={'/'} /> : <Register />}
            />

            {/* Sitemaps */}
            <Route
              path="/privacy-policy"
              element={loggedIn ? <PrivacyPolicy /> : <Navigate to={'/'} />}
            />
            <Route
              path="/refund-policy"
              element={loggedIn ? <RefundPolicy /> : <Navigate to={'/'} />}
            />
            <Route
              path="/terms-and-conditions"
              element={
                loggedIn ? <TermsAndConditions /> : <Navigate to={'/'} />
              }
            />

            {/* Private Routes */}
            <Route
              path="/dashboard"
              element={loggedIn ? <Dashboard /> : <Navigate to={'/'} />}
            />
            <Route
              path="/customers"
              element={loggedIn ? <Customers /> : <Navigate to={'/'} />}
            />
            <Route
              path="/calculator"
              element={loggedIn ? <Calculator /> : <Navigate to={'/'} />}
            />
            <Route
              path="/add-wallet"
              element={loggedIn ? <AddWallet /> : <Navigate to={'/'} />}
            />
            <Route
              path="/final-customers"
              element={loggedIn ? <FinalCustomer /> : <Navigate to={'/'} />}
            />
            <Route
              path="/confirmation-list"
              element={loggedIn ? <ConfirmationList /> : <Navigate to={'/'} />}
            />
            <Route
              path="/wallet"
              element={loggedIn ? <Wallet /> : <Navigate to={'/'} />}
            />
            <Route
              path="/payments"
              element={loggedIn ? <Payments /> : <Navigate to={'/'} />}
            />
            <Route
              path="/rewards"
              element={loggedIn ? <Rewards /> : <Navigate to={'/'} />}
            />
            <Route
              path="/change-password"
              element={loggedIn ? <ChangePassword /> : <Navigate to={'/'} />}
            />
            <Route
              path="/change-profile"
              element={loggedIn ? <ChangeProfile /> : <Navigate to={'/'} />}
            />
            <Route
              path="/room-price"
              element={loggedIn ? <RoomPrice /> : <Navigate to={'/'} />}
            />
            <Route
              path="/transport-price"
              element={loggedIn ? <TransportPrice /> : <Navigate to={'/'} />}
            />
            <Route
              path="/sightseeing-price"
              element={loggedIn ? <SightseeingPrice /> : <Navigate to={'/'} />}
            />

            {/* Admin */}
            <Route
              path="/destinations"
              element={
                loggedIn && authUser.role == adminRole ? (
                  <Destinations />
                ) : (
                  <Navigate to={'/'} />
                )
              }
            />
            <Route
              path="/hotels"
              element={
                loggedIn && authUser.role == adminRole ? (
                  <Hotels />
                ) : (
                  <Navigate to={'/'} />
                )
              }
            />
            <Route
              path="/sightseeing"
              element={
                loggedIn && authUser.role == adminRole ? (
                  <Sightseeing />
                ) : (
                  <Navigate to={'/'} />
                )
              }
            />
            <Route
              path="/activities"
              element={
                loggedIn && authUser.role == adminRole ? (
                  <Activities />
                ) : (
                  <Navigate to={'/'} />
                )
              }
            />
            <Route
              path="/transportation"
              element={
                loggedIn && authUser.role == adminRole ? (
                  <Transportation />
                ) : (
                  <Navigate to={'/'} />
                )
              }
            />
            <Route
              path="/currencies"
              element={
                loggedIn && authUser.role == adminRole ? (
                  <Currencies />
                ) : (
                  <Navigate to={'/'} />
                )
              }
            />

            <Route
              path="*"
              element={<h1 className="text-center">Page not found!</h1>}
            />
          </Routes>
        </NavLinkActivatorContextProvider>
      </NavContextProvider>
    </div>
  )
}

export default App
