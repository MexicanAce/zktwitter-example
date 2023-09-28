import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../themes";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <title>zkTwitter</title>
          <meta name="description" content="zkTwitter" />
          <link rel="icon" type="image/png" sizes="16x16" href="/zeek.png" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initalColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
