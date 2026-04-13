import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router"; // ✅ v7 — NOT react-router-dom/server
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import store from "./store";
import AppRoutes from "./AppRoutes";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export function render(url, helmetContext) {
  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <StaticRouter location={url}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <div id="page-top"></div>
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </StaticRouter>
      </Provider>
    </HelmetProvider>,
  );
  return html;
}
