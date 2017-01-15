import test from 'ava';
import { transition_issues } from './transition_issues';
import { ALWAYS } from './../constants';

const transition_name = 'transition_name';
const resolution_name = 'resolution_name';
const instance_name = 'jira';

test('transition_issues with defaults', t => {
    const actual = transition_issues(
        transition_name, resolution_name, instance_name
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                transition_name,
                resolution_name,
                instance_name
            },
            label: 'Jira - Transition Issues',
            method: 'transition',
            module: 'issue',
            name: 'jiraplugin'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('transition_issues with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = transition_issues(
        transition_name, resolution_name, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                transition_name,
                resolution_name,
                instance_name,
                additional_key
            },
            label: 'Jira - Transition Issues',
            method: 'transition',
            module: 'issue',
            name: 'jiraplugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});