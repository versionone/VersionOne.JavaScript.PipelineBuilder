export function create_pipeline(name: string, description: string, phases: object[]): object;
export function create_phase(name: string, stages: object[]): object;
export function create_stage(name: string, steps: object[]): object;
export interface plugins {
    jenkins: {
        build (
            job_name,
            parameters={},
            wait,
            inherit_job_status,
            regular_expression,
            artifact_name,
            instance_name,
            when, 
            additional_args,
            description
            ): object
    }
    [key: string]: () => {}
}