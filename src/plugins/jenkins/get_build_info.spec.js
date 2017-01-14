import test from 'ava';
import { get_build_info } from './get_build_info';
import { ALWAYS } from './../constants';

const job_name = 'job';
const build_number = '1';
const wait = 'false';
const inherit_job_status = 'false';
const regular_expression = '/.*/';
const instance_name = 'jenkins';
const artifact_name = 'artifact_name';

test('get_build_info with defaults', t => {
    const actual = get_build_info(
        job_name, build_number, wait, inherit_job_status, regular_expression, artifact_name, instance_name
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                job: job_name,
                build_number,
                wait,
                inherit: inherit_job_status,
                artifact_regex: regular_expression,
                artifact_name,
                instance_name
            },
            label: 'Jenkins -  Get Build Info',
            method: 'build',
            module: 'job',
            name: 'jenkins'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('get_build_info with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = get_build_info(
        job_name, build_number, wait, inherit_job_status, regular_expression, artifact_name, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                job: job_name,
                build_number,
                wait,
                inherit: inherit_job_status,
                artifact_regex: regular_expression,
                artifact_name,
                instance_name,
                additional_key
            },
            label: 'Jenkins -  Get Build Info',
            method: 'build',
            module: 'job',
            name: 'jenkins'
        },
        when
    };

    t.deepEqual(actual, expected);
});