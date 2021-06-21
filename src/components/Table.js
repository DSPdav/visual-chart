import { Fragment, useState } from 'react';
import '../App.scss';
import { useTableItems } from '../context/TableItemsContext';
import TableRow from './TableRow';

function Table() {
  const [ selected, setSelected ] = useState(false);
  const { state, dispatch } = useTableItems();
  const displayTableRow = state.items.map(table => (
    <Fragment key={table.id}>
      <TableRow item={ table } />
    </Fragment>
  ));

  const handleSelectAll = () => {
    setSelected(!selected);
    selected ? dispatch({type: 'UNSELECT_ALL'}) : dispatch({type: 'SELECT_ALL'});
  }

  return (
    <table className="table" cellSpacing="0" cellPadding="0">
      <thead className="table-head">
        <tr>
          <td>
            <div className="first-col">
              <input type="checkbox" id="name" name="name" value="select-all" checked={ selected } onChange={ handleSelectAll } />
              <label htmlFor="name" className="head-col">Name</label>
            </div>
          </td>
          <td className="head-col">Category</td>
          <td className="head-col">Availability</td>
          <td className="head-col">Arrival</td>
        </tr>
      </thead>
      <tbody>
        { displayTableRow }
      </tbody>
    </table>
  );
}

export default Table;
