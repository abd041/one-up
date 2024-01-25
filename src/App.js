import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import VerfiyOTP from "./pages/VerifyOPT/VerfiyOTP";
import Register from "./pages/Register/Register";
import RegisterOTP from "./pages/RegisterOTP/RegisterOTP";
import Dashboard from "./pages/Dashboard/Dashboard";
import ForgetPassword from "./pages/Forget/ForgetPassword";
import ForgetOTP from "./pages/ForgetOTP/ForgetOTP";
import NewPassword from "./pages/NewPassword/NewPassword";
import ReplaceStrategy from "./pages/ReplaceStrategy/ReplaceStrategy";
import NavigatorSector from "./pages/NavigateSector/NavigatorSector";
import NavigateInvestment from "./pages/NavigateInvestment/NavigateInvestment";
import StrategyInsight from "./pages/StrategyInsight/StrategyInsight";
import BrokrageAccount from "./pages/BrokrageAccount/BrokrageAccount";
import SecureBrokage from "./pages/BrokageSecureConnection/Secure";
import BrokrageAccountCred from "./pages/BrokrageAccountCred/BrokrageAccountCred";
import BrokrageAccountConnect from "./pages/BrokrageConnect/BrokrageAccountConnect";
import StrategyDashboard from "./pages/StrategyDashboard/StrategyDashboard";
import Settings from "./pages/Settings/Settings";
import AccountDetails from "./pages/AccountDetails/AccountDetails";
import VerifyAccount from "./pages/AccountDetails/VerifyAccount";
import AccountPhoneChange from "./pages/AccountDetails/AccountPhoneChange";
import VerifyNewNumber from "./pages/AccountDetails/VerifyNewNumber";
import Pricing from "./pages/Pricing/Pricing";
import CustomerSupport from "./pages/Customer/CustomerSupport";
import CustomerReport from "./pages/Reports/CustomerReport";
import DeviceSetting from "./pages/DeviceSettings/DeviceSetting";
import Legal from "./pages/Legal/Legal";
import PortfolioDetail from "./pages/PortfolioDetails/PortfolioDetail";
import OnBoarding from "./pages/OnBoarding/OnBoarding";
import DashboardVariation from "./pages/DashboardVar/DashboardVariation";
import Notification from "./pages/Notification/Notification";
import StrategySpec from "./pages/StrategySpecs/StrategySpec";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/verify-otp" element={<VerfiyOTP />} />
        <Route path="/verify-register-otp" element={<RegisterOTP />} />
        <Route path="/create-account" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password-otp" element={<ForgetOTP />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route
          path="/replace-existing-strategy"
          element={<ReplaceStrategy />}
        />
        <Route path="/navigate-by-sector" element={<NavigatorSector />} />
        <Route
          path="/navigate-by-investment"
          element={<NavigateInvestment />}
        />
        <Route path="/strategy-insight" element={<StrategyInsight />} />
        <Route path="/connect-brokrage-account" element={<BrokrageAccount />} />
        <Route path="/secure-brokrage-account" element={<SecureBrokage />} />
        <Route
          path="/brokrage-account-cred"
          element={<BrokrageAccountCred />}
        />
        <Route
          path="/brokrage-account-connect"
          element={<BrokrageAccountConnect />}
        />
        <Route path="/strategy-dashboard" element={<StrategyDashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account-details" element={<AccountDetails />} />
        <Route path="/verify-account-details" element={<VerifyAccount />} />
        <Route path="/verify-account-change" element={<AccountPhoneChange />} />
        <Route
          path="/verify-account-new-number"
          element={<VerifyNewNumber />}
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/customer-service" element={<CustomerSupport />} />
        <Route path="/customer-reports" element={<CustomerReport />} />
        <Route path="/device-settings" element={<DeviceSetting />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/portfolio-detail" element={<PortfolioDetail />} />
        <Route path="/onboard" element={<OnBoarding />} />
        <Route path="/dashboard-variation" element={<DashboardVariation />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/strategy-spec" element={<StrategySpec />} />
      </Routes>
    </Router>
  );
}

export default App;
