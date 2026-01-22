"use client";
import {
	AppRouterInstance,
	NavigateOptions,
	PrefetchOptions,
} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";

class RouterTools implements AppRouterInstance {
	constructor(public readonly router: AppRouterInstance) {}

	pushBySearchParams(
		searchParams: Record<string, Date | string | number | null | undefined | string[] | number[]>,
		host?: string,
		options?: NavigateOptions
	) {
		const u = new URLSearchParams(window.location.search);
		for (const key in searchParams) {
			if (searchParams[key]) {
				if (searchParams[key] instanceof Date) {
					u.set(key, searchParams[key].toISOString());
					continue;
				}

				if (Array.isArray(searchParams[key])) {
					u.set(key, searchParams[key].map((v) => String(v).trim()).join(","));
				}

				switch (typeof searchParams[key]) {
					case "number":
						u.set(key, String(searchParams[key]));
						break;
					case "string":
						u.set(key, searchParams[key]);
						break;
					default:
						u.delete(key);
				}
			} else {
				u.delete(key);
			}
		}

		host = host || window.location.pathname;
		this.router.push(`${host}?${u.toString()}`, options);
	}

	push(href: string, options?: NavigateOptions): void {
		this.router.push(href, options);
	}

	refresh() {
		this.router.refresh();
	}

	back() {
		this.router.back();
	}

	forward(): void {
		this.router.forward();
	}

	replace(href: string, options?: NavigateOptions): void {
		this.router.replace(href, options);
	}

	prefetch(href: string, options?: PrefetchOptions): void {
		return this.router.prefetch(href, options);
	}
}

export default function (): RouterTools {
	const router = useRouter();
	return new RouterTools(router);
}
