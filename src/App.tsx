import Home from "./pages/Home"; // yoki Home faylingiz qayerda bo'lsa o'sha yo'lak
import OrdersPage from "./services/OrdersPage";

function App() {
  return (
    <div>
      <Home />
      <OrdersPage/>
    </div>
  );
}

export default App;