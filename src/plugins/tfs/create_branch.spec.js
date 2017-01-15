import test from 'ava';
import { create_branch } from './create_branch';
import { ALWAYS } from './../constants';

const project = 'project';
const repository = 'repo';
const source_branch = 'source_branch';
const branch_name = 'branch';
const instance_name = 'Github';

test('create_branch with defaults', t => {
    const actual = create_branch(project, repository, source_branch, branch_name, instance_name);

    const expected = {
        name: '',
        plugin: {
            args: {
                project,
                repository,
                source: source_branch,
                branch_name,
                instance_name
            },
            label: 'TFS - Create Branch',
            method: 'create_branch',
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
                source: source_branch,
                branch_name,
                instance_name,
                additional_key
            },
            label: 'TFS - Create Branch',
            method: 'create_branch',
            module: 'tfs',
            name: 'tfsplugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});