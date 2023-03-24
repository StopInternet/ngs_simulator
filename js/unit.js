/**
 * +40は+50から10引いた値
 */


const unit_stats = {
    lecerl:{name:{},hp:{},pp:{},power:{},shoot:{},magic:{},damege_protect:{},def:{},rare:{}},
    eizyax:{name:{},hp:{},pp:{},power:{},shoot:{},magic:{},damege_protect:{},def:{},rare:{}},
    efiaru:{name:{},hp:{},pp:{},power:{},shoot:{},magic:{},damege_protect:{},def:{},rare:{}},
    efiber:{name:{},hp:{},pp:{},power:{},shoot:{},magic:{},damege_protect:{},def:{},rare:{}},
    efituv:{name:{},hp:{},pp:{},power:{},shoot:{},magic:{},damege_protect:{},def:{},rare:{}},
    enfida:{name:{},hp:{},pp:{},power:{},shoot:{},magic:{},damege_protect:{},def:{},rare:{}},
    enfivi:{name:{},hp:{},pp:{},power:{},shoot:{},magic:{},damege_protect:{},def:{},rare:{}},
}   

//ステータス設定
function stats_set(id,name,hp,pp,power,shoot,magic,damege_protect){
    //防具のステータス設定
    unit_stats[id].name[1] = name;
    unit_stats[id].hp[1] = hp;
    unit_stats[id].pp[1] = pp;
    unit_stats[id].power[1] = power;
    unit_stats[id].shoot[1] = shoot;
    unit_stats[id].magic[1] = magic;
    unit_stats[id].damege_protect[1] = damege_protect;
}

function set_protect_stats(id,def,rare){
    function count8s(plus){
        if(plus==40||plus==50||plus==60){
            return plus=10;
        }
        if(plus<40){
            return plus -= 30;
        }
        if(41<=plus<50){
            return plus -= 40;
        }
        if(51<=plus<60){
            return plus -= 50;
        }
    }
    //7,6
    if(rare===7 || rare===6){
        //防御値設定
        unit_stats[id].def[0] = def
        for(var i=1;i<=40;i++){
            unit_stats[id].def[i] = def+i
        }
    }
    //7
    if(rare===7){
        //41~50
        for(var i7=41;i7<=50;i7++){
            if(i7 == 50){
                unit_stats[id].def[i7] = def+(i7+1)
                continue;
            }
            unit_stats[id].def[i7] = def+i7;
        }
        //51~60
        for(var i7_2=51;i7_2<=60;i7_2++){
            unit_stats[id].def[i7_2] = def+(i7_2+1)
        }
    }
}
//✪8
//レクレール
stats_set('lecerl',"レクレールアーマ",0,0,4,4,4,0.05);
set_protect_stats('lecerl',35,7);
//エイジャクス
stats_set('eizyax',"エイジャクスアーマ",30,5,3.5,3.5,3.5,0.05);
set_protect_stats('eizyax',41,7);
//エフィタス（aru,tuv,ber)
//アルガ
stats_set('efiaru',"エフィタスアーマ・アルガ",30,4,3,3,0,0.05);
set_protect_stats('efiaru',39,7);
//ベルタ
stats_set('efiber',"エフィタスアーマ・ベルタ",30,4,0,3,3,0.05);
set_protect_stats('efiber',39,7);
//ツェザ
stats_set('efituv',"エフィタスアーマ・ツェザ",30,4,3,0,3,0.05);
set_protect_stats('efituv',39,7);
//エンフィタス
//ヴィダ
stats_set('enfida',"エンフィタスアーマ・ヴィダ",55,0,3,3,3,0.05);
set_protect_stats('enfida',40,7);
//ヴィオ
stats_set('enfivi',"エンフィタスアーマ・ヴィオ",0,10,3,3,3,0.05);
set_protect_stats('enfivi',40,7)
export default unit_stats;