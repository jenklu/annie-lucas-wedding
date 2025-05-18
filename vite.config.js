import { defineConfig } from "vite";
import fs from "fs";
import path from "path";

export default defineConfig(({ mode }) => {
  return mode == "development"
    ? {
        server: {
          https: {
            key: fs.readFileSync(path.resolve(__dirname, "key.pem")),
            cert: fs.readFileSync(path.resolve(__dirname, "cert.pem")),
          },
          host: true, // allows LAN access
        },
      }
    : {};
});
