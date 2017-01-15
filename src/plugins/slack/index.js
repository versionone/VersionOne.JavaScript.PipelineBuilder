import { ALWAYS } from './../constants';

const post_message = (
    channel, message, attachments, as_user, fail_on_error='true',
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            channel,
            message,
            attachments,
            as_user,
            failonerror: fail_on_error
        }),
        label: 'Slack - Post Message',
        method: 'post',
        module: 'chat',
        name: 'slackplugin'
    },
    when
});

export const slack = {
    post_message
};