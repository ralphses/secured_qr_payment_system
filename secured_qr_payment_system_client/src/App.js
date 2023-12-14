import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scanner from "./pages/Scanner";
import CheckoutPage from "./pages/CheckoutPage";
import "./App.css"
import PaymentSuccessPage from "./pages/PaymentSuccessPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Scanner />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment/success" element={<PaymentSuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
