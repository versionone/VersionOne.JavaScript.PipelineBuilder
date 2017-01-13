import test from 'ava';
import { v1 } from './v1';

test('set_workitem_status', t => {
    
    const current_status = 'current';
    const instance_name = 'instance name';
    const number = 'S-12345';
    const status = 'status';
    const when = 'always';

    var actual = v1.set_workitem_status(number, status, current_status, instance_name, when);

    var expected = {
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
    t.pass();
});