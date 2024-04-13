interface initialsType {
  initial: string;
}
export const Avatar = ({ initial }: initialsType) => {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 mr-2 overflow-hidden rounded-full bg-secondaryLight">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {initial[0].toUpperCase()}
      </span>
    </div>
  );
};
