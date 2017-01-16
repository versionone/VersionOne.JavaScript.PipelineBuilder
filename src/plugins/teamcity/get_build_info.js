import { get_definition } from './../base';

export const get_build_info = (
    build_number, wait, inherit_build_status, instance_name,
    when, additional_args, description
) => get_definition({
        build_number,
        wait,
        inherit: inherit_build_status,
        instance_name
    },
    {
        label: 'TeamCity - Get Build Info',
        method: 'get_build',
        module: 'job',
        name: 'teamcity'
    },
    when, additional_args, description
);