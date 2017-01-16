import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const show_summary = (
    when=ALWAYS, additional_args={}, description=''
) => get_definition({

    },
    {
        label: 'Gitlab - Show Summary',
        method: 'show_summary',
        module: 'main',
        name: 'gitlab'
    },
    when, additional_args, description
);