import "./App.css";
import StockEventTable from "./components/StockEventTable";

const fetchProduct = [
  { id: 1, name: "Iphone X", price: 1000 },
  { id: 2, name: "Iphone XS", price: 2000 },
  { id: 3, name: "Iphone XR", price: 3000 },
  { id: 4, name: "Iphone XS Max", price: 4000 },
];

const fetchstockEvent = [
  { id: 1, type: "add", qty: 100, product: fetchProduct[0] },
  { id: 2, type: "remove", qty: 143, product: fetchProduct[3] },
  { id: 3, type: "add", qty: 100, product: fetchProduct[1] },
  { id: 4, type: "remove", qty: 143, product: fetchProduct[2] },
  { id: 5, type: "add", qty: 100, product: fetchProduct[0] },
];

const App = () => {
  return (
    <div className="App">
      <h1> Stocks </h1>
      <StockEventTable
        title="new-alex"
        product={fetchProduct}
        stockEvent={fetchstockEvent}
      />
    </div>
  );
};

export default App;