import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import { Dropdown } from '../Dropdown';

configure({adapter: new Adapter()});

describe('Dropdown', () => {
    // test('should render', () => {
    //     const wrapper = shallow(<Dropdown children={<div />} button={<button />}/>)
    //     expect(wrapper).toBeDefined();
    //     expect(wrapper.find('div.dropdown').isEmptyRender()).toBeFalsy();
    // })

    test('should render (snapshot)', () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />}/>)

        expect(wrapper).toMatchSnapshot()
    })
})