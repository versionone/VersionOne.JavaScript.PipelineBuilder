import test from 'ava';
import { get_build_info } from './get_build_info';
import { ALWAYS } from './../constants';

const build_number = '1';
const wait = 'false';
const inherit_build_status = 'false';
const instance_name = 'teamcity';

test('get_build_info with defaults', t => {
    const actual = get_build_info(
        build_number, wait, inherit_build_status, instance_name
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                build_number,
                wait,
                inherit: inherit_build_status,
                instance_name
            },
            label: 'TeamCity - Get Build Info',
            method: 'get_build',
            module: 'job',
            name: 'teamcity'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('get_build_info with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = get_build_info(
        build_number, wait, inherit_build_status, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                build_number,
                wait,
                inherit: inherit_build_status,
                instance_name,
                additional_key
            },
            label: 'TeamCity - Get Build Info',
            method: 'get_build',
            module: 'job',
            name: 'teamcity'
        },
        when
    };

    t.deepEqual(actual, expected);
});