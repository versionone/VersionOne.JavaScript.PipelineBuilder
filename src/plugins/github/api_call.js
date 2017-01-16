import { ALWAYS, GET } from './../constants';
import { get_definition } from './../base';

export const api_call = (
    type=GET, url, data={}, response_key, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        type,
        url,
        data,
        response_key,
        instance_name
    },
    {
        label: 'Github - API Call',
        method: 'api_call',
        module: 'main',
        name: 'github'
    },
    when, additional_args, description
);