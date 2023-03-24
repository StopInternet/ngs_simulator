/**
 * 戦闘力計算式
 * 基礎攻撃力+（武器攻撃力ｘ（1.0+ダメージ補正値）÷２）＋　
 * 潜在レベルｘ10　＋（（基礎防御力＋装備防御力）÷2 + 三部位合計のOPの戦闘力(ソール*4+せくれて*4等）
 * +装備本体によるHP上昇値÷10+クラススキル習得数ｘ３)＝戦闘力 
 * 
 * class_stats_level70[5].atk+(wepon_stats_60[0].atk*(1.0+wepon_stats_60[0].damage_safe)/2)+wepon_stats_60[0].senzai*10 + ((class_stats_level70[5].def+unit_stats[0].plus)/2 +tag_op[3].stats*3+47*3)
 */

import unit_stats from "./unit.js"
import tag_op from "./op_tag.js"
import wepons from "./wepon_stats.js"
import class_stats from "./class_stats.js"

window.onload = function mains(){
    
    //クラスと、クラススキル習得数の生成
    const classSelect = document.getElementById('class-select');
    for (const classKey in class_stats) {
      const option = document.createElement('option');
      option.value = classKey;
      option.text = class_stats[classKey].name;
      classSelect.add(option);
    }
    //武器の作成
    const weponSelect = document.getElementById('wepon-select');
    for(const weponKey in wepons){
        for(var i=1;i<=16;i++){
            const option_w = document.createElement('option');
            option_w.value = weponKey
            option_w.text = wepons[weponKey].name[i];
            weponSelect.add(option_w);
        }
        
    }
    function unit(unitSelect){
        for(const unitKey in unit_stats){
            const option_u = document.createElement('option');
            option_u.value = unitKey;
            option_u.text = unit_stats[unitKey].name[1];
            unitSelect.add(option_u);
        }
    }
    //防具１
    const unitSelect1 = document.getElementById('unit1-select');
    const unitSelect2 = document.getElementById('unit2-select');
    const unitSelect3 = document.getElementById('unit3-select');
    unit(unitSelect1);
    unit(unitSelect2);
    unit(unitSelect3);
}
//宣言
//クラス系
var class_a =0;
var class_d =0;
var class_h =0;
var skill_c =0;
//武器系
//攻撃力（強化値含む）
var atk_n = 0;
//ダメージ補正値
var damege_pro = 0;
//潜在レベル
var senzai = 0;
//装備系
//防具１
//防御力
var def_1 = 0;
var def_2 = 0;
var def_3 = 0;
//HP補正
var def1_hp = 0;
var def2_hp = 0;
var def3_hp = 0;
var def1_pp = 0;
var def2_pp = 0;
var def3_pp = 0;

//クラスの表示設定
const selectField_class = document.getElementById("class-select");
const selectField_classL = document.getElementById("class_level");
const select_class_skill = document.getElementById("skill");
selectField_class.addEventListener("input",function(){
    const select_class = class_stats[selectField_class.value].name;
    document.getElementById("class_name").innerHTML = select_class;
});
//クラスレベルとステータス
selectField_classL.addEventListener("input",function(){
    const select_classL = selectField_classL.value;
    class_h = class_stats[selectField_class.value].hp[select_classL];
    class_a = class_stats[selectField_class.value].atk[select_classL];
    class_d = class_stats[selectField_class.value].def[select_classL];
    document.getElementById("class_level_c").innerHTML = select_classL;
    document.getElementById("class_hp").innerHTML = class_h;
    document.getElementById("class_atk").innerHTML = class_a;
    document.getElementById("class_def").innerHTML = class_d;
    
});
//クラススキル習得数
select_class_skill.addEventListener("input",function(){
    skill_c = class_stats[selectField_class.value].skill[select_class_skill.value]
    document.getElementById("class_skill").innerHTML = skill_c;
});

//武器の表示設定
const selectField_w = document.getElementById("wepon-select");
const select_w1plus = document.getElementById("plus_w");
select_w1plus.addEventListener("input",function(){
    atk_n = wepons[selectField_w.value].atk[select_w1plus.value];
    damege_pro = wepons[selectField_w.value].Variance[1]
    document.getElementById("select_wepon_plus").innerHTML = atk_n
})
//武器の潜在レベル
const senzai_level = document.getElementById("senzai");
senzai_level.addEventListener("input",function(){
    senzai = wepons[selectField_w.value].properties[senzai_level.value]
    document.getElementById("select_senzai").innerHTML = senzai;
});

//防具１の表示設定
const selectField_unit1 = document.getElementById("unit1-select");
const select_unit1plus = document.getElementById("plus_unit1");

selectField_unit1.addEventListener("change", function() {
    const select_unit1Name = unit_stats[selectField_unit1.value].name[1];
    def1_hp = unit_stats[selectField_unit1.value].hp[1];
    def1_pp = unit_stats[selectField_unit1.value].pp[1];
    document.getElementById("select_unit1_name").innerHTML = select_unit1Name
});
//防具１の防御力
select_unit1plus.addEventListener("input",function(){
    def_1 = unit_stats[selectField_unit1.value].def[select_unit1plus.value];
    document.getElementById("select_unit1_plus").innerHTML = def_1
})

//防具2の表示設定
const selectField_unit2 = document.getElementById("unit2-select");
const select_unit2plus = document.getElementById("plus_unit2");

selectField_unit2.addEventListener("change", function() {
    const select_unit2Name = unit_stats[selectField_unit2.value].name[1];
    def2_hp = unit_stats[selectField_unit2.value].hp[1];
    def2_pp = unit_stats[selectField_unit2.value].pp[1];
    document.getElementById("select_unit2_name").innerHTML = select_unit2Name
});
//防具２の防御力
select_unit2plus.addEventListener("input",function(){
    def_2 = unit_stats[selectField_unit2.value].def[select_unit2plus.value];
    document.getElementById("select_unit2_plus").innerHTML = def_2
})

//防具3の表示設定
const selectField_unit3 = document.getElementById("unit3-select");
const select_unit3plus = document.getElementById("plus_unit3");

selectField_unit3.addEventListener("change", function() {
    const select_unit3Name = unit_stats[selectField_unit3.value].name[1];
    def3_hp = unit_stats[selectField_unit3.value].hp[1];
    def3_pp = unit_stats[selectField_unit3.value].pp[1];
    document.getElementById("select_unit3_name").innerHTML = select_unit3Name
});
//防御力３の防御力
select_unit3plus.addEventListener("input",function(){
    def_3 = unit_stats[selectField_unit3.value].def[select_unit3plus.value];
    document.getElementById("select_unit3_plus").innerHTML = def_3
});

//総計算
const myButton = document.querySelector("#myButton");
myButton.addEventListener("click", function() {
/**
 * /**
 * 戦闘力計算式
 * 戦闘力=基礎攻撃力+[武器攻撃力*(ダメージ上限%+ダメージ下限%)/2]+武器潜在Lv*10
　　　+[防御力/2+特殊能力による特殊補正値+装備本体によるHP上昇値/10]+装備本体によるPP上昇値+クラススキル習得数*3
 */
var sent_va = 0;
var defA = (def_1+def_2+def_3)
sent_va = class_a + (atk_n*(1.0+damege_pro)/2) + (senzai*10) + ((class_d+defA)/2)+((def1_hp+def2_hp+def3_hp)/10)+(def1_pp+def2_pp+def3_pp)+(skill_c*3)
document.getElementById("result_sentou").innerHTML = Math.floor(sent_va)
});