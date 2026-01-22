function getImage(maxSizeMb = 5): Promise<string> {
	return new Promise((resolve, reject) => {
		const input = document.createElement("input");
		input.setAttribute("hidden", "true");
		input.setAttribute("type", "file");
		input.setAttribute("accept", "image/*");
		input.setAttribute("multiple", "false");
		input.onchange = () => {
			if (input.files == null) return;
			if (input.files.length === 0) return;
			if (1024 * 1024 * maxSizeMb < input.files[0].size) {
				reject("over_max_size");
				return;
			}

			const reader = new FileReader();
			reader.onload = () => {
				resolve(reader.result as string);
				input.remove();
			};
			reader.onerror = (error) => reject(JSON.stringify(error));
			reader.readAsDataURL(input.files[0]);
		};

		input.click();
	});
}

export default {
	getImage,
};
