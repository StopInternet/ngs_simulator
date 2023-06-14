/**
 * +40は+50から10引いた値
 * やること
 * 強化値+70への対応（判明次第
 */


const unit_stats = {
    //{name:""",hp:0,pp:0,power:1.0,shoot:1.0,magic:1.0,damege_protect:0,def:{},rare:0,plus:0},
    //星７

    //レクレールアーマ
    EclaireurArmor:{
        name:"レクレールアーマ",
        hp:0,
        pp:0,
        power:1.04,shoot:1.04,magic:1.04,
        damege_protect:-5,
        def:{},
        rare:7,plus:16.5},

    //エイジャクスアーマ
    AjaxArmor:{
        name:"エイジャクスアーマ",
        hp:30,
        pp:5,
        power:1.035,shoot:1.035,magic:1.035,
        damege_protect:1,
        def:{},
        rare:7,plus:6.5},
    
    //エンフィタスアーマ・ヴィオ
    EptizeArmorVio:{
        name:"エンフィタスアーマ・ヴィオ",
        hp:0,pp:30,
        power:1.03,shoot:3,magic:3,
        damege_protect:0,
        def:{},
        rare:7,plus:2},
    
    //エンフィタスアーマ・ヴィダ
    EptizeArmorVida:{
        name:"エンフィタスアーマ・ヴィダ",
        hp:55,
        pp:0,
        power:1.03,shoot:1.03,magic:1.03,
        damege_protect:0,
        def:{},
        rare:7,plus:6.5},
    
    //エフィタスアーマ・アルガ
    EfitusArmorArga:{
        name:"エフィタスアーマ・アルガ",
        hp:30,
        pp:4,
        power:1.03,shoot:1.03,magic:1.0,
        damege_protect:0,
        def:{},
        rare:7,plus:5.5},
    
    //エフィタスアーマ・ベルタ
    EfitusArmorBelta:{
        name:"エフィタスアーマ・ベルタ",
        hp:30,
        pp:4,
        power:1.0,shoot:1.03,magic:1.03,
        damege_protect:0,
        def:{},
        rare:7,plus:5.5},
    
    //エフィタスアーマ・ツェザ
    EfitusArmorSheza:{
        name:"エフィタスアーマ・ツェザ",
        hp:30,
        pp:4,
        power:1.03,shoot:1.0,magic:1.03,
        damege_protect:0,
        def:{},
        rare:7,plus:5.5},

    //星６

    //ベルグリンアーマ
    BehlgrenArmor:{
        name:"ベルグリンアーマ",
        hp:-40,
        pp:13,
        power:1.0275,shoot:1.0275,magic:1.0275,
        damege_protect:0,
        def:{},
        rare:6,plus:2},

    //セスタトアーマ・ツェザ
    SestatoArmorSheza:{
        name:"セスタトアーマ・ツェザ",
        hp:30,
        pp:4,
        power:1.0225,shoot:1.0,magic:1.0225,
        damege_protect:0,
        def:{},
        rare:6,plus:4},
    
    //セスタトアーマ・ベルタ    
    SestatoArmorBelta:{
        name:"セスタアーマ・ベルタ",
        hp:30,
        pp:4,
        power:1.0,shoot:1.0225,magic:1.0225,
        damege_protect:0,
        def:{},
        rare:6,plus:4},
    
    //セスタトアーマ・アルガ
    SestatoArmorArga:{
        name:"セスタトアーマ・アルガ",
        hp:30,
        pp:4,
        power:1.0225,shoot:1.0225,magic:1.0,
        damege_protect:0,
        def:{},
        rare:6,plus:4},
    
    //セスタトアーマ
    SestatoArmor:{
        name:"セスタトアーマ",
        hp:35,
        pp:5,
        power:1.015,shoot:1.015,magic:1.015,
        damege_protect:0,
        def:{},
        rare:6,plus:1},
    
    //イグゼトアーマ
    IguzeArmor:{
        name:"イグゼトアーマ",
        hp:35,
        pp:5,
        power:1.015,shoot:1.015,magic:1.015,
        damege_protect:0,
        def:{},
        rare:6,plus:1},
    //ディフロージスアーマ
    DefrozzisArmor:{
        name:"ディフロージスアーマ",
        hp:0,
        pp:9,
        power:1.02,shoot:1.02,magic:1.02,
        damege_protect:0,
        def:{},
        rare:6,plus:1},
    
    //ディフロージスアーマ
    DefrozzaArmor:{
        name:"ディフローザアーマ",
        hp:50,
        pp:0,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:1,
        def:{},
        rare:6,plus:4},

    //星５
    SchwarzestArmor:{
        name:"シュヴァルゼストアーマ",
        hp:-25,
        pp:3,
        power:1.02,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:5,plus:0},

    SchwarzgardeArmor:{
        name:"シュヴァルガルデアーマ",
        hp:25,
        pp:3,
        power:1.0,shoot:1.02,magic:1.0,
        damege_protect:0,
        def:{},
        rare:5,plus:0},

    SchwarzrossoArmor:{
        name:"シュヴァルロッゾアーマ",
        hp:25,
        pp:3,
        power:1.0,shoot:1.0,magic:1.02,
        damege_protect:0,
        def:{},
        rare:5,plus:0},

    VijfArmorArga:{
        name:"ヴェフスアーマ・アルガ",
        hp:20,
        pp:7,
        power:1.01,shoot:1.01,magic:1.0,
        damege_protect:0,
        def:{},
        rare:5,plus:0},

    VijfArmorBelta:{
        name:"ヴェフスアーマ・ベルタ",
        hp:20,pp:7,
        power:1.0,shoot:1.01,magic:1.01,
        damege_protect:0,
        def:{},
        rare:5,plus:0},

    VijfArmorSheza:{
        name:"ヴェフスアーマ・ツェザ",
        hp:20,
        pp:7,
        power:1.01,shoot:1.0,magic:1.01,
        damege_protect:0,
        def:{},rare:5,plus:0},

    GreasArmor:{
        name:"グライアスアーマ",
        hp:-40,
        pp:13,
        power:1.02,shoot:1.02,magic:1.02,
        damege_protect:0,
        def:{},
        rare:5,plus:0},

    VidalArmor:{
        name:"ヴィダーレンアーマ",
        hp:70,
        pp:0,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:5,plus:0},

    VijfArmor:{
        name:"ヴェフスアーマ",
        hp:30,
        pp:4,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:5,plus:0},

    ViosArmor:{
        name:"ヴィオーセルアーマ",
        hp:0,
        pp:14,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:5,plus:0},

    VidalunArmor:{
        name:"ヴィダールアーマ",
        hp:45,
        pp:0,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:5,plus:0},

    VioselArmor:{
        name:"ヴィオースアーマ",
        hp:0,
        pp:8,
        power:1.01,shoot:1.01,magic:1.01,
        damege_protect:0,
        def:{},
        rare:5,plus:0},

    //星４
    GeantArmor:{
        name:"ジオント・アーマ",
        hp:-20,
        pp:10,
        power:1.02,shoot:1.02,magic:1.02,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    VialtoArmorSheza:{
        name:"ヴィアルトアーマ・ツェザ",
        hp:25,
        pp:0,
        power:1.005,shoot:1.0,magic:1.005,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    VialtoArmorBelta:{
        name:"ヴィアルトアーマ・ベルタ",
        hp:25,
        pp:0,
        power:1.0,shoot:1.005,magic:1.005,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    VialtoArmorArga:{
        name:"ヴィアルトアーマ・アルガ",
        hp:25,
        pp:0,
        power:1.005,shoot:1.005,magic:1.0,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    QualDeArmorSheza:{
        name:"クアルデアーマ・ツェザ",
        hp:0,
        pp:4,
        power:1.01,shoot:1.0,magic:1.01,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    QualDeArmorBelta:{
        name:"クアルデアーマ・ベルタ",
        hp:0,
        pp:4,
        power:1.0,shoot:1.01,magic:1.01,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    QualDeArmorArga:{
        name:"クアルデアーマ・アルガ",
        hp:0,
        pp:4,
        power:1.0,shoot:1.0,magic:0,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    VialtoArmor:{
        name:"ヴィアルトアーマ",
        hp:30,
        pp:0,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    CattleyaArmor:{
        name:"キャトリアアーマ",
        hp:20,
        pp:2,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    QualDeArmor:{
        name:"クアルデアーマ",
        hp:0,
        pp:6,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    //星３,2,1
    GoldPrimmArmor:{
        name:"ゴルドプリムアーマ",
        hp:10,
        pp:1,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    TheseusArmor:{
        name:"テルセウスアーマ",
        hp:0,
        pp:0,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    RenaissaArmor:{
        name:"レネッサアーマ",
        hp:10,
        pp:2,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    NEXPArmor:{
        name:"N-EXPアーマ",
        hp:0,
        pp:2,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    SilverPrimmArmor:{
        name:"シルヴァプリムアーマ",
        hp:0,
        pp:2,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    TzviaArmor:{
        name:"ツヴァイアーマ",
        hp:0,
        pp:2,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:0,plus:0},

    PrimmArmor:{
        name:"プリムアーマ",
        hp:10,
        pp:0,
        power:1.0,shoot:1.0,magic:1.0,
        damege_protect:0,
        def:{},
        rare:1,plus:0},
}   

//ステータス設定
function stats_set(id,name,hp,pp,power,shoot,magic,damege_protect,plus_a){
    //防具のステータス設定
    unit_stats[id].name[1] = name;
    unit_stats[id].hp[1] = hp;
    unit_stats[id].pp[1] = pp;
    unit_stats[id].power[1] = power;
    unit_stats[id].shoot[1] = shoot;
    unit_stats[id].magic[1] = magic;
    unit_stats[id].damege_protect[1] = damege_protect;
    unit_stats[id].a_plus[1] = plus_a;
}

function set_protect_stats(id,def,rare){
    //7,6,3,2,1
    if(rare==8||rare===7 || rare===6 || rare===3 || rare===2 || rare===1){
        //防御値設定
        unit_stats[id].def[0] = def
        for(var ia=1;ia<=40;ia++){
            unit_stats[id].def[ia] = def+ia
        }
    }
    //5,4
    if(rare===5 || rare===4){
        //防御値設定
        unit_stats[id].def[0] = def
        for(var i=1;i<=40;i++){
            if(i==40){
                unit_stats[id].def[i] = def+(i+1)
                continue;
            }
            unit_stats[id].def[i] = def+i
        }
        for(var i5=41;i5<=50;i5++){
            unit_stats[id].def[i5] = unit_stats[id].def[40]+(i5-40)
        }
        if(rare === 5){
            for(var i51=51;i51<=60;i51++){
                unit_stats[id].def[i51] = unit_stats[id].def[50] + (1.6*(i51-50))
            }
        }
        if(rare===4){
            for(var i41=51;i41<=60;i41++){
                unit_stats[id].def[i41] = unit_stats[id].def[50] + (2*(i41-50))
            }
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
    //6,3,2,1
    if(rare===6 || rare===3 || rare===2 || rare===1){
        //41~50
        for(var i6=41;i6<=50;i6++){
            unit_stats[id].def[i6] = def+i6;
        }
        //51~60
        if(rare===6){
            for(var i61=51;i61<=60;i61++){
                unit_stats[id].def[i61] = unit_stats[id].def[50] + (1.6*(i61-50))
            }
        }
        if(rare===3||rare===2||rare===1){
            for(var i31=51;i31<=60;i31++){
                unit_stats[id].def[i31] = unit_stats[id].def[50] + (2.2*(i31-50))
            }
        }
        //61~70
        if(rare==6){
            for(var i62=61;i62<=70;i62++){
                unit_stats[id].def[i62] = unit_stats[id].def[60] + (1.6*(i62-50))
            }
        }
    }
}
//✪8

set_protect_stats('EclaireurArmor',35,7);
set_protect_stats('AjaxArmor',41,7);
set_protect_stats('EfitusArmorArga',39,7);
set_protect_stats('EfitusArmorBelta',39,7);
set_protect_stats('EfitusArmorSheza',39,7);
set_protect_stats('EptizeArmorVida',40,7);
set_protect_stats('EptizeArmorVio',40,7)

//星6
set_protect_stats('BehlgrenArmor',26,6)
set_protect_stats('SestatoArmorSheza',20,6)
set_protect_stats('SestatoArmorBelta',20,6)
set_protect_stats('SestatoArmorArga',20,6)
set_protect_stats('SestatoArmor',21,6)
set_protect_stats('IguzeArmor',21,6)
set_protect_stats('DefrozzisArmor',20,6)
set_protect_stats('DefrozzaArmor',22,6)

//星５
//set_protect_stats('',,)

set_protect_stats('SchwarzestArmor',20,5)
set_protect_stats('SchwarzgardeArmor',20,5)
set_protect_stats('SchwarzrossoArmor',20,5)
set_protect_stats('VijfArmorArga',18,5)
set_protect_stats('VijfArmorBelta',18,5)
set_protect_stats('VijfArmorSheza',18,5)
set_protect_stats('GreasArmor',21,5)
set_protect_stats('VioselArmor',10,5)
set_protect_stats('VidalunArmor',22,5)
set_protect_stats('ViosArmor',15,5)
set_protect_stats('VidalArmor',22,5)
set_protect_stats('VijfArmor',17,5)

//星４
set_protect_stats('QualDeArmor',8,4)
set_protect_stats('GeantArmor',15,4)
set_protect_stats('VialtoArmorSheza',16,4)
set_protect_stats('VialtoArmorBelta',16,4)
set_protect_stats('VialtoArmorArga',16,4)
set_protect_stats('QualDeArmorSheza',13,4)
set_protect_stats('QualDeArmorBelta',13,4)
set_protect_stats('QualDeArmorArga',13,4)
set_protect_stats('VialtoArmor',14,4)

//✪3～１
set_protect_stats('GoldPrimmArmor',10,3)
set_protect_stats('TheseusArmor',10,3)
set_protect_stats('RenaissaArmor',10,3)
set_protect_stats('NEXPArmor',9,2)
set_protect_stats('SilverPrimmArmor',9,2)
set_protect_stats('TzviaArmor',9,2)
set_protect_stats('PrimmArmor',8,1)
export default unit_stats;