import { ALWAYS, GET } from './../constants';

export const api_call = (
    type=GET, url, data={}, response_key, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            type,
            url,
            data,
            response_key,
            instance_name
        }),
        label: 'Github - API Call',
        method: 'api_call',
        module: 'main',
        name: 'github'
    },
    when
});