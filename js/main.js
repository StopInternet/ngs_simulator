/**
 * 戦闘力計算式
 * 基礎攻撃力+（武器攻撃力ｘ（1.0+ダメージ補正値）÷２）＋　
 * 潜在レベルｘ10　＋（（基礎防御力＋装備防御力）÷2 + 三部位合計のOPの戦闘力(ソール*4+せくれて*4等）
 * +装備本体によるHP上昇値÷10+防具特殊補正値（防具個別の追加戦闘力）+クラススキル習得数ｘ３)＝戦闘力 
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
        const option_w = document.createElement('option');
        option_w.value = weponKey
        option_w.text = wepons[weponKey].name[0];
        weponSelect.add(option_w);        
    }
    function unit(unitSelect){
        for(const unitKey in unit_stats){
            const option_u = document.createElement('option');
            option_u.value = unitKey;
            option_u.text = unit_stats[unitKey].name + " / "+unit_stats[unitKey].plus;
            unitSelect.add(option_u);
        }
    }
    function select_op(opSelect){
        for(const opKey in tag_op){
            const option_op = document.createElement('option');
            option_op.value = opKey;
            option_op.text = tag_op[opKey].name +" / "+tag_op[opKey].value;
            opSelect.add(option_op);
        }
    }

    //特殊能力系
    //武器
    const w1op = document.getElementById('wepon_op1_select')
    const w2op = document.getElementById('wepon_op2_select')
    const w3op = document.getElementById('wepon_op3_select')
    const w4op = document.getElementById('wepon_op4_select')
    const w5op = document.getElementById('wepon_op5_select')
    const w6op = document.getElementById('wepon_op6_select')

    //防具１
    const u11op = document.getElementById('unit1_op1_select')
    const u12op = document.getElementById('unit1_op2_select')
    const u13op = document.getElementById('unit1_op3_select')
    const u14op = document.getElementById('unit1_op4_select')
    const u15op = document.getElementById('unit1_op5_select')
    const u16op = document.getElementById('unit1_op6_select')

    //防具２
    const u21op = document.getElementById('unit2_op1_select')
    const u22op = document.getElementById('unit2_op2_select')
    const u23op = document.getElementById('unit2_op3_select')
    const u24op = document.getElementById('unit2_op4_select')
    const u25op = document.getElementById('unit2_op5_select')
    const u26op = document.getElementById('unit2_op6_select')

    //防具３
    const u31op = document.getElementById('unit3_op1_select')
    const u32op = document.getElementById('unit3_op2_select')
    const u33op = document.getElementById('unit3_op3_select')
    const u34op = document.getElementById('unit3_op4_select')
    const u35op = document.getElementById('unit3_op5_select')
    const u36op = document.getElementById('unit3_op6_select')

    //武器
    select_op(w1op)
    select_op(w2op)
    select_op(w3op)
    select_op(w4op)
    select_op(w5op)
    select_op(w6op)

    //防具１
    select_op(u11op)
    select_op(u12op)
    select_op(u13op)
    select_op(u14op)
    select_op(u15op)
    select_op(u16op)

    //防具２
    select_op(u21op)
    select_op(u22op)
    select_op(u23op)
    select_op(u24op)
    select_op(u25op)
    select_op(u26op)

    //防具３
    select_op(u31op)
    select_op(u32op)
    select_op(u33op)
    select_op(u34op)
    select_op(u35op)
    select_op(u36op)

    //防具選択
    var unitSelect1 = document.getElementById('unit1-select');
    var unitSelect2 = document.getElementById('unit2-select');
    var unitSelect3 = document.getElementById('unit3-select');
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
var we_name=null;
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
//PP補正
var def1_pp = 0;
var def2_pp = 0;
var def3_pp = 0;
//追加補正
var add_1 = 0;
var add_2 = 0;
var add_3 = 0;

//クラスの表示設定
var selectField_class = document.getElementById("class-select");
var selectField_classL = document.getElementById("class_level");
var select_class_skill = document.getElementById("skill");
selectField_class.addEventListener("input",function(){
    var select_class = class_stats[selectField_class.value].name;
    document.getElementById("class_name").innerHTML = class_stats[selectField_class.value].img+" "+select_class;
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
    we_name = wepons[selectField_w.value].name[0]
    atk_n = Math.floor(wepons[selectField_w.value].atk[select_w1plus.value])
    damege_pro = wepons[selectField_w.value].Variance
    document.getElementById("select_wepon_plus").innerHTML = atk_n
})
//武器の潜在レベル
const senzai_level = document.getElementById("senzai");
senzai_level.addEventListener("input",function(){
    senzai = wepons[selectField_w.value].properties[senzai_level.value]
    document.getElementById("select_senzai").innerHTML = senzai;
});

//防具１の表示設定
var selectField_unit1 = document.getElementById("unit1-select");
var select_unit1plus = document.getElementById("plus_unit1");

selectField_unit1.addEventListener("change", function() {
    const select_unit1Name = unit_stats[selectField_unit1.value].name;
    def1_hp = unit_stats[selectField_unit1.value].hp;
    def1_pp = unit_stats[selectField_unit1.value].pp;
    document.getElementById("select_unit1_name").innerHTML = select_unit1Name
});
//防具１の防御力
select_unit1plus.addEventListener("input",function(){
    def_1 = unit_stats[selectField_unit1.value].def[select_unit1plus.value];
    add_1 = unit_stats[selectField_unit1.value].plus;
    document.getElementById("select_unit1_plus").innerHTML = Math.floor(def_1)
})

//防具2の表示設定
var selectField_unit2 = document.getElementById("unit2-select");
var select_unit2plus = document.getElementById("plus_unit2");

selectField_unit2.addEventListener("change", function() {
    const select_unit2Name = unit_stats[selectField_unit2.value].name;
    def2_hp = unit_stats[selectField_unit2.value].hp;
    def2_pp = unit_stats[selectField_unit2.value].pp;
    document.getElementById("select_unit2_name").innerHTML = select_unit2Name
});
//防具２の防御力
select_unit2plus.addEventListener("input",function(){
    def_2 = unit_stats[selectField_unit2.value].def[select_unit2plus.value];
    add_2 = unit_stats[selectField_unit2.value].plus;
    document.getElementById("select_unit2_plus").innerHTML = Math.floor(def_2)
})

//防具3の表示設定
var selectField_unit3 = document.getElementById("unit3-select");
var select_unit3plus = document.getElementById("plus_unit3");

selectField_unit3.addEventListener("change", function() {
    const select_unit3Name = unit_stats[selectField_unit3.value].name;
    def3_hp = unit_stats[selectField_unit3.value].hp;
    def3_pp = unit_stats[selectField_unit3.value].pp;
    document.getElementById("select_unit3_name").innerHTML = select_unit3Name
});
//防御力３の防御力
select_unit3plus.addEventListener("input",function(){
    def_3 = unit_stats[selectField_unit3.value].def[select_unit3plus.value];
    add_3 = unit_stats[selectField_unit3.value].plus;
    document.getElementById("select_unit3_plus").innerHTML = Math.floor(def_3)
});

//総計算
const myButton = document.querySelector("#myButton");
function calculateBattlePower(baseAttack, weaponAttack, damageUpperLimit, damageLowerLimit, weaponPotentialLevel, defense, specialCorrection, hpBoost, ppBoost, classSkillCount,addplus,all_value) {
    let battlePower = baseAttack
  battlePower += Math.floor(weaponAttack * (damageUpperLimit + damageLowerLimit) / 2)
  battlePower += weaponPotentialLevel * 10
  battlePower += Math.floor(defense*0.5 + addplus + specialCorrection + hpBoost / 10)
  battlePower += ppBoost 
  battlePower += classSkillCount * 3
  return battlePower;
  }

myButton.addEventListener("click", function() {
/**
 * /**
  戦闘力計算式
  戦闘力=基礎攻撃力+
  [武器攻撃力*(ダメージ上限%+ダメージ下限%)/2]+
  武器潜在Lv*10
  +[防御力/2+特殊能力による特殊補正値+装備本体によるHP上昇値/10]+
  装備本体によるPP上昇値+
  クラススキル習得数*3
 */
