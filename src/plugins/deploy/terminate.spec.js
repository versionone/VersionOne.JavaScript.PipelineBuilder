import test from 'ava';
import { terminate } from './terminate';
import { ALWAYS } from './../constants';

test('terminate with defaults', t => {
    const actual = terminate();

    const expected = {
        name: '',
        plugin: {
            args: {},
            label: 'Deploy - Terminate',
            method: 'terminate',
            module: 'deployment',
            name: 'deploy'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('terminate with overridden defaults', t => {
    const when = 'never';
    const additional_arguments = {
        additional_key: 'additional_key'
    };
    const description = 'description';

    const actual = terminate(when, additional_arguments, description);

    const expected = {
        name: description,
        plugin: {
            args: additional_arguments,
            label: 'Deploy - Terminate',
            method: 'terminate',
            module: 'deployment',
            name: 'deploy'
        },
        when
    };

    t.deepEqual(actual, expected);
});