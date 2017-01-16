import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const delete_branch = (
    project, branch_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        ns_project: project,
        branch_name,
        instance_name
    },
    {
        label: 'Gitlab - Delete Branch',
        method: 'delete_branch',
        module: 'main',
        name: 'gitlab'
    },
    when, additional_args, description
);