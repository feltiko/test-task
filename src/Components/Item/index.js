import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Close } from '@material-ui/icons';
import Input from '@material-ui/core/Input';
import { editItem } from '../../Actions/Items';
import styles from './styles';

class Item extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    removeHandler: PropTypes.func.isRequired,
    classes: PropTypes.any,
  };

  state = {
    selectValue: this.props.data ? this.props.data.select : '',
    numberValue: this.props.data ? this.props.data.number : '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data.select !== prevState.selectValue || nextProps.data.number !== prevState.numberValue) {
      editItem(nextProps.dispatch, nextProps.data.id, {
        select: prevState.selectValue,
        number: prevState.numberValue,
      });

      return { prevState };
    } else {
      return { prevState };
    }
  }

  handleChange = (field) => (e) => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { selectValue, numberValue } = this.state;
    const { classes, removeHandler } = this.props;

    return (
      <div>
        <Select
          value={selectValue}
          displayEmpty
          onChange={this.handleChange('selectValue')}
          className={cx([ classes.formItem, classes.formItemSelect ])}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Once">Once</MenuItem>
          <MenuItem value="Double">Double</MenuItem>
          <MenuItem value="Tripple">Tripple</MenuItem>
          <MenuItem value="Quadro">Quadro</MenuItem>
        </Select>
        <Input
          value={numberValue}
          onChange={this.handleChange('numberValue')}
          type="number"
          className={cx([ classes.formItem, classes.formItemNumber ])}
        />
        <IconButton onClick={() => removeHandler()} color="secondary">
          <Close />
        </IconButton>
      </div>
    );
  }
}

const mapPropsToState = (store) => ({ store });
const componentWithStore = connect(mapPropsToState)(Item);

export default withStyles(styles)(componentWithStore);
