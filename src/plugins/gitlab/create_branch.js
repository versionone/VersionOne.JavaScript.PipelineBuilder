import { ALWAYS } from './../constants';

export const create_branch = (
    project, reference, branch_name, failifexists='false', instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            ns_project: project,
            reference,
            branch_name,
            failifexists,
            instance_name
        }),
        label: 'Gitlab - Create Branch',
        method: 'create_branch',
        module: 'main',
        name: 'gitlab'
    },
    when
});