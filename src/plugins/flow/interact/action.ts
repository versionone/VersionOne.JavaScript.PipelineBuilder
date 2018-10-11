import { get_definition_with_tags } from './../../base';

export const action = (
    asssign_to=[], definition, tags=[],
    when, additional_args, description
) => get_definition_with_tags(
    {
        assignto: asssign_to,
        definition
    },
    {
        kind: 'actions',
        label: 'Flow - Interact - Action',
        method: 'action',
        module: 'interact',
        name: 'flow',
        type: 'interaction'
    },
    tags, when, additional_args, description
);