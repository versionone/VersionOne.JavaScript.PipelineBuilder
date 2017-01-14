import { ALWAYS } from './../constants';

export const get_epic_workitems = (
    number, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            number,
            instance_name
        }),
        label: 'VersionOne - Get Epic Workitems',
        method: 'get_epic_workitems',
        module: 'main',
        name: 'v1plugin'
    },
    when
});