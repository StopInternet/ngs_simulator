/**
 * ✪８・７武器は+30までは３ずつ上がってる
 * ✪8は+31~+40の間は3.5ずつ上がってる
 * ＋41~50は4ずつあがってる
 * +51~60は6.1ずつ上がってる。
 * ✪７
 * 30-40 : 4.6
 * 41-50 : 5
 * 51-60 : 6.2
 * 60:692
 * 51:637
 * 50:631
 * 40:591
 * 30:556
 * 1:526
 */

const wepons = {
    //id　名前　ダメージ補正値　潜在レベル
    //8
    Livider:{name:{},atk:{0:466},Variance:0,properties:{}},
    NeosAstraean:{name:{},atk:{0:535},Variance:0,properties:{}},
    NeosJustitean:{name:{},atk:{0:445},Variance:0,properties:{}},
    Gunblaze:{name:{},atk:{0:526},Variance:0,properties:{}},
    Kouklophis:{name:{},atk:{0:520},Variance:0,properties:{}},
    Trunkul:{name:{},atk:{0:500},Variance:0,properties:{}},
    Tenebrous:{name:{},atk:{0:448},Variance:0,properties:{}},
    Effulgent:{name:{},atk:{0:446},Variance:0,properties:{}},
    PrimmLibra:{name:{},atk:{0:436},Variance:0,properties:{}},

    //7
    Obsidia:{name:{},atk:{0:488},Variance:0,properties:{}},
    Kaizaar:{name:{},atk:{0:485},Variance:0,properties:{}},
    Rugged:{name:{},atk:{0:490},Variance:0,properties:{}},
    Crystia:{name:{},atk:{0:473},Variance:0,properties:{}},
    KaizaarMK1:{name:{},atk:{0:465},Variance:0,properties:{}},
    Monorekus:{name:{},atk:{0:465},Variance:0,properties:{}},
    //6
    Evolorbit:{name:{},atk:{0:355},Variance:0,properties:{}},
    RokzRoughewn:{name:{},atk:{0:353},Variance:0,properties:{}},
    Sechetyl:{name:{},atk:{0:350},Variance:0,properties:{}},
    Codeck:{name:{},atk:{0:351},Variance:0,properties:{}},
    Evoleclipse:{name:{},atk:{0:346},Variance:0,properties:{}},

    //5
    Cinquem:{name:{},atk:{0:293},Variance:0,properties:{}},
    Relik:{name:{},atk:{0:284},Variance:0,properties:{}},
    Koukloziat:{name:{},atk:{0:280},Variance:0,properties:{}},
    Greaga:{name:{},atk:{0:280},Variance:0,properties:{}},
    Quintel:{name:{},atk:{0:277},Variance:0,properties:{}},
    Tempesta:{name:{},atk:{0:263},Variance:0,properties:{}},
    Fivla:{name:{},atk:{0:277},Variance:0,properties:{}},
    Lumiere:{name:{},atk:{0:263},Variance:0,properties:{}},
    Gothica:{name:{},atk:{0:277},Variance:0,properties:{}},
    Obscura:{name:{},atk:{0:263},Variance:0,properties:{}},
    //4
    Straga:{name:{},atk:{0:243},Variance:0,properties:{}},
    Evolcoat:{name:{},atk:{0:242},Variance:0,properties:{}},
    Vialto:{name:{},atk:{0:242},Variance:0,properties:{}},
    Foursis:{name:{},atk:{0:242},Variance:0,properties:{}},
    Cattleya:{name:{},atk:{0:242},Variance:0,properties:{}},
    Flamel:{name:{},atk:{0:240},Variance:0,properties:{}},
    Resurgir:{name:{},atk:{0:240},Variance:0,properties:{}},

    //3
    Frostel:{name:{},atk:{0:225},Variance:0,properties:{}},
    Glissen:{name:{},atk:{0:225},Variance:0,properties:{}},
    GoldPrimm:{name:{},atk:{0:223},Variance:0,properties:{}},
    Theseus:{name:{},atk:{0:223},Variance:0,properties:{}},
    Renaissa:{name:{},atk:{0:224},Variance:0,properties:{}},
    Trois:{name:{},atk:{0:223},Variance:0,properties:{}},
    //2
    N_EXP:{name:{},atk:{0:195},Variance:0,properties:{}},
    SilverPrimm:{name:{0:195},atk:{},Variance:0,properties:{}},
    Tzvia:{name:{},atk:{0:195},Variance:0,properties:{}},
    //1
    Primm:{name:{},atk:{0:177},Variance:0,properties:{}},
}
//攻撃力の計算（id,名前,攻撃力,レア度,下限補正値）
function stats_set(id,name,rare){
    //名前のセットアップ
    for(var i=0;i<=16;i++){
        wepons[id].name[i] = name+"シリーズ";
    }
    //下限補正値のセットアップ
    //70%
    if(rare==1||
       rare==2){
        wepons[id].Variance = 0.7
       }
    //75%
    if(rare==3||
       rare==4||
       rare==5||
       rare==6){
        wepons[id].Variance = 0.75
    }
    //一部70％武器
    if(id=="Theseus"||
       id=="Frostel"||
       id=="GoldPrimm"||
       id=="Glissen"||
       id=="Lumiere"||
       id=="Tempesta"||
       id=="Flamel"||
       id=="Obscura"){
        wepons[id].Variance = 0.7
       }
    //50%
    if(rare==7||rare==8){
         wepons[id].Variance = 0.5
     }

    //潜在レベルの設定
    for(var i=0;i<=6;i++){
        wepons[id].properties[i] = i
    }
    
    //レア度9,8,7の+30まで
    
    if(rare == 9 || rare === 8||rare === 7){
        for(var i=1;i<=30;i++){
            const plus78 = 3*i
            wepons[id].atk[i] = wepons[id].atk[0]+plus78
        }
        //レア度9の強化値
        /**
         * 31~40,41~50:約1.09倍,差分0.4
         * 41~50,51~60:約1.24倍,差分2
         * 51~60,61~70:約1.62倍,差分3.1
         */
        if(rare==9){
            for(var i9=31;i9<=40;i9++){
                const i9p = 2.6*(i9-30)
                wepons[id].atk[i9] = wepons[id].atk[30]+i9p;
            }
            for(var i9_2=41;i9_2<=50;i9_2++){
                const i9p2 = 3*(i9_2-40)
                wepons[id].atk[i9_2] = wepons[id].atk[40]+i9p2;
            }
            for(var i9_3=51;i9_3<=60;i9_3++){
                const i9p3 = 5*(i9_3-50)
                wepons[id].atk[i9_3] = wepons[id].atk[50]+i9p3;
            }
            for(var i9_4=61;i9_4<=70;i9_4++){
                const i9p4 = 8.1*(i9_4-60)
                wepons[id].atk[i9_4] = wepons[id].atk[60]+i9p4;
            }
        }
        //レア度８の強化値
        /**
         * 4.2
         * 31~40,41~50:約1.09倍,差分0.5
         * 41~50,51~60:約1.24倍,差分2.1
         * 51~60,61~70:約1.52倍,差分3.2
         */
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
            for(var i8_4=61;i8_4<=70;i8_4++){
                const i8p4 = 9.3*(i8_4-60)
                wepons[id].atk[i8_4] = wepons[id].atk[60]+i8p4;
            }
        }
        //レア度7の強化値
        /**
         * 5.5
         * 31~40,41~50:約1.09倍,差分0.4
         * 41~50,51~60:約1.24倍,差分2.2
         * 51~60,61~70:約1.53倍,差分3.3
         */
        if(rare==7){
            for(var i7=31;i7<=40;i7++){
                const i7p = 4.6*(i7-30)
                wepons[id].atk[i7] = wepons[id].atk[30]+i7p;
            }
            for(var i7_2=41;i7_2<=50;i7_2++){
                const i7p2 = 5*(i7_2-40)
                wepons[id].atk[i7_2] = wepons[id].atk[40]+i7p2;
            }
            for(var i7_3=51;i7_3<=60;i7_3++){
                const i7p3 = 6.2*(i7_3-50)
                wepons[id].atk[i7_3] = wepons[id].atk[50]+i7p3;
            }
            for(var i7_4=61;i7_4<=70;i7_4++){
                const i7p4 = 9.5*(i7_4-60)
                wepons[id].atk[i7_4] = wepons[id].atk[60]+i7p4;
            }
        }
    }
    //レア度６，５，４，の強化値
    if(rare===6||rare===5||rare===4||rare===3){
        for(var i6w=1;i6w<=10;i6w++){
            wepons[id].atk[i6w] = wepons[id].atk[0]+(1*i6w)
        }
        //レア度6の強化値
        /** 
         * +20 :1.5
         * +30 :3
         * +40 :3
         * +50 :4
         * +60 :5.8
        */
       /**星6
         * 11~20,21~40:約2倍,差分1.5
         * 41~50,51~60:約1.33倍,差分1
         * 51~60,61~70:約1.24倍,差分2.2
         */
        if(rare===6){
            for(var i6w1=11;i6w1<=20;i6w1++){
                wepons[id].atk[i6w1] = wepons[id].atk[10]+(1.5*(i6w1-10))
            }
            for(var i6w2=21;i6w2<=40;i6w2++){
                wepons[id].atk[i6w2] = wepons[id].atk[20]+(3*(i6w2-20))
            }
            for(var i6w3=41;i6w3<=50;i6w3++){
                wepons[id].atk[i6w3] = wepons[id].atk[40]+(4*(i6w3-40))
            }
            for(var i6w4=51;i6w4<=60;i6w4++){
                wepons[id].atk[i6w4] = wepons[id].atk[50]+(5.8*(i6w4-50))
            }
        }
        //レア度５，４の強化値
        
        if(rare===5||rare===4){
            for(var i5w=11;i5w<=40;i5w++){
                wepons[id].atk[i5w] = wepons[id].atk[10]+(1*(i5w-10))
            }
            /**
         * 2.8倍
         */
            if(rare===5){
                for(var i5w2=41;i5w2<=50;i5w2++){
                    wepons[id].atk[i5w2] = wepons[id].atk[40]+(5.2*(i5w2-40))
                }
                for(var i5w3=51;i5w3<=60;i5w3++){
                    wepons[id].atk[i5w3] = wepons[id].atk[50]+(14.6*(i5w3-50))
                }
            }
            /**
             * 2.33倍
             */
            if(rare===4){
                for(var i4w=41;i4w<=50;i4w++){
                    wepons[id].atk[i4w] = wepons[id].atk[40]+(6.8*(i4w-40))
                }
                for(var i4w2=51;i4w2<=60;i4w2++){
                    wepons[id].atk[i4w2] = wepons[id].atk[50]+(15.9*(i4w2-50))
                }
            }
        }
         //レア度３の強化値
         if(rare===3){
        for(var i3w1=11;i3w1<=30;i3w1++){
            wepons[id].atk[i3w1] = wepons[id].atk[10]+(1.1*(i3w1-10))
        }
        for(var i3w2=31;i3w2<=40;i3w2++){
            wepons[id].atk[i3w2] = wepons[id].atk[30]+(1.5*(i3w2-30))
        }
        for(var i3w3=41;i3w3<=50;i3w3++){
            wepons[id].atk[i3w3] = wepons[id].atk[40]+(6.8*(i3w3-40))
        }
        for(var i3w4=51;i3w4<=60;i3w4++){
            wepons[id].atk[i3w4] = wepons[id].atk[50]+(18.6*(i3w4-50))
        }
    }
}
   
    //レア度2の強化値
    if(rare===2){
        for(var i2w1=1;i2w1<=10;i2w1++){
            wepons[id].atk[i2w1] = wepons[id].atk[0]+(1.6*(i2w1))
        }
        for(var i2w2=11;i2w2<=30;i2w2++){
            wepons[id].atk[i2w2] = wepons[id].atk[10]+(1.7*(i2w2-10))
        }
        for(var i2w3=31;i2w3<=40;i2w3++){
            wepons[id].atk[i2w3] = wepons[id].atk[30]+(1.9*(i2w3-30))
        }
        for(var i2w4=41;i2w4<=50;i2w4++){
            wepons[id].atk[i2w4] = wepons[id].atk[40]+(7.4*(i2w4-40))
        }
        for(var i2w5=51;i2w5<=60;i2w5++){
            wepons[id].atk[i2w5] = wepons[id].atk[50]+(18.6*(i2w5-50))
        }
    }
    //レア度1の強化値
    if(rare===1){
        for(var i1w1=1;i1w1<=10;i1w1++){
            wepons[id].atk[i1w1] = wepons[id].atk[0]+(2.2*(i1w1))
        }
        for(var i1w2=11;i1w2<=20;i1w2++){
            wepons[id].atk[i1w2] = wepons[id].atk[10]+(2.4*(i1w2-10))
        }
        for(var i1w6=21;i1w6<=30;i1w6++){
            wepons[id].atk[i1w6] = wepons[id].atk[20]+(1.7*(i1w6-20))
        }
        for(var i1w3=31;i1w3<=40;i1w3++){
            wepons[id].atk[i1w3] = wepons[id].atk[30]+(1.9*(i1w3-30))
        }
        for(var i1w4=41;i1w4<=50;i1w4++){
            wepons[id].atk[i1w4] = wepons[id].atk[40]+(7.9*(i1w4-40))
        }
        for(var i1w5=51;i1w5<=60;i1w5++){
            wepons[id].atk[i1w5] = wepons[id].atk[50]+(18.6*(i1w5-50))
        }
    }
}
const weaponsMenu = document.getElementById("weapons-menu");
for (const weapon in wepons) {
    for (const name in wepons[weapon].name[0]) {
        const option = document.createElement("option");
        option.id = 1;
        option.value = `${weapon}:${name}`;
        option.text = wepons[weapon].name[name];
        weaponsMenu.add(option);
    }
}

