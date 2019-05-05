import * as React from 'react';
import { shallow } from 'enzyme';

import Inputfield from '../../../components/InputField/InputField';

describe('<InputField/>', () => {
  test('should render', () => {
    const wrapper = shallow(<Inputfield/>);
    expect(wrapper).toMatchSnapshot();
  });
});
