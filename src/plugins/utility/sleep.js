import { get_definition } from './../base';

export const sleep = (
    seconds,
    when, additional_args, description
) => get_definition({
        seconds
    },
    {
        label: 'Utility - Sleep',
        method: 'sleep',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);