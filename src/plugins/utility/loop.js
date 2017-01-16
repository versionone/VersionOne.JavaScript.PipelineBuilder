import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const loop = (
    action, iterator,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        action: action.plugin,
        iterator
    },
    {
        args_parsing: 'internal',
        label: 'Utility - Loop',
        method: 'loop',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);