interface LogsWithProxy {
  latestRelease: null;
  history: { version: string; app: string }[];
}

const Logs: LogsWithProxy = {
  latestRelease: null,
  history: [],
};

const proxyLogs = new Proxy(Logs, {
  set(target, property, value) {
    if (property === "history" && Array.isArray(value)) {
      target[property] = value;
      return true;
    }
    return false;
  },
  get(target, property) {
    if (property === "history") {
      return target.history.map(
        ({ version, app }) => `Version ${version} of ${app} released`
      );
    }
    // Fix: Add index signature for proxy and return undefined for unknown property types
    if (typeof property === "string" && property in target) {
      return (target as any)[property];
    }
    return undefined;
  },
});
export default proxyLogs;
