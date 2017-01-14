import test from 'ava';
import { build } from './build';
import { ALWAYS } from './../constants';

const job_name = 'job';
const parameters = {};
const wait = 'false';
const inherit_job_status = 'false';
const regular_expression = '/.*/';
const instance_name = 'jenkins';
const artifact_name = 'artifact_name';

test('build with defaults', t => {
    const actual = build(
        job_name, parameters, wait, inherit_job_status, regular_expression, artifact_name, instance_name
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                job: job_name,
                params: parameters,
                wait,
                inherit: inherit_job_status,
                artifact_regex: regular_expression,
                artifact_name,
                instance_name
            },
            label: 'Jenkins - Build',
            method: 'build',
            module: 'job',
            name: 'jenkins'
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
        job_name, parameters, wait, inherit_job_status, regular_expression, artifact_name, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                job: job_name,
                params: parameters,
                wait,
                inherit: inherit_job_status,
                artifact_regex: regular_expression,
                artifact_name,
                instance_name,
                additional_key
            },
            label: 'Jenkins - Build',
            method: 'build',
            module: 'job',
            name: 'jenkins'
        },
        when
    };

    t.deepEqual(actual, expected);
});