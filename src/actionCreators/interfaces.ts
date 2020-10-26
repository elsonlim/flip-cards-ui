export interface Action {
  type: string;
  payload: any;
}

export const TOGGLE_DEFAULT_SIDE = "TOGGLE_DEFAULT_SIDE";