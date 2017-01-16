import { get_definition } from './../../base';

export const evaluate_changes = (
    expression, key, count,
    when, additional_args, description
) => get_definition(
    {
        expression,
        key,
        count
    },
    {
        label: 'Flow - Manifest - Evaluate Changes',
        method: 'evaluate_changes',
        module: 'manifest',
        name: 'flow'
    },
    when, additional_args, description
);