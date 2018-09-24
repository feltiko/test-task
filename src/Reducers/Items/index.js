import {
  ITEM_ADD,
  ITEM_REMOVE,
  ITEM_EDIT,
  ITEMS_SAVE,
  ITEMS_MODAL_OPEN,
  ITEMS_CANCEL_EDIT,
} from '../../Constants/action-types';
import { items as initialState } from '../../State';

let buffer = null;

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_ADD: {
      const data = state.data;
      const lastId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      const newItem = {
        id: lastId,
        select: '',
        number: '',
      };

      return { ...state, data: [ ...data, newItem ] };
    }
    case ITEM_EDIT: {
      const { id, data } = action.payload;
      const itemsData = state.data;
      const index = itemsData.findIndex((val) => val.id === id);
      const updItem = {
        id,
        select: data.select,
        number: data.number,
      };

      itemsData[index] = updItem;

      return { ...state, data: itemsData };
    }
    case ITEM_REMOVE: {
      const id = action.payload;
      const removedArr = state.data.filter((item) => item.id !== id);

      return { ...state, data: removedArr };
    }
    case ITEMS_CANCEL_EDIT: {
      const data = buffer;
      const oldData = Object.keys(data).map((val) => ({
        id: data[val].id,
        select: data[val].select,
        number: data[val].number,
      }));

      return { ...state, canChange: false, data: oldData };
    }
    case ITEMS_MODAL_OPEN: {
      buffer = Object.assign({}, state.data);

      return { data: state.data, canChange: true };
    }
    case ITEMS_SAVE: {
      const data = state.data;

      return { data };
    }
    default: {
      return state;
    }
  }
};

export default itemsReducer;
