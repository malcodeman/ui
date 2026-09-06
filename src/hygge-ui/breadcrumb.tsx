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
  const { items, separator = "/", ...rest } = props;

  return (
    <nav {...rest}>
      <ol className="flex items-center gap-2 text-sm/6">
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <Fragment key={index}>
              <li className="inline-flex items-center">
                {last ? (
                  <span className="text-fg-default">{item.title}</span>
                ) : item.url ? (
                  <TextLink href={item.url}>{item.title}</TextLink>
                ) : (
                  <span>{item.title}</span>
                )}
              </li>
              {last ? null : <li>{separator}</li>}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
