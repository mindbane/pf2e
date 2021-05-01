import { CreatureData } from '@actor/data-definitions';
import { RuleElementPF2e, TokenEffect } from '../rule-element';
import { PF2RuleElementSynthetics } from '@module/rules/rules-data-definitions';
import { ItemDataPF2e } from '@item/data-definitions';

/**
 * @category RuleElement
 */
export class PF2TokenEffectIconRuleElement extends RuleElementPF2e {
    constructor(ruleData: any, item: ItemDataPF2e) {
        super(ruleData, item);
    }

    onAfterPrepareData(actorData: CreatureData, synthetics: PF2RuleElementSynthetics) {
        super.onAfterPrepareData(actorData, synthetics);

        const icon = this.ruleData.value ?? this.item.img ?? 'systems/pf2e/icons/default-icons/mystery-man.svg';

        actorData.data.tokenEffects ??= [];
        actorData.data.tokenEffects.push(new TokenEffect(icon));
    }
}
