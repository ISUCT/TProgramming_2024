export class Logger {
    
    //сообщение с меткой времени
    static log(message: string): void {
        const timestamp = new Date().toISOString(); 
        console.log(`[${timestamp}] ${message}`);
    }

    //сообщение об ошибке
    static error(message: string): void {
        const timestamp = new Date().toISOString(); 
        console.error(`[${timestamp}] ERROR: ${message}`); 
    }

    //сообщение с информацией
    static info(message: string): void {
        const timestamp = new Date().toISOString(); 
        console.info(`[${timestamp}] INFO: ${message}`); 
    }

    //сообщение с предупреждением
    static warn(message: string): void {
        const timestamp = new Date().toISOString(); 
        console.warn(`[${timestamp}] WARNING: ${message}`); 
    }

}