var sent_va = 0;
var defA = class_d+def_1+def_2+def_3;
var defhpA = def1_hp + def2_hp + def3_hp;
var defppA = def1_pp + def2_pp + def3_pp;
var add_all = add_1 + add_2 + add_3;
var sp_op = 0;
//武器の特殊能力値
var op1sw = 0;
var op2sw = 0;
var op3sw = 0;
var op4sw = 0;
var op5sw = 0;
var op6sw = 0;
//防具１の特殊能力値
var op1su1 = 0;
var op2su1 = 0;
var op3su1 = 0;
var op4su1 = 0;
var op5su1 = 0;
var op6su1 = 0;
//防具２の特殊能力値
var op1su2 = 0;
var op2su2 = 0;
var op3su2 = 0;
var op4su2 = 0;
var op5su2 = 0;
var op6su2 = 0;
//防具３の特殊能力値
var op1su3 = 0;
var op2su3 = 0;
var op3su3 = 0;
var op4su3 = 0;
var op5su3 = 0;
var op6su3 = 0;
var opAllw = 0;

var op1_name = null;
var op2_name = null;
var op3_name = null;
var op4_name = null;
var op5_name = null;
var op6_name = null;
//武器の特殊能力値の設定
if(document.getElementById("wepon_op1_select").value != "null"){
    //武器の特殊能力１
    op1_name = document.getElementById("wepon_op1_select").value;
    op1sw = tag_op[op1_name].value;
}
if(document.getElementById("wepon_op2_select").value != "null"){
    //武器の特殊能力2
    op2_name = document.getElementById("wepon_op2_select").value;
    op2sw = tag_op[op2_name].value;
}
if(document.getElementById("wepon_op3_select").value != "null"){
    //武器の特殊能力3
    op3_name = document.getElementById("wepon_op3_select").value;
    op3sw = tag_op[op3_name].value;
}
if(document.getElementById("wepon_op4_select").value != "null"){
    //武器の特殊能力4
    op4_name = document.getElementById("wepon_op4_select").value;
    op4sw = tag_op[op4_name].value;
}
if(document.getElementById("wepon_op5_select").value != "null"){
    //武器の特殊能力5
    op5_name = document.getElementById("wepon_op5_select").value;
    op5sw = tag_op[op5_name].value;
}

