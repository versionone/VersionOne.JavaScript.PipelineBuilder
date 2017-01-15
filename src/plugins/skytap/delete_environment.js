import { ALWAYS } from './../constants';

export const delete_environment = (
    environment_id, account_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            environment_id,
            cloud_account: account_name
        }),
        label: 'Skytap - Delete Environment',
        method: 'delete_environment',
        module: 'skytap',
        name: 'skytap'
    },
    when
});