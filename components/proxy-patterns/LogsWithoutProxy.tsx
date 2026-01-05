interface LogsWithoutProxy {
  latestRelease: null;
  history: { version: string; app: string }[];
}

const Logs: LogsWithoutProxy = {
  latestRelease: null,
  history: [],
};

export default Logs