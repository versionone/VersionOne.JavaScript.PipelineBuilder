import test from 'ava';
import { add_comment_to_issue } from './add_comment_to_issue';
import { ALWAYS } from './../constants';

const issue_id = '1';
const comment = 'comment';
const instance_name = 'jira';

test('add_comment_to_issue with defaults', t => {
    const actual = add_comment_to_issue(
        issue_id, comment, instance_name
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                issue: issue_id,
                comment,
                instance_name
            },
            label: 'Jira - Add Comment to Issues',
            method: 'add_comment',
            module: 'issue',
            name: 'jiraplugin'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('add_comment_to_issue with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = add_comment_to_issue(
        issue_id, comment, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                issue: issue_id,
                comment,
                instance_name,
                additional_key
            },
            label: 'Jira - Add Comment to Issues',
            method: 'add_comment',
            module: 'issue',
            name: 'jiraplugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});