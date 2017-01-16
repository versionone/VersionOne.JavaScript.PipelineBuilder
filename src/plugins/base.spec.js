import test from 'ava';
import { get_definition } from './base';

test('get_definition', t => {
    const args = {
        argument: 'argument',
        overriden_argument: 'overridden_argument'
    };
    const meta = {
        type: 'type',
        label: 'Plugin Type'
    };
    const when = 'never';
    const additional_arguments = {
        additional_argument: 'additional_argument',
        overriden_argument: 'this argument will not be'
    };
    const description = 'description';
    
    
    const actual = get_definition(
        args, meta, when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                argument: args.argument,
                additional_argument: additional_arguments.additional_argument,
                overriden_argument: additional_arguments.overriden_argument
            },
            ...meta
        },
        when
    };

    t.deepEqual(actual, expected);
});