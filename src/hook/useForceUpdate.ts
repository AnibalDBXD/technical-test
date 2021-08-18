import { useReducer } from "react";

const useForceUpdate = (): () => void => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  return forceUpdate;
};

export default useForceUpdate;