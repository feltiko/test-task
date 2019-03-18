export default () => ({
  modalTitle: {
    display: 'flex',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#f5f4f2',
    borderBottom: '#6d6f7b',
    fontSize: 18,
  },
  modalContent: {
    minWidth: 400,
  },
  dialogActions: {
    justifyContent: 'flex-start',
    margin: '8px 24px',
    padding: '0 0 24px',
  },
  addNewButton: {
    padding: 0,

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});
