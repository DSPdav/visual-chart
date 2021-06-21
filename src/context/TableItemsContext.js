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
  selectedItems: []
}

function tableItemsReducer(state, action) {
  switch (action.type) {
    case 'SELECT_ALL':
      state.items = state.items.map(item => ({
        ...item,
        selected: true
      }));
      state.selectedItems = state.items.filter(item => item.selected === true).map(item => item.id);
      return state;

    case 'UNSELECT_ALL':
      state.items = state.items.map(item => ({
        ...item,
        selected: false
      }));
      state.selectedItems = [];
      return state;
      
    case 'SELECT':
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, selected: action.payload.selected };
        } else {
          return item;
        }
      });
      state.selectedItems = state.items.filter(item => item.selected === true).map(item => item.id);
      return state;
    
    case 'DELETE':
      return state.tableItems.filter(item => item.selected === false);
  
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