import { get_definition } from './../base';

export const deploy_container = (
    image_name, docker_endpoint_name,
    when, additional_args, description
) => get_definition({
        image: image_name,
        instance_name: docker_endpoint_name
    },
    {
        label: 'Docker - Deploy Container',
        method: 'deploy_container',
        module: 'dock',
        name: 'dockerplugin'
    },
    when, additional_args, description
);