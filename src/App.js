import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Modal from './Components/Modal';
import { openModal, cancelEdit } from './Actions/Items';

import './App.css';

class App extends Component {
  state = {
    modalIsOpened: false,
  };

  render() {
    const { modalIsOpened } = this.state;
    const { dispatch } = this.props;

    return (
      <div className="app">
        <Typography component="h1">Modal</Typography>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.setState({ modalIsOpened: true });
              openModal(dispatch);
            }}
          >
            Open modal
          </Button>
          <Modal
            isActive={modalIsOpened}
            handleClose={(isCancel) => {
              this.setState({ modalIsOpened: false });

              if (isCancel) {
                cancelEdit(dispatch);
              }
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ items }) => ({ items });

export default connect(mapStateToProps)(App);
