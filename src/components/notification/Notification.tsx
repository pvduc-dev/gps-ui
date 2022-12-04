import React, {FC, useEffect} from 'react';

interface NotificationProps {
  title: string;
  message: string;
  dismiss: any;
}

const Notification: FC<NotificationProps> = ({message, title, dismiss}) => {
  useEffect(() => {
    debugger;
  },[])
  return (
    <div className="w-80 border-l-4 border-green-400 bg-green-50 px-3 py-4 text-sm flex items-center relative rounded-md">
      <button
        type="button"
        className="absolute right-0 top-0 w-4 text-green-400 m-3"
        onClick={dismiss}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="w-5 h-5 text-green-500 mr-2 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p>
        This is a demo notification, you can customize it live in the editor!
      </p>
    </div>
  );
};

export { Notification };
