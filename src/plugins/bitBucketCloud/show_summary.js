import { ALWAYS } from './../constants';

export const show_summary = (
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: additional_args,
        label: 'BitBucket Cloud - Show Summary',
        method: 'show_summary',
        module: 'bitbucket',
        name: 'bitbucket'
    },
    when
});