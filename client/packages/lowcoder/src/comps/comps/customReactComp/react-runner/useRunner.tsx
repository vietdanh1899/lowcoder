import {FunctionComponent, ReactElement, useEffect, useRef, useState} from "react";

import { RunnerOptions } from "./types";
import { generateElement } from "./utils";

export type UseRunnerReturn = {
  element: ReactElement | FunctionComponent | null;
  error: string | null;
};

export const useRunner = ({ code, scope }: RunnerOptions): UseRunnerReturn => {
  const isMountRef = useRef(true);
  const elementRef = useRef<ReactElement | FunctionComponent | null>(null);

  const [state, setState] = useState<UseRunnerReturn>(() => {
    const element = generateElement({
      code,
      scope,
      onRendered: (error) => {
        if (error) {
          setState({
            element: null,
            error: error.toString(),
          });
        } else {
          elementRef.current = element;
        }
      },
    });
    return { element, error: null };
  });

  useEffect(() => {
    if (isMountRef.current) {
      isMountRef.current = false;
      return;
    }

    const element = generateElement({
      code,
      scope,
      onRendered: (error) => {
        if (error) {
          setState({
            element: null,
            error: error.toString(),
          });
        } else {
          elementRef.current = element;
        }
      },
    });
    setState({ element, error: null });
  }, [code, scope]);

  return state;
};
