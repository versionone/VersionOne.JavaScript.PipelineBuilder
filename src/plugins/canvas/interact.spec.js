import test from 'ava';
import { interact } from './interact';
import { ALWAYS } from './../constants';

const resource = 'path-to-canvas';
const tags = ['it', 'dev'];

test('interact with defaults', t => {
    const actual = interact(resource, tags);

    const expected = {
        name: '',
        plugin: {
            args: {
                resource
            },
            kind: 'canvas',
            label: 'Canvas - Get',
            method: 'get',
            module: 'main',
            name: 'canvas',
            type: 'interaction'
        },
        tags,
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('interact with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = interact(
        resource, tags,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                resource,
                additional_key
            },
            kind: 'canvas',
            label: 'Canvas - Get',
            method: 'get',
            module: 'main',
            name: 'canvas',
            type: 'interaction'
        },
        tags,
        when
    };

    t.deepEqual(actual, expected);
});