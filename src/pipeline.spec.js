import test from 'ava';
import { create_stage, create_phase, create_pipeline, plugins } from './pipeline';

test('create_stage with defaults', t => {
    const actual = create_stage();

    const expected = {
        name: "",
        steps: []
    };

    t.deepEqual(actual, expected);
});

test('create_stage without defaults', t => {
    const name = 'stage name';
    const steps = ['1', '2'];

    const actual = create_stage(name, steps);

    const expected = {
        name,
        steps
    };

    t.deepEqual(actual, expected);
});

test('create_phase with defaults', t => {
    const actual = create_phase();

    const expected = {
        name: "",
        stages: []
    };

    t.deepEqual(actual, expected);
});

test('create_phase without defaults', t => {
    const name = 'phase name';
    const stages = ['1', '2'];

    const actual = create_phase(name, stages);

    const expected = {
        name,
        stages
    };

    t.deepEqual(actual, expected);
});

test('create_pipeline with defaults', t => {
    const actual = create_pipeline();

    const expected = {
        name: "",
        description: "",
        phases: []
    };

    t.deepEqual(actual, expected);
});

test('create_pipeline without defaults', t => {
    const name = 'pipeline name';
    const description = 'pipeline description';
    const phases = ['1', '2', '3'];
    const actual = create_pipeline(name, description, phases);

    const expected = {
        name,
        description,
        phases
    };

    t.deepEqual(actual, expected);
});

test('v1 plugin exists', t => {
    const name = 'v1';
    t.true(plugins.hasOwnProperty(name))
});

test('utility plugin exists', t => {
    const name = 'utility';
    t.true(plugins.hasOwnProperty(name))
});