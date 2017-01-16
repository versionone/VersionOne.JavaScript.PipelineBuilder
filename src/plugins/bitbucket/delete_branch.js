import { get_definition } from './../base';

export const delete_branch = (
    project, repository, branch_name, instance_name,
    when, additional_args, description
) => get_definition({
        project,
        repository,
        branch_name,
        instance_name
    },
    {
        label: 'BitBucket Cloud - Delete Branch',
        method: 'delete_branch',
        module: 'bitbucket',
        name: 'bitbucket'
    },
    when, additional_args, description
);