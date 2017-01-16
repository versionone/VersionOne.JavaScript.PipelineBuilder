import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const create_environment = (
    template_id, start='true', account_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        template_id,
        start,
        cloud_account: account_name
    },
    {
        label: 'Skytap - Create Environment',
        method: 'create_environment',
        module: 'skytap',
        name: 'skytap'
    },
    when, additional_args, description
);