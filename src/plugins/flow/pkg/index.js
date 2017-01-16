import { deliver_revision } from './deliver_revision';
import { get_artifact } from './get_artifact';
import { get_artifacts } from './get_artifacts';
import { get_globals } from './get_globals'
import { load_revision } from './load_revision';
import { new_revision } from './new_revision';
import { promote_revision } from './promote_revision';
import { set_global } from './set_global';
    
export const pkg = {
    deliver_revision,
    get_artifact,
    get_artifacts,
    get_globals,
    load_revision,
    new_revision,
    promote_revision,
    set_global
};