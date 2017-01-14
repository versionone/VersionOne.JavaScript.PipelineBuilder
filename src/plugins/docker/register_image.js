import { ALWAYS } from './../constants';

export const register_image = (
    image,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            image
        }),
        label: 'Docker - Register Image',
        method: 'register_image',
        module: 'dock',
        name: 'dockerplugin'
    },
    when
});