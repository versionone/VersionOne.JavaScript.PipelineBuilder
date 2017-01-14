import { ALWAYS } from './../constants';

export const create_branch = (
    project, repository, source_branch, branch_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            project,
            repository,
            source_branch,
            branch_name,
            instance_name
        }),
        label: 'BitBucket Cloud - Create Branch',
        method: 'create_branch',
        module: 'bitbucket',
        name: 'bitbucket'
    },
    when
});