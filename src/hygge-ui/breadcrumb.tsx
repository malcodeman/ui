import { Fragment } from "react";
import { TextLink } from "./text";

type BreadcrumbProps = React.ComponentPropsWithoutRef<"nav"> & {
  items: {
    title: React.ReactNode;
    url?: string;
  }[];
  separator?: React.ReactNode;
};

export function Breadcrumb(props: BreadcrumbProps) {
  const { items, separator = "/", className, ...rest } = props;

  return (
    <nav aria-label="breadcrumb" className={className} {...rest}>
      <ol className="flex items-center gap-2 text-sm/6">
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <Fragment key={`${String(item.title)}-${index}`}>
              <li className="inline-flex items-center">
                {last ? (
                  <span
                    aria-current="page"
                    className="text-fg-default font-medium"
                  >
                    {item.title}
                  </span>
                ) : item.url ? (
                  <TextLink href={item.url}>{item.title}</TextLink>
                ) : (
                  <span className="text-fg-muted">{item.title}</span>
                )}
              </li>
              {!last ? (
                <li aria-hidden="true" className="text-fg-muted select-none">
                  {separator}
                </li>
              ) : null}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
