import React, {cloneElement, FC, PropsWithChildren, ReactElement} from 'react';
import {Control, Controller} from 'react-hook-form';
import {FieldErrors} from "react-hook-form/dist/types/errors";

interface FormControlProps {
  name: string,
  control?: Control,
  errors?: FieldErrors,
}

const FormControl: FC<PropsWithChildren<FormControlProps>> = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field}) => cloneElement(props.children as ReactElement, {...field, errorMessage: props?.errors?.[props.name]})}
    />
  );
}

export { FormControl }
