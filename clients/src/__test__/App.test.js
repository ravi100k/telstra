import React from 'react';
import App from '../App/App';
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import Signal from '../App/components/signal';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("My Components test case", () => {

  const propsToSignal = {
    red: 'red',
    yellow: 'black',
    green: 'black',
    next: "yellow",
    current: "red",
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render Signal componets and date and title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find(Signal)).toHaveLength(1);
  });

  it('render 3 traffic signals', () => {
    const wrapper = shallow(<Signal color={propsToSignal} />);
    expect(wrapper.find('div').children()).toHaveLength(6);
  });

  test("Matches the Signal snapshot", () => {
    const SignalComponent = create(<Signal color={propsToSignal} />);
    expect(SignalComponent.toJSON()).toMatchSnapshot();
  });

})