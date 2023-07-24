import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HomePage } from "./pages/Home/HomePage";
import { HeaderPartial } from "./Partials/HeaderPartial/HeaderPartial";
import { MinhasCompras } from "./pages/MinhasCompras";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPartial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/minhas-compras" element={<MinhasCompras />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
