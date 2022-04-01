const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];

function deleteTask(id) {
  let delIndex = tasks.findIndex((el) => el.id === id);
  if (delIndex !== -1) {
    tasks.splice(delIndex, 1);
  }
}

deleteTask(1);
tasks;
