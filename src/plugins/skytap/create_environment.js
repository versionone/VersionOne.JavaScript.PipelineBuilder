import { ALWAYS } from './../constants';

export const create_environment = (
    template_id, start='true', account_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            template_id,
            start,
            cloud_account: account_name
        }),
        label: 'Skytap - Create Environment',
        method: 'create_environment',
        module: 'skytap',
        name: 'skytap'
    },
    when
});