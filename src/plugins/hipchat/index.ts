import { get_definition } from './../base';

const send_notification = (
    message, room, instance_name,
    when, additional_args, description
) => get_definition({
        message,
        room,
        instance_name
    },
    {
        label: 'HipChat - Send Notification',
        method: 'send',
        module: 'notification',
        name: 'hipchatplugin'
    },
    when, additional_args, description
);

export const hipchat = {
    send_notification
};