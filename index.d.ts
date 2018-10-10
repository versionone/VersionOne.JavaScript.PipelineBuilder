export function create_pipeline(name: string, description: string, phases: object[]): object;
export function create_phase(name: string, stages: object[]): object;
export function create_stage(name: string, steps: object[]): object;

interface CONSTANTS {
  ALWAYS: 'always',
  CONDITIONALLY: 'conditionally',
  NEVER: 'never',
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  PATCH: 'patch',
  SUCCESS: 'end-success',
  FAILURE: 'end-failure',
  CANCELED: 'end-canceled',
}
export const constants: CONSTANTS;