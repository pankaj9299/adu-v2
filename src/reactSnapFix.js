import axios from "axios";

const isReactSnap =
  typeof navigator !== "undefined" && /ReactSnap/i.test(navigator.userAgent);

if (isReactSnap) {
  // Override axios adapter in the browser so calls don't actually go to network
  axios.defaults.adapter = async (config) => {
    const url = String(config.url || "");

    // ✅ Return safe mock for your products endpoints
    if (url.includes("/api/admin/api/products")) {
      return {
        data: [], // <-- change if your UI expects an object
        status: 200,
        statusText: "OK",
        headers: {},
        config,
        request: {},
      };
    }

    // For any other request during snap, return empty success
    return {
      data: null,
      status: 204,
      statusText: "No Content",
      headers: {},
      config,
      request: {},
    };
  };
}