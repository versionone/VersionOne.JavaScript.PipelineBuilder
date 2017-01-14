import test from 'ava';
import { get_epic_workitems } from './get_epic_workitems';
import { ALWAYS } from './../constants';

const number = 'E-12345';
const instance_name = 'v1';

test('get_epic_workitems with defaults', t => {
    const actual = get_epic_workitems(
        number, instance_name
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                number,
                instance_name
            },
            label: 'VersionOne - Get Epic Workitems',
            method: 'get_epic_workitems',
            module: 'main',
            name: 'v1plugin'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('get_epic_workitems with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = get_epic_workitems(
        number, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                number,
                instance_name,
                additional_key
            },
            label: 'VersionOne - Get Epic Workitems',
            method: 'get_epic_workitems',
            module: 'main',
            name: 'v1plugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});