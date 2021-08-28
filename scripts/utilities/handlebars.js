import * as settings from '../settings.js';

export function registerHandlerbars() {
    Handlebars.registerHelper('cap', function(string) {
        if (!string || string.length < 1)
            return '';
        return string[0].toUpperCase() + string.slice(1); 
    });
    
    Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '!=':
                return (v1 != v2) ? options.fn(this) : options.inverse(this);
            case '!==':
                return (v1 !== v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    });
    
    Handlebars.registerHelper('activeText', function(block) {
        if (settings.get('activeCssAsText')) {
            return block.fn(this);
        }

        return block.inverse(this);
    });

    loadTemplates([
        'modules/token-action-hud-relics/templates/category.hbs',
        'modules/token-action-hud-relics/templates/subcategory.hbs',
        'modules/token-action-hud-relics/templates/actionSet.hbs',
        'modules/token-action-hud-relics/templates/action.hbs',
        'modules/token-action-hud-relics/templates/tagdialog.hbs'
    ]);
}