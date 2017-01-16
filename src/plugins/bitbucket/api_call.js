import { ALWAYS, GET } from './../constants';
import { get_definition } from './../base';

export const api_call = (
    type=GET, request, data={}, response_key, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        type,
        request,
        data,
        response_key,
        instance_name
    },
    {
        label: 'BitBucket Cloud - API Call',
        method: 'api_call',
        module: 'bitbucket',
        name: 'bitbucket'
    },
    when, additional_args, description
);