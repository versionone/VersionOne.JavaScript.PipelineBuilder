import { ALWAYS } from './../../constants';

export const confirmation = (
    title, text, asssign_to=[], tags=[],
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            assignto: asssign_to,
            text,
            title
        }),
        kind: 'actions',
        label: 'Flow - Interact - Confirmation',
        method: 'confirmation',
        module: 'interact',
        name: 'flow',
        type: 'interaction'
    },
    tags,
    when
});