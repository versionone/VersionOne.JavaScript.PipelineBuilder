import test from 'ava';
import { create_environment } from './create_environment';
import { ALWAYS } from './../constants';

const template_id = '12345';
const start = 'false';
const account_name = 'account_name';

test('create_environment with defaults', t => {
    const actual = create_environment(template_id, start, account_name);

    const expected = {
        name: '',
        plugin: {
            args: {
                template_id,
                start,
                cloud_account: account_name
            },
            label: 'Skytap - Create Environment',
            method: 'create_environment',
            module: 'skytap',
            name: 'skytap'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('create_environment with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = create_environment(
        template_id, start, account_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                template_id,
                start,
                cloud_account: account_name,
                additional_key
            },
            label: 'Skytap - Create Environment',
            method: 'create_environment',
            module: 'skytap',
            name: 'skytap'
        },
        when
    };

    t.deepEqual(actual, expected);
});