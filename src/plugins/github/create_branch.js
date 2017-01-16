import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const create_branch = (
    repository, source_branch, branch_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        repository,
        source: source_branch,
        branch_name,
        instance_name
    },
    {
        label: 'Github - Create Branch',
        method: 'create_branch',
        module: 'main',
        name: 'github'
    },
    when, additional_args, description
);