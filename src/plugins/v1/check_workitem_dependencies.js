import { get_definition } from './../base';

export const check_workitem_dependencies = (
    key, should_continue, instance_name,
    when, additional_args, description
) => get_definition({
        key,
        continue: should_continue,
        instance_name
    },
    {
        label: 'VersionOne - Check Workitem Dependencies',
        method: 'check_workitem_dependencies',
        module: 'main',
        name: 'v1plugin'
    },
    when, additional_args, description
);