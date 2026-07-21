import type { AppConfig } from '@interceptor/shared';

export function formatStartupBanner(config: AppConfig): string {
	if (!config) {
		return 'interceptor-api [unknown config]';
	}
	return `${config.name} v${config.version} [${config.environment}]`;
}
