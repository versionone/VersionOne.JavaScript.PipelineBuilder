import test from 'ava';
import { get_file } from './get_file';
import { ALWAYS } from './../constants';

const repository = 'repo';
const branch = 'master';
const path = './src/plugins/github.js';
const response_key = 'myFile';

test('get_file with defaults', t => {
    const actual = get_file(repository, branch, path, response_key);

    const expected = {
        name: '',
        plugin: {
            args: {
                repository,
                branch,
                path,
                response_key
            },
            label: 'Github - Get File',
            method: 'get_file',
            module: 'main',
            name: 'github'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('get_file with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = get_file(
        repository, branch, path, response_key,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                repository,
                branch,
                path,
                response_key,
                additional_key
            },
            label: 'Github - Get File',
            method: 'get_file',
            module: 'main',
            name: 'github'
        },
        when
    };

    t.deepEqual(actual, expected);
});