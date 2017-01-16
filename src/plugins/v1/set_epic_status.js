import { get_definition } from './../base';

export const set_epic_status = (
    number, status, instance_name,
    when, additional_args, description
) => get_definition({
        number,
        status,
        instance_name
    },
    {
        label: 'VersionOne - Set Epic Status',
        method: 'set_epic_status',
        module: 'main',
        name: 'v1plugin'
    },
    when, additional_args, description
);