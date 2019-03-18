import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Close } from '@material-ui/icons';
import { saveItems, removeItem, addItem } from '../../Actions/Items';
import Item from '../Item';

import styles from './styles';

class NumberStructureModal extends Component {
  static propTypes = {
    handleClose: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
  };

  handleAdd = () => addItem(this.props.dispatch);
  handleRemove = (id) => removeItem(this.props.dispatch, id);
  handleSave = () => {
    const { handleClose, dispatch } = this.props;

    saveItems(dispatch);
    handleClose(false);
  };

  handleClose = () => {
    const { handleClose } = this.props;

    handleClose(true);
  };

  render() {
    const { isActive, classes, items: { data } } = this.props;

    return (
      <Dialog open={isActive} className={classes.modal} onClose={this.handleClose}>
        <DialogTitle>
          <Typography className={classes.modalTitle} gutterBottom>
            Some title text
            <IconButton className="classname-bi" onClick={this.handleClose}>
              <Close />
            </IconButton>
          </Typography>
        </DialogTitle>
        <DialogContent className={classes.modalContent}>
          {data && data.length ? (
            data.map((val) => <Item key={val.id} data={val} removeHandler={() => this.handleRemove(val.id)} />)
          ) : <div>No items found</div>}
          <Button disableRipple={true} color="primary" className={classes.addNewButton} onClick={this.handleAdd}>
            Add new item
          </Button>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button variant="contained" onClick={this.handleSave} color="primary">
            Save
          </Button>
          <Button onClick={this.handleClose} color="default">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapPropsToState = (store) => ({ items: store.items });
const componentWithStore = connect(mapPropsToState)(NumberStructureModal);

export default withStyles(styles)(componentWithStore);
