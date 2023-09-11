// In your actions.js file
export const repairAdded = (owner, model, description) => ({
  type: 'repairAdded',
  payload: {
    id: Date.now(), // Generate a unique ID (you can use a library for this)
    owner,
    model,
    description,
    resolved: false, // Set resolved to false by default
  },
});

export const repairRemoved = (id) => ({
  type: 'repairRemoved',
  payload: {
    id,
  },
});

export const repairResolved = (id) => ({
  type: 'repairResolved',
  payload: {
    id,
  },
});

export const repairUpdated = (id, owner, model, description) => ({
  type: 'repairUpdated',
  payload: {
    id,
    owner,
    model,
    description,
  },
});

export const editTask = (id, owner, model, description) => ({
  type: 'editTask',
  payload: {
    id,
    owner,
    model,
    description,
  },
});
