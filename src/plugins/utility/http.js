import { ALWAYS, GET } from './../constants';
import { get_definition } from './../base';

export const http = (url, headers, http_verb=GET, data, key, when=ALWAYS,
                     additional_args={}, description='') => get_definition({
        data,
        headers,
        key,
        url,
        verb: http_verb
    },
    {
        label: 'Utility - HTTP',
        method: 'http',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);