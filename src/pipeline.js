import { automate } from './plugins/automate';
import { utility } from './plugins/utility';
import { v1 } from './plugins/v1';

export const plugins = {
    automate,
    utility,
    v1
};

export const create_stage = (name='', steps=[]) => ({ name, steps });
export const create_phase = (name='', stages=[]) => ({ name, stages });
export const create_pipeline = (name='', description='', phases=[]) => ({ name, description, phases });