import test from 'ava';
import { create_branch } from './create_branch';
import { ALWAYS } from './../constants';

const project = 'repo';
const reference = 'reference';
const branch_name = 'branch';
const failifexists = 'failifexists';
const instance_name = 'Github';

test('create_branch with defaults', t => {
    const actual = create_branch(project, reference, branch_name, failifexists, instance_name);

    const expected = {
        name: '',
        plugin: {
            args: {
                ns_project: project,
                reference,
                branch_name,
                failifexists,
                instance_name
            },
            label: 'Gitlab - Create Branch',
            method: 'create_branch',
            module: 'main',
            name: 'gitlab'
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
        project, reference, branch_name, failifexists, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                ns_project: project,
                reference,
                branch_name,
                failifexists,
                instance_name,
                additional_key
            },
            label: 'Gitlab - Create Branch',
            method: 'create_branch',
            module: 'main',
            name: 'gitlab'
        },
        when
    };

    t.deepEqual(actual, expected);
});