import { ALWAYS } from './../constants';

export const get_file = (
    repository, branch, path, response_key,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            repository,
            branch,
            path,
            response_key
        }),
        label: 'Github - Get File',
        method: 'get_file',
        module: 'main',
        name: 'github'
    },
    when
});