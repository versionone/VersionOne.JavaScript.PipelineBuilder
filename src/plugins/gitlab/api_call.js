import { GET } from './../constants';
import { get_definition } from './../base';

export const api_call = (
    type=GET, request, data={}, response_key, instance_name,
    when, additional_args, description
) => get_definition({
        type,
        request,
        data,
        response_key,
        instance_name
    },
    {
        label: 'Gitlab - API Call',
        method: 'api_call',
        module: 'main',
        name: 'gitlab'
    },
    when, additional_args, description
);