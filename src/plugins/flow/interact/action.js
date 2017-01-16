import { ALWAYS } from './../constants';

export const action = (
    asssign_to=[], definition, tags=[],
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            assignto: asssign_to,
            definition
        }),
        kind: 'actions',
        label: 'Flow - Interact - Action',
        method: 'action',
        module: 'interact',
        name: 'flow',
        type: 'interaction'
    },
    tags,
    when
});