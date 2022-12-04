import React, {FC} from 'react';

interface NotificationProps {
  title: string;
  message: string;
  onDismiss: Function;
}

const Notification: FC<NotificationProps> = ({message, title, onDismiss}) => {
  return (
    <div className="w-80 bg-blue-500 border border-gray-200 px-4 py-2 shadow-lg rounded">
      <p className="font-bold text-blue-100">{title}</p>

      <p className="text-blue-300">{message}</p>

      <button
        type="button"
        className=" text-blue-200 font-semibold mt-2 hover:text-blue-100"
        onClick={() => {onDismiss()}}
      >
        Dismiss
      </button>
    </div>
  );
};

export { Notification };
