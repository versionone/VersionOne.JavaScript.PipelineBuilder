import test from 'ava';
import { bamboo } from './';
import { ALWAYS } from './../constants';

test('automate plugin has build', t => {
    t.true(bamboo.hasOwnProperty("build"))
});

const build_id = 'build id';
const revision = '1';
const parameters = ``;
const wait = 'true';
const inherit_build_status = 'true';
const instance_name = 'bamboo';

test('run_task with defaults', t => {
    const actual = bamboo.build(
        build_id, revision, parameters, wait, inherit_build_status, instance_name
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                build_id,
                revision,
                params: parameters,
                wait,
                inherit: inherit_build_status,
                instance_name
            },
            label: 'Bamboo - Build',
            method: 'build',
            module: 'job',
            name: 'bamboo'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('run_task with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = bamboo.build(
        build_id, revision, parameters, wait, inherit_build_status, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                build_id,
                revision,
                params: parameters,
                wait,
                inherit: inherit_build_status,
                instance_name,
                additional_key
            },
            label: 'Bamboo - Build',
            method: 'build',
            module: 'job',
            name: 'bamboo'
        },
        when
    };

    t.deepEqual(actual, expected);
});