import { automate } from './plugins/automate';
import { bamboo } from './plugins/bamboo';
import { bitbucket } from './plugins/bitbucket';
import { canvas } from './plugins/canvas';
import { deploy } from './plugins/deploy';
import { flow } from './plugins/flow';
import { github } from './plugins/github';
import { gitlab } from './plugins/gitlab';
import { hipchat } from './plugins/hipchat';
import { jenkins } from './plugins/jenkins';
import { octopus } from './plugins/octopus';
import { skytap } from './plugins/skytap';
import { tfs } from './plugins/tfs';
import { utility } from './plugins/utility';
import { v1 } from './plugins/v1';

export const plugins = {
    automate,
    bamboo,
    bitbucket,
    canvas,
    deploy,
    flow,
    github,
    gitlab,
    hipchat,
    jenkins,
    octopus,
    skytap,
    tfs,
    utility,
    v1
};

export const create_stage = (name='', steps=[]) => ({ name, steps });
export const create_phase = (name='', stages=[]) => ({ name, stages });
export const create_pipeline = (name='', description='', phases=[]) => ({ name, description, phases });