import './App.scss';
import { TableItemsProvider } from './context/TableItemsContext';
import HorizontalBarChart from './components/HorizontalBarChart';
import VerticalBarChart from './components/VerticalBarChart';
import Table from './components/Table';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <h1 className="title">Charts and Table Visualization</h1>
      <div className="charts">
        <HorizontalBarChart />
        <VerticalBarChart />
      </div>
      <TableItemsProvider>
        <Table />
        <Menu />
      </TableItemsProvider>
    </>
  );
}

export default App;
