import React from 'react'
import MailItem from './index'

describe('Feedback from container', () => {
    const mail = {
        id: 1,
        from: 'test@test.com',
        subject: 'Test subject',
        text: 'Mail text'
    }

    const mail2 = {
        id: 2,
        from: 'test@test.com',
        subject: 'Test subject',
        text: 'Mail text'
    }
    it('One mail render', () => {
        const result = shallow(<MailItem mail={mail}/>)
        expect(result).toMatchSnapshot()
    });
    describe('Inside describe', () => {
        it('Inside test', () => {
            const result = shallow(<MailItem mail={mail2}/>)
            expect(result).toMatchSnapshot()
        });
    });
});