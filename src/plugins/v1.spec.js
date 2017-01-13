import test from 'ava';
import { v1 } from './v1';

test('set_workitem_status', t => {
    const current_status = 'current';
    const instance_name = 'instance name';
    const number = 'S-12345';
    const status = 'status';
    const when = 'always';

    const actual = v1.set_workitem_status(number, status, current_status, instance_name, when);

    const expected = {
        name: '',
        plugin: {
            args: {
                current_status,
                instance_name,
                number,
                status
            },
            label: 'VersionOne - Set Workitem Status',
            method: 'set_workitem_status',
            module: 'main',
            name: 'v1plugin'
        },
        when: when
    };

    t.deepEqual(actual, expected);
});

test('create_pipeline_run', t => {
    const target_key = 'target workspace key';
    const build_project = 'Build Project';
    const initial_status = 'In Progress';
    const instance_name = 'v1';
    const name = 'build run name';
    const reference = 'build run reference';
    const when = 'always';

    const actual = v1.create_pipeline_run(
        build_project, name, reference, initial_status, target_key, instance_name, when
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
        when
    };

    t.deepEqual(actual, expected);
});