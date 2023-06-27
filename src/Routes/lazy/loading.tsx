import { FC, useEffect } from "react";
import UseProgress from "Hooks/useProgress/useProgress";

const AsyncLoading: FC = (): JSX.Element | null => {
  useEffect(() => {
    const progress = UseProgress({});
    progress.start();
    return () => {
      progress.done();
    };
  }, []);
  return null;
};

export default AsyncLoading;
