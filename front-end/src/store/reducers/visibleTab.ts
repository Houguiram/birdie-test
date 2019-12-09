import { Tab } from '@App/types';
import { SET_VIEW, SetViewAction } from '../types';

const visibleTab = (state = 'TABLE' as Tab, action: SetViewAction) => {
  switch (action.type) {
    case SET_VIEW:
      return action.payload;
    default:
      return state;
  }
};

export default visibleTab;