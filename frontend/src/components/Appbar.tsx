import { Avatar } from "./Avatar";

export const Appbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-5 py-3 mb-5 border-b-2 border-secondaryLight">
      <h1 className="text-2xl font-semibold text-primary">Medium</h1>
      <Avatar initial={"amrit"} />
    </div>
  );
};
