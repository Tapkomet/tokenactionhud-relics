import { RelicsSystemManager } from './relics.js';

export class SystemManagerFactory {
    static create(system, appName) {
        switch(system) {
            case 'relics':
                return new RelicsSystemManager(appName);
        }
    }
}
