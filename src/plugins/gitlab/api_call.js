import { ALWAYS, GET } from './../constants';

export const api_call = (
    type=GET, request, data={}, response_key, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            type,
            request,
            data,
            response_key,
            instance_name
        }),
        label: 'Gitlab - API Call',
        method: 'api_call',
        module: 'main',
        name: 'gitlab'
    },
    when
});