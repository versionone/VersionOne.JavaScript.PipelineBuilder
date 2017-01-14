import test from 'ava';
import { deploy_application } from './deploy_application';
import { ALWAYS } from './../constants';

const template = 'template';
const version = '1';
const data_store = {};
const sequence_data = {};
const sequence_params = '';

test('deploy_application with defaults', t => {
    const actual = deploy_application(template, version, data_store, sequence_data, sequence_params);

    const expected = {
        name: '',
        plugin: {
            args: {
                template,
                version,
                datastore: data_store,
                sequence_data,
                params: sequence_params
            },
            label: 'Deploy - Deploy an Application',
            method: 'deploy',
            module: 'deployment',
            name: 'deploy'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('deploy_application with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = deploy_application(
        template, version, data_store, sequence_data, sequence_params,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                template,
                version,
                datastore: data_store,
                sequence_data,
                params: sequence_params,
                additional_key
            },
            label: 'Deploy - Deploy an Application',
            method: 'deploy',
            module: 'deployment',
            name: 'deploy'
        },
        when
    };

    t.deepEqual(actual, expected);
});