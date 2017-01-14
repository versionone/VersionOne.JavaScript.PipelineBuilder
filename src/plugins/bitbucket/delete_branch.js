import { ALWAYS } from './../constants';

export const delete_branch = (
    project, repository, branch_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            project,
            repository,
            branch_name,
            instance_name
        }),
        label: 'BitBucket Cloud - Delete Branch',
        method: 'delete_branch',
        module: 'bitbucket',
        name: 'bitbucket'
    },
    when
});