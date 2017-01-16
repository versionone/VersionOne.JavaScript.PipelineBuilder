import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const find_in_array = (array, expression, target, match_index, when=ALWAYS,
                             additional_args={}, description='') => get_definition({
        array_expression: array,
        find_expression: expression,
        target,
        match_index
    },
    {
        label: 'Utility - Find in Array',
        method: 'find_in_array',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);