import { get_definition } from './../base';

export const get_registry = (
    key, name, required=true,
    when, additional_args, description
) => get_definition({
        key,
        name,
        required: String(required)
    },
    {
        label: 'Utility - Get Registry',
        method: 'get_registry',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);