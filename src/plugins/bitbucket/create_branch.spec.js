import test from 'ava';
import { create_branch } from './create_branch';
import { ALWAYS } from './../constants';

const project = 'project';
const repository = 'repo';
const source_branch = 'source branch';
const branch_name = 'new branch name';
const instance_name = 'bitbucket';

test('create_branch with defaults', t => {
    const actual = create_branch(project, repository, source_branch, branch_name, instance_name);

    const expected = {
        name: '',
        plugin: {
            args: {
                project,
                repository,
                source_branch,
                branch_name,
                instance_name
            },
            label: 'BitBucket Cloud - Create Branch',
            method: 'create_branch',
            module: 'bitbucket',
            name: 'bitbucket'
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

    const actual = create_branch(
        project, repository, source_branch, branch_name, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                project,
                repository,
                source_branch,
                branch_name,
                instance_name,
                additional_key
            },
            label: 'BitBucket Cloud - Create Branch',
            method: 'create_branch',
            module: 'bitbucket',
            name: 'bitbucket'
        },
        when
    };

    t.deepEqual(actual, expected);
});