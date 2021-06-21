import { useEffect, useState } from 'react';
import '../App.scss';
import { useTableItems } from '../context/TableItemsContext';

function TableRow({ item }) {
  const [ selected, setSelected ] = useState(false);
  const { dispatch } = useTableItems();
  const handleSelect = (id) => {
    setSelected(!selected);
    dispatch({
      type: 'SELECT',
      payload: { id, selected: !selected }
    });
  }

  useEffect(() => {
    setSelected(item.selected);
  }, [item.selected])

  return (
    <>
      <tr className="table-row">
        <td>
          <div className="first-col">
            <input type="checkbox" id={`table${item.id}`} name={`table${item.id}`} value={`table${item.id}`} checked={ selected } onChange={ () => handleSelect(item.id) }/>
            <label htmlFor={`table${item.id}`}>{item.name}</label>
          </div>
        </td>
        <td>{ item.category }</td>
        <td>{ item.availability }</td>
        <td>{ item.arrival }</td>
      </tr>
    </>
  );
}

export default TableRow;
