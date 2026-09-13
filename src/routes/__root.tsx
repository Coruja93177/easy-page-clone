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
(function() {
  // Garantir execução única do inicializador de eventos do Pixel
  if (window.__pixelEventsConfigured) return;
  window.__pixelEventsConfigured = true;

  function setupPixelEvents() {
    if (typeof window.fbq !== 'function') return;

    // 1. ViewContent quando o usuário visualizar a seção de ofertas/checkout (disparo único absoluto)
    var ofertaSec = document.getElementById('oferta');
    if (ofertaSec && !window.__ofertaTracked) {
      if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting && !window.__ofertaTracked) {
              window.__ofertaTracked = true;
              window.fbq('track', 'ViewContent', {
                content_name: '290 Questões Comentadas PPA',
                content_category: 'Piloto Privado ANAC',
                content_type: 'product'
              });
              try { observer.unobserve(ofertaSec); } catch(e) {}
            }
          });
        }, { threshold: 0.25 });
        observer.observe(ofertaSec);
      } else {
        // Fallback para scroll simples se IntersectionObserver não estiver disponível
        var handleScroll = function() {
          if (window.__ofertaTracked) return;
          var rect = ofertaSec.getBoundingClientRect();
          if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0) {
            window.__ofertaTracked = true;
            window.fbq('track', 'ViewContent', {
              content_name: '290 Questões Comentadas PPA',
              content_category: 'Piloto Privado ANAC',
              content_type: 'product'
            });
            window.removeEventListener('scroll', handleScroll);
          }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
      }
    }

    // 2. InitiateCheckout exclusivamente para botões que levam ao checkout da Wiapy (R$ 9,90, R$ 14,90, R$ 19,90)
    // Proteção rigorosa contra duplicação de disparos (debounce e trava por clique)
    var lastTriggerTime = 0;
    var lastCheckoutHref = '';

    function isWiapyCheckout(anchor) {
      if (!anchor || !anchor.href) return false;
      return anchor.href.indexOf('pay.wiapy.com') !== -1 ||
             anchor.hasAttribute('data-checkout-link') ||
             anchor.classList.contains('modal-cta-btn') ||
             anchor.classList.contains('modal-decline-link') ||
             anchor.classList.contains('btn-green-cta');
    }

    function getPlanDetails(anchor) {
      var href = (anchor && anchor.href) ? anchor.href : '';
      var text = (anchor && anchor.textContent) ? anchor.textContent : '';

      // Plano R$ 9,90
      if (href.indexOf('TPKh5tVHZchK') !== -1 || text.indexOf('9,90') !== -1) {
        return { value: 9.90, name: 'Plano Básico PPA - R$ 9,90' };
      }
      // Plano R$ 14,90
      if (href.indexOf('y73pcRDeabSf') !== -1 || text.indexOf('14,90') !== -1) {
        return { value: 14.90, name: 'Plano Premium Oferta Especial - R$ 14,90' };
      }
      // Plano R$ 19,90
      if (href.indexOf('VAN-BIfmGJTY') !== -1 || text.indexOf('19,90') !== -1 || anchor.classList.contains('btn-green-cta')) {
        return { value: 19.90, name: 'Plano Premium Acesso Completo - R$ 19,90' };
      }

      return { value: 19.90, name: '290 Questões Comentadas PPA' };
    }

    function fireInitiateCheckout(anchor) {
      var now = Date.now();
      var href = anchor.href || '';

      // Impede disparos duplicados se clicado múltiplas vezes seguidas num intervalo de 2 segundos
      if (now - lastTriggerTime < 2000 && lastCheckoutHref === href) {
        return;
      }

      lastTriggerTime = now;
      lastCheckoutHref = href;

      var details = getPlanDetails(anchor);

      window.fbq('track', 'InitiateCheckout', {
        content_name: details.name,
        content_category: 'Apostilas PPA ANAC',
        content_type: 'product',
        value: details.value,
        currency: 'BRL'
      });
    }

    document.addEventListener('click', function(event) {
      var target = event.target;
      var anchor = target && target.closest ? target.closest('a') : null;

      if (anchor && isWiapyCheckout(anchor)) {
        fireInitiateCheckout(anchor);
      }
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupPixelEvents);
  } else {
    setupPixelEvents();
  }
})();
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
