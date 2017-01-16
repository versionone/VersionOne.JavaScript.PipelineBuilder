import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const check_all_systems_go = (
    key, should_continue, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        key,
        continue: should_continue,
        instance_name
    },
    {
        label: 'VersionOne - Check All Systems Go',
        method: 'check_all_systems_go',
        module: 'main',
        name: 'v1plugin'
    },
    when, additional_args, description
);