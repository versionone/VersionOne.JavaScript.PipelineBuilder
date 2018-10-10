export function create_reference(key: string): string;

export function create_pipeline(
  name: string,
  description: string,
  phases: object[],
  team: string,
  category: string,
  globals: object
): {
  name: string;
  description: string;
  phases: object[];
  team: string;
  category: string;
  globals: object;
  actions: string;
  dependencies: any[];
  interactive: boolean;
  pipelineglobals: object;
  summary: any[];
};
export function create_phase(
  name: string,
  stages: object[]
): { name: string; stages: object[] };
export function create_stage(
  name: string,
  steps: object[]
): { name: string; steps: object[] };

export const constants: {
  ALWAYS: 'always';
  CONDITIONALLY: 'conditionally';
  NEVER: 'never';
  GET: 'get';
  POST: 'post';
  PUT: 'put';
  DELETE: 'delete';
  PATCH: 'patch';
  SUCCESS: 'end-success';
  FAILURE: 'end-failure';
  CANCELED: 'end-canceled';
};

type WhenConstants =
  | 'always'
  | 'conditionally'
  | 'never'
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'end-success'
  | 'end-failure'
  | 'end-canceled';

type BoolString = 'true' | 'false';

interface Definition {
  plugin: {
    args: object;
    label: string;
    method: string;
    module: string;
    name: string;
  };
  name: string;
  when: WhenConstants;
}

export const plugins: {
  automate: {
    run_task(
      task: string,
      version: string,
      initial_data: {},
      when: WhenConstants,
      additional_args: {},
      description: string
    ): Definition;
  };
  bamboo: {
    build(
      build_id: string,
      revision: string,
      parameters: {},
      wait: BoolString,
      inherit_build_status: BoolString,
      instance_name: string,
      when: WhenConstants,
      additional_args: {},
      description: string
    ): Definition;
  };
  bitbucket: any;
  canvas: any;
  deploy: any;
  flow: {
    artifact;
    group;
    interact;
    manifest;
    pipeline: {
      initiate;
      set_data(
        key: string,
        value: string,
        when: WhenConstants,
        additional_args: {},
        description: string
      ): Definition;
      set_description;
      set_global_summary_data;
      set_name;
    };
    pkg;
    project;
  };
  github: any;
  gitlab: any;
  hipchat: any;
  jenkins: {
    build(
      job_name: string,
      parameters: {},
      wait: BoolString,
      inherit_job_status: BoolString,
      regular_expression: string,
      artifact_name: string,
      instance_name: string,
      when: WhenConstants,
      additional_args: {},
      description: string
    ): Definition;
    get_build_info;
    read_workspace_file;
    get_url;
  };
  jira: any;
  octopus: any;
  skytap: any;
  slack: any;
  teamcity: any;
  tfs: any;
  utility: {
    conditional(
      expression: string,
      if_block: Definition,
      else_block: Definition,
      when: WhenConstants,
      additional_args: {},
      description: string
    ): Definition;
    email_contributors;
    get_registry;
    set_registry;
    wait_for_data;
    junit_results;
    show_workspace_data;
    apply_label;
    loop;
    end;
    http;
    log;
    sleep;
    parse_data;
    get_next_id;
    find_in_array;
    python_script;
    add_manifest;
    get_globals;
    set_global;
    load;
  };
  v1: {
    check_all_systems_go;
    check_blocking_issues;
    check_epic_completeness;
    check_workitem_dependencies;
    create_pipeline_run(
      build_project: string,
      name: string,
      reference: string,
      initial_status: string,
      target_key: string,
      instance_name: string,
      when: WhenConstants,
      additional_args: {},
      description: string
    ): Definition;
    custom_query;
    set_pipeline_run_status(
      build_run_oid: string,
      new_status: string,
      set_workitems_as_complete: BoolString,
      instance_name: string,
      when: WhenConstants,
      additional_args: {},
      description: string
    ): Definition;
    push_link;
    push_link_to_all_workitems;
    set_all_workitem_statuses;
    set_attributes_on_all_workitems;
    set_epic_status;
    get_epic_workitems;
    set_workitem_attributes;
    set_workitem_status;
    specify_phase;
  };
};
