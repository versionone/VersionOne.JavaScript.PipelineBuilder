import test from 'ava';
import { get } from './get';
import { ALWAYS } from './../constants';

const key = 'workspace key';
const resource = 'url-to-canvas';

test('get with defaults', t => {
    const actual = get(key, resource);

    const expected = {
        name: '',
        plugin: {
            args: {
                key,
                resource
            },
            label: 'Canvas - Get',
            method: 'get',
            module: 'main',
            name: 'canvas'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('get with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = get(
        key, resource,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                key,
                resource,
                additional_key
            },
            label: 'Canvas - Get',
            method: 'get',
            module: 'main',
            name: 'canvas'
        },
        when
    };

    t.deepEqual(actual, expected);
});