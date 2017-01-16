import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const junit_results = (key, when=ALWAYS,
                             additional_args={}, description='') => get_definition({
        key
    },
    {
        label: 'Utility - jUnit Results',
        method: 'junit_results',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);