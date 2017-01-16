import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const delete_environment = (
    environment_id, account_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        environment_id,
        cloud_account: account_name
    },
    {
        label: 'Skytap - Delete Environment',
        method: 'delete_environment',
        module: 'skytap',
        name: 'skytap'
    },
    when, additional_args, description
);