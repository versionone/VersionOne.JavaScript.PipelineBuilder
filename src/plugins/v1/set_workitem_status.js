import { ALWAYS } from './../constants';

export const set_workitem_status = (
    number, status, current_status, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            current_status,
            instance_name,
            number,
            status
        }),
        label: "VersionOne - Set Workitem Status",
        method: "set_workitem_status",
        module: "main",
        name: "v1plugin"
    },
    when
});
