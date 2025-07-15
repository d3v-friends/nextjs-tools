import React from "react";

const fnInput = {
	onChangeNumber: (e: React.ChangeEvent<HTMLInputElement>): string => {
		let numericValue = e.target.value
			// 숫자, 소수점, 마이너스 기호만 허용
			.replace(/[^0-9.-]/g, "")
			// 소수점이 여러 개 있을 경우 첫 번째 것만 유지
			.replace(/(\..*)\./g, "$1")
			// 마이너스 기호가 여러 개 있을 경우 첫 번째 것만 유지하고, 맨 앞에 위치하도록 함
			.replace(/-/g, (_, index) => (index === 0 ? "-" : ""));

		// 입력값이 소수점으로 시작하면 앞에 0 추가
		if (numericValue.startsWith(".")) {
			numericValue = "0" + numericValue;
		}
		// 입력값이 마이너스와 소수점으로 시작하면 -0. 형태로 만듦
		else if (numericValue.startsWith("-.")) {
			numericValue = "-0" + numericValue.substring(1);
		}

		// 맨 앞의 불필요한 0 제거 (0이 여러 개 있을 경우)
		// 단, 0 뒤에 소수점이 오는 경우는 유지 (예: 0.123, -0.123)
		return numericValue.replace(/^(-)?0+(?=\d)/, "$1");
	},
	getImage: (maxSizeMb = 5): Promise<string> => {
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
	},
};

export default fnInput;
