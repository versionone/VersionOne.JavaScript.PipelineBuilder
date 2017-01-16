import { ALWAYS } from './../../constants';
import { get_definition } from './../../base';

export const set_global = (
    key, value,
    when=ALWAYS, additional_args={}, description=''
) => get_definition(
    {
        key,
        value
    },
    {
        label: 'Flow - Group - Set Global',
        method: 'set_global',
        module: 'pipeline',
        name: 'flow'
    },
    when, additional_args, description
);