import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const list_repositories = (
    instance_name, response_key,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        instance_name,
        response_key
    },
    {
        label: 'Github - List Repositories',
        method: 'list_repositories',
        module: 'main',
        name: 'github'
    },
    when, additional_args, description
);