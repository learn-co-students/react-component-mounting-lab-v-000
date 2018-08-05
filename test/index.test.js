import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { spy, stub, useFakeTimers } from 'sinon'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../src/App';
import Timer from '../src/Timer';

describe('<App />', () => {
  var appWrapper



});





describe('<Timer />', () => {
  var timerWrapper



});
