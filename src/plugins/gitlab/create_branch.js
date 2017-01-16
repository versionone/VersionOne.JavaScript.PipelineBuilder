import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const create_branch = (
    project, reference, branch_name, failifexists='false', instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        ns_project: project,
        reference,
        branch_name,
        failifexists,
        instance_name
    },
    {
        label: 'Gitlab - Create Branch',
        method: 'create_branch',
        module: 'main',
        name: 'gitlab'
    },
    when, additional_args, description
);