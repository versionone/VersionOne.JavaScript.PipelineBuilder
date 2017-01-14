import test from 'ava';
import { get_url } from './get_url';
import { ALWAYS } from './../constants';

const path = 'path';
const target = 'target';
const instance_name = 'gitlab';

test('get_url with defaults', t => {
    const actual = get_url(path, target, instance_name);

    const expected = {
        name: '',
        plugin: {
            args: {
                path,
                target,
                instance_name
            },
            label: 'Jenkins - Get URL',
            method: 'build',
            module: 'job',
            name: 'jenkins'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('get_url with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = get_url(
        path, target, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                path,
                target,
                instance_name,
                additional_key
            },
            label: 'Jenkins - Get URL',
            method: 'build',
            module: 'job',
            name: 'jenkins'
        },
        when
    };

    t.deepEqual(actual, expected);
});