import { get_definition } from './../../base';

export const evaluate_workitems = (
    expression, key, count,
    when, additional_args, description
) => get_definition(
    {
        expression,
        key,
        count
    },
    {
        label: 'Flow - Manifest - Evaluate Workitems',
        method: 'evaluate_workitems',
        module: 'manifest',
        name: 'flow'
    },
    when, additional_args, description
);