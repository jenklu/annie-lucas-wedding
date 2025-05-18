import { defineConfig } from "vite";
import fs from "fs";
import path from "path";

export default defineConfig(({ mode }) => {
  // Pick up VITE_BASE_URL (set in GitHub Actions) or default to root
  const base = process.env.VITE_BASE_URL || "/";
  const localHttpsConfig =
    mode == "development"
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
  return {
    base,
    ...localHttpsConfig,
  };
});
