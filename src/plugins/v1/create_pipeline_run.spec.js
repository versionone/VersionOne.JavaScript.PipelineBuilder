import test from 'ava';
import { create_pipeline_run } from './create_pipeline_run';
import { ALWAYS } from './../constants';

const target_key = 'target workspace key';
const build_project = 'Build Project';
const initial_status = 'In Progress';
const instance_name = 'v1';
const name = 'build run name';
const reference = 'build run reference';

test('create_pipeline_run with defaults', t => {
    const actual = create_pipeline_run(
        build_project, name, reference, initial_status, target_key, instance_name
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                broid_target_key: target_key,
                build_project,
                initial_status,
                instance_name,
                name,
                reference
            },
            label: 'VersionOne - Create Pipeline Run',
            method: 'create_buildrun',
            module: 'main',
            name: 'v1plugin'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('create_pipeline_run with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = create_pipeline_run(
        build_project, name, reference, initial_status, target_key, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                broid_target_key: target_key,
                build_project,
                initial_status,
                instance_name,
                name,
                reference,
                additional_key
            },
            label: 'VersionOne - Create Pipeline Run',
            method: 'create_buildrun',
            module: 'main',
            name: 'v1plugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});