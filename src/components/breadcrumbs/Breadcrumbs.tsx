import React, {Children, cloneElement, FC, PropsWithChildren} from 'react';
import {useBreadcrumbs} from '@react-aria/breadcrumbs';
import {AriaBreadcrumbsProps} from '@react-types/breadcrumbs'

interface BreadcrumbsProps extends AriaBreadcrumbsProps {

}

const Breadcrumbs: FC<PropsWithChildren<BreadcrumbsProps>> = (props) => {
  const { navProps } = useBreadcrumbs(props);
  const children = Children.toArray(props.children)
  return (
    <nav
      {...navProps}
    >
      <ol
        className="flex"
      >
        {children.map((child, idx) =>
          cloneElement(child as any, {isCurrent: idx === children.length - 1} as any)
        )}
      </ol>
    </nav>
  );
};

export { Breadcrumbs };
