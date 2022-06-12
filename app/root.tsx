import { ChakraProvider, Box, Heading } from "@chakra-ui/react";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import theme from "./chakra/theme";
import { Layout } from "./components/blocks/layout";
import * as gtag from "~/utils/gtags.client";
import React from "react";

/**
 * @description
 * If you would like to include the development env values in your browser bundle AKA
 * set some global values on the window object, take a look at these docs here:
 * https://remix.run/docs/en/v1/guides/envvars#server-environment-variables
 */
// export async function loader() {
//   return json({
//     ENV: {
//       APP_ENV: process.env.NODE_ENV,
//     },
//   });
// }

type LoaderData = {
  gaTrackingId: string | undefined;
};

// Load the GA tracking id from the .env
export const loader: LoaderFunction = async () => {
  return json<LoaderData>({ gaTrackingId: process.env.GA_TRACKING_ID });
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});



function Document({
  children,
  title = "App title",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  // throw new Error("💣💥 Booooom");
  const location = useLocation();
  const { gaTrackingId } = useLoaderData<LoaderData>();

  React.useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Layout>
          <>
          <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
         <Outlet />
        </Layout>
        
      </ChakraProvider>
    </Document>
  );
}

// How ChakraProvider should be used on CatchBoundary
export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider>
        <Box>
          <Heading as="h1" bg="purple.600">
            [CatchBoundary]: {caught.status} {caught.statusText}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  );
}

// How ChakraProvider should be used on ErrorBoundary
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <ChakraProvider>
        <Box>
          <Heading as="h1" bg="blue.500">
            [ErrorBoundary]: There was an error: {error.message}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  );
}
