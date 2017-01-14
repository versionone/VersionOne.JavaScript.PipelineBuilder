import test from 'ava';
import { read_workspace_file } from './read_workspace_file';
import { ALWAYS } from './../constants';

const job = 'job';
const path = 'path';
const target = 'target';
const instance_name = 'gitlab';

test('read_workspace_file with defaults', t => {
    const actual = read_workspace_file(job, path, target, instance_name);

    const expected = {
        name: '',
        plugin: {
            args: {
                job,
                path,
                target,
                instance_name
            },
            label: 'Jenkins - Read Workspace File',
            method: 'build',
            module: 'job',
            name: 'jenkins'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('read_workspace_file with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = read_workspace_file(
        job, path, target, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                job,
                path,
                target,
                instance_name,
                additional_key
            },
            label: 'Jenkins - Read Workspace File',
            method: 'build',
            module: 'job',
            name: 'jenkins'
        },
        when
    };

    t.deepEqual(actual, expected);
});