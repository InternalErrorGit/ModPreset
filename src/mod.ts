import { DependencyContainer } from "tsyringe";
import { IMod } from "@spt-aki/models/external/mod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

class Mod implements IMod {
    // Code added here will load BEFORE the server has started loading
    public load(container: DependencyContainer): void {
        const logger = container.resolve<ILogger>("WinstonLogger");
        logger.info("Mod::load");
        logger.info("Mod::load -> finished successfully")
    }

    
    public delayedLoad(container: DependencyContainer): void {
        const logger = container.resolve<ILogger>("WinstonLogger");
        logger.info("Mod::delayedLoad");
        logger.info("Mod::delayedLoad -> finished successfully")
    }
}

module.exports = { mod: new Mod() }