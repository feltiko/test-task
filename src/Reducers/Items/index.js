import {
  ITEM_ADD,
  ITEM_REMOVE,
  ITEM_EDIT,
  ITEMS_SAVE,
  ITEMS_MODAL_OPEN,
  ITEMS_CANCEL_EDIT,
} from '../../Constants/action-types';
import { items as initialState } from '../../State';

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
      const newItem = {
        id,
        select: data.select,
        number: data.number,
      };

      itemsData[index] = newItem;

      return { ...state, data: itemsData };
    }
    case ITEM_REMOVE: {
      const id = action.payload;
      const removedArr = state.data.filter((item) => item.id !== id);

      return { ...state, data: removedArr };
    }
    case ITEMS_CANCEL_EDIT: {
      const data = state.buffer;

      return { data, buffer: data };
    }
    case ITEMS_MODAL_OPEN: {
      const buffer = state.data.slice(0);

      return { data: state.data, buffer };
    }
    case ITEMS_SAVE: {
      const data = state.data;

      return { data, buffer: null };
    }
    default: {
      return state;
    }
  }
};

export default itemsReducer;
