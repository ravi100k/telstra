import React from 'react';
import App from '../App/App';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adpater from 'enzyme-adapter-react-15';

configure({ adpater: new Adpater() })

describe("My Test Case", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('render 3 traffic signals', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find(<div className="circle" />)).toHaveLength(3);
  // });

})