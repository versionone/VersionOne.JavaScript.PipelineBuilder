import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const show_summary = (
    when=ALWAYS, additional_args={}, description=''
) => get_definition({

    },
    {
        label: 'BitBucket Cloud - Show Summary',
        method: 'show_summary',
        module: 'bitbucket',
        name: 'bitbucket'
    },
    when, additional_args, description
);