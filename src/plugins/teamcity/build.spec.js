import test from 'ava';
import { build } from './build';
import { ALWAYS } from './../constants';

const build_id = 'job';
const parameters = {};
const branch_name = 'branch_name';
const commit_id = 'commit id';
const snapshot_id = 'snapshot';
const vcs_instance_id = 'vcs_instance_id';
const time_out = '10';
const wait = 'false';
const inherit_build_status = 'false';
const instance_name = 'jenkins';

test('build with defaults', t => {
    const actual = build(
        build_id, parameters, branch_name, commit_id, snapshot_id, vcs_instance_id,
        time_out, wait, inherit_build_status, instance_name
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                build_id,
                params: parameters,
                branch: branch_name,
                commit_id,
                snapshot_id,
                vcs_instance_id,
                timeout: time_out,
                wait,
                inherit: inherit_build_status,
                instance_name
            },
            label: 'TeamCity - Build',
            method: 'build',
            module: 'job',
            name: 'teamcity'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('build with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = build(
        build_id, parameters, branch_name, commit_id, snapshot_id, vcs_instance_id,
        time_out, wait, inherit_build_status, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                build_id,
                params: parameters,
                branch: branch_name,
                commit_id,
                snapshot_id,
                vcs_instance_id,
                timeout: time_out,
                wait,
                inherit: inherit_build_status,
                instance_name,
                additional_key
            },
            label: 'TeamCity - Build',
            method: 'build',
            module: 'job',
            name: 'teamcity'
        },
        when
    };

    t.deepEqual(actual, expected);
});