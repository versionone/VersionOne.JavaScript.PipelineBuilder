import { get_definition } from './../base';

export const list_repositories = (
    instance_name, response_key,
    when, additional_args, description
) => get_definition({
        instance_name,
        response_key
    },
    {
        label: 'Gitlab - List Repositories',
        method: 'list_repositories',
        module: 'main',
        name: 'gitlab'
    },
    when, additional_args, description
);