if(document.getElementById("wepon_op6_select").value != "null"){
    //武器の特殊能力6
    op6_name = document.getElementById("wepon_op6_select").value;
    op6sw = tag_op[op6_name].value;
}

//防具１の特殊能力値の設定
if(document.getElementById("unit1_op1_select").value != "null"){
    //防具１の特殊能力１
    var op1u1_name = document.getElementById("unit1_op1_select").value;
    op1su1 = tag_op[op1u1_name].value;
}
if(document.getElementById("unit1_op2_select").value != "null"){
    //防具1の特殊能力2
    var op2u1_name = document.getElementById("unit1_op2_select").value;
    op2su1 = tag_op[op2u1_name].value;
}
if(document.getElementById("unit1_op3_select").value != "null"){
    //防具1の特殊能力3
    var op3u1_name = document.getElementById("unit1_op3_select").value;
    op3su1 = tag_op[op3u1_name].value;
}
if(document.getElementById("unit1_op4_select").value != "null"){
    //防具1の特殊能力4
    var op4u1_name = document.getElementById("unit1_op4_select").value;
    op4su1 = tag_op[op4u1_name].value;
}
if(document.getElementById("unit1_op5_select").value != "null"){
    //防具1の特殊能力5
    var op5u1_name = document.getElementById("unit1_op5_select").value;
    op5su1 = tag_op[op5u1_name].value;
}

if(document.getElementById("unit1_op6_select").value != "null"){
    //防具1の特殊能力6
    var op6u1_name = document.getElementById("unit1_op6_select").value;
    op6su1 = tag_op[op6u1_name].value;
}

//防具2の特殊能力値の設定
if(document.getElementById("unit2_op1_select").value != "null"){
    //防具１の特殊能力１
    var op1u2_name = document.getElementById("unit2_op1_select").value;
    op1su2 = tag_op[op1u2_name].value;
}
if(document.getElementById("unit2_op2_select").value != "null"){
    //防具２の特殊能力2
    var op2u2_name = document.getElementById("unit2_op2_select").value;
    op2su2 = tag_op[op2u2_name].value;
}
if(document.getElementById("unit2_op3_select").value != "null"){
    //防具３の特殊能力3
    var op3u2_name = document.getElementById("unit2_op3_select").value;
    op3su2 = tag_op[op3u2_name].value;
}
if(document.getElementById("unit2_op4_select").value != "null"){
    //防具４の特殊能力4
    var op4u2_name = document.getElementById("unit2_op4_select").value;
    op4su2 = tag_op[op4u2_name].value;
}
if(document.getElementById("unit2_op5_select").value != "null"){
    //防具５の特殊能力5
    var op5u2_name = document.getElementById("unit2_op5_select").value;
    op5su2 = tag_op[op5u2_name].value;
}

