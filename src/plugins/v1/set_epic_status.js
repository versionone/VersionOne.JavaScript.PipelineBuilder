import { ALWAYS } from './../constants';

export const set_epic_status = (
    number, status, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            number,
            status,
            instance_name
        }),
        label: 'VersionOne - Set Epic Status',
        method: 'set_epic_status',
        module: 'main',
        name: 'v1plugin'
    },
    when
});