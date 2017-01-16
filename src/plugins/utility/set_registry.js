import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const set_registry = (name, path_to_set, value, create_doc, action, when=ALWAYS,
    additional_args={}, description='') => get_definition({
        name,
        path: path_to_set,
        value,
        create: create_doc,
        action: action
    },
    {
        label: 'Utility - Set Registry',
        method: 'set_registry',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);