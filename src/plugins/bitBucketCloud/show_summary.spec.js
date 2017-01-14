import test from 'ava';
import { show_summary } from './show_summary';
import { ALWAYS } from './../constants';

test('show_summary with defaults', t => {
    const actual = show_summary();

    const expected = {
        name: '',
        plugin: {
            args: {},
            label: 'BitBucket Cloud - Show Summary',
            method: 'show_summary',
            module: 'bitbucket',
            name: 'bitbucket'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('show_summary with overridden defaults', t => {
    const when = 'never';
    const additional_arguments = {
        additional_key: 'additional_key'
    };
    const description = 'description';

    const actual = show_summary(
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: additional_arguments,
            label: 'BitBucket Cloud - Show Summary',
            method: 'show_summary',
            module: 'bitbucket',
            name: 'bitbucket'
        },
        when
    };

    t.deepEqual(actual, expected);
});