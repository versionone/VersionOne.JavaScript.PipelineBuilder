import { get_definition_with_tags } from './../base';

export const interact = (
    resource, tags=[],
    when, additional_args, description
) => get_definition_with_tags({
        resource
    }, {
        kind: 'canvas',
        label: 'Canvas - Get',
        method: 'get',
        module: 'main',
        name: 'canvas',
        type: 'interaction'
    },
    tags, when, additional_args, description
);