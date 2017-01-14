import { ALWAYS } from './../constants';

export const delete_branch = (
    project, branch_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            ns_project: project,
            branch_name,
            instance_name
        }),
        label: 'Gitlab - Delete Branch',
        method: 'delete_branch',
        module: 'main',
        name: 'gitlab'
    },
    when
});