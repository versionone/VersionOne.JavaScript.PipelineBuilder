import { ALWAYS } from './../constants';

export const show_summary = (
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: additional_args,
        label: 'Gitlab - Show Summary',
        method: 'show_summary',
        module: 'main',
        name: 'gitlab'
    },
    when
});