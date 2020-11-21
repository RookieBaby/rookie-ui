import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { getDOMNode, getInstance } from '@test/testUtils';
import RadioGroup from '../RadioGroup';
import Radio from '..';

describe('RadioGroup', () => {
    it('Should render a radio group', () => {
        const instance = getDOMNode(
            <RadioGroup>
                <Radio>Test1</Radio>
                <Radio>Test2</Radio>
            </RadioGroup>
        );
        expect(instance.querySelectorAll('.rs-radio').length).toBe(2);
    });

    it('Should have a name in input', () => {
        const name = 'Test';
        const instance = getDOMNode(
            <RadioGroup name={name}>
                <Radio>Test1</Radio>
                <Radio>Test2</Radio>
            </RadioGroup>
        );
        expect(instance.querySelectorAll('input[name="Test"]').length).toBe(2);
    });

    it('Should have `radio-inline` className in radio', () => {
        const instance = getDOMNode(
            <RadioGroup inline>
                <Radio>Test1</Radio>
                <Radio>Test2</Radio>
            </RadioGroup>
        );

        expect(instance.className.match(/\brs-radio-group-inline\b/)).toBeTruthy;
        expect(instance.querySelectorAll('.rs-radio-inline').length).toBe(2);
    });

    it('Should output a h1', () => {
        let instance = getDOMNode(
            <RadioGroup inline>
                <h1>Group</h1>
                <Radio>Test1</Radio>
            </RadioGroup>
        );
        expect(instance.querySelectorAll('.h1')).toBeTruthy;
    });

    it('Should be checked when set value', () => {
        const instance = getDOMNode(
            <RadioGroup value={2}>
                <Radio value={1}>Test1</Radio>
                <Radio value={2}>Test2</Radio>
                <Radio value={3}>Test2</Radio>
                <Radio value={4}>Test2</Radio>
            </RadioGroup>
        );
        const radios = instance.querySelectorAll('.rs-radio');
        expect(radios[1].className.match(/\bradio-checked\b/)).toBeTruthy;
    });

    it('Should be checked when set defaultValue', () => {
        const instance = getDOMNode(
            <RadioGroup defaultValue={2}>
                <Radio value={1}>Test1</Radio>
                <Radio value={2}>Test2</Radio>
                <Radio value={3}>Test2</Radio>
                <Radio>Test2</Radio>
            </RadioGroup>
        );
        const radios = instance.querySelectorAll('.rs-radio');
        expect(radios[1].className.match(/\bradio-checked\b/)).toBeTruthy;
    });

    it('Should call onChange callback', (done) => {
        const instance = getDOMNode(
            <RadioGroup
                onChange={(value) => {
                    if (value === 3) {
                        done();
                    }
                }}
            >
                <Radio value={1}>Test1</Radio>
                <Radio value={2}>Test2</Radio>
                <Radio value={3}>Test2</Radio>
                <Radio value={4}>Test2</Radio>
            </RadioGroup>
        );

        const radios = instance.querySelectorAll('.rs-radio');
        ReactTestUtils.Simulate.change(radios[2].querySelector('input'));
    });

    it('Should call onChange callback', (done) => {
        let count = 0;

        function onDone() {
            count++;
            if (count === 2) {
                done();
            }
        }

        const instance = getDOMNode(
            <RadioGroup onChange={onDone}>
                <Radio value={1}>Test1</Radio>
                <Radio value={2}>Test2</Radio>
                <Radio value={3} onChange={onDone}>
                    Test2
                </Radio>
                <Radio value={4}>Test2</Radio>
            </RadioGroup>
        );

        const radios = instance.querySelectorAll('.rs-radio');
        ReactTestUtils.Simulate.change(radios[2].querySelector('input'));
    });

    it('Should call onChange callback and return correct parameters', (done) => {
        const instance = getDOMNode(
            <RadioGroup
                name="test"
                onChange={(value, event) => {
                    if (value === 3 && event.target.name === 'test') {
                        done();
                    }
                }}
            >
                <Radio value={1}>Test1</Radio>
                <Radio value={2}>Test2</Radio>
                <Radio value={3}>Test2</Radio>
                <Radio value={4}>Test2</Radio>
            </RadioGroup>
        );

        const radios = instance.querySelectorAll('.rs-radio');
        ReactTestUtils.Simulate.change(radios[2].querySelector('input'));
    });

    it('Should be selected as false', () => {
        const instance = getDOMNode(
            <RadioGroup value={false}>
                <Radio value={true}>true</Radio>
                <Radio value={false}>false</Radio>
            </RadioGroup>
        );
        expect(instance.querySelector('.rs-radio-checked').innerText).toBe('false');
    });

    it('Should have a custom className', () => {
        const instance = getDOMNode(<RadioGroup className="custom" />);
        expect(instance.className.match(/\bcustom\b/)).toBeTruthy;
    });

    it('Should have a custom style', () => {
        const fontSize = '12px';
        const instance = getDOMNode(<RadioGroup style={{ fontSize }} />);
        expect(instance.style.fontSize).toBe(fontSize);
    });

    it('Should have a custom className prefix', () => {
        const instance = getDOMNode(<RadioGroup classPrefix="custom-prefix" />);
        expect(instance.className.match(/\bcustom-prefix\b/)).toBeTruthy;
    });

    it('Should apply appearance', () => {
        const instance = getInstance(<RadioGroup appearance="picker" />);

        ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'rs-radio-group-picker');
    });
});
