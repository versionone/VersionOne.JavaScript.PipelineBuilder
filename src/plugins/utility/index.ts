import { conditional } from './conditional';
import { email_contributors } from './email_contributors';
import { get_registry } from './get_registry';
import { set_registry } from './set_registry';
import { wait_for_data } from './wait_for_data';
import { junit_results } from './junit_results';
import { show_workspace_data } from './show_workspace_data';
import { apply_label } from './apply_label';
import { loop } from './loop';
import { end } from './end';
import { http } from './http';
import { log } from './log';
import { sleep } from './sleep';
import { parse_data } from './parse_data';
import { get_next_id } from './get_next_id';
import { find_in_array } from './find_in_array';
import { python_script } from './python_script';
import { add_manifest } from './bucket/add_manifest';
import { get_globals } from './bucket/get_globals';
import { set_global } from './bucket/set_global';
import { load } from './bucket/load';

export const utility = {
    conditional,
    email_contributors,
    get_registry,
    set_registry,
    wait_for_data,
    junit_results,
    show_workspace_data,
    apply_label,
    loop,
    end,
    http,
    log,
    sleep,
    parse_data,
    get_next_id,
    find_in_array,
    python_script,
    add_manifest,
    get_globals,
    set_global,
    load
};