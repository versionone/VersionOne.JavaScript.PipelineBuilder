import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const check_blocking_issues = (
    key, should_continue, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        key,
        continue: should_continue,
        instance_name
    },
    {
        label: 'VersionOne - Check Blocking Issues',
        method: 'check_blocking_issues',
        module: 'main',
        name: 'v1plugin'
    },
    when, additional_args, description
);