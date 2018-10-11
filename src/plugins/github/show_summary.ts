import { get_definition } from './../base';

export const show_summary = (
    when, additional_args, description
) => get_definition({

    },
    {
        label: 'Github - Show Summary',
        method: 'show_summary',
        module: 'main',
        name: 'github'
    },
    when, additional_args, description
);