import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const conditional = (
    expression, if_block, else_block, when=ALWAYS, additional_args={}, description=''
) => get_definition({
        action: if_block.plugin,
        else_action: else_block.plugin,
        expression
    },
    {
        label: 'Utility - Conditional',
        method: 'conditional',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);