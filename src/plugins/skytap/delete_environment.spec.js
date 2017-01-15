import test from 'ava';
import { delete_environment } from './delete_environment';
import { ALWAYS } from './../constants';

const environment_id = 'env_id';
const account_name = 'account name';

test('delete_environment with defaults', t => {
    const actual = delete_environment(environment_id, account_name);

    const expected = {
        name: '',
        plugin: {
            args: {
                environment_id,
                cloud_account: account_name
            },
            label: 'Skytap - Delete Environment',
            method: 'delete_environment',
            module: 'skytap',
            name: 'skytap'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('delete_environment with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = delete_environment(
        environment_id, account_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                environment_id,
                cloud_account: account_name,
                additional_key
            },
            label: 'Skytap - Delete Environment',
            method: 'delete_environment',
            module: 'skytap',
            name: 'skytap'
        },
        when
    };

    t.deepEqual(actual, expected);
});