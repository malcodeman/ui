import { Breadcrumb } from "hygge-ui/breadcrumb";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/breadcrumb")({
  component: BreadcrumbPage,
  head: () => ({
    meta: [
      {
        title: "Breadcrumb | Hygge UI",
      },
    ],
  }),
});

function BreadcrumbPage() {
  return (
    <>
      <PageHeader
        title="Breadcrumb"
        description="Used to display a page's location within a site's hierarchical structure."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/hygge-ui/breadcrumb.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <Breadcrumb
            items={[
              { title: "Docs", url: "docs/components/breadcrumb#" },
              { title: "Components", url: "docs/components/breadcrumb#" },
              { title: "Props", url: "docs/components/breadcrumb#" },
            ]}
          />
        }
        code={`<Breadcrumb
  items={[
    { title: "Docs", url: "docs/components/breadcrumb#" },
    { title: "Components", url: "docs/components/breadcrumb#" },
    { title: "Props", url: "docs/components/breadcrumb#" },
  ]}
/>`}
      />
    </>
  );
}
