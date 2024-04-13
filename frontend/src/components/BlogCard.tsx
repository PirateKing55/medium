import { Avatar } from "./Avatar";

interface blogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
  isLast?: boolean;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishDate,
  isLast,
}: blogCardProps) => {
  const borderBottom = isLast ? "" : "border-b-2";
  return (
    <div className={`w-1/2 mb-5 ${borderBottom} border-secondaryLight`}>
      <div className="font-semibold text-primary">
        <Avatar initial={authorName} />
        {`${
          authorName[0].toUpperCase() + authorName.slice(1, authorName.length)
        }`}{" "}
        <span className="font-extralight text-secondary">&#8226;</span>
        <span className="font-medium text-secondary">{" " + publishDate}</span>
      </div>
      <h1 className="mt-2 text-2xl font-bold text-primary">{title}</h1>
      <div className="mt-2 mb-5 text-primary">
        {content.length > 200 ? content.slice(0, 200) + "..." : content}
      </div>
      <p className="mb-5 font-medium text-secondary">{`${Math.ceil(
        content.length / 500
      )} min read`}</p>
    </div>
  );
};
