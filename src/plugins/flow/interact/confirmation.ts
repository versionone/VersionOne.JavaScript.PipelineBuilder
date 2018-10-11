import { get_definition_with_tags } from './../../base';

export const confirmation = (
    title, text, asssign_to=[], tags=[],
    when, additional_args, description
) => get_definition_with_tags(
    {
        assignto: asssign_to,
        text,
        title
    },
    {
        kind: 'actions',
        label: 'Flow - Interact - Confirmation',
        method: 'confirmation',
        module: 'interact',
        name: 'flow',
        type: 'interaction'
    },
    tags, when, additional_args, description
);