import { get_definition } from './../base';

export const parse_data = (
    source, expression, target,
    when, additional_args, description
) => get_definition({
        source,
        expression,
        target
    },
    {
        label: 'Utility - Parse Data',
        method: 'parse',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);