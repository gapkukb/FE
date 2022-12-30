//@ts-ignore
import define from "../vite.config.common";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default function () {
	return define({
		plugins: [react()],
	});
}
