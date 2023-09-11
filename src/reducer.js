
import { combineReducers } from 'redux';

const initialState = {
  items: [], // List of all repairs
  item: {
    owner: '',
    model: '',
    description: '',
  }, // Current item being edited or added
  editMode: false, // Indicates if any item is being updated
};

const bicycleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'repairAdded':
      // Add a new repair entry to the list
      return {
        ...state,
        items: [...state.items, action.payload],
        item: initialState.item, // Clear the input fields
      };

    case 'repairRemoved':
      // Remove a repair entry by id
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case 'repairResolved':
      // Mark a repair as done or undone by id
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, resolved: !item.resolved }
            : item
        ),
      };

    case 'repairUpdated':
      // Update a repair entry by id
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        item: initialState.item, // Clear the input fields
      };

    case 'editTask':
      // Enable edit mode and set the item being edited
      return {
        ...state,
        editMode: true,
        item: { ...action.payload },
      };

    default:
      return state;
  }
};

export default combineReducers({
  bicycle: bicycleReducer,
});
