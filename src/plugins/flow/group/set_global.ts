import { get_definition } from './../../base';

export const set_global = (
    key, value,
    when, additional_args, description
) => get_definition(
    {
        key,
        value
    },
    {
        label: 'Flow - Group - Set Global',
        method: 'set_global',
        module: 'group',
        name: 'flow'
    },
    when, additional_args, description
);