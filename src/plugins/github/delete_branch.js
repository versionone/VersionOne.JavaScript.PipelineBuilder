import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const delete_branch = (
    repository, branch_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        repository,
        branch_name,
        instance_name
    },
    {
        label: 'Github - Delete Branch',
        method: 'delete_branch',
        module: 'main',
        name: 'github'
    },
    when, additional_args, description
);