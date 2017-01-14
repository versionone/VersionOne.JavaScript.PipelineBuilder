import { ALWAYS } from './../constants';

export const show_summary = (
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: additional_args,
        label: 'Github - Show Summary',
        method: 'show_summary',
        module: 'main',
        name: 'github'
    },
    when
});