import NavRoutes from "./components/UI/NavRoutes";
import navRoutes from "./content/nav-routes";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" fade-in" dir="rtl">
      <NavRoutes navRoutes={navRoutes} />
    </div>
  );
}

export default App;
