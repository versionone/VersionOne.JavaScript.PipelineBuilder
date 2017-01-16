import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const show = (
    resource, label,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        resource,
        label
    },
    {
        label: 'Canvas - Show',
        method: 'show',
        module: 'main',
        name: 'canvas'
    },
    when, additional_args, description
);