if(document.getElementById("unit2_op6_select").value != "null"){
    //防具５の特殊能力6
    var op6u2_name = document.getElementById("unit2_op6_select").value;
    op6su2 = tag_op[op6u2_name].value;
}

//防具3の特殊能力値の設定
if(document.getElementById("unit3_op1_select").value != "null"){
    //防具１の特殊能力１
    var op1u3_name = document.getElementById("unit3_op1_select").value;
    op1su3 = tag_op[op1u3_name].value;
}
if(document.getElementById("unit3_op2_select").value != "null"){
    //防具２の特殊能力2
    var op2u3_name = document.getElementById("unit3_op2_select").value;
    op2su3 = tag_op[op2u3_name].value;
}
if(document.getElementById("unit3_op3_select").value != "null"){
    //防具３の特殊能力3
    var op3u3_name = document.getElementById("unit3_op3_select").value;
    op3su3 = tag_op[op3u3_name].value;
}
if(document.getElementById("unit3_op4_select").value != "null"){
    //防具４の特殊能力4
    var op4u3_name = document.getElementById("unit3_op4_select").value;
    op4su3 = tag_op[op4u3_name].value;
}
if(document.getElementById("unit3_op5_select").value != "null"){
    //防具５の特殊能力5
    var op5u3_name = document.getElementById("unit3_op5_select").value;
    op5su3 = tag_op[op5u3_name].value;
}

if(document.getElementById("unit3_op6_select").value != "null"){
    //防具５の特殊能力5
    var op6u3_name = document.getElementById("unit3_op6_select").value;
    op6su3 = tag_op[op6u3_name].value;
}

//能力値の合計
//武器
opAllw = op1sw + op2sw + op3sw + op4sw + op5sw + op6sw
//防具
var opAll1 = op1su1 + op2su1 + op3su1 + op4su1 + op5su1 + op6su1
var opAll2 = op1su2 + op2su2 + op3su2 + op4su2 + op5su2 + op6su2
var opAll3 = op1su3 + op2su3 + op3su3 + op4su3 + op5su3 + op6su3
sp_op = opAllw + opAll1 + opAll2 + opAll3

var result = calculateBattlePower(class_a, atk_n, 1,damege_pro,senzai,defA,sp_op,defhpA,defppA,skill_c,add_all,opAllw);
document.getElementById("result_sentou").innerHTML = Math.floor(result)
document.getElementById("result_sentou2").value = Math.floor(result)
});
//武器OPの検索機能
const searchInput_w1 = document.getElementById('search-input_w1');
const searchInput_w2 = document.getElementById('search-input_w2');
const searchInput_w3 = document.getElementById('search-input_w3');
const searchInput_w4 = document.getElementById('search-input_w4');
const searchInput_w5 = document.getElementById('search-input_w5');
const searchInput_w6 = document.getElementById('search-input_w6');

var op_ui_w1_Select = document.getElementById('wepon_op1_select');
var op_ui_w2_Select = document.getElementById('wepon_op2_select');
var op_ui_w3_Select = document.getElementById('wepon_op3_select');
var op_ui_w4_Select = document.getElementById('wepon_op4_select');
var op_ui_w5_Select = document.getElementById('wepon_op5_select');
var op_ui_w6_Select = document.getElementById('wepon_op6_select');

//防具１のOPの検索機能
var searchInput_u11 = document.getElementById('search-input_u11');
var searchInput_u21 = document.getElementById('search-input_u21');
var searchInput_u31 = document.getElementById('search-input_u31');
var searchInput_u41 = document.getElementById('search-input_u41');
var searchInput_u51 = document.getElementById('search-input_u51');
var searchInput_u61 = document.getElementById('search-input_u61');

const op_ui_u11_Select = document.getElementById('unit1_op1_select');
const op_ui_u21_Select = document.getElementById('unit1_op2_select');
const op_ui_u31_Select = document.getElementById('unit1_op3_select');
const op_ui_u41_Select = document.getElementById('unit1_op4_select');
const op_ui_u51_Select = document.getElementById('unit1_op5_select');
const op_ui_u61_Select = document.getElementById('unit1_op6_select');

