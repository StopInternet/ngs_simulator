//name:"パワーI",level:1,戦闘力値value:4,打撃power:1.0,射撃shoot:1.0,法撃magic:1.0,下限補正kagen:1.0,hp:0,pp:0
//ウィーカー系は後回し

const tag_op = {
    kara:{name:"空スロット",level:1,value:0,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    //パワー系
    Might_1:{name:"パワーI",level:1,value:4,power:1.01,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Might_2:{name:"パワーII",level:2,value:5,power:1.015,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Might_3:{name:"パワーIII",level:3,value:6,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Might_4:{name:"パワーIV",level:4,value:7,power:1.03,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    Sta_Might:{name:"スタム・パワー",level:1,value:8,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    Spi_Might:{name:"スピレ・パワー",level:1,value:8,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:5},
    Deft_Might:{name:"アルム・パワー",level:1,value:8,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.02,hp:0,pp:0},
    Gua_Might:{name:"ガーディ・パワー",level:1,value:8,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    
    //シュート系
    Precision_1:{name:"シュートI",level:1,value:4,power:1.0,shoot:1.01,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Precision_2:{name:"シュートII",level:2,value:5,power:1.0,shoot:1.015,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Precision_3:{name:"シュートIII",level:3,value:6,power:1.0,shoot:1.02,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Precision_4:{name:"シュートIV",level:4,value:7,power:1.0,shoot:1.03,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    Sta_Precision:{name:"スタム・シュート",level:1,value:8,power:1.0,shoot:1.02,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    Spi_Precision:{name:"スピレ・シュート",level:1,value:8,power:1.0,shoot:1.02,magic:1.0,floor_Increase:1.0,hp:0,pp:5},
    Deft_Precision:{name:"スピレ・シュート",level:1,value:8,power:1.0,shoot:1.02,magic:1.0,floor_Increase:1.02,hp:0,pp:0},
    Gua_Precision:{name:"ガーディ・シュート",level:1,value:8,power:1.0,shoot:1.02,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    //テクニック系
    Technique_1:{name:"テクニックI",level:1,value:4,power:1.0,shoot:1.0,magic:1.01,floor_Increase:1.0,hp:0,pp:0},
    Technique_2:{name:"テクニックII",level:2,value:5,power:1.0,shoot:1.0,magic:1.015,floor_Increase:1.0,hp:0,pp:0},
    Technique_3:{name:"テクニックIII",level:3,value:6,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:0,pp:0},
    Technique_4:{name:"テクニックIV",level:4,value:7,power:1.0,shoot:1.0,magic:1.03,floor_Increase:1.0,hp:0,pp:0},

    Sta_Technique:{name:"スタム・テクニック",level:1,value:8,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:15,pp:0},
    Spi_Technique:{name:"スピレ・テクニック",level:1,value:8,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:0,pp:5},
    Deft_Technique:{name:"アルム・テクニック",level:1,value:8,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.02,hp:0,pp:0},
    Gua_Technique:{name:"ガーディ・テクニック",level:1,value:8,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:0,pp:0},

    //スタミナ、スピレ系
    Stamina_1:{name:"スタミナI",level:1,value:3,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:5,pp:0},
    Stamina_2:{name:"スタミナII",level:2,value:4,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:10,pp:0},
    Stamina_3:{name:"スタミナIII",level:3,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:0},

    Spirit_1:{name:"スピリタI",level:1,value:2,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:3},
    Spirit_2:{name:"スピリタII",level:2,value:3,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:4},
    Spirit_3:{name:"スピリタIII",level:3,value:4,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:5},

    //ディアブル、トリアブル系
    Melra_Dualble_1:{name:"ダシャ・ディアブルI",level:1,value:4,power:1.0075,shoot:1.0075,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Melra_Dualble_2:{name:"ダシャ・ディアブルII",level:2,value:5,power:1.0125,shoot:1.0125,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Melra_Dualble_3:{name:"ダシャ・ディアブルIII",level:3,value:6,power:1.0175,shoot:1.0175,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Melra_Dualble_4:{name:"ダシャ・ディアブルIV",level:4,value:7,power:1.0275,shoot:1.0275,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    Meltech_Dualble_1:{name:"ダホウ・ディアブルI",level:1,value:4,power:1.0075,shoot:1.0,magic:1.0075,floor_Increase:1.0,hp:0,pp:0},
    Meltech_Dualble_2:{name:"ダホウ・ディアブルII",level:2,value:5,power:1.0125,shoot:1.0,magic:1.0125,floor_Increase:1.0,hp:0,pp:0},
    Meltech_Dualble_3:{name:"ダホウ・ディアブルIII",level:3,value:6,power:1.0175,shoot:1.0,magic:1.0175,floor_Increase:1.0,hp:0,pp:0},
    Meltech_Dualble_4:{name:"ダホウ・ディアブルIV",level:4,value:7,power:1.0275,shoot:1.0,magic:1.0275,floor_Increase:1.0,hp:0,pp:0},

    Ratech_Dualble_1:{name:"シャホウ・ディアブルI",level:1,value:4,power:1.0,shoot:1.0075,magic:1.0075,floor_Increase:1.0,hp:0,pp:0},
    Ratech_Dualble_2:{name:"シャホウ・ディアブルII",level:2,value:5,power:1.0,shoot:1.0125,magic:1.0125,floor_Increase:1.0,hp:0,pp:0},
    Ratech_Dualble_3:{name:"シャホウ・ディアブルIII",level:3,value:6,power:1.0,shoot:1.0175,magic:1.0175,floor_Increase:1.0,hp:0,pp:0},
    Ratech_Dualble_4:{name:"シャホウ・ディアブルIV",level:4,value:7,power:1.0,shoot:1.0275,magic:1.0275,floor_Increase:1.0,hp:0,pp:0},

    //トリアブル
    Triplble:{name:"トリアブル",level:1,value:8,power:1.02,shoot:1.02,magic:1.02,floor_Increase:1.0,hp:0,pp:0},
    Tirplble2:{name:"トリアブルII",level:2,value:10,power:1.03,shoot:1.03,magic:1.03,floor_Increase:1.0,hp:0,pp:0},
    sutamu_triplble:{name:"スタム・トリアブル",level:1,value:7,power:1.03,shoot:1.03,magic:1.03,floor_Increase:1.0,hp:15,pp:0},
    supire_triplble:{name:"スピレ・トリアブル",level:1,value:7,power:1.03,shoot:1.03,magic:1.03,floor_Increase:1.0,hp:0,pp:5},
    arumu_triplble:{name:"アルム・トリアブル",level:1,value:7,power:1.025,shoot:1.025,magic:1.025,floor_Increase:1.025,hp:0,pp:0},
    gard_triplble:{name:"ガーディ・トリアブル",level:1,value:7,power:1.03,shoot:1.03,magic:1.03,floor_Increase:1.0,hp:0,pp:0},

    //アーム系、ガード系
    Deftness_1:{name:"アームI",level:1,value:3,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.01,hp:0,pp:0},
    Deftness_2:{name:"アームII",level:2,value:4,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.015,hp:0,pp:0},
    Deftness_3:{name:"アームIII",level:3,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.02,hp:0,pp:0},
    Deftness_4:{name:"アームIV",level:4,value:6,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.03,hp:0,pp:0},

    Guard_1:{name:"ガードI",level:1,value:2,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Guard_2:{name:"ガードII",level:2,value:3,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Guard_3:{name:"ガードIII",level:3,value:4,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    //アビリティ
    Mastery_1:{name:"アビリティI",level:1,value:6,power:1.005,shoot:1.005,magic:1.005,floor_Increase:1.005,hp:0,pp:0},
    Mastery_2:{name:"アビリティII",level:2,value:8,power:1.01,shoot:1.01,magic:1.01,floor_Increase:1.01,hp:0,pp:0},
    Mastery_3:{name:"アビリティIII",level:3,value:10,power:1.015,shoot:1.015,magic:1.015,floor_Increase:1.015,hp:0,pp:0},
    Mastery_4:{name:"アビリティIV",level:4,value:12,power:1.025,shoot:1.025,magic:1.025,floor_Increase:1.025,hp:0,pp:0},

    //レジスト系
    Burn_Ward_1:{name:"バーンレジストI",level:1,value:4,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Burn_Ward_2:{name:"バーンレジストII",level:2,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Burn_Ward_3:{name:"バーンレジストIII",level:3,value:6,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    Freeze_Ward_1:{name:"フリーズレジストI",level:1,value:4,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Freeze_Ward_2:{name:"フリーズレジストII",level:2,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Freeze_Ward_3:{name:"フリーズレジストIII",level:3,value:6,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    Shock_Ward_1:{name:"ショックレジストI",level:1,value:4,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Shock_Ward_2:{name:"ショックレジストII",level:2,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Shock_Ward_3:{name:"ショックレジストIII",level:3,value:6,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    
    Blind_Ward_1:{name:"ミラージュレジストI",level:1,value:4,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Blind_Ward_2:{name:"ミラージュレジストII",level:2,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Blind_Ward_3:{name:"ミラージュレジストIII",level:3,value:6,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    Panic_Ward_1:{name:"パニックレジストI",level:1,value:4,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Panic_Ward_2:{name:"パニックレジストII",level:2,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Panic_Ward_3:{name:"パニックレジストIII",level:3,value:6,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    Poisn_Ward_1:{name:"ポイズンレジストI",level:1,value:4,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Poisn_Ward_2:{name:"ポイズンレジストII",level:2,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Poisn_Ward_3:{name:"ポイズンレジストIII",level:3,value:6,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    Pain_Ward_1:{name:"ペインレジストI",level:1,value:4,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Pain_Ward_2:{name:"ペインレジストII",level:2,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Pain_Ward_3:{name:"ペインレジストIII",level:3,value:6,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    Sovereign_Ward_1:{name:"オールレジストI",level:1,value:4,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Sovereign_Ward_2:{name:"オールレジストII",level:2,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Sovereign_Ward_3:{name:"オールレジストIII",level:3,value:6,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    //ソール系（種別）
    Forms_Soul_1:{name:"フォムズ・ソールI",level:1,value:6,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Forms_Soul_2:{name:"フォムズ・ソールII",level:2,value:8,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Forms_Soul_3:{name:"フォムズ・ソールIII",level:3,value:9,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Forms_Soul_4:{name:"フォムズ・ソールIV",level:4,value:10,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    Forms_Machini_Soul_1:{name:"フォムズマシニ・ソールI",level:1,value:6,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Forms_Machini_Soul_2:{name:"フォムズマシニ・ソールII",level:2,value:8,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Forms_Machini_Soul_3:{name:"フォムズマシニ・ソールIII",level:3,value:9,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Forms_Machini_Soul_4:{name:"フォムズマシニ・ソールIV",level:4,value:10,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    Forms_Sand_Soul_1:{name:"フォムズサンデ・ソールI",level:1,value:6,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:0,pp:0},
    Forms_Sand_Soul_2:{name:"フォムズサンデ・ソールII",level:2,value:8,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:0,pp:0},
    Forms_Sand_Soul_3:{name:"フォムズサンデ・ソールIII",level:3,value:9,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:0,pp:0},
    Forms_Sand_Soul_4:{name:"フォムズサンデ・ソールIV",level:4,value:10,power:1.0,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:0,pp:0},
    
    Alts_Soul_1:{name:"アルズ・ソールI",level:1,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:5,pp:0},
    Alts_Soul_2:{name:"アルズ・ソールII",level:2,value:7,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:10,pp:0},
    Alts_Soul_3:{name:"アルズ・ソールIII",level:3,value:9,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:0},

    Dolz_Soul_1:{name:"ドルズ・ソールI",level:1,value:5,power:1.01,shoot:1.0,magic:1.0,floor_Increase:1.01,hp:0,pp:5},
    Dolz_Soul_2:{name:"ドルズ・ソールII",level:2,value:6,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.02,hp:0,pp:5},
    Dolz_Soul_3:{name:"ドルズ・ソールIII",level:3,value:7,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.025,hp:0,pp:5},

    //エネミー個別
    //エアリオ
    Daityl_Sou_1:{name:"ダイダル・ソールI",level:1,value:7,power:1.01,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:5},
    Daityl_Sou_2:{name:"ダイダル・ソールII",level:2,value:8,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:5},
    Daityl_Sou_3:{name:"ダイダル・ソールIII",level:3,value:10,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:5},
    Daityl_Sou_4:{name:"ダイダル・ソールIV",level:4,value:11,power:1.03,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:5},
    
    Pettas_Soul_1:{name:"ペダス・ソールI",level:1,value:7,power:1.0,shoot:1.01,magic:1.0,floor_Increase:1.0,hp:0,pp:5},
    Pettas_Soul_2:{name:"ペダス・ソールII",level:2,value:8,power:1.0,shoot:1.02,magic:1.0,floor_Increase:1.0,hp:0,pp:5},
    Pettas_Soul_3:{name:"ペダス・ソールIII",level:3,value:10,power:1.0,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:0,pp:5},
    Pettas_Soul_4:{name:"ペダス・ソールIV",level:4,value:11,power:1.0,shoot:1.03,magic:1.0,floor_Increase:1.0,hp:0,pp:5},

    Nex_Soul_1:{name:"ネクス・ソールI",level:1,value:7,power:1.0,shoot:1.01,magic:1.01,floor_Increase:1.0,hp:0,pp:5},
    Nex_Soul_2:{name:"ネクス・ソールII",level:2,value:8,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:0,pp:5},
    Nex_Soul_3:{name:"ネクス・ソールIII",level:3,value:10,power:1.0,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:0,pp:5},
    Nex_Soul_4:{name:"ネクス・ソールIV",level:4,value:11,power:1.0,shoot:1.0,magic:1.03,floor_Increase:1.0,hp:0,pp:5},

    //りてぬ
    Dust_Soul_1:{name:"スナイド・ソールI",level:1,value:7,power:1.01,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    Dust_Soul_2:{name:"スナイド・ソールII",level:2,value:8,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    Dust_Soul_3:{name:"スナイド・ソールIII",level:3,value:10,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    Dust_Soul_4:{name:"スナイド・ソールIV",level:4,value:11,power:1.03,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:0},

    Ragras_Soul_1:{name:"ラグラス・ソールI",level:1,value:7,power:1.0,shoot:1.01,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    Ragras_Soul_2:{name:"ラグラス・ソールII",level:2,value:8,power:1.0,shoot:1.02,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    Ragras_Soul_3:{name:"ラグラス・ソールIII",level:3,value:10,power:1.0,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    Ragras_Soul_4:{name:"ラグラス・ソールIV",level:4,value:11,power:1.0,shoot:1.03,magic:1.0,floor_Increase:1.0,hp:15,pp:0},

    Renus_Soul_1:{name:"レヌス・ソールI",level:1,value:7,power:1.0,shoot:1.0,magic:1.01,floor_Increase:1.0,hp:15,pp:0},
    Renus_Soul_2:{name:"レヌス・ソールII",level:2,value:8,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:15,pp:0},
    Renus_Soul_3:{name:"レヌス・ソールIII",level:3,value:10,power:1.0,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:15,pp:0},
    Renus_Soul_4:{name:"レヌス・ソールIV",level:4,value:11,power:1.0,shoot:1.0,magic:1.03,floor_Increase:1.0,hp:15,pp:0},

    //くヴぁりす
    Eradi_Soul_1:{name:"エラーディ・ソールI",level:1,value:7,power:1.0125,shoot:1.0125,magic:1.0125,floor_Increase:1.0,hp:10,pp:4},
    Eradi_Soul_2:{name:"エラーディ・ソールII",level:2,value:8,power:1.0175,shoot:1.0175,magic:1.0175,floor_Increase:1.0,hp:10,pp:4},
    Eradi_Soul_3:{name:"エラーディ・ソールIII",level:3,value:10,power:1.0225,shoot:1.0225,magic:1.0225,floor_Increase:1.0,hp:10,pp:4},
    Eradi_Soul_4:{name:"エラーディ・ソールIV",level:4,value:11,power:1.0275,shoot:1.0275,magic:1.0275,floor_Increase:1.0,hp:10,pp:4},

    Frostyl_Soul_1:{name:"レイダル・ソールI",level:1,value:7,power:1.01,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:10,pp:3},
    Frostyl_Soul_2:{name:"レイダル・ソールII",level:2,value:8,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:10,pp:3},
    Frostyl_Soul_3:{name:"レイダル・ソールIII",level:3,value:10,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:10,pp:3},
    Frostyl_Soul_4:{name:"レイダル・ソールIV",level:4,value:11,power:1.03,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:10,pp:3},

    Crocys_Soul_1:{name:"クロコス・ソールI",level:1,value:7,power:1.0,shoot:1.01,magic:1.0,floor_Increase:1.0,hp:10,pp:3},
    Crocys_Soul_2:{name:"クロコス・ソールII",level:2,value:8,power:1.0,shoot:1.02,magic:1.0,floor_Increase:1.0,hp:10,pp:3},
    Crocys_Soul_3:{name:"クロコス・ソールIII",level:3,value:10,power:1.0,shoot:1.0125,magic:1.0,floor_Increase:1.0,hp:10,pp:3},
    Crocys_Soul_4:{name:"クロコス・ソールIV",level:4,value:11,power:1.0,shoot:1.03,magic:1.0,floor_Increase:1.0,hp:10,pp:3},

    Ams_Soul_1:{name:"アムス・ソールI",level:1,value:7,power:1.0,shoot:1.0,magic:1.01,floor_Increase:1.0,hp:10,pp:3},
    Ams_Soul_2:{name:"アムス・ソールII",level:2,value:8,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:10,pp:3},
    Ams_Soul_3:{name:"アムス・ソールIII",level:3,value:10,power:1.0,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:10,pp:3},
    Ams_Soul_4:{name:"アムス・ソールIV",level:4,value:11,power:1.0,shoot:1.0,magic:1.03,floor_Increase:1.0,hp:10,pp:3},

    //あつあつ
    Vardi_Soul_1:{name:"ヴァーディ・ソールI",level:1,value:7,power:1.0125,shoot:1.0125,magic:1.0125,floor_Increase:1.0,hp:25,pp:0},
    Vardi_Soul_2:{name:"ヴァーディ・ソールII",level:2,value:8,power:1.0175,shoot:1.0175,magic:1.0175,floor_Increase:1.0,hp:25,pp:0},
    Vardi_Soul_3:{name:"ヴァーディ・ソールIII",level:3,value:10,power:1.0225,shoot:1.0225,magic:1.0225,floor_Increase:1.0,hp:25,pp:0},
    Vardi_Soul_4:{name:"ヴァーディ・ソールIV",level:4,value:11,power:1.0275,shoot:1.0275,magic:1.0275,floor_Increase:1.0,hp:25,pp:0},

    Freid_Soul_1:{name:"フレイド・ソールI",level:1,value:7,power:1.01,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:5},
    Freid_Soul_2:{name:"フレイド・ソールII",level:2,value:8,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:5},
    Freid_Soul_3:{name:"フレイド・ソールIII",level:3,value:10,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:5},
    Freid_Soul_4:{name:"フレイド・ソールIV",level:4,value:11,power:1.03,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:5},

    Doldor_Soul_1:{name:"ドルドラ・ソールI",level:1,value:7,power:1.0,shoot:1.01,magic:1.0,floor_Increase:1.0,hp:15,pp:5},
    Doldor_Soul_2:{name:"ドルドラ・ソールII",level:2,value:8,power:1.0,shoot:1.02,magic:1.0,floor_Increase:1.0,hp:15,pp:5},
    Doldor_Soul_3:{name:"ドルドラ・ソールIII",level:3,value:10,power:1.0,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:15,pp:5},
    Doldor_Soul_4:{name:"ドルドラ・ソールIV",level:4,value:11,power:1.0,shoot:1.03,magic:1.0,floor_Increase:1.0,hp:15,pp:5},

    Nils_Soul_1:{name:"ニルス・ソールI",level:1,value:7,power:1.0,shoot:1.0,magic:1.01,floor_Increase:1.0,hp:15,pp:5},
    Nils_Soul_2:{name:"ニルス・ソールII",level:2,value:8,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:15,pp:5},
    Nils_Soul_3:{name:"ニルス・ソールIII",level:3,value:10,power:1.0,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:15,pp:5},
    Nils_Soul_4:{name:"ニルス・ソールIV",level:4,value:11,power:1.0,shoot:1.0,magic:1.03,floor_Increase:1.0,hp:15,pp:5},

    Aegis_Soul_1:{name:"エイジス・ソールI",level:1,value:7,power:1.01,shoot:1.01,magic:1.01,floor_Increase:1.0,hp:5,pp:2},
    Aegis_Soul_2:{name:"エイジス・ソールII",level:2,value:8,power:1.02,shoot:1.02,magic:1.02,floor_Increase:1.0,hp:5,pp:2},
    Aegis_Soul_3:{name:"エイジス・ソールIII",level:3,value:10,power:1.025,shoot:1.025,magic:1.025,floor_Increase:1.0,hp:5,pp:2},
    Aegis_Soul_4:{name:"エイジス・ソールIV",level:4,value:11,power:1.03,shoot:1.03,magic:1.03,floor_Increase:1.0,hp:5,pp:2},

    //アグライ・エウティ・タリア―ソール
    //H
    AglaiSoulH:{name:"アグライ・ソールH",level:1,value:11,power:1.025,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    EuphroySoulH:{name:"エウティ・ソールH",level:1,value:11,power:1.025,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:15,pp:0},
    ThaliSoulH:{name:"タリアー・ソールH",level:1,value:11,power:1.0,shoot:1.025,magic:1.025,floor_Increase:1.0,hp:15,pp:0},
    //P
    AglaiSoulP:{name:"アグライ・ソールP",level:1,value:11,power:1.025,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:0,pp:5},
    euteliP:{name:"エウティ・ソールP",level:1,value:11,power:1.025,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:0,pp:5},
    ThaliSoulP:{name:"タリアー・ソールP",level:1,value:11,power:1.0,shoot:1.025,magic:1.025,floor_Increase:1.0,hp:0,pp:5},
    //X
    AglaiSoulX:{name:"アグライ・ソールX",level:1,value:11,power:1.025,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:10,pp:3},
    EuphroySoulX:{name:"エウティ・ソールX",level:1,value:11,power:1.025,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:10,pp:3},
    ThaliSoulX:{name:"タリアー・ソールX",level:1,value:11,power:1.0,shoot:1.025,magic:1.025,floor_Increase:1.0,hp:10,pp:3},

    //スタロ
    Staro_Soul:{name:"スタロ・ソール(予想)",level:1,value:10,power:1.03,shoot:1.03,magic:1.03,floor_Increase:1.0,hp:0,pp:0},

    //ノート系
    //エアルノート
    earu_noteA:{name:"エアル・ノートA",level:1,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:5,pp:3},
    earu_noteB:{name:"エアル・ノートB",level:1,value:4,power:1.01,shoot:1.01,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    earu_noteC:{name:"エアル・ノートC",level:1,value:4,power:1.01,shoot:1.0,magic:1.01,floor_Increase:1.0,hp:0,pp:0},
    earu_noteD:{name:"エアル・ノートD",level:1,value:4,power:1.0,shoot:1.01,magic:1.01,floor_Increase:1.0,hp:0,pp:0},

    magunu_note:{name:"マグヌ・ノート",level:1,value:5,power:1.015,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    raborata_note:{name:"ラボラタ・ノート",level:1,value:5,power:1.0,shoot:1.015,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    rezora_note:{name:"レゾラ・ノート",level:1,value:5,power:1.0,shoot:1.0,magic:1.015,floor_Increase:1.0,hp:0,pp:0},

    //リテナノート
    ritena_noteA:{name:"リテナ・ノートA",level:1,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:10,pp:0},
    ritena_noteB:{name:"リテナ・ノートB",level:1,value:4,power:1.0075,shoot:1.0075,magic:1.0,floor_Increase:1.0,hp:5,pp:0},
    ritena_noteC:{name:"リテナ・ノートC",level:1,value:4,power:1.0075,shoot:1.0,magic:1.0075,floor_Increase:1.0,hp:5,pp:0},
    ritena_noteD:{name:"リテナ・ノートD",level:1,value:4,power:1.0,shoot:1.0075,magic:1.0075,floor_Increase:1.0,hp:5,pp:0},

    eruna_note:{name:"エルナ・ノート",level:1,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.02,hp:10,pp:3},
    akua_note:{name:"マクア・ノート",level:1,value:5,power:1.0125,shoot:1.0125,magic:1.0125,floor_Increase:1.0,hp:0,pp:0},
    //クヴァルノート
    kuvaru_noteA:{name:"クヴァル・ノートA",level:1,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:10,pp:5},
    kuvaru_noteB:{name:"クヴァル・ノートB",level:1,value:4,power:1.02,shoot:1.02,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    kuvaru_noteC:{name:"クヴァル・ノートC",level:1,value:4,power:1.02,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:0,pp:0},
    kuvaru_noteD:{name:"クヴァル・ノートD",level:1,value:4,power:1.0,shoot:1.02,magic:1.02,floor_Increase:1.0,hp:0,pp:0},

    berugun_note:{name:"ベルガン・ノート",level:1,value:5,power:1.0125,shoot:1.0125,magic:1.0125,floor_Increase:1.0,hp:0,pp:3},
    rosutora_note:{name:"ロストラ・ノート",level:1,value:5,power:1.0125,shoot:1.0125,magic:1.0125,floor_Increase:1.0,hp:10,pp:0},

    //スティラノート
    sutelia_noteA:{name:"スティラ・ノートA",level:1,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:5},
    sutelia_noteB:{name:"スティラ・ノートB",level:1,value:4,power:1.02,shoot:1.02,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    sutelia_noteC:{name:"スティラ・ノートC",level:1,value:4,power:1.02,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:0,pp:0},
    sutelia_noteD:{name:"スティラ・ノートD",level:1,value:4,power:1.0,shoot:1.02,magic:1.02,floor_Increase:1.0,hp:0,pp:0},

    dekusuta_note:{name:"デクスタ・ノート",level:1,value:5,power:1.02,shoot:1.02,magic:1.02,floor_Increase:1.0,hp:10,pp:0},

    //ドミナ系
    earu_domina:{name:"エアル・ドミナ",level:1,value:8,power:1.015,shoot:1.015,magic:1.015,floor_Increase:1.0,hp:5,pp:3},
    ritena_domina:{name:"リテナ・ドミナ",level:1,value:10,power:1.015,shoot:1.015,magic:1.015,floor_Increase:1.0,hp:15,pp:0},
    kuvaru_domina:{name:"クヴァル・ドミナ",level:1,value:10,power:1.02,shoot:1.02,magic:1.02,floor_Increase:1.0,hp:0,pp:5},
    sutira_domina:{name:"スティラ・ドミナ",level:1,value:10,power:1.03,shoot:1.03,magic:1.03,floor_Increase:1.0,hp:0,pp:0},

    //二リア系
    harufiniria:{name:"ハルフィニリア",level:1,value:13,power:1.04,shoot:1.04,magic:1.04,floor_Increase:1.0,hp:15,pp:5},

    //デコルド
    Decold_Standard_1:{name:"デコルド・スタンダルドI",level:1,value:1,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Decold_Standard_2:{name:"デコルド・スタンダルドII",level:2,value:3,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Decold_Standard_3:{name:"デコルド・スタンダルドIII",level:3,value:5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    power_dekorudo:{name:"デコルド・パワー",level:1,value:9,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    shoot_dekorudo:{name:"デコルド・シュート",level:1,value:9,power:1.0,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    magic_dekorudo:{name:"デコルド・テクニック",level:1,value:9,power:1.0,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:0,pp:0},

    //セクレテ
    Alts_Secreta_1:{name:"アルズ・セクレテI",level:1,value:3,power:1.01,shoot:1.01,magic:1.01,floor_Increase:1.0,hp:-10,pp:0},
    Alts_Secreta_2:{name:"アルズ・セクレテII",level:2,value:4,power:1.015,shoot:1.015,magic:1.015,floor_Increase:1.015,hp:-10,pp:0},
    Alts_Secreta_3:{name:"アルズ・セクレテIII",level:3,value:5,power:1.02,shoot:1.02,magic:1.02,floor_Increase:1.02,hp:-10,pp:0},
    Alts_Secreta_4:{name:"アルズ・セクレテIV",level:4,value:6,power:1.025,shoot:1.025,magic:1.025,floor_Increase:1.025,hp:-10,pp:0},

    //ギガス系
    Gigas_Might_1:{name:"ギガス・パワーI",level:1,value:6,power:1.015,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:5,pp:0},
    Gigas_Might_2:{name:"ギガス・パワーII",level:2,value:8,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:10,pp:0},
    Gigas_Might_3:{name:"ギガス・パワーIII",level:3,value:10,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    Gigas_Might_4:{name:"ギガス・パワーIV",level:4,value:11,power:1.03,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:20,pp:0},

    Gigas_Precision_1:{name:"ギガス・シュートI",level:1,value:6,power:1.0,shoot:1.015,magic:1.0,floor_Increase:1.0,hp:5,pp:0},
    Gigas_Precision_2:{name:"ギガス・シュートII",level:2,value:8,power:1.0,shoot:1.02,magic:1.0,floor_Increase:1.0,hp:10,pp:0},
    Gigas_Precision_3:{name:"ギガス・シュートIII",level:3,value:10,power:1.0,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    Gigas_Precision_4:{name:"ギガス・シュートIV",level:4,value:11,power:1.0,shoot:1.03,magic:1.0,floor_Increase:1.0,hp:20,pp:0},

    Gigas_Technique_1:{name:"ギガス・テクニックI",level:1,value:6,power:1.0,shoot:1.0,magic:1.015,floor_Increase:1.0,hp:5,pp:0},
    Gigas_Technique_2:{name:"ギガス・テクニックII",level:2,value:8,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:10,pp:0},
    Gigas_Technique_3:{name:"ギガス・テクニックIII",level:3,value:10,power:1.0,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:15,pp:0},
    Gigas_Technique_4:{name:"ギガス・テクニックIV",level:4,value:11,power:1.0,shoot:1.0,magic:1.03,floor_Increase:1.0,hp:20,pp:0},

    agura_gigasu:{name:"ギガス・アグライ",level:1,value:11,power:1.025,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    euteli_gigasu:{name:"ギガス・エウティ",level:1,value:11,power:1.025,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:15,pp:0},
    taria_gigasu:{name:"ギガス・タリアー",level:1,value:11,power:1.0,shoot:1.025,magic:1.025,floor_Increase:1.0,hp:15,pp:0},
    maesu_gigasu:{name:"ギガス・マエスティ",level:1,value:13,power:1.035,shoot:1.035,magic:1.035,floor_Increase:1.0,hp:20,pp:0},

    //ドレド系
    Dread_Keeper_1:{name:"ドレド・キーパI",level:1,value:7,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.01,hp:10,pp:3},
    Dread_Keeper_2:{name:"ドレド・キーパII",level:2,value:7.5,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.015,hp:15,pp:4},
    Dread_Keeper_3:{name:"ドレド・キーパIII",level:3,value:10,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.02,hp:30,pp:7},
    Dread_Keeper_4:{name:"ドレド・キーパIV",level:4,value:11,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.06,hp:50,pp:10},

    //メガス系
    MegasFusia:{name:"メガス・フュージア",level:1,value:4,power:1.01,shoot:1.01,magic:1.01,floor_Increase:1.0,hp:0,pp:0},
    FomidoFusia:{name:"フォミド・フュージア",level:2,value:6,power:1.01,shoot:1.01,magic:1.01,floor_Increase:1.0,hp:0,pp:0},
    DelieraFusia:{name:"ディエラ・フュージア(予想）",level:3,value:8,power:1.01,shoot:1.01,magic:1.01,floor_Increase:1.0,hp:0,pp:0},

    //ウィーカー系
    Fire_Exploit_1:{name:"フレイムウィーカーI(弱点時)",level:1,value:6,power:1.025,shoot:1.025,magic:1.025,floor_Increase:1.0,hp:0,pp:0},
    Fire_Exploit_2:{name:"フレイムウィーカーII(弱点時)",level:2,value:11,power:1.04,shoot:1.04,magic:1.04,floor_Increase:1.0,hp:0,pp:0},
    Ice_Exploit_1:{name:"アイスウィーカーI(弱点時)",level:1,value:6,power:1.025,shoot:1.025,magic:1.025,floor_Increase:1.0,hp:0,pp:0},
    Ice_Exploit_2:{name:"アイスウィーカーII(弱点時)",level:2,value:11,power:1.04,shoot:1.04,magic:1.04,floor_Increase:1.0,hp:0,pp:0},
    LightExploit:{name:"ライトーウィーカー(弱点時)",level:1,value:6,power:1.025,shoot:1.025,magic:1.025,floor_Increase:1.0,hp:0,pp:0},
    WindExploit:{name:"ウィンドウィーカー(弱点時)",level:1,value:6,power:1.025,shoot:1.025,magic:1.025,floor_Increase:1.0,hp:0,pp:0},
    LightningExploit:{name:"サンダーウィーカー(弱点時)",level:1,value:6,power:1.025,shoot:1.025,magic:1.025,floor_Increase:1.0,hp:0,pp:0},
    gurumu_ui:{name:"グルームウィーカー(弱点時)",level:1,value:6,power:1.025,shoot:1.025,magic:1.025,floor_Increase:1.0,hp:0,pp:0},
    DaytimeExploit:{name:"デイタイムウィーカー(昼間時)",level:1,value:6,power:1.025,shoot:1.025,magic:1.025,floor_Increase:1.0,hp:0,pp:0},
    NighttimeExploit:{name:"ナイトタイムウィーカー(夜間時)",level:1,value:6,power:1.025,shoot:1.025,magic:1.025,floor_Increase:1.0,hp:0,pp:0},

    //トリア系
    stamroda_toria:{name:"トリア・スタムロダ",level:1,value:6,power:1.0225,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:-5,pp:0},
    starosya_toria:{name:"トリア・スタムロシャ",level:1,value:6,power:1.0,shoot:1.0225,magic:1.0,floor_Increase:1.0,hp:-5,pp:0},
    stamrohou_toria:{name:"トリア・スタムロホウ",level:1,value:6,power:1.0,shoot:1.0,magic:1.0225,floor_Increase:1.0,hp:-5,pp:0},

    supireroda_toria:{name:"トリア・スピレロダ",level:1,value:6,power:1.0225,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:-3},
    supirerosya_toria:{name:"トリア・スピレロシャ",level:1,value:6,power:1.0,shoot:1.0225,magic:1.0,floor_Increase:1.0,hp:0,pp:-3},
    supirerohou_toria:{name:"トリア・スピレロホウ",level:1,value:6,power:1.0,shoot:1.0,magic:1.0225,floor_Increase:1.0,hp:0,pp:-3},

    arumuroda_toria:{name:"トリア・アルムロダ",level:1,value:6,power:1.0225,shoot:1.0,magic:1.0,floor_Increase:0.99,hp:0,pp:0},
    arumurosya_toria:{name:"トリア・アルムロシャ",level:1,value:6,power:1.0,shoot:1.0225,magic:1.0,floor_Increase:0.99,hp:0,pp:0},
    arumurohou_toria:{name:"トリア・アルムロホウ",level:1,value:6,power:1.0,shoot:1.0,magic:1.0225,floor_Increase:0.99,hp:0,pp:0},

    gardroda_toria:{name:"トリア・ガーディロダ",level:1,value:6,power:1.0225,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    gardrosya_toria:{name:"トリア・ガーディロシャ",level:1,value:6,power:1.0,shoot:1.0225,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    gard_rohou_toria:{name:"トリア・ガーディロホウ",level:1,value:6,power:1.0,shoot:1.0,magic:1.0225,floor_Increase:1.0,hp:0,pp:0},

    //シュペル
    SuperMight:{name:"シュペル・パワー",level:1,value:8,power:1.0225,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    SuperStamel:{name:"シュペル・スタムダ",level:1,value:8,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    SuperSpimel:{name:"シュペル・スピレダ",level:1,value:8,power:1.02,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:5},

    SuperPrecision:{name:"シュペル・シュート",level:1,value:8,power:1.0,shoot:1.0225,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    SuperStara:{name:"シュペル・スタムシャ",level:1,value:8,power:1.0,shoot:1.02,magic:1.0,floor_Increase:1.0,hp:15,pp:0},
    SuperSpira:{name:"シュペル・スピレシャ",level:1,value:8,power:1.0,shoot:1.02,magic:1.0,floor_Increase:1.0,hp:0,pp:5},

    SuperTechnique:{name:"シュペル・テクニック",level:1,value:8,power:1.0,shoot:1.0,magic:1.0225,floor_Increase:1.0,hp:0,pp:0},
    SuperStatech:{name:"シュペル・スタムホウ",level:1,value:8,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:15,pp:0},
    SuperSpitech:{name:"シュペル・スピレホウ",level:1,value:8,power:1.0,shoot:1.0,magic:1.02,floor_Increase:1.0,hp:0,pp:5},

    //ペリオ
    Esperio_1:{name:"エスペリオI",level:1,value:0,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Esperio_2:{name:"エスペリオII",level:2,value:0,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Hi_Perio_1:{name:"ハイペリオI",level:1,value:0,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    endemio:{name:"エンディミオ",level:1,value:0,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    //アディ・スタ
    stamda_ade:{name:"アディ・スタムダ",level:1,value:10,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:20,pp:0},
    stamsya_ade:{name:"アディ・スタムシャ",level:1,value:10,power:1.0,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:20,pp:0},
    stamhou_ade:{name:"アディ・スタムホウ",level:1,value:10,power:1.0,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:20,pp:0},

    stadasya_ade:{name:"アディ・スタダシャ",level:1,value:13,power:1.03,shoot:1.03,magic:1.0,floor_Increase:1.01,hp:20,pp:0},
    stadahou_ade:{name:"アディ・スタダホウ",level:1,value:13,power:1.03,shoot:1.0,magic:1.03,floor_Increase:1.01,hp:20,pp:0},
    stasyahou_ade:{name:"アディ・スタシャホウ",level:1,value:13,power:1.0,shoot:1.03,magic:1.03,floor_Increase:1.01,hp:20,pp:0},

    //アディ・スピ
    supireda_ade:{name:"アディ・スピレダ",level:1,value:10,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:6},
    supisya_ade:{name:"アディ・スピレシャ",level:1,value:10,power:1.0,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:0,pp:6},
    supihou_ade:{name:"アディ・スピレホウ",level:1,value:10,power:1.0,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:0,pp:6},

    supidasya_ade:{name:"アディ・スピダシャ",level:1,value:13,power:1.03,shoot:1.03,magic:1.0,floor_Increase:1.01,hp:0,pp:6},
    supidahou_ade:{name:"アディ・スピダホウ",level:1,value:13,power:1.03,shoot:1.0,magic:1.03,floor_Increase:1.01,hp:0,pp:6},
    supisyahou_ade:{name:"アディ・スピシャホウ",level:1,value:13,power:1.0,shoot:1.03,magic:1.03,floor_Increase:1.01,hp:0,pp:6},

    //アディ・スタピ
    stabida_ade:{name:"アディ・スタピダ",level:1,value:10,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:10,pp:3},
    stapisya_ade:{name:"アディ・スタピシャ",level:1,value:10,power:1.0,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:10,pp:3},
    stapihou_ade:{name:"アディ・スタピホウ",level:1,value:10,power:1.0,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:10,pp:3},

    stapidasya_ade:{name:"アディ・スタピダシャ",level:1,value:13,power:1.03,shoot:1.03,magic:1.0,floor_Increase:1.01,hp:10,pp:3},
    stapidahou_ade:{name:"アディ・スタピダホウ",level:1,value:13,power:1.03,shoot:1.0,magic:1.03,floor_Increase:1.01,hp:10,pp:3},
    stapisyahou_ade:{name:"アディ・スタピシャホウ",level:1,value:13,power:1.0,shoot:1.03,magic:1.03,floor_Increase:1.01,hp:10,pp:3},

    //アディ・アルム
    arumda_ade:{name:"アディ・アルムダ",level:1,value:10,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.025,hp:0,pp:0},
    arumsya_ade:{name:"アディ・アルムシャ",level:1,value:10,power:1.0,shoot:1.025,magic:1.0,floor_Increase:1.025,hp:0,pp:0},
    arumhou_ade:{name:"アディ・アルムホウ",level:1,value:10,power:1.0,shoot:1.0,magic:1.025,floor_Increase:1.025,hp:0,pp:0},

    arumdasya_ade:{name:"アディ・アムダシャ",level:1,value:13,power:1.03,shoot:1.03,magic:1.0,floor_Increase:1.0275,hp:0,pp:0},
    arumdahou_ade:{name:"アディ・アムダホウ",level:1,value:13,power:1.03,shoot:1.0,magic:1.03,floor_Increase:1.0275,hp:0,pp:0},
    arumsyahou_ade:{name:"アディ・アムシャホウ",level:1,value:13,power:1.0,shoot:1.03,magic:1.03,floor_Increase:1.0275,hp:0,pp:0},

    //アディ・ガーディ
    gardda_ade:{name:"アディ・ガーディダ",level:1,value:10,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    gardsya_ade:{name:"アディ・ガーディシャ",level:1,value:10,power:1.0,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    gardhou_ade:{name:"アディ・ガーディホウ",level:1,value:10,power:1.0,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:0,pp:0},

    garddasya_ade:{name:"アディ・ガディダシャ",level:1,value:13,power:1.03,shoot:1.03,magic:1.0,floor_Increase:1.01,hp:0,pp:0},
    garddahou_ade:{name:"アディ・ガディダホウ",level:1,value:13,power:1.03,shoot:1.0,magic:1.03,floor_Increase:1.01,hp:0,pp:0},
    gardsyahou_ade:{name:"アディ・ガディシャホウ",level:1,value:13,power:1.0,shoot:1.03,magic:1.03,floor_Increase:1.01,hp:0,pp:0},

    //アディ・レジリ
    rezirida_ade:{name:"アディ・レジリダ",level:1,value:10,power:1.025,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    rezirisya_ade:{name:"アディ・レジリシャ",level:1,value:10,power:1.0,shoot:1.025,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    rezirihou_ade:{name:"アディ・レジリホウ",level:1,value:10,power:1.0,shoot:1.0,magic:1.025,floor_Increase:1.0,hp:0,pp:0},

    //アディレジダ
    rezidasya_ade:{name:"アディ・レジダシャ",level:1,value:13,power:1.03,shoot:1.03,magic:1.0,floor_Increase:1.01,hp:0,pp:0},
    rezidahou_ade:{name:"アディ・レジダホウ",level:1,value:13,power:1.03,shoot:1.0,magic:1.03,floor_Increase:1.01,hp:0,pp:0},
    rezisyahou_ade:{name:"アディ・レジシャホウ",level:1,value:13,power:1.0,shoot:1.03,magic:1.03,floor_Increase:1.01,hp:0,pp:0},

    //セズン
    SezunLunafiv:{name:"セズン・ルーナフィーヴ(イベント時)",level:1,value:10,power:1.15,shoot:1.15,magic:1.15,floor_Increase:1.0,hp:0,pp:0},
    SezunAutomfevre:{name:"セズン・オートナルフィーヴ(イベント時)",level:1,value:10,power:1.05,shoot:1.05,magic:1.05,floor_Increase:1.0,hp:0,pp:0},
    SezunWintafiv:{name:"セズン・ヴィンターフィーヴ(イベント時)",level:1,value:10,power:1.05,shoot:1.05,magic:1.05,floor_Increase:1.0,hp:0,pp:0},
    SezunSpringfiv:{name:"セズン・スプリングフィーヴ(イベント時)",level:1,value:10,power:1.05,shoot:1.05,magic:1.05,floor_Increase:1.0,hp:0,pp:0},
    SezunSecundaAnibafi:{name:"セズン・セクンダアニバフィー(イベント時)",level:1,value:10,power:1.05,shoot:1.05,magic:1.05,floor_Increase:1.0,hp:0,pp:0},

    //デフィ
    DefiHaumes_p1:{name:"デフィ・エリシスP.01(デュエルクエスト時)",level:1,value:5,power:1.07,shoot:1.07,magic:1.07,floor_Increase:1.0,hp:0,pp:0},
    DefiMakemes_p1:{name:"デフィ・セイレスP.01(デュエルクエスト時)",level:1,value:5,power:1.07,shoot:1.07,magic:1.07,floor_Increase:1.0,hp:0,pp:0},
    DefiPlutos_p1:{name:"デフィ・プルトスP.01(デュエルクエスト時)",level:1,value:5,power:1.07,shoot:1.07,magic:1.07,floor_Increase:1.0,hp:0,pp:0},
    DefiCeires_p1:{name:"デフィ・マケメスP.01(デュエルクエスト時)",level:1,value:5,power:1.07,shoot:1.07,magic:1.07,floor_Increase:1.2,hp:0,pp:0},
    DefiElysis_p1:{name:"デフィ・ハウメスP.01(デュエルクエスト時)",level:1,value:5,power:1.07,shoot:1.07,magic:1.07,floor_Increase:1.0,hp:0,pp:0},
    DefiHaumes_p2:{name:"デフィ・エリシスP.02(予想)",level:1,value:8,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    DefiMakemes_p2:{name:"デフィ・セイレスP.02(予想)",level:1,value:8,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    DefiPlutos_p2:{name:"デフィ・プルトスP.02(予想)",level:1,value:8,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    DefiCeires_p2:{name:"デフィ・マケメスP.02(予想)",level:1,value:8,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    DefiElysis_p2:{name:"デフィ・ハウメスP.02(予想)",level:1,value:8,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    //エディ・スタ複合
    stadasya_ede:{name:"エディ・スタダシャ",level:1,value:14,power:1.04,shoot:1.04,magic:1.0,floor_Increase:1.015,hp:20,pp:0},
    stadahou_ede:{name:"エディ・スタダホウ",level:1,value:14,power:1.04,shoot:1.0,magic:1.04,floor_Increase:1.015,hp:20,pp:0},
    stasyahou_ede:{name:"エディ・スタシャホウ",level:1,value:14,power:1.0,shoot:1.04,magic:1.04,floor_Increase:1.015,hp:20,pp:0},

    //エディ・スピ複合
    supidasya_ede:{name:"エディ・スピダシャ",level:1,value:14,power:1.04,shoot:1.04,magic:1.0,floor_Increase:1.015,hp:0,pp:6},
    supidahou_ede:{name:"エディ・スピダホウ",level:1,value:14,power:1.04,shoot:1.0,magic:1.04,floor_Increase:1.015,hp:0,pp:6},
    supisyahou_ede:{name:"エディ・スピシャホウ",level:1,value:14,power:1.0,shoot:1.04,magic:1.04,floor_Increase:1.015,hp:0,pp:6},

    //エディ・スタピ複合
    stapidasya_ede:{name:"エディ・スタピダシャ",level:1,value:14,power:1.04,shoot:1.04,magic:1.0,floor_Increase:1.015,hp:10,pp:3},
    stapidahou_ede:{name:"エディ・スタピダホウ",level:1,value:14,power:1.04,shoot:1.0,magic:1.04,floor_Increase:1.015,hp:10,pp:3},
    stapisyahou_ede:{name:"エディ・スタピシャホウ",level:1,value:14,power:1.0,shoot:1.04,magic:1.04,floor_Increase:1.015,hp:10,pp:3},

    //エディ・アルム
    arumdasya_ede:{name:"エディ・アムダシャ",level:1,value:15,power:1.04,shoot:1.04,magic:1.0,floor_Increase:1.03,hp:0,pp:0},
    arumdahou_ede:{name:"エディ・アムダホウ",level:1,value:15,power:1.04,shoot:1.0,magic:1.04,floor_Increase:1.03,hp:0,pp:0},
    arumsyahou_ede:{name:"エディ・アムシャホウ",level:1,value:15,power:1.0,shoot:1.04,magic:1.04,floor_Increase:1.03,hp:0,pp:0},

    //エディ・ガディ複合
    garddasya_ede:{name:"エディ・ガディダシャ",level:1,value:14,power:1.04,shoot:1.04,magic:1.0,floor_Increase:1.015,hp:0,pp:0},
    garddahou_ede:{name:"エディ・ガディダホウ",level:1,value:14,power:1.04,shoot:1.0,magic:1.04,floor_Increase:1.015,hp:0,pp:0},
    gardsyahou_ede:{name:"エディ・ガディシャホウ",level:1,value:14,power:1.0,shoot:1.04,magic:1.04,floor_Increase:1.015,hp:0,pp:0},

    //エディレジダ複合
    rezidasya_ede:{name:"エディ・レジダシャ",level:1,value:14,power:1.04,shoot:1.4,magic:1.0,floor_Increase:1.015,hp:0,pp:0},
    rezidahou_ede:{name:"エディ・レジダホウ",level:1,value:14,power:1.04,shoot:1.0,magic:1.04,floor_Increase:1.015,hp:0,pp:0},
    rezisyahou_ede:{name:"エディ・レジシャホウ",level:1,value:14,power:1.0,shoot:1.04,magic:1.04,floor_Increase:1.015,hp:0,pp:0},

    //エディパルフト
    sutamu_edeparu:{name:"エディ・スタムパルフト",level:1,value:15,power:1.04,shoot:1.04,magic:1.04,floor_Increase:1.015,hp:20,pp:0},
    supire_edeparu:{name:"エディ・スピレパルフト",level:1,value:15,power:1.04,shoot:1.04,magic:1.04,floor_Increase:1.015,hp:0,pp:6},
    sutapi_edeparu:{name:"エディ・スタピパルフト",level:1,value:15,power:1.04,shoot:1.04,magic:1.04,floor_Increase:1.015,hp:10,pp:3},
    arumu_edeparu:{name:"エディ・アルムパルフト",level:1,value:15,power:1.04,shoot:1.04,magic:1.04,floor_Increase:1.03,hp:0,pp:0},
    guard_edeparu:{name:"エディ・ガーディパルフト",level:1,value:15,power:1.04,shoot:1.04,magic:1.04,floor_Increase:1.015,hp:0,pp:0},
    reziri_edeparu:{name:"エディ・レジリパルフト",level:1,value:15,power:1.04,shoot:1.04,magic:1.04,floor_Increase:1.015,hp:0,pp:0},
    
    //ソブリナ
    Earu_Sbrina:{name:"エアル・ソブリナ(予想)",level:1,value:13,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Ritemu_Sbrina:{name:"リテム・ソブリナ(予想)",level:1,value:13,power:1.0,shoot:1.0,mフトagic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Kuvaru_Sbrina:{name:"クヴァル・ソブリナ(予想)",level:1,value:13,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},
    Stia_Sbrina:{name:"スティラ・ソブリナ(予想)",level:1,value:13,power:1.0,shoot:1.0,magic:1.0,floor_Increase:1.0,hp:0,pp:0},

    //ハイ・ドミナ
    highearu_domina:{name:"ハイエアル・ドミナ",level:1,value:14,power:1.03,shoot:1.03,magic:1.03,floor_Increase:1.02,hp:10,pp:4},

}

export default tag_op;