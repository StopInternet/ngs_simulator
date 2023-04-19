const tag_op = {
    //パワー系だよ
    Might_1:{name:"パワーI",level:1,value:4},
    Might_2:{name:"パワーII",level:2,value:5},
    Might_3:{name:"パワーIII",level:3,value:6},
    Might_4:{name:"パワーIV",level:4,value:7},

    Sta_Might:{name:"スタム・パワー",level:1,value:8},
    Spi_Might:{name:"スピレ・パワー",level:1,value:8},
    Deft_Might:{name:"アルム・パワー",level:1,value:8},
    Gua_Might:{name:"ガーディ・パワー",level:1,value:8},
    
    //シュート系
    Precision_1:{name:"シュートI",level:1,value:4},
    Precision_2:{name:"シュートII",level:2,value:5},
    Precision_3:{name:"シュートIII",level:3,value:6},
    Precision_4:{name:"シュートIV",level:4,value:7},

    Sta_Precision:{name:"スタム・シュート",level:1,value:8},
    Spi_Precision:{name:"スピレ・シュート",level:1,value:8},
    Deft_Precision:{name:"スピレ・シュート",level:1,value:8},
    Gua_Precision:{name:"ガーディ・シュート",level:1,value:8},

    //テクニック系
    Technique_1:{name:"テクニックI",level:1,value:4},
    Technique_2:{name:"テクニックII",level:2,value:5},
    Technique_3:{name:"テクニックIII",level:3,value:6},
    Technique_4:{name:"テクニックIV",level:4,value:7},


    Sta_Technique:{name:"スタム・テクニック",level:1,value:8},
    Spi_Technique:{name:"スピレ・テクニック",level:1,value:8},
    Deft_Technique:{name:"アルム・テクニック",level:1,value:8},
    Gua_Technique:{name:"ガーディ・テクニック",level:1,value:8},

    //スタミナ、スピレ系
    Stamina_1:{name:"スタミナI",level:1,value:3},
    Stamina_2:{name:"スタミナII",level:2,value:4},
    Stamina_3:{name:"スタミナIII",level:3,value:5},

    Spirit_1:{name:"スピリタI",level:1,value:2},
    Spirit_2:{name:"スピリタII",level:2,value:3},
    Spirit_3:{name:"スピリタIII",level:3,value:4},

    //ディアブル、トリアブル系
    Melra_Dualble_1:{name:"ダシャ・ディアブルI",level:1,value:4},
    Melra_Dualble_2:{name:"ダシャ・ディアブルII",level:2,value:5},
    Melra_Dualble_3:{name:"ダシャ・ディアブルIII",level:3,value:6},
    Melra_Dualble_4:{name:"ダシャ・ディアブルIV",level:4,value:7},

    Meltech_Dualble_1:{name:"ダホウ・ディアブルI",level:1,value:4},
    Meltech_Dualble_2:{name:"ダホウ・ディアブルII",level:2,value:5},
    Meltech_Dualble_3:{name:"ダホウ・ディアブルIII",level:3,value:6},
    Meltech_Dualble_4:{name:"ダホウ・ディアブルIV",level:4,value:7},

    Ratech_Dualble_1:{name:"シャホウ・ディアブルI",level:1,value:4},
    Ratech_Dualble_2:{name:"シャホウ・ディアブルII",level:2,value:5},
    Ratech_Dualble_3:{name:"シャホウ・ディアブルIII",level:3,value:6},
    Ratech_Dualble_4:{name:"シャホウ・ディアブルIV",level:4,value:7},

    Triplble:{name:"トリアブル",level:1,value:8},
    Tirplble2:{name:"トリアブルII",level:1,value:10},

    //アーム系、ガード系
    Deftness_1:{name:"アームI",level:1,value:3},
    Deftness_2:{name:"アームII",level:2,value:4},
    Deftness_3:{name:"アームIII",level:3,value:5},
    Deftness_4:{name:"アームIV",level:4,value:6},

    Guard_1:{name:"ガードI",level:1,value:2},
    Guard_2:{name:"ガードII",level:2,value:3},
    Guard_3:{name:"ガードIII",level:3,value:4},

    //アビリティ
    Mastery_1:{name:"アビリティI",level:1,value:6},
    Mastery_2:{name:"アビリティII",level:2,value:8},
    Mastery_3:{name:"アビリティIII",level:3,value:10},
    Mastery_4:{name:"アビリティIV",level:4,value:12},

    //レジスト系
    Burn_Ward_1:{name:"バーンレジストI",level:1,value:4},
    Burn_Ward_2:{name:"バーンレジストII",level:2,value:5},
    Burn_Ward_3:{name:"バーンレジストIII",level:3,value:6},

    Freeze_Ward_1:{name:"フリーズレジストI",level:1,value:4},
    Freeze_Ward_2:{name:"フリーズレジストII",level:2,value:5},
    Freeze_Ward_3:{name:"フリーズレジストIII",level:3,value:6},

    Shock_Ward_1:{name:"ショックレジストI",level:1,value:4},
    Shock_Ward_2:{name:"ショックレジストII",level:2,value:5},
    Shock_Ward_3:{name:"ショックレジストIII",level:3,value:6},
    
    Blind_Ward_1:{name:"ミラージュレジストI",level:1,value:4},
    Blind_Ward_2:{name:"ミラージュレジストII",level:2,value:5},
    Blind_Ward_3:{name:"ミラージュレジストIII",level:3,value:6},

    Panic_Ward_1:{name:"パニックレジストI",level:1,value:4},
    Panic_Ward_2:{name:"パニックレジストII",level:2,value:5},
    Panic_Ward_3:{name:"パニックレジストIII",level:3,value:6},

    Poisn_Ward_1:{name:"ポイズンレジストI",level:1,value:4},
    Poisn_Ward_2:{name:"ポイズンレジストII",level:2,value:5},
    Poisn_Ward_3:{name:"ポイズンレジストIII",level:3,value:6},

    Pain_Ward_1:{name:"ペインレジストI",level:1,value:4},
    Pain_Ward_2:{name:"ペインレジストII",level:2,value:5},
    Pain_Ward_3:{name:"ペインレジストIII",level:3,value:6},

    Sovereign_Ward_1:{name:"オールレジストI",level:1,value:4},
    Sovereign_Ward_2:{name:"オールレジストII",level:2,value:5},
    Sovereign_Ward_3:{name:"オールレジストIII",level:3,value:6},

    //ソール系（種別）
    Forms_Soul_1:{name:"フォムズ・ソールI",level:1,value:6},
    Forms_Soul_2:{name:"フォムズ・ソールII",level:2,value:8},
    Forms_Soul_3:{name:"フォムズ・ソールIII",level:3,value:9},
    Forms_Soul_4:{name:"フォムズ・ソールIV",level:4,value:10},

    Forms_Machini_Soul_1:{name:"フォムズマシニ・ソールI",level:1,value:6},
    Forms_Machini_Soul_2:{name:"フォムズマシニ・ソールII",level:2,value:8},
    Forms_Machini_Soul_3:{name:"フォムズマシニ・ソールIII",level:3,value:9},
    Forms_Machini_Soul_4:{name:"フォムズマシニ・ソールIV",level:4,value:10},

    Forms_Sand_Soul_1:{name:"フォムズサンデ・ソールI",level:1,value:6},
    Forms_Sand_Soul_2:{name:"フォムズサンデ・ソールII",level:2,value:8},
    Forms_Sand_Soul_3:{name:"フォムズサンデ・ソールIII",level:3,value:9},
    Forms_Sand_Soul_4:{name:"フォムズサンデ・ソールIV",level:4,value:10},
    
    Alts_Soul_1:{name:"アルズ・ソールI",level:1,value:5},
    Alts_Soul_2:{name:"アルズ・ソールII",level:2,value:7},
    Alts_Soul_3:{name:"アルズ・ソールIII",level:3,value:9},

    Dolz_Soul_1:{name:"ドルズ・ソールI",level:1,value:5},
    Dolz_Soul_2:{name:"ドルズ・ソールII",level:2,value:6},
    Dolz_Soul_3:{name:"ドルズ・ソールIII",level:3,value:7},

    //エネミー個別
    Daityl_Sou_1:{name:"ダイダル・ソールI",level:1,value:7},
    Daityl_Sou_2:{name:"ダイダル・ソールII",level:2,value:8},
    Daityl_Sou_3:{name:"ダイダル・ソールIII",level:3,value:10},
    Daityl_Sou_4:{name:"ダイダル・ソールIV",level:4,value:11},
    
    Pettas_Soul_1:{name:"ペダス・ソールI",level:1,value:7},
    Pettas_Soul_2:{name:"ペダス・ソールII",level:2,value:8},
    Pettas_Soul_3:{name:"ペダス・ソールIII",level:3,value:10},
    Pettas_Soul_4:{name:"ペダス・ソールIV",level:4,value:11},

    Nex_Soul_1:{name:"ネクス・ソールI",level:1,value:7},
    Nex_Soul_2:{name:"ネクス・ソールII",level:2,value:8},
    Nex_Soul_3:{name:"ネクス・ソールIII",level:3,value:10},
    Nex_Soul_4:{name:"ネクス・ソールIV",level:4,value:11},

    Dust_Soul_1:{name:"スナイド・ソールI",level:1,value:7},
    Dust_Soul_2:{name:"スナイド・ソールII",level:2,value:8},
    Dust_Soul_3:{name:"スナイド・ソールIII",level:3,value:10},
    Dust_Soul_4:{name:"スナイド・ソールIV",level:4,value:11},

    Ragras_Soul_1:{name:"ラグラス・ソールI",level:1,value:7},
    Ragras_Soul_2:{name:"ラグラス・ソールII",level:2,value:8},
    Ragras_Soul_3:{name:"ラグラス・ソールIII",level:3,value:10},
    Ragras_Soul_4:{name:"ラグラス・ソールIV",level:4,value:11},

    Renus_Soul_1:{name:"レヌス・ソールI",level:1,value:7},
    Renus_Soul_2:{name:"レヌス・ソールII",level:2,value:8},
    Renus_Soul_3:{name:"レヌス・ソールIII",level:3,value:10},
    Renus_Soul_4:{name:"レヌス・ソールIV",level:4,value:11},

    Eradi_Soul_1:{name:"エラーディ・ソールI",level:1,value:7},
    Eradi_Soul_2:{name:"エラーディ・ソールII",level:2,value:8},
    Eradi_Soul_3:{name:"エラーディ・ソールIII",level:3,value:10},
    Eradi_Soul_4:{name:"エラーディ・ソールIV",level:4,value:11},

    Frostyl_Soul_1:{name:"レイダル・ソールI",level:1,value:7},
    Frostyl_Soul_2:{name:"レイダル・ソールII",level:2,value:8},
    Frostyl_Soul_3:{name:"レイダル・ソールIII",level:3,value:10},
    Frostyl_Soul_4:{name:"レイダル・ソールIV",level:4,value:11},

    Crocys_Soul_1:{name:"クロコス・ソールI",level:1,value:7},
    Crocys_Soul_2:{name:"クロコス・ソールII",level:2,value:8},
    Crocys_Soul_3:{name:"クロコス・ソールIII",level:3,value:10},
    Crocys_Soul_4:{name:"クロコス・ソールIV",level:4,value:11},

    Ams_Soul_1:{name:"アムス・ソールI",level:1,value:7},
    Ams_Soul_2:{name:"アムス・ソールII",level:2,value:8},
    Ams_Soul_3:{name:"アムス・ソールIII",level:3,value:10},
    Ams_Soul_4:{name:"アムス・ソールIV",level:4,value:11},

    Vardi_Soul_1:{name:"ヴァーディ・ソールI",level:1,value:7},
    Vardi_Soul_2:{name:"ヴァーディ・ソールII",level:2,value:8},
    Vardi_Soul_3:{name:"ヴァーディ・ソールIII",level:3,value:10},
    Vardi_Soul_4:{name:"ヴァーディ・ソールIV",level:4,value:11},

    Freid_Soul_1:{name:"フレイド・ソールI",level:1,value:7},
    Freid_Soul_2:{name:"フレイド・ソールII",level:2,value:8},
    Freid_Soul_3:{name:"フレイド・ソールIII",level:3,value:10},
    Freid_Soul_4:{name:"フレイド・ソールIV",level:4,value:11},

    Doldor_Soul_1:{name:"ドルドラ・ソールI",level:1,value:7},
    Doldor_Soul_2:{name:"ドルドラ・ソールII",level:2,value:8},
    Doldor_Soul_3:{name:"ドルドラ・ソールIII",level:3,value:10},
    Doldor_Soul_4:{name:"ドルドラ・ソールIV",level:4,value:11},

    Nils_Soul_1:{name:"ニルス・ソールI",level:1,value:7},
    Nils_Soul_2:{name:"ニルス・ソールII",level:2,value:8},
    Nils_Soul_3:{name:"ニルス・ソールIII",level:3,value:10},
    Nils_Soul_4:{name:"ニルス・ソールIV",level:4,value:11},

    Aegis_Soul_1:{name:"エイジス・ソールI",level:1,value:7},
    Aegis_Soul_2:{name:"エイジス・ソールII",level:2,value:8},
    Aegis_Soul_3:{name:"エイジス・ソールIII",level:3,value:10},
    Aegis_Soul_4:{name:"エイジス・ソールIV",level:4,value:11},

    //アグライ・エウティ・タリア―ソール
    //H
    AglaiSoulH:{name:"アグライ・ソールH",level:1,value:11},
    EuphroySoulH:{name:"エウティ・ソールH",level:1,value:11},
    ThaliSoulH:{name:"タリアー・ソールH",level:1,value:11},
    //P
    AglaiSoulP:{name:"アグライ・ソールP",level:1,value:11},
    euteliP:{name:"エウティ・ソールP",level:1,value:11},
    ThaliSoulP:{name:"タリアー・ソールP",level:1,value:11},
    //X
    AglaiSoulX:{name:"アグライ・ソールX",level:1,value:11},
    EuphroySoulX:{name:"エウティ・ソールX",level:1,value:11},
    ThaliSoulX:{name:"タリアー・ソールX",level:1,value:11},

    //ノート系
    //エアルノート
    earu_noteA:{name:"エアル・ノートA",level:1,value:5},
    earu_noteB:{name:"エアル・ノートB",level:1,value:4},
    earu_noteC:{name:"エアル・ノートC",level:1,value:4},
    earu_noteD:{name:"エアル・ノートD",level:1,value:4},

    magunu_note:{name:"マグヌ・ノート",level:1,value:5},
    raborata_note:{name:"ラボラタ・ノート",level:1,value:5},
    rezora_note:{name:"レゾラ・ノート",level:1,value:5},

    //リテナノート
    ritena_noteA:{name:"リテナ・ノートA",level:1,value:5},
    ritena_noteB:{name:"リテナ・ノートB",level:1,value:4},
    ritena_noteC:{name:"リテナ・ノートC",level:1,value:4},
    ritena_noteD:{name:"リテナ・ノートD",level:1,value:4},

    eruna_note:{name:"エルナ・ノート",level:1,value:5},
    akua_note:{name:"マクア・ノート",level:1,value:5},
    //クヴァルノート
    kuvaru_noteA:{name:"クヴァル・ノートA",level:1,value:5},
    kuvaru_noteB:{name:"クヴァル・ノートB",level:1,value:4},
    kuvaru_noteC:{name:"クヴァル・ノートC",level:1,value:4},
    kuvaru_noteD:{name:"クヴァル・ノートD",level:1,value:4},

    berugun_note:{name:"	ベルガン・ノート",level:1,value:5},
    rosutora_note:{name:"ロストラ・ノート",level:1,value:5},

    //スティラノート
    sutelia_noteA:{name:"スティラ・ノートA",level:1,value:5},
    sutelia_noteB:{name:"スティラ・ノートB",level:1,value:4},
    sutelia_noteC:{name:"スティラ・ノートC",level:1,value:4},
    sutelia_noteD:{name:"スティラ・ノートD",level:1,value:4},

    dekusuta_note:{name:"デクスタ・ノート",level:1,value:5},

    //ドミナ系
    earu_domina:{name:"エアル・ドミナ",level:1,value:8},
    ritena_domina:{name:"リテナ・ドミナ",level:1,value:10},
    kuvaru_domina:{name:"クヴァル・ドミナ",level:1,value:10},
    sutira_domina:{name:"スティラ・ドミナ",level:1,value:10},

    //二リア系
    harufiniria:{name:"ハルフィニリア",level:1,value:13},

    //デコルド
    Decold_Standard_1:{name:"デコルド・スタンダルドI",level:1,value:1},
    Decold_Standard_2:{name:"デコルド・スタンダルドII",level:2,value:3},
    Decold_Standard_3:{name:"デコルド・スタンダルドIII",level:3,value:5},

    power_dekorudo:{name:"デコルド・パワー",level:1,value:9},
    shoot_dekorudo:{name:"デコルド・シュート",level:1,value:9},
    magic_dekorudo:{name:"デコルド・テクニック",level:1,value:9},

    //セクレテ
    Alts_Secreta_1:{name:"アルズ・セクレテI",level:1,value:3},
    Alts_Secreta_2:{name:"アルズ・セクレテII",level:2,value:4},
    Alts_Secreta_3:{name:"アルズ・セクレテIII",level:3,value:5},
    Alts_Secreta_4:{name:"アルズ・セクレテIV",level:4,value:6},

    //ギガス系
    Gigas_Might_1:{name:"ギガス・パワーI",level:1,value:6},
    Gigas_Might_2:{name:"ギガス・パワーII",level:2,value:8},
    Gigas_Might_3:{name:"ギガス・パワーIII",level:3,value:10},
    Gigas_Might_4:{name:"ギガス・パワーIV",level:4,value:11},

    Gigas_Precision_1:{name:"ギガス・シュートI",level:1,value:6},
    Gigas_Precision_2:{name:"ギガス・シュートII",level:2,value:8},
    Gigas_Precision_3:{name:"ギガス・シュートIII",level:3,value:10},
    Gigas_Precision_4:{name:"ギガス・シュートIV",level:4,value:11},

    Gigas_Technique_1:{name:"ギガス・テクニックI",level:1,value:6},
    Gigas_Technique_2:{name:"ギガス・テクニックII",level:2,value:8},
    Gigas_Technique_3:{name:"ギガス・テクニックIII",level:3,value:10},
    Gigas_Technique_4:{name:"ギガス・テクニックIV",level:4,value:11},

    agura_gigasu:{name:"ギガス・アグライ",level:1,value:11},
    euteli_gigasu:{name:"ギガス・エウティ",level:1,value:11},
    taria_gigasu:{name:"ギガス・タリアー",level:1,value:11},
    maesu_gigasu:{name:"ギガス・マエスティ",level:1,value:12},
    
    //ドレド系
    Dread_Keeper_1:{name:"ドレド・キーパI",level:1,value:7},
    Dread_Keeper_2:{name:"ドレド・キーパII",level:2,value:7.5},
    Dread_Keeper_3:{name:"ドレド・キーパIII",level:3,value:10},
    Dread_Keeper_4:{name:"ドレド・キーパIV",level:4,value:11},

    //メガス系
    MegasFusia:{name:"メガス・フュージア",level:1,value:4},
    FomidoFusia:{name:"フォミド・フュージア(予想値)",level:1,value:6},

    //ウィーカー系
    Fire_Exploit_1:{name:"フレイムウィーカーI",level:1,value:6},
    Fire_Exploit_2:{name:"フレイムウィーカーII",level:2,value:11},
    Ice_Exploit_1:{name:"アイスウィーカーI",level:1,value:6},
    Ice_Exploit_2:{name:"アイスウィーカーII",level:2,value:11},
    LightExploit:{name:"ライトーウィーカー",level:1,value:6},
    WindExploit:{name:"ウィンドウィーカー",level:1,value:6},
    LightningExploit:{name:"サンダーウィーカー",level:1,value:6},
    gurumu_ui:{name:"グルームウィーカー",level:1,value:6},
    DaytimeExploit:{name:"デイタイムウィーカー",level:1,value:6},
    NighttimeExploit:{name:"ナイトタイムウィーカー",level:1,value:6},

    //トリア系
    stamroda_toria:{name:"トリア・スタムロダ",level:1,value:6},
    starosya_toria:{name:"トリア・スタムロシャ",level:1,value:6},
    stamrohou_toria:{name:"トリア・スタムロホウ",level:1,value:6},
    supireroda_toria:{name:"トリア・スピレロダ",level:1,value:6},
    supirerosya_toria:{name:"トリア・スピレロシャ",level:1,value:6},
    supirerohou_toria:{name:"トリア・スピレロホウ",level:1,value:6},
    arumuroda_toria:{name:"トリア・アルムロダ",level:1,value:6},
    arumurosya_toria:{name:"トリア・アルムロシャ",level:1,value:6},
    arumurohou_toria:{name:"トリア・アルムロホウ",level:1,value:6},
    gardroda_toria:{name:"トリア・ガーディロダ",level:1,value:6},
    gardrosya_toria:{name:"トリア・ガーディロシャ",level:1,value:6},
    gard_rohou_toria:{name:"トリア・ガーディロホウ",level:1,value:6},
    
    sutamu_toriaburu:{name:"スタム・トリアブル",level:1,value:8},
    supire_toriaburu:{name:"スピレ・トリアブル",level:1,value:8},
    arumu_toriaburu:{name:"アルム・トリアブル",level:1,value:8},
    gard_toriaburu:{name:"ガーディ・トリアブル",level:1,value:8},
    
    //シュペル
    SuperMight:{name:"シュペル・パワー",level:1,value:8},
    SuperStamel:{name:"シュペル・スタムダ",level:1,value:8},
    SuperSpimel:{name:"シュペル・スピレダ",level:1,value:8},
    SuperPrecision:{name:"シュペル・シュート",level:1,value:8},
    SuperStara:{name:"シュペル・スタムシャ",level:1,value:8},
    SuperSpira:{name:"シュペル・スピレシャ",level:1,value:8},
    SuperTechnique:{name:"シュペル・テクニック",level:1,value:8},
    SuperStatech:{name:"シュペル・スタムホウ",level:1,value:8},
    SuperSpitech:{name:"シュペル・スピレホウ",level:1,value:8},

    //ペリオ
    Esperio_1:{name:"エスペリオI",level:1,value:0},
    Esperio_2:{name:"エスペリオII",level:2,value:0},
    Hi_Perio_1:{name:"ハイペリオI",level:1,value:0},

    //アディ・スタ
    stamda_ade:{name:"アディ・スタムダ",level:1,value:10},
    stamsya_ade:{name:"アディ・スタムシャ",level:1,value:10},
    stamhou_ade:{name:"アディ・スタムホウ",level:1,value:10},
    stadasya_ade:{name:"アディ・スタダシャ",level:1,value:13},
    stadahou_ade:{name:"アディ・スタダホウ",level:1,value:13},
    stasyahou_ade:{name:"アディ・スタシャホウ",level:1,value:13},

    //アディ・スピ
    supireda_ade:{name:"アディ・スピレダ",level:1,value:10},
    supisya_ade:{name:"アディ・スピレシャ",level:1,value:10},
    supihou_ade:{name:"アディ・スピレホウ",level:1,value:10},
    supidasya_ade:{name:"アディ・スピダシャ",level:1,value:13},
    supidahou_ade:{name:"アディ・スピダホウ",level:1,value:13},
    supisyahou_ade:{name:"アディ・スピシャホウ",level:1,value:13},

    //アディ・スタピ
    stabida_ade:{name:"アディ・スタピダ",level:1,value:10},
    stapisya_ade:{name:"アディ・スタピシャ",level:1,value:10},
    stapihou_ade:{name:"アディ・スタピホウ",level:1,value:10},
    stapidasya_ade:{name:"アディ・スタピダシャ",level:1,value:13},
    stapidahou_ade:{name:"アディ・スタピダホウ",level:1,value:13},
    stapisyahou_ade:{name:"アディ・スタピシャホウ",level:1,value:13},

    //アディ・アルム
    arumda_ade:{name:"アディ・アルムダ",level:1,value:10},
    arumsya_ade:{name:"アディ・アルムシャ",level:1,value:10},
    arumhou_ade:{name:"アディ・アルムホウ",level:1,value:10},
    arumdasya_ade:{name:"アディ・アムダシャ",level:1,value:13},
    arumdahou_ade:{name:"アディ・アムダホウ",level:1,value:13},
    arumsyahou_ade:{name:"アディ・アムシャホウ",level:1,value:13},

    //アディ・ガーディ
    gardda_ade:{name:"アディ・ガーディダ",level:1,value:10},
    gardsya_ade:{name:"アディ・ガーディシャ",level:1,value:10},
    gardhou_ade:{name:"アディ・ガーディホウ",level:1,value:10},
    garddasya_ade:{name:"アディ・ガディダシャ",level:1,value:13},
    garddahou_ade:{name:"アディ・ガディダホウ",level:1,value:13},
    gardsyahou_ade:{name:"アディ・ガディシャホウ",level:1,value:13},

    //アディ・レジリ
    rezirida_ade:{name:"アディ・レジリダ",level:1,value:10},
    rezirisya_ade:{name:"アディ・レジリシャ",level:1,value:10},
    rezirihou_ade:{name:"アディ・レジリホウ",level:1,value:10},

    //アディレジダ
    rezidasya_ade:{name:"アディ・レジダシャ",level:1,value:13},
    rezidahou_ade:{name:"アディ・レジダホウ",level:1,value:13},
    rezisyahou_ade:{name:"アディ・レジシャホウ",level:1,value:13},

    //セズン
    SezunLunafiv:{name:"セズン・ルーナフィーヴ",level:1,value:10},
    SezunAutomfevre:{name:"セズン・オートナルフィーヴ",level:1,value:10},
    SezunWintafiv:{name:"セズン・ヴィンターフィーヴ",level:1,value:10},
    SezunSpringfiv:{name:"セズン・スプリングフィーヴ",level:1,value:10},
    SezunSecundaAnibafi:{name:"セズン・セクンダアニバフィー",level:1,value:10},

    //デフィ
    DefiHaumes_p1:{name:"デフィ・エリシス（予想値）",level:1,value:10},
    DefiMakemes_p1:{name:"デフィ・セイレス（予想値）",level:1,value:10},
    DefiPlutos_p1:{name:"デフィ・プルトス（予想値）",level:1,value:10},
    DefiCeires_p1:{name:"デフィ・マケメス（予想値）",level:1,value:10},
    DefiElysis_p1:{name:"デフィ・ハウメス（予想値）",level:1,value:10},
}

export default tag_op;