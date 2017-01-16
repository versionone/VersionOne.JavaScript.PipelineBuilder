import { get_definition } from './../base';

export const create_branch = (
    project, repository, source_branch, branch_name, instance_name,
    when, additional_args, description
) => get_definition({
        project,
        repository,
        source_branch,
        branch_name,
        instance_name
    },
    {
        label: 'BitBucket Cloud - Create Branch',
        method: 'create_branch',
        module: 'bitbucket',
        name: 'bitbucket'
    },
    when, additional_args, description
);