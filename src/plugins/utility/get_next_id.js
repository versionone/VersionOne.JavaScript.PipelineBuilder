import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const get_next_id = (name, key, when=ALWAYS,
                             additional_args={}, description='') => get_definition({
        key,
        name
    },
    {
        label: 'Utility - Get Next ID',
        method: 'get_next_id',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);