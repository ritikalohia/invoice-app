import './App.css';
import BillTable from './components/BillTable';
import Bill from './components/Bill';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ThemeProvider } from '@mui/material/styles';
//import { CssBaseline } from '@mui/material';
import theme from './Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<BillTable/>} />
          <Route path="/:id" element={<Bill/>} />
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
