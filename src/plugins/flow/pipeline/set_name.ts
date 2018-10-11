import { get_definition } from './../../base';

export const set_name = (
    name,
    when, additional_args, description
) => get_definition(
    {
        name
    },
    {
        label: 'Flow - Pipeline - Set Name',
        method: 'set_name',
        module: 'pipeline',
        name: 'flow'
    },
    when, additional_args, description
);