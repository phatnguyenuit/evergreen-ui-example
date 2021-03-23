import React, { memo, useState } from 'react';

export function StateWrapperComponent<T>({
  initialState,
  children,
}: StateWrapperProps<T>) {
  const [state, setState] = useState(initialState);
  return <>{children({ state, setState })}</>;
}

const StateWrapper = memo(
  StateWrapperComponent,
) as typeof StateWrapperComponent & React.ComponentType<any>;
StateWrapper.displayName = 'StateWrapper';

export default StateWrapper;

export type StateRenderer<T> = ({
  state,
  setState,
}: {
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
}) => React.ReactNode;

export interface StateWrapperProps<T> {
  initialState: T;
  children: StateRenderer<T>;
}
