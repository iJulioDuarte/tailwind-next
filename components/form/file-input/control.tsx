'use client';

import { ChangeEvent, ComponentProps } from 'react';

import { useFileInput } from './root';

export type ControlProps = ComponentProps<'input'>;

export const Control = (props: ControlProps) => {
  const { id, onFilesSelected } = useFileInput();

  const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;

    const files = Array.from(event.target.files);

    onFilesSelected(files);
  };
  return (
    <input
      id={id}
      type="file"
      className="sr-only"
      onChange={handleFilesSelected}
      {...props}
    />
  );
};
