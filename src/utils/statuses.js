const statusList = [
  { id: 1, name: 'New', severity: 'Info' },
  { id: 2, name: 'Quote provided', severity: 'Info' },
  { id: 3, name: 'Received', severity: 'Info' },
  { id: 4, name: 'In Progress', severity: 'Warn' },
  { id: 5, name: 'On Hold', severity: 'Warn' },
  { id: 6, name: 'Completed', severity: 'Success' },
  { id: 7, name: 'Cancelled', severity: 'Danger' },
];

export default function getStatus(id) {
  return statusList.find((status) => status.id === id);
}
