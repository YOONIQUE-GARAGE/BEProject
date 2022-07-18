import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlockDetail from "./components/BlockDetail"
import BlockTx from "./components/BlockTx"
import TxDetail from "./components/TxDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>BEtheScan</div>
        </header>
        <div className='Menu'>
          <Routes>
            <Route path="/" exact element={<BlockTx />} />
            <Route path="/block_detail/:height" element={<BlockDetail />} />
            <Route path="/tx_detail/:hash" element={<TxDetail />} />
          </Routes>
        </div>
      </div >
    </BrowserRouter >
  );
}

export default App;
