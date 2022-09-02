import React, {FC} from 'react';
import {Dialog} from "./Dialog";
import {Card} from "../card/Card";
import {CardTitle} from "../card/CardTitle";
import {CardContent} from "../card/CardContent";
import {CardActions} from "../card/CardActions";

interface AlertDialogProps {
  isOpen: boolean;
  title: string;
  confirmLabel: string;
  type: string;
  onCancel?: () => void,
  onConfirm?: () => void,
}

const AlertDialog: FC<AlertDialogProps> = (props) => {
  const {
    isOpen,
    title,
    confirmLabel,
    onCancel,
    onConfirm,
    children
  } = props;

  return (
    <Dialog
      isOpen={isOpen}
    >
      <Card>
        <CardTitle>
          {title}
        </CardTitle>
        <CardContent>
          {children}
        </CardContent>
        <CardActions>
          <button onClick={() => {onCancel && onCancel()}}>Cancel</button>
          <button onClick={() => {onConfirm && onConfirm()}}>{confirmLabel}</button>
        </CardActions>
      </Card>
    </Dialog>
  );
};

export {AlertDialog};
