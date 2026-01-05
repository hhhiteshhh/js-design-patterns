"use client";

import { useState } from "react";
// import Logs from "./LogsWithoutProxy";
import Logs from "./LogsWithProxy";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function LiveExample() {
  const [logs, setLogs] = useState(Logs);
  const [app, setApp] = useState<string>("");
  const [version, setVersion] = useState<string>("");
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Logs.history = [...logs.history, { app, version }];
    setLogs({ ...Logs });
  };
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <form className="flex flex-col gap-4" onSubmit={onFormSubmit}>
        <Select value={app} onValueChange={setApp}>
          <SelectTrigger className="w-60">
            <SelectValue placeholder="--Choose App--" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="calendar">Calendar</SelectItem>
            <SelectItem value="mail">Mail</SelectItem>
            <SelectItem value="drive">Drive</SelectItem>
          </SelectContent>
        </Select>
        <Input
          onChange={(e) => {
            setVersion(e.target.value);
          }}
          type="text"
          name="version"
        />
        <button type="submit">Release</button>
      </form>
      <div className="logs">
        {logs &&
          logs.history?.map(({ version, app }, i) => (
            <div
              key={i}
              className="log"
            >{`Version ${version} of ${app} released`}</div>
          ))}
      </div>
    </div>
  );
}

export default LiveExample;
