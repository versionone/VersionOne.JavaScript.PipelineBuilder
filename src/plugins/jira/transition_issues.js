import { ALWAYS } from './../constants';

export const transition_issues = (
    transition_name, resolution_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            transition_name,
            resolution_name,
            instance_name
        }),
        label: 'Jira - Transition Issues',
        method: 'transition',
        module: 'issue',
        name: 'jiraplugin'
    },
    when
});