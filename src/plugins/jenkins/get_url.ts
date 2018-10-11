import { get_definition } from './../base';

export const get_url = (
    path, target, instance_name,
    when, additional_args, description
) => get_definition({
        path,
        target,
        instance_name
    },
    {
        label: 'Jenkins - Get URL',
        method: 'build',
        module: 'job',
        name: 'jenkins'
    },
    when, additional_args, description
);