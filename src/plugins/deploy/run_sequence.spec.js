import test from 'ava';
import { run_sequence } from './run_sequence';
import { ALWAYS } from './../constants';

const sequence = 'sequence';
const deployment = 'deployment';
const sequence_data = {};
const params = 'params';

test('run_sequence with defaults', t => {
    const actual = run_sequence(sequence, deployment, sequence_data, params);

    const expected = {
        name: '',
        plugin: {
            args: {
                sequence,
                deployment,
                sequence_data,
                params
            },
            label: 'Deploy - Run Sequence',
            method: 'run_sequence',
            module: 'deployment',
            name: 'deploy'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('run_sequence with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = run_sequence(
        sequence, deployment, sequence_data, params,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                sequence,
                deployment,
                sequence_data,
                params,
                additional_key
            },
            label: 'Deploy - Run Sequence',
            method: 'run_sequence',
            module: 'deployment',
            name: 'deploy'
        },
        when
    };

    t.deepEqual(actual, expected);
});