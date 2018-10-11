import { get_definition } from './../base';

export const register_image = (
    image,
    when, additional_args, description
) => get_definition({
        image
    },
    {
        label: 'Docker - Register Image',
        method: 'register_image',
        module: 'dock',
        name: 'dockerplugin'
    },
    when, additional_args, description
);