import type {NextConfig} from "next";

const nextConfig: NextConfig = {
	productionBrowserSourceMaps: true,
	output: "standalone",
};

export default nextConfig;
