'use client';

import { useFileInput } from './root';

export const FileList = () => {
  const { files } = useFileInput();

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-full border border-zinc-200 p-4"
          >
            {file.name}
          </div>
        );
      })}
    </div>
  );
};
