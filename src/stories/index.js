import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import Modal from '../Components/Modal';
import Item from '../Components/Item';
import store from '../Store';

storiesOf('Modal', module).add('Default modal', () => (
  <Provider store={store}>
    <Modal handleClose={action('closePopup')} isActive={true} />
  </Provider>
));

storiesOf('Modal', module).add('Modal item', () => (
  <Provider store={store}>
    <Item removeHandler={action('removeItem')} data={{ select: 'Once', number: 322 }} />
  </Provider>
));
