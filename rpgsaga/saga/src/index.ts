import { Game } from './core/Game';
import { logger } from './services';

logger.setMode({
  activeDebug: false,
  activeLog: false,
  activeInfo: true,
});
const game = new Game(4);
game.start();
