import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (
      await (locale === "en"
          ? import ('../messages/en.json')
          : import (`../messages/${locale}.json`))
    ).default
  }
});