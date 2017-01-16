import { get_definition } from './../base';

export const wait_for_data = (
    expression, status, wait_seconds,
    when, additional_args, description
) => get_definition({
        expression,
        status,
        wait_seconds
    },
    {
        label: 'Utility - Wait For Data',
        method: 'wait_for_data',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);