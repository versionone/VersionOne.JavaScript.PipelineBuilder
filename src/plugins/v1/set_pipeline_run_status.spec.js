import test from 'ava';
import { set_pipeline_run_status } from './set_pipeline_run_status';
import { ALWAYS } from './../constants';

test('set_pipeline_run_status with defaults', t => {
    const build_run_oid = 'B-12345';
    const new_status = 'Ready';
    const instance_name = 'v1';
    const complete_workitems = 'false';

    const actual = set_pipeline_run_status(
        build_run_oid, new_status, complete_workitems, instance_name
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                build_run: build_run_oid,
                status: new_status,
                instance_name,
                complete_workitems
            },
            label: 'VersionOne - Set Pipeline Run Status',
            method: 'set_buildrun_status',
            module: 'main',
            name: 'v1plugin'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('set_pipeline_run_status with overridden defaults', t => {
    const build_run_oid = 'B-12345';
    const new_status = 'Ready';
    const instance_name = 'v1';
    const complete_workitems = 'false';
    
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = set_pipeline_run_status(
        build_run_oid, new_status, complete_workitems, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                build_run: build_run_oid,
                status: new_status,
                instance_name,
                complete_workitems,
                additional_key
            },
            label: 'VersionOne - Set Pipeline Run Status',
            method: 'set_buildrun_status',
            module: 'main',
            name: 'v1plugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});