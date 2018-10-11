import { get_definition } from './../base';

export const build = (
    job_name, parameters={}, wait, inherit_job_status, regular_expression, artifact_name, instance_name,
    when, additional_args, description
) => get_definition({
        job: job_name,
        params: parameters,
        wait,
        inherit: inherit_job_status,
        artifact_regex: regular_expression,
        artifact_name,
        instance_name
    },
    {
        label: 'Jenkins - Build',
        method: 'build',
        module: 'job',
        name: 'jenkins',
        type: 'external'
    },
    when, additional_args, description
);