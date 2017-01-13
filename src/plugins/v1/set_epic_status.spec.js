import test from 'ava';
import { set_epic_status } from './set_epic_status';
import { ALWAYS } from './../constants';

const number = 'E-12345';
const status = 'Done';
const instance_name = 'v1';

test('set_epic_status with defaults', t => {
    const actual = set_epic_status(
        number, status, instance_name
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                number,
                status,
                instance_name
            },
            label: 'VersionOne - Set Epic Status',
            method: 'set_epic_status',
            module: 'main',
            name: 'v1plugin'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('set_epic_status with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = set_epic_status(
        number, status, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                number,
                status,
                instance_name,
                additional_key
            },
            label: 'VersionOne - Set Epic Status',
            method: 'set_epic_status',
            module: 'main',
            name: 'v1plugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});