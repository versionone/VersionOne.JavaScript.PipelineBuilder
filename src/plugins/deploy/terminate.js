import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const terminate = (
    when=ALWAYS, additional_args={}, description=''
) => get_definition({

    },
    {
        label: 'Deploy - Terminate',
        method: 'terminate',
        module: 'deployment',
        name: 'deploy'
    },
    when, additional_args, description
);