//id 名前 レア度
//stats_set("","",0)
//8
stats_set("NeosAstraean","ネオス・アストリオン",8)
stats_set("NeosJustitean","ネオス・ユースティロン",8)
stats_set("Gunblaze","ガンブレイズ",8)
stats_set("Kouklophis","ククロフィス",8)
stats_set("Trunkul","トランクール",8)
stats_set("Tenebrous","セイガイン",8)
stats_set("Effulgent","セイガヨウ",8)
stats_set("PrimmLibra","プリムリブラ",8)
stats_set("Livider","リヴィーター",8)
//7
stats_set("Obsidia","オブゾディア",7)
stats_set("Kaizaar","カイゼラム",7)
stats_set("Rugged","ラゲード",7)
stats_set("Crystia","クリスティア",7)
stats_set("KaizaarMK1","カイゼラム試製壱型",7)
stats_set("Monorekus","モノレクス",7)
//6
stats_set("Evolorbit","エヴォルオーヴァ",6)
stats_set("RokzRoughewn","ロクス・ラグフェン",6)
stats_set("Sechetyl","ゼクストル",6)
stats_set("Codeck","コルディーク",6)
stats_set("Evoleclipse","エヴォルイクリス",6)
//5
stats_set("Cinquem","サンクエイム",5)
stats_set("Relik","レリク",5)
stats_set("Koukloziat","ククロゼアト",5)
stats_set("Greaga","グレティーガ",5)
stats_set("Quintel","クィンテル",5)
stats_set("Tempesta","テンペスター",5)
stats_set("Lumiere","ルメイラー",5)
stats_set("Obscura","オブスクラル",5)
stats_set("Gothica","ゴルシカ",5)
stats_set("Fivla","フィブラ",5)

//4
stats_set("Straga","ストラーガ",4)
stats_set("Evolcoat","エヴォルコート",4)
stats_set("Cattleya","キャトリア",4)
stats_set("Resurgir","リサージュ",4)
stats_set("Vialto","ヴィアルト",4)
stats_set("Foursis","フォーシス",4)
stats_set("Cattleya","キャトリア",4)
stats_set("Flamel","フランメル",4)
//3
stats_set("Glissen","グリッセン",3)
stats_set("GoldPrimm","ゴルドプリム",3)
stats_set("Theseus","テルセウス",3)
stats_set("Renaissa","レネッサ",3)
stats_set("Frostel","フロステル",3)
stats_set("Trois","トロワーデ",3)
//2
stats_set("N_EXP","N-EXP",2)
stats_set("SilverPrimm","シルヴァプリム",2)
stats_set("Tzvia","ツヴィア",2)
//1
stats_set("Primm","プリム",1)

export default wepons;