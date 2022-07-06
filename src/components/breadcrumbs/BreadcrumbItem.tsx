import React, {FC, PropsWithChildren, useRef} from 'react';
import {useBreadcrumbItem} from "react-aria";
import {AriaBreadcrumbItemProps} from '@react-types/breadcrumbs';
import clsx from "clsx";

interface BreadcrumbItemProps extends AriaBreadcrumbItemProps {

}

const BreadcrumbItem: FC<PropsWithChildren<BreadcrumbItemProps>> = (props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const {itemProps} = useBreadcrumbItem({...props, elementType: 'span'}, ref);
  return (
    <li>
      <span
        className={clsx([
          'outline-none',
          'cursor-default',
          {
            'cursor-pointer': !props.isCurrent
          }
        ])}
        {...itemProps}
      >
        {props.children}
      </span>
      {!props.isCurrent && (
        <span aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Bold"
            viewBox="0 0 24 24"
            className="inline-block dark:fill-current mx-1"
            width="12"
            height="12"
          >
            <path
              d="M15.75,9.525,11.164,4.939A1.5,1.5,0,0,0,9.043,7.061l4.586,4.585a.5.5,0,0,1,0,.708L9.043,16.939a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586A3.505,3.505,0,0,0,15.75,9.525Z"
            />
          </svg>
        </span>
      )}
    </li>
  );
};

export {BreadcrumbItem};
