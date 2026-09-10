import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}
(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '2150511878836459');
fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2150511878836459&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body>
        {children}
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `
function initMetaEvents() {
  const oferta = document.getElementById('oferta');

  if (oferta) {
    let ofertaVisualizada = false;

    const observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting && !ofertaVisualizada) {

            ofertaVisualizada = true;

            fbq('track', 'ViewContent', {
              content_name: '290 Questões Comentadas PPA',
              content_category: 'Oferta PPA',
              content_type: 'product'
            });

            observer.unobserve(oferta);
          }
        });
      },
      {
        threshold: 0.30
      }
    );

    observer.observe(oferta);
  }

  let ultimoCheckout = null;
  let ultimoDisparo = 0;

  function dispararInitiateCheckout(elemento) {

    const agora = Date.now();

    if (
      ultimoCheckout === elemento &&
      agora - ultimoDisparo < 1500
    ) {
      return false;
    }

    ultimoCheckout = elemento;
    ultimoDisparo = agora;

    fbq('track', 'InitiateCheckout', {
      content_name: '290 Questões Comentadas PPA',
      content_category: 'PPA',
      content_type: 'product',
      currency: 'BRL'
    });

    return true;
  }

  document.addEventListener('pointerdown', function(event) {

    const checkout = event.target.closest('[data-checkout-link]');

    if (!checkout) return;

    dispararInitiateCheckout(checkout);

  }, true);

  document.addEventListener('click', function(event) {

    const checkout = event.target.closest('[data-checkout-link]');

    if (!checkout) return;

    const disparouAgora = dispararInitiateCheckout(checkout);

    if (disparouAgora && checkout.href) {

      const abrirNovaAba =
        checkout.target === '_blank' ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey;

      if (!abrirNovaAba) {

        event.preventDefault();

        const destino = checkout.href;

        setTimeout(function() {
          window.location.href = destino;
        }, 250);
      }
    }

  }, true);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMetaEvents);
} else {
  initMetaEvents();
}
            `,
          }}
        />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
