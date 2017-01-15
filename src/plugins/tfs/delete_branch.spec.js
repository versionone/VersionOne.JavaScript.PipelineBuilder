import test from 'ava';
import { delete_branch } from './delete_branch';
import { ALWAYS } from './../constants';

const project = 'project';
const repository = 'repo';
const branch_name = 'new branch name';
const instance_name = 'bitbucket';

test('create_branch with defaults', t => {
    const actual = delete_branch(project, repository, branch_name, instance_name);

    const expected = {
        name: '',
        plugin: {
            args: {
                project,
                repository,
                branch_name,
                instance_name
            },
            label: 'TFS - Delete Branch',
            method: 'delete_branch',
            module: 'tfs',
            name: 'tfsplugin'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('create_branch with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = delete_branch(
        project, repository, branch_name, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                project,
                repository,
                branch_name,
                instance_name,
                additional_key
            },
            label: 'TFS - Delete Branch',
            method: 'delete_branch',
            module: 'tfs',
            name: 'tfsplugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});