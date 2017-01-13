var set_workitem_status = function(number, status, current_status, instance_name, when) {
    return {
        plugin: {
            args: {
                current_status,
                instance_name,
                number,
                status
            },
            label: "VersionOne - Set Workitem Status",
            method: "set_workitem_status",
            module: "main",
            name: "v1plugin"
        },
        when
    }
};



export const v1 = {
    set_workitem_status
};