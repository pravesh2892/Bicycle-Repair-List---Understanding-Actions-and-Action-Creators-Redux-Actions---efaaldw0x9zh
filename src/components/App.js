
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  repairAdded,
  repairRemoved,
  repairResolved,
  repairUpdated,
  editTask,
} from './actions';
import './styles/App.css';

const App = () => {
  const [owner, setOwner] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const bicycleState = useSelector((state) => state.bicycle);

  const handleAddRepair = () => {
    if (owner && model && description) {
      dispatch(repairAdded(owner, model, description));
    }
  };

  const handleEditRepair = () => {
    if (owner && model && description) {
      dispatch(repairUpdated(bicycleState.item.id, owner, model, description));
    }
  };

  return (
    <div id="main">
      <h1>Bicycle Repair App</h1>
      <div>
        <label htmlFor="owner-text-box">Owner:</label>
        <input
          type="text"
          id="owner-text-box"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="model-text-box">Model:</label>
        <input
          type="text"
          id="model-text-box"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description-text-box">Description:</label>
        <input
          type="text"
          id="description-text-box"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      {bicycleState.editMode ? (
        <button onClick={handleEditRepair}>Update</button>
      ) : (
        <button onClick={handleAddRepair}>+</button>
      )}
      <ul>
        {bicycleState.items.map((item) => (
          <li key={item.id} className="repair-item">
            {item.owner} - {item.model} - {item.description}{' '}
            {item.resolved ? 'Done' : 'Undo'}
            <button onClick={() => dispatch(editTask(item.id, item.owner, item.model, item.description))}>
              Update
            </button>
            <button onClick={() => dispatch(repairRemoved(item.id))}>Delete</button>
            <button onClick={() => dispatch(repairResolved(item.id))}>
              {item.resolved ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
