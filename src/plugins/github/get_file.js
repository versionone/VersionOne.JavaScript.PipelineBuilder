import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const get_file = (
    repository, branch, path, response_key,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        repository,
        branch,
        path,
        response_key
    },
    {
        label: 'Github - Get File',
        method: 'get_file',
        module: 'main',
        name: 'github'
    },
    when, additional_args, description
);