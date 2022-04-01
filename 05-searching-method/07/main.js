const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];

function updateTask(id, newName) {
  tasks.filter((el) => {
    if (el.id == id) {
      el.name = newName;
    }
  });
}
updateTask(2, 'Travelling');
