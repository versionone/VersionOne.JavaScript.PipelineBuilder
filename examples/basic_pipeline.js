import { create_stage, create_phase, create_pipeline, plugins } from './../src/pipeline';
const { utility, v1 } = plugins;

const set_to_ready = v1.set_workitem_status('S-12345', 'Ready', 'None', '', 'always');
const set_to_done = v1.set_workitem_status('S-12345', 'Done', 'None', '', 'always');

const pick_status = utility.conditional('some condition', set_to_ready, set_to_done, 'always');

var stage1 = create_stage('set_status', [pick_status]);

var phase1 = create_phase('first_phase', [stage1]);

var pipeline = create_pipeline('pipeline_as_code', 'description', [phase1]);

const pretty_print = (json) => JSON.stringify(json, null, 2);

pretty_print(pipeline);