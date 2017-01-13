import test from 'ava';
import { conditional } from './conditional';
import { ALWAYS } from './../constants';

test('conditional with defaults', t => {
    const expression = 'a === 3';
    const if_block = { plugin: "if_block" };
    const else_block = { plugin: "else_block" };
    
    const actual = conditional(expression, if_block, else_block);

    const expected = {
        name: '',
        plugin: {
            args: {
                action: if_block.plugin,
                else_action: else_block.plugin,
                expression
            },
            label: 'Utility - Conditional',
            method: 'conditional',
            module: 'utility',
            name: 'utility'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('conditional with overridden defaults', t => {
    const expression = 'a === 3';
    const if_block = { plugin: "if_block" };
    const else_block = { plugin: "else_block" };
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description'; 
    
    const actual = conditional(
        expression, if_block, else_block, when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                action: if_block.plugin,
                else_action: else_block.plugin,
                expression,
                additional_key
            },
            label: 'Utility - Conditional',
            method: 'conditional',
            module: 'utility',
            name: 'utility'
        },
        when
    };

    t.deepEqual(actual, expected);
});