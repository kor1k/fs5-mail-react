import React from 'react'
import Feedback from './index'

describe('Feedback from contaiener ', () => {
    it('Feedback from render', () => {
        const wrapper = shallow(<Feedback />)
        expect(wrapper).toMatchSnapshot()
    });
});