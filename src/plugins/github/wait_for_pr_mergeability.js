import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const wait_for_pr_mergeability = (
    repository, pr_number, response_key,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        repository,
        pr_number,
        response_key
    },
    {
        label: 'Github - Wait for PR Mergeability',
        method: 'wait_for_pr_mergeability',
        module: 'main',
        name: 'github'
    },
    when, additional_args, description
);