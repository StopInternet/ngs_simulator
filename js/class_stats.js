/**
 * LvUP上昇後のHP = Lv1のHP x 1.05^((上昇後のLv-1)÷5)
 * Math.round(300 * Math.pow(1.05,(class_level-1)/5));
 * 
 * Lv上昇後の攻撃力= 450 x 1.1^((上昇後のLv-1)/5)+(Lv1の攻撃力-450)
 * Math.round(450*Math.pow(1.1,((2-1)/5)+(450-450)))
 * 
 * Lv上昇後の防御力=300*1.08^((上層後のLv-1)/5)+(Lv1の防御力-300)
 * (いずれも小数点以下の値を四捨五入)。つまりLvが5上がる度にHPは5%、攻撃力は10%、防御力は8%ずつ上がるような設計になっています。
 * Math.round(300 * Math.pow(1.08, (70-1)/5) + (304-300));
 */

const class_stats = {
    Hu:{name:"ハンター(Hu)",hp:{1:300},atk:{1:450},def:{1:304},skill:{1:1},img:'<img src="img/class_img/Hu.png">'},
    Fi:{name:"ファイター(Fi)",hp:{1:280},atk:{1:454},def:{1:301},skill:{1:1},img:'<img src="img/class_img/Fi.png">'},
    Ra:{name:"レンジャー(Ra)",hp:{1:240},atk:{1:448},def:{1:300},skill:{1:1},img:'<img src="img/class_img/Ra.png">'},
    Gu:{name:"ガンナー(Gu)",hp:{1:250},atk:{1:451},def:{1:297},skill:{1:1},img:'<img src="img/class_img/Gu.png">'},
    Fo:{name:"フォース(Fo)",hp:{1:235},atk:{1:453},def:{1:296},skill:{1:1},img:'<img src="img/class_img/Fo.png">'},
    Te:{name:"テクター(Te)",hp:{1:260},atk:{1:446},def:{1:303},skill:{1:1},img:'<img src="img/class_img/Te.png">'},
    Br:{name:"ブレイバー(Br)",hp:{1:270},atk:{1:452},def:{1:302},skill:{1:1},img:'<img src="img/class_img/Br.png">'},
    Bo:{name:"バウンサー(Bo)",hp:{1:275},atk:{1:453},def:{1:299},skill:{1:1},img:'<img src="img/class_img/Bo.png">'},
    Wa:{name:"ウェイカー(Wa)",hp:{1:255},atk:{1:451},def:{1:302},skill:{1:1},img:'<img src="img/class_img/Wa.png">'},
    Sl:{name:"スレイヤー(Sl)",hp:{1:220},atk:{1:455},def:{1:296},skill:{1:1},img:'<img src="img/class_img/Sl.png">'},
}
function stats_calc(clas,level,hp,atk,def){
        class_stats[clas].hp[level] = Math.round(hp * Math.pow(1.05,(level-1)/5));
        class_stats[clas].atk[level] = Math.round(450 * Math.pow(1.1,((level-1)/5))+(atk-450));
        class_stats[clas].def[level] = Math.round(300 * Math.pow(1.08, (level-1)/5) + (def-300));
}
//ステータス生成
for(var i=2;i<=80;i++){
    stats_calc('Hu',i,300,450,304);
    stats_calc('Fi',i,280,454,301);
    stats_calc('Ra',i,240,448,300);
    stats_calc('Gu',i,250,451,297);
    stats_calc('Fo',i,235,453,296);
    stats_calc('Te',i,260,446,303);
    stats_calc('Br',i,270,452,302);
    stats_calc('Bo',i,275,453,299);
    stats_calc('Wa',i,255,451,302);
    stats_calc('Sl',i,220,455,296);
}
//クラススキル習得数の挿入
const class_name = {
    1:'Hu',2:'Fi',3:'Ra',4:'Gu',5:'Fo',6:'Te',7:'Br',8:'Bo',9:'Wa',10:'Sl'
}
for(var i=1;i<=Object.keys(class_name).length;i++){
    for(var j=2;j<=94;j++){
        class_stats[class_name[i]].skill[j] = j;
    }
}

export default class_stats;