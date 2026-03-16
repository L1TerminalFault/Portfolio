// import got from "got";
// const metascraper = require("metascraper")([require("metascraper-image")()]);
//
// export async function GET(req: Request) {
//   const urlInput = new URL(req.url).searchParams.get("url");
//
//   if (!urlInput)
//     return Response.json(
//       { status: "error", message: "URL required" },
//       { status: 400 },
//     );
//
//   try {
//     const { body: html, url } = await got("https://google.com", {
//       headers: {
//         "user-agent":
//           "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com)",
//       },
//     });
//
//     const metadata = await metascraper({ html, url });
//
//     console.log("metadata ", metadata);
//
//     return Response.json({
//       status: "success",
//       image: metadata.image || null,
//     });
//   } catch {
//     return Response.json(
//       { status: "error", message: "Unknown error" },
//       { status: 400 },
//     );
//   }
// }
