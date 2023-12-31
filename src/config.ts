import { getenv } from "@utils/environment";

export class Config {
    private static instance: Config;

    public token: string;

    private constructor() {
        this.token = getenv('TOKEN');
    }

    /**
     * Returns the singleton instance of the Config class.
     * If the instance does not exist, it creates a new one.
     * @returns The singleton instance of the Config class.
     */
    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }

        return Config.instance;
    }
}