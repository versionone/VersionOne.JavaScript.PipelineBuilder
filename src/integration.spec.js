import test from 'ava';
import { create_stage, create_phase, create_pipeline, plugins } from './pipeline';
const { utility, v1 } = plugins;

test('set_workitem_status_conditionaly', t => {
    const stage_name = 'stage_name';
    const phase_name = 'phase_name';
    const pipeline_name = 'pipeline as code';
    const description = 'description';

    const v1_instance = 'v1';
    const story_number = 'S-12345';
    const ready_status = 'Ready';
    const current_status = 'None';
    const done_status = 'Done';
    const when = 'always';

    const condition = 'a === 3';

    const set_to_ready = v1.set_workitem_status(
        story_number, ready_status, current_status, v1_instance, when
    );
    const set_to_done = v1.set_workitem_status(
        story_number, done_status, current_status, v1_instance, when
    );

    const pick_status = utility.conditional(condition, set_to_ready, set_to_done, when);

    const stage1 = create_stage(stage_name, [pick_status]);

    const phase1 = create_phase(phase_name, [stage1]);

    const actual = create_pipeline(pipeline_name, description, [phase1]);

    const expected = {
        name: pipeline_name,
        description,
        phases: [
            {
                name: phase_name,
                stages: [
                    {
                        name: stage_name,
                        steps: [
                            {
                                name: '',
                                plugin: {
                                    args: {
                                        action: {
                                            args: {
                                                current_status: current_status,
                                                instance_name: v1_instance,
                                                number: story_number,
                                                status: ready_status
                                            },
                                            label: "VersionOne - Set Workitem Status",
                                            method: "set_workitem_status",
                                            module: "main",
                                            name: "v1plugin"
                                        },
                                        else_action: {
                                            args: {
                                                current_status: current_status,
                                                instance_name: v1_instance,
                                                number: story_number,
                                                status: done_status
                                            },
                                            label: "VersionOne - Set Workitem Status",
                                            method: "set_workitem_status",
                                            module: "main",
                                            name: "v1plugin"
                                        },
                                        expression: condition
                                    },
                                    label: "Utility - Conditional",
                                    method: "conditional",
                                    module: "utility",
                                    name: "utility"
                                },
                                when: when
                            }
                        ]
                    }
                ]
            }
        ]
    };

    t.deepEqual(actual, expected);
});