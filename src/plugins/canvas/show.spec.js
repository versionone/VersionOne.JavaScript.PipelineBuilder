import test from 'ava';
import { show } from './show';
import { ALWAYS } from './../constants';

const resource = 'path-to-canvas';
const label = 'label';

test('show with defaults', t => {
    const actual = show(resource, label);

    const expected = {
        name: '',
        plugin: {
            args: {
                resource,
                label
            },
            label: 'Canvas - Show',
            method: 'show',
            module: 'main',
            name: 'canvas'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('show with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = show(
        resource, label,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                resource,
                label,
                additional_key
            },
            label: 'Canvas - Show',
            method: 'show',
            module: 'main',
            name: 'canvas'
        },
        when
    };

    t.deepEqual(actual, expected);
});