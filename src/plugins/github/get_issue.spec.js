import test from 'ava';
import { get_issue } from './get_issue';
import { ALWAYS } from './../constants';

const issue_number = '22';
const repository = 'repo';

test('get_issue with defaults', t => {
    const actual = get_issue(issue_number, repository);

    const expected = {
        name: '',
        plugin: {
            args: {
                issue_number,
                repository
            },
            label: 'Github - Get Issue',
            method: 'get_issue',
            module: 'main',
            name: 'github'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('get_issue with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = get_issue(
        issue_number, repository,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                issue_number,
                repository,
                additional_key
            },
            label: 'Github - Get Issue',
            method: 'get_issue',
            module: 'main',
            name: 'github'
        },
        when
    };

    t.deepEqual(actual, expected);
});