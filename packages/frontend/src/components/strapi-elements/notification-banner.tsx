import classNames from "classnames";

interface DataProps{
  text: string,
  type: string
}

interface NotificationBannerProps{
  data: DataProps,
  closeSelf: (event: any) => void
}

const NotificationBanner = ({ data: { text, type }, closeSelf }:NotificationBannerProps) => {
  return (
    <div
      className={classNames(
        // Common classes
        "text-white px-2 py-2",
        {
          // Apply theme based on notification type
          "bg-blue-600": type === "info",
          "bg-orange-600": type === "warning",
          "bg-red-600": type === "alert",
        }
      )}
    >
      <div className="container flex flex-row justify-between items-center ">
        <div className="rich-text-banner flex-1">
          {text}
        </div>
        <button onClick={closeSelf} className="px-1 py-1 flex-shrink-0">
          close icon
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;
