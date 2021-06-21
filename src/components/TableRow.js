import { useEffect, useState } from 'react';
import '../App.scss';
import { useTableItems } from '../context/TableItemsContext';

function TableRow({ item, onSelectAll }) {
  const [ selected, setSelected ] = useState(false);
  const { state, dispatch } = useTableItems();
  const handleSelect = (id) => {
    if (selected) {
      dispatch({
        type: 'UNSELECT',
        payload: { id }
      });
      setSelected(false);
    } else {
      dispatch({
        type: 'SELECT',
        payload: { id }
      });
      setSelected(true);
    }
  }

  const len = state.items.filter(item=> item.selected === true).length

  useEffect(() => {
    (len === state.items.length) && onSelectAll(true);
    (len === state.items.length - 1) && onSelectAll(false);
  }, [len])

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
