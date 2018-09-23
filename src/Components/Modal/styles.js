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
    flexDirection: 'row-reverse',
  },
  addNewButton: {
    padding: 0,

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});
