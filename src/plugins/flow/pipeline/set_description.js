import { ALWAYS } from './../../constants';
import { get_definition } from './../../base';

export const set_description = (
    value,
    when=ALWAYS, additional_args={}, description=''
) => get_definition(
    {
        description: value
    },
    {
        label: 'Flow - Pipeline - Set Description',
        method: 'set_description',
        module: 'pipeline',
        name: 'flow'
    },
    when, additional_args, description
);