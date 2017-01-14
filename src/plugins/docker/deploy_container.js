import { ALWAYS } from './../constants';

export const deploy_container = (
    image_name, docker_endpoint_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            image: image_name,
            instance_name: docker_endpoint_name
        }),
        label: 'Docker - Deploy Container',
        method: 'deploy_container',
        module: 'dock',
        name: 'dockerplugin'
    },
    when
});