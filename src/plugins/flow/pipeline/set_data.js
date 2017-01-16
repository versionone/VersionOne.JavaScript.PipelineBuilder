import { get_definition } from './../../base';

export const set_data = (
    key, value,
    when, additional_args, description
) => get_definition(
    {
        key,
        value
    },
    {
        label: 'Flow - Pipeline - Set Data',
        method: 'set_data',
        module: 'pipeline',
        name: 'flow'
    },
    when, additional_args, description
);