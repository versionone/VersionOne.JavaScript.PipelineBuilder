import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const get_epic_workitems = (
    number, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        number,
        instance_name
    },
    {
        label: 'VersionOne - Get Epic Workitems',
        method: 'get_epic_workitems',
        module: 'main',
        name: 'v1plugin'
    },
    when, additional_args, description
);