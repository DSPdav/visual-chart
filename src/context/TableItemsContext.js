import { createContext, useContext, useReducer } from 'react';

const tableItems = [
  {
    id: 1,
    name: "Table 01",
    category: "Category 01",
    availability: "Available",
    arrival: "Arrived",
    selected: false
  },
  {
    id: 2,
    name: "Table 02",
    category: "Category 01",
    availability: "FULL",
    arrival: "Hasn't arrived",
    selected: false
  },
  {
    id: 3,
    name: "Table 03",
    category: "Category 01",
    availability: "Available",
    arrival: "Arrived",
    selected: false
  },
  {
    id: 4,
    name: "Table 04",
    category: "Category 01",
    availability: "FULL",
    arrival: "Arrived",
    selected: false
  },
];

const initState = {
  items: tableItems,
}

function tableItemsReducer(state, action) {
  switch (action.type) {
    case 'SELECT_ALL':
      return {
        items: state.items.map(item => ({
          ...item,
          selected: true
        })),
      };

    case 'UNSELECT_ALL':
      return {
        items: state.items.map(item => ({
          ...item,
          selected: false
        })),
      };
      
    case 'SELECT':
      return {
        items: state.items.map(item => {
          return (item.id === action.payload.id) ? { ...item, selected: true } : item;
        }),
      };
    
    case 'UNSELECT':
      return {
        items: state.items.map(item => {
          return (item.id === action.payload.id) ? { ...item, selected: false } : item;
        }),
      };
    
    case 'DELETE':
      return {
        items: state.items.filter(item => item.selected === false)
      };
  
    default:
      return;
  }
}

const TableItemsContext = createContext();

export function TableItemsProvider({ children }) {
  const [ state, dispatch ] = useReducer(tableItemsReducer, initState);

  const value = { state, dispatch }
  return (
    <TableItemsContext.Provider value={ value }>
      { children }
    </TableItemsContext.Provider>
  )
}

export function useTableItems() {
  const context = useContext(TableItemsContext);

  return context;
}