import { ALWAYS } from './../constants';

export const wait_for_pr_mergeability = (
    repository, pr_number, response_key,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            repository,
            pr_number,
            response_key
        }),
        label: 'Github - Wait for PR Mergeability',
        method: 'wait_for_pr_mergeability',
        module: 'main',
        name: 'github'
    },
    when
});