import React, {FC, RefObject} from 'react';
import {useSliderThumb} from "@react-aria/slider";
import {useFocusRing} from "react-aria";
import {AriaSliderThumbProps} from '@react-types/slider';
import {SliderState} from "@react-stately/slider";
import {VisuallyHidden} from '@react-aria/visually-hidden';
import clsx from "clsx";
import {mergeProps} from "@react-aria/utils";

interface SliderThumbProps extends AriaSliderThumbProps {
  state: SliderState;
  trackRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLInputElement>
}

const SliderThumb: FC<SliderThumbProps> = (props) => {
  const { state, trackRef, index } = props;
  let inputRef = React.useRef(null);
  const { thumbProps, inputProps } = useSliderThumb({
    index,
    trackRef,
    inputRef: inputRef,
  }, state);

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      className="absolute top-[9px] -translate-x-1/2 z-10"
      style={{
        left: `${state.getThumbPercent(index) * 100}%`
      }}
    >
      <div
        {...thumbProps}
        className={clsx([
          'w-4 h-4 rounded-full bg-white border-2 border-primary',
          {'bg-primary': isFocusVisible}
        ])}
      >
        <VisuallyHidden>
          <input ref={inputRef} {...mergeProps(inputProps, focusProps)}/>
        </VisuallyHidden>
      </div>
    </div>
  );
};

export {SliderThumb};
