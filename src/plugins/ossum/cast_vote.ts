import { get_definition } from './../base';

export const cast_vote = (
    score, change_number, patchset_number, message, instance_name,
    when, additional_args, description
) => get_definition({
        score,
        change: change_number,
        patchset: patchset_number,
        message,
        instance_name
    },
    {
        label: "Ossum - Cast Vote",
        method: "cast_vote",
        module: "main",
        name: "ossum",
        type: "external"
    },
    when, additional_args, description
);
