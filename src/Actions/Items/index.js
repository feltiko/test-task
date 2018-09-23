import {
  ITEM_ADD,
  ITEM_EDIT,
  ITEM_REMOVE,
  ITEMS_SAVE,
  ITEMS_CANCEL_EDIT,
  ITEMS_MODAL_OPEN,
} from '../../Constants/action-types';

/**
 * Adding item object in store
 * @param {Object} data
 */
export const addItem = (dispatch) => dispatch({ type: ITEM_ADD });

/**
 * Adding item object in store
 * @param {Object} data
 */
export const saveItems = (dispatch) => dispatch({ type: ITEMS_SAVE });

/**
 * Removing selected item from store
 * @param {Number|String} id
 */
export const removeItem = (dispatch, id) => dispatch({ type: ITEM_REMOVE, payload: id });

/**
 * Edit item by id
 * @param {Number|String} id
 */
export const editItem = (dispatch, id, data) => dispatch({ type: ITEM_EDIT, payload: { id, data } });

/**
 * Cancel items editing and restoring old-saved data
 * @param {Number|String} id
 */
export const cancelEdit = (dispatch) => dispatch({ type: ITEMS_CANCEL_EDIT });

/**
 * Removing selected item from store
 * @param {Number|String} id
 */
export const openModal = (dispatch) => dispatch({ type: ITEMS_MODAL_OPEN });
