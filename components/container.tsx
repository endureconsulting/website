import { PropsWithChildren } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface ContainerProps {
  [prop: string]: any;
}

export const Container = ({
  children,
  ...metaOverrides
}: PropsWithChildren<ContainerProps>) => {
  const router = useRouter();

  const meta = {
    title: "Endure Consulting",
    description:
      "IT consulting services, IT engineering services; software, data, mobile, and cloud engineering; copy editing and proofreading services.",
    type: "website",
    image: "https://endureconsulting.net/banner.png",
    ...metaOverrides,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta
          property="og:url"
          content={`https://endureconsulting.net${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://endureconsulting.net${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Endure Consulting" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* FIXME: <meta name="twitter:site" content="@endureconsulting" /> */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="pinterest-rich-pin" content="false" />
      </Head>
      {children}
    </>
  );
};
