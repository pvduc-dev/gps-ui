import React, {Children, cloneElement, FC, isValidElement, PropsWithChildren} from 'react';
import {useForm} from "react-hook-form";

interface FormProps {
  onSubmit: (data: object) => void,
  defaultValues: Record<string, any>
}

const Form: FC<PropsWithChildren<FormProps>> = (props) => {
  const { handleSubmit, formState: {errors}, control } = useForm({
    defaultValues: props.defaultValues,
    mode: 'onChange',
  });
  const childrenWithProps = Children.map(props.children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {errors, control})
    }
    return child
  })
  return (
    <>
      <form
        onSubmit={handleSubmit(props.onSubmit)}
      >
        {childrenWithProps}
      </form>
    </>
  );
};

export { Form };
