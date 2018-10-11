import { get_definition } from './../base';

export const get = (
    key, resource,
    when, additional_args, description
) => get_definition({
        key,
        resource
    },
    {
        label: 'Canvas - Get',
        method: 'get',
        module: 'main',
        name: 'canvas'
    },
    when, additional_args, description
);