import { ALWAYS, SUCCESS } from './../constants';
import { get_definition } from './../base';

export const end = (
    status=SUCCESS,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        status
    },
    {
        label: 'Utility - End',
        method: 'end',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);