//防具１2のOPの検索機能
const searchInput_u12 = document.getElementById('search-input_u12');
const searchInput_u22 = document.getElementById('search-input_u22');
const searchInput_u32 = document.getElementById('search-input_u32');
const searchInput_u42 = document.getElementById('search-input_u42');
const searchInput_u52 = document.getElementById('search-input_u52');
const searchInput_u62 = document.getElementById('search-input_u62');

const op_ui_u12_Select = document.getElementById('unit2_op1_select');
const op_ui_u22_Select = document.getElementById('unit2_op2_select');
const op_ui_u32_Select = document.getElementById('unit2_op3_select');
const op_ui_u42_Select = document.getElementById('unit2_op4_select');
const op_ui_u52_Select = document.getElementById('unit2_op5_select');
const op_ui_u62_Select = document.getElementById('unit2_op6_select');

//防具１3のOPの検索機能
const searchInput_u13 = document.getElementById('search-input_u13');
const searchInput_u23 = document.getElementById('search-input_u23');
const searchInput_u33 = document.getElementById('search-input_u33');
const searchInput_u43 = document.getElementById('search-input_u43');
const searchInput_u53 = document.getElementById('search-input_u53');
const searchInput_u63 = document.getElementById('search-input_u63');

const op_ui_u13_Select = document.getElementById('unit3_op1_select');
const op_ui_u23_Select = document.getElementById('unit3_op2_select');
const op_ui_u33_Select = document.getElementById('unit3_op3_select');
const op_ui_u43_Select = document.getElementById('unit3_op4_select');
const op_ui_u53_Select = document.getElementById('unit3_op5_select');
const op_ui_u63_Select = document.getElementById('unit3_op6_select');

function searchs(searchInput,select_target){
    const searchValue = searchInput.value.toLowerCase();
    Array.from(select_target.options).forEach((option) => {
        const optionValue = option.value.toLowerCase();
        const textContent = option.textContent.toLowerCase();
        if (optionValue.includes(searchValue) || textContent.includes(searchValue)) {
          option.hidden = false;
      } else {
          option.hidden = true;
       } 
    });
}

//武器と防具の検索
document.getElementById('search-input_we').addEventListener('input',()=>{
    searchs(document.getElementById('search-input_we'),document.getElementById('wepon-select'))
});

document.getElementById('search-input_u1').addEventListener('input',()=>{
    searchs(document.getElementById('search-input_u1'),document.getElementById('unit1-select'))
});

document.getElementById('search-input_u2').addEventListener('input',()=>{
    searchs(document.getElementById('search-input_u2'),document.getElementById('unit2-select'))
});

document.getElementById('search-input_u3').addEventListener('input',()=>{
    searchs(document.getElementById('search-input_u3'),document.getElementById('unit3-select'))
});

//武器OPの検索機能
//1
searchInput_w1.addEventListener('input', () => {
    searchs(searchInput_w1,op_ui_w1_Select)
});

//2
searchInput_w2.addEventListener('input', () => {
    searchs(searchInput_w2,op_ui_w2_Select)
});

//3
searchInput_w3.addEventListener('input', () => {
    searchs(searchInput_w3,op_ui_w3_Select)
});

//4
searchInput_w4.addEventListener('input', () => {
    searchs(searchInput_w4,op_ui_w4_Select)
});

//5
searchInput_w5.addEventListener('input', () => {
    searchs(searchInput_w5,op_ui_w5_Select)
});

//6
searchInput_w6.addEventListener('input', () => {
    searchs(searchInput_w6,op_ui_w6_Select)
});

//防具１
//1
searchInput_u11.addEventListener('input', () => {
    searchs(searchInput_u11,op_ui_u11_Select)
});

//2
searchInput_u21.addEventListener('input', () => {
    searchs(searchInput_u21,op_ui_u21_Select)
});

//3
searchInput_u31.addEventListener('input', () => {
    searchs(searchInput_u31,op_ui_u31_Select)
});

//4
searchInput_u41.addEventListener('input', () => {
    searchs(searchInput_u41,op_ui_u41_Select)
});

//5
searchInput_u51.addEventListener('input', () => {
    searchs(searchInput_u51,op_ui_u51_Select)
});

