import test from 'ava';
import { automate } from './';
import { ALWAYS } from './../constants';

test('automate plugin has run_task', t => {
    t.true(automate.hasOwnProperty('run_task'));
});

const task = 'task';
const version = '1';
const initial_data = {
    anyKey: 'prop'
};

test('run_task with defaults', t => {
    const actual = automate.run_task(task, version, initial_data);

    const expected = {
        name: '',
        plugin: {
            args: {
                task,
                version,
                initial_data
            },
            label: 'Automate - Run Task',
            method: 'runtask',
            module: 'task',
            name: 'automate'
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

    const actual = automate.run_task(
        task, version, initial_data, when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                task,
                version,
                initial_data,
                additional_key
            },
            label: 'Automate - Run Task',
            method: 'runtask',
            module: 'task',
            name: 'automate'
        },
        when
    };

    t.deepEqual(actual, expected);
});