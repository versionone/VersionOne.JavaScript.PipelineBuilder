import { ALWAYS } from './../constants';

export const terminate = (
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: additional_args,
        label: 'Deploy - Deploy Terminate',
        method: 'terminate',
        module: 'deployment',
        name: 'deploy'
    },
    when
});