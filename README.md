# Continuum Pipeline Builder JS SDK 

Use this JavaScript library to build Continuum Pipeline Definitions with code! 

Continuum pipeline definitions are declarative in nature providing a configuration as code approach.
Some people prefer their imperative programming languages and want to write code over configuration.

Meet PipelineBuilder.

Consider the example where a pipeline conditionally sets the status of a work item in your favorite ALM tool.
The pipeline may look something like this:

```
{
    name: "pipeline as code",
    description: "description",
    phases: [
        {
            name: "phase name",
            stages: [
                {
                    name: "stage name",
                    steps: [
                        {
                            name: "",
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

```js
import { create_stage, create_phase, create_pipeline, plugins } from './../src/pipeline';
const { utility, v1 } = plugins;

const set_to_ready = v1.set_workitem_status('S-12345', 'Ready', 'None', 'VersionOne', 'always');
const set_to_done = v1.set_workitem_status('S-12345', 'Done', 'None', 'VersionOne', 'always');

const pipeline = create_pipeline('pipeline as code', 'description', [
    create_phase('phase name', [
        create_stage('stage name', [
            utility.conditional('epic.isClosed', set_to_ready, set_to_done, 'always')
        ])
    ])
]);

```


## Development
Install Node.js

#### Install Node Modules
```bash
npm install
```

#### Run Linter
```bash
npm run lint
```

#### Run Tests
```bash
npm t
```