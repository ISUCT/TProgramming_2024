import { Game } from "./src/core/Game";
import { logger } from "./src/services";

logger.setMode({
  activeDebug: false,
  activeLog: false,
  activeInfo: true,
})
const game = new Game(4)
game.start()
