/**
 * Retrieves the value of the specified environment variable.
 * Throws an error if the variable is missing or empty.
 *
 * @param key - The name of the environment variable.
 * @returns The value of the environment variable.
 * @throws Error if the environment variable is missing or empty.
 */
export function getenv(key: string): string {
        const value = process.env[key];

        if (!value || value.length === 0) {
                throw new Error(`Missing environment variable ${key}`);
        }

        return value;
}
