import test from 'ava';
import { list_repositories } from './list_repositories';
import { ALWAYS } from './../constants';

const instance_name = 'gitlab';
const response_key = 'mykey';

test('list_repositories with defaults', t => {
    const actual = list_repositories(instance_name, response_key);

    const expected = {
        name: '',
        plugin: {
            args: {
                instance_name,
                response_key
            },
            label: 'Gitlab - List Repositories',
            method: 'list_repositories',
            module: 'main',
            name: 'gitlab'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('list_repositories with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = list_repositories(
        instance_name, response_key,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                instance_name,
                response_key,
                additional_key
            },
            label: 'Gitlab - List Repositories',
            method: 'list_repositories',
            module: 'main',
            name: 'gitlab'
        },
        when
    };

    t.deepEqual(actual, expected);
});