//6
searchInput_u61.addEventListener('input', () => {
    searchs(searchInput_u61,op_ui_u61_Select)
});

//防具2
//1
searchInput_u12.addEventListener('input', () => {
    searchs(searchInput_u12,op_ui_u12_Select)
});

//2
searchInput_u22.addEventListener('input', () => {
    searchs(searchInput_u22,op_ui_u22_Select)
});

//3
searchInput_u32.addEventListener('input', () => {
    searchs(searchInput_u32,op_ui_u32_Select)
});

//4
searchInput_u42.addEventListener('input', () => {
    searchs(searchInput_u42,op_ui_u42_Select)
});

//5
searchInput_u52.addEventListener('input', () => {
    searchs(searchInput_u52,op_ui_u52_Select)
});

//6
searchInput_u62.addEventListener('input', () => {
    searchs(searchInput_u62,op_ui_u62_Select)
});

//防具3
//1
searchInput_u13.addEventListener('input', () => {
    searchs(searchInput_u13,op_ui_u13_Select)
});

//2
searchInput_u23.addEventListener('input', () => {
    searchs(searchInput_u23,op_ui_u23_Select)
});

//3
searchInput_u33.addEventListener('input', () => {
    searchs(searchInput_u33,op_ui_u33_Select)
});

//4
searchInput_u43.addEventListener('input', () => {
    searchs(searchInput_u43,op_ui_u43_Select)
});

//5
searchInput_u53.addEventListener('input', () => {
    searchs(searchInput_u53,op_ui_u53_Select)
});

//6
searchInput_u63.addEventListener('input', () => {
    searchs(searchInput_u61,op_ui_u63_Select)
});

function copy_wepon_all_value(){
    op_ui_w1_Select.value = op_ui_u11_Select.value
}

document.getElementById("li_all").addEventListener('click',()=>{
    //コピー機能
    op_ui_u11_Select.value = op_ui_w1_Select.value
    op_ui_u21_Select.value = op_ui_w2_Select.value 
    op_ui_u31_Select.value = op_ui_w3_Select.value 
    op_ui_u41_Select.value = op_ui_w4_Select.value 
    op_ui_u51_Select.value = op_ui_w5_Select.value 
    op_ui_u61_Select.value = op_ui_w6_Select.value 

    op_ui_u12_Select.value = op_ui_w1_Select.value
    op_ui_u22_Select.value = op_ui_w2_Select.value 
    op_ui_u32_Select.value = op_ui_w3_Select.value 
    op_ui_u42_Select.value = op_ui_w4_Select.value 
    op_ui_u52_Select.value = op_ui_w5_Select.value 
    op_ui_u62_Select.value = op_ui_w6_Select.value 

    op_ui_u13_Select.value = op_ui_w1_Select.value
    op_ui_u23_Select.value = op_ui_w2_Select.value 
    op_ui_u33_Select.value = op_ui_w3_Select.value 
    op_ui_u43_Select.value = op_ui_w4_Select.value 
    op_ui_u53_Select.value = op_ui_w5_Select.value 
    op_ui_u63_Select.value = op_ui_w6_Select.value 
    
});

document.getElementById("li_all1").addEventListener('click',()=>{
    op_ui_u12_Select.value = op_ui_u11_Select.value
    op_ui_u22_Select.value = op_ui_u21_Select.value
    op_ui_u32_Select.value = op_ui_u31_Select.value 
    op_ui_u42_Select.value = op_ui_u41_Select.value 
    op_ui_u52_Select.value = op_ui_u51_Select.value
    op_ui_u62_Select.value = op_ui_u61_Select.value

    op_ui_u13_Select.value = op_ui_u11_Select.value
    op_ui_u23_Select.value = op_ui_u21_Select.value 
    op_ui_u33_Select.value = op_ui_u31_Select.value
    op_ui_u43_Select.value = op_ui_u41_Select.value
    op_ui_u53_Select.value = op_ui_u51_Select.value
    op_ui_u63_Select.value = op_ui_u61_Select.value

});

