import test from 'ava';
import { set_workitem_status } from './set_workitem_status';
import { ALWAYS } from './../constants';

const current_status = 'current';
const instance_name = 'instance name';
const number = 'S-12345';
const status = 'status';

test('set_workitem_status with defaults', t => {
    const actual = set_workitem_status(number, status, current_status, instance_name);

    const expected = {
        name: '',
        plugin: {
            args: {
                current_status,
                instance_name,
                number,
                status
            },
            label: 'VersionOne - Set Workitem Status',
            method: 'set_workitem_status',
            module: 'main',
            name: 'v1plugin'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('set_workitem_status with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = set_workitem_status(
        number, status, current_status, instance_name, when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                current_status,
                instance_name,
                number,
                status,
                additional_key
            },
            label: 'VersionOne - Set Workitem Status',
            method: 'set_workitem_status',
            module: 'main',
            name: 'v1plugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});