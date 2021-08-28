export function register(appName, updateFunc) {

    game.settings.register(appName,'ignorePassiveFeats', {
        name: game.i18n.localize('tokenactionhud.settings.relics.ignorePassiveFeats.name'),
        hint: game.i18n.localize('tokenactionhud.settings.relics.ignorePassiveFeats.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'showSpellInfo', {
        name: game.i18n.localize('tokenactionhud.settings.relics.showSpellInfo.name'),
        hint: game.i18n.localize('tokenactionhud.settings.relics.showSpellInfo.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'showAllNonpreparableSpells', {
        name: game.i18n.localize('tokenactionhud.settings.relics.showAllNonpreparableSpells.name'),
        hint: game.i18n.localize('tokenactionhud.settings.relics.showAllNonpreparableSpells.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'hideLongerActions', {
        name: game.i18n.localize('tokenactionhud.settings.relics.hideLongerActions.name'),
        hint: game.i18n.localize('tokenactionhud.settings.relics.hideLongerActions.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'abbreviateSkills', {
        name: game.i18n.localize('tokenactionhud.settings.relics.abbreviateSkills.name'),
        hint: game.i18n.localize('tokenactionhud.settings.relics.abbreviateSkills.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'splitAbilities', {
        name: game.i18n.localize('tokenactionhud.settings.relics.splitAbilities.name'),
        hint: game.i18n.localize('tokenactionhud.settings.relics.splitAbilities.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'showAllNpcItems', {
        name: game.i18n.localize('tokenactionhud.settings.relics.showAllNpcItems.name'),
        hint: game.i18n.localize('tokenactionhud.settings.relics.showAllNpcItems.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'showEmptyItems', {
        name: game.i18n.localize('tokenactionhud.settings.relics.showEmptyItems.name'),
        hint: game.i18n.localize('tokenactionhud.settings.relics.showEmptyItems.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'showConditionsCategory', {
        name: game.i18n.localize('tokenactionhud.settings.relics.showConditionsCategory.name'),
        hint: game.i18n.localize('tokenactionhud.settings.relics.showConditionsCategory.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateFunc(value); }
    });

    if (game.modules.get('character-actions-list-5e')?.active) {
        game.settings.register(appName,'useActionList', {
            name : game.i18n.localize('tokenactionhud.settings.useActionList.name'),
            hint : game.i18n.localize('tokenactionhud.settings.useActionList.hint'),
            scope : 'client',
            config : true,
            type : Boolean,
            default : false,
            onChange: value => { updateFunc(value); }
        });
    }
}