function generateImage(text) {
    // canvas要素を作成
    var canvas = document.createElement('canvas');
    canvas.width = 975;
    canvas.height = 1024;
  
    // canvasコンテキストを取得
    var context = canvas.getContext('2d');
  
    // 背景色を設定
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // テキストを描画
    context.fillStyle = '#000';
    context.font = '20px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    var lines = text.split('\n');
    var lineHeight = 30;
    var x = canvas.width / 2;
    var y = canvas.height / 2 - (lines.length - 1) * lineHeight / 2;
    for (var i = 0; i < lines.length; i++) {
      context.fillText(lines[i], x, y + i * lineHeight);
    }
  
    // 画像を生成
    var img = new Image();
    img.src = canvas.toDataURL();
  
    // 画像を表示
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
  }
  


document.getElementById("Images").addEventListener('click',()=>{
    var img_class = "クラス名：" +class_stats[document.getElementById("class-select").value].name
    var img_level = "\nクラスレベル：" + selectField_classL.value
    var img_skill = "\nクラススキル習得数：" + select_class_skill.value
    var img_hp = "\n体力："+class_h;
    var img_atk = "\n攻撃力："+class_a;
    var img_def = "\n防御力："+class_d+"\n";

    var img_wepon = "\n武器名：\n"+we_name
    var img_wepon_plus = "\n攻撃力:"+atk_n
    var img_senzai = "\n潜在レベル:" + senzai +"\n"
    var img_op_wepon = "\n特殊能力：\n"+tag_op[document.getElementById("wepon_op1_select").value].name + 
                                   "\n" + tag_op[document.getElementById("wepon_op2_select").value].name + 
                                   "\n" + tag_op[document.getElementById("wepon_op3_select").value].name +
                                   "\n" + tag_op[document.getElementById("wepon_op4_select").value].name +
                                   "\n" + tag_op[document.getElementById("wepon_op5_select").value].name +
                                   "\n" + tag_op[document.getElementById("wepon_op6_select").value].name + "\n"
    
    var img_unit1 = "\n\n防具１："+ unit_stats[document.getElementById("unit1-select").value].name + "｜防具２："+ unit_stats[document.getElementById("unit2-select").value].name + "｜防具３："+ unit_stats[document.getElementById("unit3-select").value].name;
    var img_u1plus = "\n防御力："+ unit_stats[document.getElementById("unit1-select").value].def[document.getElementById("plus_unit1").value] + "｜防御力："+ unit_stats[document.getElementById("unit2-select").value].def[document.getElementById("plus_unit2").value] +"｜防御力："+ unit_stats[document.getElementById("unit3-select").value].def[document.getElementById("plus_unit3").value];
    var img_op_u0 =  "\n特殊能力："+"｜特殊能力："+"｜特殊能力：\n"
    var img_op_u1 = tag_op[document.getElementById("unit1_op1_select").value].name + "｜" + tag_op[document.getElementById("unit2_op1_select").value].name + "｜" + tag_op[document.getElementById("unit3_op1_select").value].name + "\n"
    var img_op_u2 = tag_op[document.getElementById("unit1_op2_select").value].name + "｜" + tag_op[document.getElementById("unit2_op2_select").value].name + "｜" + tag_op[document.getElementById("unit3_op2_select").value].name + "\n"
    var img_op_u3 = tag_op[document.getElementById("unit1_op3_select").value].name + "｜" + tag_op[document.getElementById("unit2_op3_select").value].name + "｜" + tag_op[document.getElementById("unit3_op3_select").value].name + "\n"
    var img_op_u4 = tag_op[document.getElementById("unit1_op4_select").value].name + "｜" + tag_op[document.getElementById("unit2_op4_select").value].name + "｜" + tag_op[document.getElementById("unit3_op4_select").value].name + "\n"
    var img_op_u5 = tag_op[document.getElementById("unit1_op5_select").value].name + "｜" + tag_op[document.getElementById("unit2_op5_select").value].name + "｜" + tag_op[document.getElementById("unit3_op5_select").value].name + "\n"
    var img_op_u6 = tag_op[document.getElementById("unit1_op6_select").value].name + "｜" + tag_op[document.getElementById("unit2_op6_select").value].name + "｜" + tag_op[document.getElementById("unit3_op6_select").value].name + "\n"

    var stats_alls = img_class+img_level+img_skill+img_hp+img_atk+img_def+
    img_wepon+img_wepon_plus+img_senzai+img_op_wepon+
    img_unit1 + img_u1plus +img_op_u0 + img_op_u1 + img_op_u2 + img_op_u3 + img_op_u4 + img_op_u5 + img_op_u6+"\n戦闘力："+document.getElementById("result_sentou2").value

    generateImage(stats_alls)
});