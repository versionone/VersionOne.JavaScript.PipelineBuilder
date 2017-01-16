import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const log = (message, when=ALWAYS, additional_args={}, description='') => get_definition({
        message
    },
    {
        label: 'Utility - Log',
        method: 'insert_log',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);