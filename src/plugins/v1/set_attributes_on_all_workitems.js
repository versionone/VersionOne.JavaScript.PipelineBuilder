import { get_definition } from './../base';

export const set_attributes_on_all_workitems = (
    attributes='', skip_if_closed='true', instance_name,
    when, additional_args, description
) => get_definition({
        attributes,
        skip_on_closed: skip_if_closed,
        instance_name
    },
    {
        label: 'VersionOne - Set Attributes on All Workitems',
        method: 'set_workitem_attributes_all',
        module: 'main',
        name: 'v1plugin'
    },
    when, additional_args, description
);