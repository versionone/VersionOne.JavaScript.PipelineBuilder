import test from 'ava';
import { deploy_container } from './deploy_container';
import { ALWAYS } from './../constants';

const image_name = 'image name';
const docker_endpoint_name = 'docker_endpoint_name';

test('deploy_container with defaults', t => {
    const actual = deploy_container(image_name, docker_endpoint_name);

    const expected = {
        name: '',
        plugin: {
            args: {
                image: image_name,
                instance_name: docker_endpoint_name
            },
            label: 'Docker - Deploy Container',
            method: 'deploy_container',
            module: 'dock',
            name: 'dockerplugin'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('deploy_container with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = deploy_container(
        image_name, docker_endpoint_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                image: image_name,
                instance_name: docker_endpoint_name,
                additional_key
            },
            label: 'Docker - Deploy Container',
            method: 'deploy_container',
            module: 'dock',
            name: 'dockerplugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});