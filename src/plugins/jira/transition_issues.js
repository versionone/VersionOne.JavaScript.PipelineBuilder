import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const transition_issues = (
    transition_name, resolution_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        transition_name,
        resolution_name,
        instance_name
    },
    {
        label: 'Jira - Transition Issues',
        method: 'transition',
        module: 'issue',
        name: 'jiraplugin'
    },
    when, additional_args, description
);