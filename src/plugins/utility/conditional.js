import { ALWAYS } from './../constants';

export const conditional = (
    expression, if_block, else_block, when=ALWAYS, additional_arguments={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_arguments, {
            action: if_block.plugin,
            else_action: else_block.plugin,
            expression
        }),
        label: 'Utility - Conditional',
        method: 'conditional',
        module: 'utility',
        name: 'utility'
    },
    when
});