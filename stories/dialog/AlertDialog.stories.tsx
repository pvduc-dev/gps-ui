import React, {useState} from "react";

import {ComponentStory} from "@storybook/react";
import {AlertDialog} from "../../src";
import {OverlayProvider} from "react-aria";

export default {
  title: 'AlertDialog',
  component: AlertDialog as any,
}

export const Story: ComponentStory<typeof AlertDialog> = () => {
  const [isOpen, setIsOpen] = useState(false);
  function onDeleteClick() {
    setIsOpen(true)
  }

  function onCancel() {
    setIsOpen(false);
  }

  function onConfirm() {
    setIsOpen(false);
  }

  return (
    <OverlayProvider>
      <button onClick={onDeleteClick}>Delete</button>
      <AlertDialog
        isOpen={isOpen}
        title="Alert"
        confirmLabel="Delete"
        type="danger"
        onCancel={onCancel}
        onConfirm={onConfirm}
      >
        Lorem ipsum dolor sit amet.
      </AlertDialog>
    </OverlayProvider>
  )
}

Story.storyName = 'AlertDialog'
