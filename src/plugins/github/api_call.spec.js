import test from 'ava';
import { api_call } from './api_call';
import { ALWAYS } from './../constants';

const type = 'get';
const url = 'path/data?q=query';
const data = {
    anyKey: 'prop'
};
const response_key = 'elevated key';
const instance_name = 'github';

test('api_call with defaults', t => {
    const actual = api_call(type, url, data, response_key, instance_name);

    const expected = {
        name: '',
        plugin: {
            args: {
                type,
                url,
                data,
                response_key,
                instance_name
            },
            label: 'Github - API Call',
            method: 'api_call',
            module: 'main',
            name: 'github'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('api_call with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = api_call(
        type, url, data, response_key, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                type,
                url,
                data,
                response_key,
                instance_name,
                additional_key
            },
            label: 'Github - API Call',
            method: 'api_call',
            module: 'main',
            name: 'github'
        },
        when
    };

    t.deepEqual(actual, expected);
});