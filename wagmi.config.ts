import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import atlasConfig from "./atlas.config";

export default defineConfig({
  ...(atlasConfig.partialWagmiConfig as any),
  plugins: [react()],
});
