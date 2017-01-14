import { ALWAYS } from './../constants';

export const list_repositories = (
    instance_name, response_key,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            instance_name,
            response_key
        }),
        label: 'Gitlab - List Repositories',
        method: 'list_repositories',
        module: 'main',
        name: 'gitlab'
    },
    when
});