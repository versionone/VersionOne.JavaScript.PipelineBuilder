import { get_definition } from './../../base';

export const new_version = (
    to_version, increment,
    when, additional_args, description
) => get_definition(
    {
        to_version,
        increment
    },
    {
        label: 'Flow - Project - New Version',
        method: 'new_version',
        module: 'project',
        name: 'flow'
    },
    when, additional_args, description
);