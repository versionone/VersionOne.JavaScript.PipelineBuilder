import { ALWAYS } from './../constants';

const send_notification = (
    message, room, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            message,
            room,
            instance_name
        }),
        label: 'HipChat - Send Notification',
        method: 'send',
        module: 'notification',
        name: 'hipchatplugin'
    },
    when
});

export const hipchat = {
    send_notification
};