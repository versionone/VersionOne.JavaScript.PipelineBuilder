import test from 'ava';
import { create_branch } from './create_branch';
import { ALWAYS } from './../constants';

const repository = 'repo';
const source_branch = 'source_branch';
const branch_name = 'branch';
const instance_name = 'Github';

test('create_branch with defaults', t => {
    const actual = create_branch(repository, source_branch, branch_name, instance_name);

    const expected = {
        name: '',
        plugin: {
            args: {
                repository,
                source: source_branch,
                branch_name,
                instance_name
            },
            label: 'Github - Create Branch',
            method: 'create_branch',
            module: 'main',
            name: 'github'
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
        repository, source_branch, branch_name, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                repository,
                source: source_branch,
                branch_name,
                instance_name,
                additional_key
            },
            label: 'Github - Create Branch',
            method: 'create_branch',
            module: 'main',
            name: 'github'
        },
        when
    };

    t.deepEqual(actual, expected);
});