import { ALWAYS } from './../constants';
import { get_definition } from './../base';

const post_message = (
    channel, message, attachments, as_user, fail_on_error='true',
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        channel,
        message,
        attachments,
        as_user,
        failonerror: fail_on_error
    },
    {
        label: 'Slack - Post Message',
        method: 'post',
        module: 'chat',
        name: 'slackplugin'
    },
    when, additional_args, description
);

export const slack = {
    post_message
};