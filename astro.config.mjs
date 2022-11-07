import { defineConfig } from "astro/config";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: "https://zvonimirprpic.github.io",
  resolve: {
    alias: [
      {
        find: "styles",
        replacement: path.resolve(__dirname, "./src/styles"),
      },
    ],
  },
});
