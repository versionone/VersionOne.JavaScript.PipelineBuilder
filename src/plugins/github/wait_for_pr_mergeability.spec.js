import test from 'ava';
import { wait_for_pr_mergeability } from './wait_for_pr_mergeability';
import { ALWAYS } from './../constants';

const repository = 'repo';
const pr_number = '1286';
const response_key = 'myKey';

test('wait_for_pr_mergeability with defaults', t => {
    const actual = wait_for_pr_mergeability(repository, pr_number, response_key);

    const expected = {
        name: '',
        plugin: {
            args: {
                repository,
                pr_number,
                response_key
            },
            label: 'Github - Wait for PR Mergeability',
            method: 'wait_for_pr_mergeability',
            module: 'main',
            name: 'github'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('wait_for_pr_mergeability with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = wait_for_pr_mergeability(
        repository, pr_number, response_key,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                repository,
                pr_number,
                response_key,
                additional_key
            },
            label: 'Github - Wait for PR Mergeability',
            method: 'wait_for_pr_mergeability',
            module: 'main',
            name: 'github'
        },
        when
    };

    t.deepEqual(actual, expected);
});