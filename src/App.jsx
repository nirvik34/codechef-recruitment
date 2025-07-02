import { BrowserRouter } from "react-router-dom";
import { ClubProvider } from "./context/ClubContext";
import AppRoutes from "./AppRoutes";

const App = () => (
  <ClubProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ClubProvider>
);

export default App;
