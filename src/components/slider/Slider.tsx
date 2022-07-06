import React, {forwardRef, ForwardRefRenderFunction, RefObject, useRef} from 'react';
import {useSlider} from '@react-aria/slider';
import {useSliderState} from '@react-stately/slider';
import {useNumberFormatter} from '@react-aria/i18n';
import {SpectrumBarSliderBase} from '@react-types/slider'
import {SliderThumb} from "./SliderThumb";

interface SliderProps<T> extends SpectrumBarSliderBase<T> {}

const Slider: ForwardRefRenderFunction<HTMLElement, SliderProps<any>> = (props, inputRef) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const numberFormatter = useNumberFormatter(props.formatOptions);
  const state = useSliderState({...props, numberFormatter});
  const {
    groupProps,
    trackProps,
    labelProps,
    outputProps,
  } = useSlider(props, state, trackRef)
  return (
    <div
      className="relative flex flex-col items-center touch-none w-full px-2"
      {...groupProps}
    >
      <div
        className="flex self-stretch -mx-1"
      >
        {props.label &&
          <label
            {...labelProps}
          >
            {props.label}
          </label>
        }
        <output
          className="flex-auto text-right"
          {...outputProps}
        >
          {state.getThumbValueLabel(0)}
        </output>
      </div>
      <div
        {...trackProps}
        ref={trackRef}
        className="relative h-8 w-full"
      >
        <div
          className="absolute bg-gray-200 dark:bg-[#1D1A32] h-1.5 top-3.5 w-full rounded-full"
        />
        <SliderThumb state={state} trackRef={trackRef} inputRef={inputRef as RefObject<HTMLInputElement>} index={0}/>
        <div
          className="absolute h-1.5 bg-primary top-3.5 rounded-full"
          style={{width: `${state.getThumbPercent(0) * 100}%`}}
        >
        </div>
      </div>
    </div>
  );
};

const _Slider = forwardRef(Slider)

export {_Slider as Slider};
