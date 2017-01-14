import test from 'ava';
import { octopus } from './';
import { ALWAYS } from './../constants';

test('octopus plugin has deploy', t => {
    t.true(octopus.hasOwnProperty('deploy'));
});

const environment = 'environment';
const project = 'project';
const release = 'release';
const additional = {};
const wait = 'false';
const inherit = 'false';
const instance_name = 'octopus';

test('deploy with defaults', t => {
    const actual = octopus.deploy(
        environment, project, release, additional, wait, inherit, instance_name
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                environment,
                project,
                release,
                additional,
                wait,
                inherit,
                instance_name
            },
            label: 'octopus - Deploy',
            method: 'deploy',
            module: 'octo',
            name: 'octopus'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('deploy with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = octopus.deploy(
        environment, project, release, additional, wait, inherit, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                environment,
                project,
                release,
                additional,
                wait,
                inherit,
                instance_name,
                additional_key
            },
            label: 'octopus - Deploy',
            method: 'deploy',
            module: 'octo',
            name: 'octopus'
        },
        when
    };

    t.deepEqual(actual, expected);
});