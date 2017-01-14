# VersionOne.PipelineBuilder [![Codeship][ci-badge]][ci]

Use this JavaScript library to build Continuum Pipeline Definitions with code! 

Continuum pipeline definitions are declarative in nature providing a configuration as code approach and allowing reading a definition fairly easy.
However, maintaining the definition can become difficult and often individuals with backgrounds in imperative programming languages that maintain the definitions
would like a way to write code in favor of configuration.

Meet PipelineBuilder.

Consider the example where a pipeline conditionally sets the status of a work item in your favorite ALM tool.
The pipeline may look something like this:

```
{
    name: "pipeline name",
    description: "My pipeline",
    phases: [
        {
            name: "phase name",
            stages: [
                {
                    name: "stage name",
                    steps: [
                        {
                            name: "I want to conditionally set the status of the issue.",
                            plugin: {
                                args: {
                                    action: {
                                        args: {
                                            current_status: "None",
                                            instance_name: "VersionOne",
                                            number: "D-1234",
                                            status: "Ready"
                                        },
                                        label: 'VersionOne - Set Workitem Status',
                                        method: 'set_workitem_status',
                                        module: 'main',
                                        name: 'v1plugin'
                                    },
                                    else_action: {
                                        args: {
                                            current_status: "None",
                                            instance_name: "VersionOne",
                                            number: "D-1234",
                                            status: "Done"
                                        },
                                        label: 'VersionOne - Set Workitem Status',
                                        method: 'set_workitem_status',
                                        module: 'main',
                                        name: 'v1plugin'
                                    },
                                    expression: "epic.isClosed"
                                },
                                label: 'Utility - Conditional',
                                method: 'conditional',
                                module: 'utility',
                                name: 'utility'
                            },
                            when: "always"
                        }
                    ]
                }
            ]
        }
    ]
}

```

This pipeline expressed conditional logic in a declarative way, which is very different from what we would see in most programming languages.
The aid of a graphical user interface may have helped us reason about some of the details of this pipeline, However some may want to express this same pipeline with code.
Let's do it!


```
import { create_stage, create_phase, create_pipeline, plugins } from 'pipelineBuilder';
const { utility, v1 } = plugins;

const set_to_ready = v1.set_workitem_status('D-1234', 'Ready', 'None', 'VersionOne', 'always');
const set_to_done = v1.set_workitem_status('D-1234', 'Done', 'None', 'VersionOne', 'always');

const pick_status = utility.conditional('epic.isClosed', set_to_ready, set_to_done, 'always');

var stage1 = create_stage('set_status', [pick_status]);

var phase1 = create_phase('first_phase', [stage1]);

var pipeline = create_pipeline('pipeline_as_code', 'description', [phase1]);

const pretty_print = (json) => JSON.stringify(json, null, 2);

pretty_print(pipeline);
```



##Development
Install Node.js

####Install Node Modules
```bash
npm install
```

####Run Linter
```bash
npm run lint
```

####Run Tests
```bash
npm t
```


[ci]: http://img.shields.io/codeship/b8421c60-bc39-0134-78ef-5e9a8948951f.svg?style=flat-square
[ci]: https://codeship.com/projects/b8421c60-bc39-0134-78ef-5e9a8948951f/status?branch=master
[ci-badge]: http://img.shields.io/codeship/b8421c60-bc39-0134-78ef-5e9a8948951f.svg?style=flat-square
