import test from 'ava';
import { utility } from './utility';

test('conditional', t => {

    const expression = 'a === 3';
    const if_block = { plugin: "if_block" };
    const else_block = { plugin: "else_block" };
    const when = 'always';


    const actual = utility.conditional(expression, if_block, else_block, when);

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
        when: when
    };

    t.deepEqual(actual, expected);
});