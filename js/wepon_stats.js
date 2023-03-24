/**
 * ✪８・７武器は+30までは３ずつ上がってる
 * ✪8は+31~+40の間は3.5ずつ上がってる
 * ＋41~50は4ずつあがってる
 * +51~60は6.1ずつ上がってる。
 * ✪７
 * 30-40 : 4.6
 * 41-50 : 5
 * 51-60 : 6.2
 */

const wepons = {
    //id　名前　ダメージ補正値　潜在レベル
    Neos:{name:{},atk:{},Variance:{},properties:{}},
    Neos2:{name:{},atk:{},Variance:{},properties:{}},
    gunblaze:{name:{},atk:{},Variance:{},properties:{}},
    kukuro:{name:{},atk:{},Variance:{},properties:{}},
    torank:{name:{},atk:{},Variance:{},properties:{}},
    seigain:{name:{},atk:{},Variance:{},properties:{}},
    seigayou:{name:{},atk:{},Variance:{},properties:{}},
    purim_ribura:{name:{},atk:{},Variance:{},properties:{}},
    ragedo:{name:{},atk:{},Variance:{},properties:{}},
    obuso:{name:{},atk:{},Variance:{},properties:{}},
    kaize:{name:{},atk:{},Variance:{},properties:{}},
    kurisu:{name:{},atk:{},Variance:{},properties:{}},
    kaize0:{name:{},atk:{},Variance:{},properties:{}}
}
//名前の生成
function name_set(id,name){
    const wepon = {
        1:"ソード",2:"ワイヤー",3:"スピア",4:"ダガー",5:"セイバー",6:"ナックル",7:"カタナ",8:"ブレード",
        9:"ライフル",10:"ランチャー",11:"マシンガン",12:"ボウ",13:"ロッド",14:"タリス",15:"ウォンド",16:"タクト"
    }
    //潜在レベルの設定
    for(var i=0;i<=4;i++){
        wepons[id].properties[i] = i
    }
    //プリムリブラ
    if(id== 'purim_ribura'){
        for(var i=1;i<=16;i++){
            wepons[id].name[i] = "プリム"+wepon[i]+"・リブラ";
        }
        return;
    }
    //名前のセットアップ
    for(var i=1;i<=16;i++){
        wepons[id].name[i] = name+wepon[i];
    }
    
}
//攻撃力の計算（id,攻撃力,レア度）
function atk_set(id,atks,rare){
    //攻撃力の初期値
    wepons[id].atk[0] = atks;
    //レア度８，７の+30まで
    
    if(rare === 8||rare === 7){
        wepons[id].Variance[1] = 0.5
        for(var i=1;i<=30;i++){
            const plus78 = 3*i
            wepons[id].atk[i] = atks+plus78
        }
        //レア度８の強化値
        if(rare==8){
            for(var i8=31;i8<=40;i8++){
                const i8p = 3.5*(i8-30)
                wepons[id].atk[i8] = wepons[id].atk[30]+i8p;
            }
            for(var i8_2=41;i8_2<=50;i8_2++){
                const i8p2 = 4*(i8_2-40)
                wepons[id].atk[i8_2] = wepons[id].atk[40]+i8p2;
            }
            for(var i8_3=51;i8_3<=60;i8_3++){
                const i8p3 = 6.1*(i8_3-50)
                wepons[id].atk[i8_3] = wepons[id].atk[50]+i8p3;
            }
        }
        //レア度7の強化値
        if(rare==7){
            for(var i7=31;i7<=40;i7++){
                const i7p = 4.6*(i7-30)
                wepons[id].atk[i7] = wepons[id].atk[30]+i7p;
            }
            for(var i7_2=41;i7_2<=50;i7_2++){
                const i7p2 = 5*(i7-40)
                wepons[id].atk[i7_2] = wepons[id].atk[40]+i7p2;
            }
            for(var i7_3=51;i7_3<=60;i7_3++){
                const i7p3 = 6.2*(i7_3-50)
                wepons[id].atk[i7_3] = wepons[id].atk[50]+i7p3;
            }
        }
    }
}
const weaponsMenu = document.getElementById("weapons-menu");
for (const weapon in wepons) {
    for (const name in wepons[weapon].name) {
        const option = document.createElement("option");
        option.id = 1;
        option.value = `${weapon}:${name}`;
        option.text = wepons[weapon].name[name];
        weaponsMenu.add(option);
    }
}

//✪８武器
//ネオスアストリオン
name_set('Neos',"ネオス・アストリオン");
atk_set('Neos',535,8);
//ネオスユースティロン
name_set('Neos2',"ネオス・ユースティロン");
atk_set('Neos2',445,8);
//ガンブレイズ
name_set('gunblaze',"ガンブレイズ");
atk_set('gunblaze',526,8);
//ククロフィス
name_set('kukuro','ククロフィス');
atk_set('kukuro',520,8);
//トランク―ル
name_set('torank',"トランク―ル");
atk_set('torank',500,8)
//セイガイン
name_set('seigain',"セイガイン");
atk_set('seigain',448,8)
//セイガヨウ
name_set('seigayou',"セイガヨウ");
atk_set('seigayou',446,8)
//プリム・リブラ
name_set('purim_ribura',"プリム・リブラ")
atk_set('purim_ribura',436,8)

//✪7武器
//ラゲード
name_set('ragedo',"ラゲード");
atk_set('ragedo',490,7);
//オブソディア
name_set('obuso',"オブソディア");
atk_set('obuso',488,7);
//カイゼラム
name_set('kaize',"カイゼラム");
atk_set('kaize',485,7);
//クリスティア
name_set('kurisu',"クリスティア");
atk_set('kurisu',473,7);
//カイゼラム試製壱型
name_set('kaize0',"カイゼラム試製壱型");
atk_set('kaize0',465,7)


export default wepons;