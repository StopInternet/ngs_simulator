const tag_op = {
    //パワー系
    power:{name:{1:"パワー"},level:{1:1,2:2,3:3,4:4},value:{1:4,2:5,3:6,4:7}},
    power_stam:{name:{1:"スタム・パワー"},level:{1:1},value:{1:8}},
    power_supire:{name:{1:"スピレ・パワー"},level:{1:1},value:{1:8}},
    power_arum:{name:{1:"アルム・パワー"},level:{1:1},value:{1:8}},
    power_guard:{name:{1:"ガーディ・パワー"},level:{1:1},value:{1:8}},
    
    //シュート系
    shoot:{name:{1:"シュート"},level:{1:1,2:2,3:3,4:4},value:{1:4,2:5,3:6,4:7}},
    shoot_stam:{name:{1:"スタム・シュート"},level:{1:1},value:{1:8}},
    shoot_supire:{name:{1:"スピレ・シュート"},level:{1:1},value:{1:8}},
    shoot_arum:{name:{1:"スピレ・シュート"},level:{1:1},value:{1:8}},
    shoot_guard:{name:{1:"ガーディ・シュート"},level:{1:1},value:{1:8}},

    //テクニック系
    magic:{name:{1:"テクニック"},level:{1:1,2:2,3:3,4:4},value:{1:4,2:5,3:6,4:7}},
    magic_stam:{name:{1:"スタム・テクニック"},level:{1:1},value:{1:8}},
    magic_supire:{name:{1:"スピレ・テクニック"},level:{1:1},value:{1:8}},
    magic_arum:{name:{1:"アルム・テクニック"},level:{1:1},value:{1:8}},
    magic_guard:{name:{1:"ガーディ・テクニック"},level:{1:1},value:{1:8}},

    //スタミナ、スピレ系
    stamina:{name:{1:"スタミナ"},level:{1:1,2:2,3:3},value:{1:3,2:4,3:5}},
    supirita:{name:{1:"スピリタ"},level:{1:1,2:2,3:3},value:{1:2,2:3,3:4}},

    //ディアブル、トリアブル系
    dasya_dia:{name:{1:"ダシャ・ディアブル"},level:{1:1,2:2,3:3,4:4},value:{1:4,2:5,3:6,4:7}},
    dahou_dia:{name:{1:"ダホウ・ディアブル"},level:{1:1,2:2,3:3,4:4},value:{1:4,2:5,3:6,4:7}},
    syahou_dia:{name:{1:"シャホウ・ディアブル"},level:{1:1,2:2,3:3,4:4},value:{1:4,2:5,3:6,4:7}},
    toria:{name:{1:"トリアブル"},level:{1:1},value:{1:8}},

    //アーム系、ガード系
    arm:{name:{1:"アーム"},level:{1:1,2:2,3:3,4:4},value:{1:3,2:4,3:5,4:6}},
    guard:{name:{1:"ガード"},level:{1:1,2:2,3:3},value:{1:2,2:3,3:4}},

    //アビリティ
    abili:{name:{1:"アビリティ"},level:{1:1,2:2,3:3,4:4},value:{1:6,2:8,3:10,4:12}},

    //レジスト系
    burn:{name:{1:"バーンレジスト"},level:{1:1,2:2,3:3},value:{1:4,2:5,3:6}},
    freez:{name:{1:"フリーズレジスト"},level:{1:1,2:2,3:3},value:{1:4,2:5,3:6}},
    syoku:{name:{1:"ショックレジスト"},level:{1:1,2:2,3:3},value:{1:4,2:5,3:6}},
    mira:{name:{1:"ミラージュレジスト"},level:{1:1,2:2,3:3},value:{1:4,2:5,3:6}},
    panic:{name:{1:"パニックレジスト"},level:{1:1,2:2,3:3},value:{1:4,2:5,3:6}},
    poisn:{name:{1:"ポイズンレジスト"},level:{1:1,2:2,3:3},value:{1:4,2:5,3:6}},
    pein:{name:{1:"ペインレジスト"},level:{1:1,2:2,3:3},value:{1:4,2:5,3:6}},
    all:{name:{1:"オールレジスト"},level:{1:1,2:2,3:3},value:{1:6,2:7,3:8}},

    //ソール系（種別）
    famz:{name:{1:"フォムズ・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:6,2:8,3:9,4:10}},
    famz_masini:{name:{1:"フォムズマシニ・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:6,2:8,3:9,4:10}},
    famz_sande:{name:{1:"フォムズサンデ・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:6,2:8,3:9,4:10}},
    aruzu_sol:{name:{1:"アルズ・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:5,2:7,3:9}},
    doruz_sol:{name:{1:"ドルズ・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:5,2:6,3:7}},

    //エネミー個別
    daidaru:{name:{1:"ダイダル・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    pedasu:{name:{1:"ペダス・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    nex:{name:{1:"ネクス・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    sunaido:{name:{1:"スナイド・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    ragras:{name:{1:"ラグラス・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    renusu:{name:{1:"レヌス・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    eradi:{name:{1:"エラーディ・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    reidaru:{name:{1:"レイダル・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    kurokos:{name:{1:"クロコス・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    amusu:{name:{1:"アムス・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    vadi:{name:{1:"ヴァーディ・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    hureido:{name:{1:"フレイド・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    dorudora:{name:{1:"ドルドラ・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    nirus:{name:{1:"ニルス・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},
    eizisu:{name:{1:"エイジス・ソール"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:8,3:10,4:11}},

    //アグライ・エウティ・タリア―ソール
    //H
    aguraiH:{name:{1:"アグライ・ソールH"},level:{1:1},value:{1:11}},
    euteliH:{name:{1:"エウティ・ソールH"},level:{1:1},value:{1:11}},
    tariaH:{name:{1:"タリアー・ソールH"},level:{1:1},value:{1:11}},
    //P
    aguraiP:{name:{1:"アグライ・ソールP"},level:{1:1},value:{1:11}},
    euteliP:{name:{1:"エウティ・ソールP"},level:{1:1},value:{1:11}},
    tariaP:{name:{1:"タリアー・ソールP"},level:{1:1},value:{1:11}},
    //X
    aguraiX:{name:{1:"アグライ・ソールX"},level:{1:1},value:{1:11}},
    euteliX:{name:{1:"エウティ・ソールX"},level:{1:1},value:{1:11}},
    tariaX:{name:{1:"タリアー・ソールX"},level:{1:1},value:{1:11}},

    //ノート系
    //エアルノート
    earu_noteA:{name:{1:"エアル・ノートA"},level:{1:1},value:{1:5}},
    earu_noteB:{name:{1:"エアル・ノートB"},level:{1:1},value:{1:4}},
    earu_noteC:{name:{1:"エアル・ノートC"},level:{1:1},value:{1:4}},
    earu_noteD:{name:{1:"エアル・ノートD"},level:{1:1},value:{1:4}},

    magunu_note:{name:{1:"マグヌ・ノート"},level:{1:1},value:{1:5}},
    raborata_note:{name:{1:"ラボラタ・ノート"},level:{1:1},value:{1:5}},
    rezora_note:{name:{1:"レゾラ・ノート"},level:{1:1},value:{1:5}},

    //リテナノート
    ritena_noteA:{name:{1:"リテナ・ノートA"},level:{1:1},value:{1:5}},
    ritena_noteB:{name:{1:"リテナ・ノートB"},level:{1:1},value:{1:4}},
    ritena_noteC:{name:{1:"リテナ・ノートC"},level:{1:1},value:{1:4}},
    ritena_noteD:{name:{1:"リテナ・ノートD"},level:{1:1},value:{1:4}},

    eruna_note:{name:{1:"エルナ・ノート"},level:{1:1},value:{1:5}},
    akua_note:{name:{1:"マクア・ノート"},level:{1:1},value:{1:5}},
    //クヴァルノート
    kuvaru_noteA:{name:{1:"クヴァル・ノートA"},level:{1:1},value:{1:5}},
    kuvaru_noteB:{name:{1:"クヴァル・ノートB"},level:{1:1},value:{1:4}},
    kuvaru_noteC:{name:{1:"クヴァル・ノートC"},level:{1:1},value:{1:4}},
    kuvaru_noteD:{name:{1:"クヴァル・ノートD"},level:{1:1},value:{1:4}},

    berugun_note:{name:{1:"	ベルガン・ノート"},level:{1:1},value:{1:5}},
    rosutora_note:{name:{1:"ロストラ・ノート"},level:{1:1},value:{1:5}},

    //スティラノート
    sutelia_noteA:{name:{1:"スティラ・ノートA"},level:{1:1},value:{1:5}},
    sutelia_noteB:{name:{1:"スティラ・ノートB"},level:{1:1},value:{1:4}},
    sutelia_noteC:{name:{1:"スティラ・ノートC"},level:{1:1},value:{1:4}},
    sutelia_noteD:{name:{1:"スティラ・ノートD"},level:{1:1},value:{1:4}},

    dekusuta_note:{name:{1:"デクスタ・ノート"},level:{1:1},value:{1:5}},

    //ドミナ系
    earu_domina:{name:{1:"エアル・ドミナ"},level:{1:1},value:{1:8}},
    ritena_domina:{name:{1:"リテナ・ドミナ"},level:{1:1},value:{1:10}},
    kuvaru_domina:{name:{1:"クヴァル・ドミナ"},level:{1:1},value:{1:10}},
    sutira_domina:{name:{1:"スティラ・ドミナ"},level:{1:1},value:{1:10}},

    //二リア系
    harufiniria:{name:{1:"ハルフィニリア"},level:{1:1},value:{1:12}},

    //デコルド
    sutanda_dekorudo:{name:{1:"デコルド・スタンダルド"},level:{1:1,2:2,3:3},value:{1:1,2:3,3:5}},
    power_dekorudo:{name:{1:"デコルド・パワー"},level:{1:1},value:{1:9}},
    shoot_dekorudo:{name:{1:"デコルド・シュート"},level:{1:1},value:{1:9}},
    magic_dekorudo:{name:{1:"デコルド・テクニック"},level:{1:1},value:{1:9}},

    //セクレテ
    aruzu_sekurete:{name:{1:"アルズ・セクレテ"},level:{1:1,2:2,3:3,4:4},value:{1:3,2:4,3:5,4:6}},

    //ギガス系
    power_gigasu:{name:{1:"ギガス・パワー"},level:{1:1,2:2,3:3,4:4},value:{1:6,2:8,3:10,4:11}},
    shoot_gigasu:{name:{1:"ギガス・シュート"},level:{1:1,2:2,3:3,4:4},value:{1:6,2:8,3:10,4:11}},
    magic_gigasu:{name:{1:"ギガス・テクニック"},level:{1:1,2:2,3:3,4:4},value:{1:6,2:8,3:10,4:11}},
    agura_gigasu:{name:{1:"ギガス・アグライ"},level:{1:1},value:{1:11}},
    euteli_gigasu:{name:{1:"ギガス・エウティ"},level:{1:1},value:{1:11}},
    taria_gigasu:{name:{1:"ギガス・タリアー"},level:{1:1},value:{1:11}},
    
    //ドレド系
    doredo_kipa:{name:{1:"ドレド・キーパ"},level:{1:1,2:2,3:3,4:4},value:{1:7,2:7.5,3:10,4:11}},

    //メガス系
    megasu_fizia:{name:{1:"メガス・フュージア"},level:{1:1},value:{1:4}},

    //ウィーカー系
    frame_ui:{name:{1:"フレイムウィーカー"},level:{1:1,2:2},value:{1:6,2:11}},
    aisu_ui:{name:{1:"アイスウィーカー"},level:{1:1,2:2},value:{1:6,2:11}},
    sunder_ui:{name:{1:"サンダーウィーカー"},level:{1:1},value:{1:6}},
    uindo_ui:{name:{1:"ウィンドウィーカー"},level:{1:1},value:{1:6}},
    light_ui:{name:{1:"ライトウィーカー"},level:{1:1},value:{1:6}},
    gurumu_ui:{name:{1:"グルームウィーカー"},level:{1:1},value:{1:6}},
    deitime_ui:{name:{1:"デイタイムウィーカー"},level:{1:1},value:{1:6}},
    nighttime_ui:{name:{1:"ナイトタイムウィーカー"},level:{1:1},value:{1:6}},

    //トリア系
    stamroda_toria:{name:{1:"トリア・スタムロダ"},level:{1:1},value:{1:6}},
    starosya_toria:{name:{1:"トリア・スタムロシャ"},level:{1:1},value:{1:6}},
    stamrohou_toria:{name:{1:"トリア・スタムロホウ"},level:{1:1},value:{1:6}},
    supireroda_toria:{name:{1:"トリア・スピレロダ"},level:{1:1},value:{1:6}},
    supirerosya_toria:{name:{1:"トリア・スピレロシャ"},level:{1:1},value:{1:6}},
    supirerohou_toria:{name:{1:"トリア・スピレロホウ"},level:{1:1},value:{1:6}},
    arumuroda_toria:{name:{1:"トリア・アルムロダ"},level:{1:1},value:{1:6}},
    arumurosya_toria:{name:{1:"トリア・アルムロシャ"},level:{1:1},value:{1:6}},
    arumurohou_toria:{name:{1:"トリア・アルムロホウ"},level:{1:1},value:{1:6}},
    gardroda_toria:{name:{1:"トリア・ガーディロダ"},level:{1:1},value:{1:6}},
    gardrosya_toria:{name:{1:"トリア・ガーディロシャ"},level:{1:1},value:{1:6}},
    gard_rohou_toria:{name:{1:"トリア・ガーディロホウ"},level:{1:1},value:{1:6}},

    //シュペル
    power_syu:{name:{1:"シュペル・パワー"},level:{1:1},value:{1:8}},
    stamda_syu:{name:{1:"シュペル・スタムダ"},level:{1:1},value:{1:8}},
    supireda_syu:{name:{1:"シュペル・スピレダ"},level:{1:1},value:{1:8}},
    shoot_syu:{name:{1:"シュペル・シュート"},level:{1:1},value:{1:8}},
    stamsya_syu:{name:{1:"シュペル・スタムシャ"},level:{1:1},value:{1:8}},
    supiresya_syu:{name:{1:"シュペル・スピレシャ"},level:{1:1},value:{1:8}},
    magic_syu:{name:{1:"シュペル・テクニック"},level:{1:1},value:{1:8}},
    stamhou_syu:{name:{1:"シュペル・スタムホウ"},level:{1:1},value:{1:8}},
    supirehou_syu:{name:{1:"シュペル・スピレホウ"},level:{1:1},value:{1:8}},

    //ペリオ
    espirio:{name:{1:"エスペリオ"},level:{1:1,2:2},value:{1:0,2:0}},
    haiperio:{name:{1:"ハイペリオ"},level:{1:1},value:{1:0}},

    //アディ・スタ
    stamda_ade:{name:{1:"アディ・スタムダ"},level:{1:1},value:{1:10}},
    stamsya_ade:{name:{1:"アディ・スタムシャ"},level:{},value:{1:10}},
    stamhou_ade:{name:{1:"アディ・スタムホウ"},level:{1:1},value:{1:10}},
    stadasya_ade:{name:{1:"アディ・スタダシャ"},level:{1:1},value:{1:13}},
    stadahou_ade:{name:{1:"アディ・スタダホウ"},level:{1:1},value:{1:13}},
    stasyahou_ade:{name:{1:"アディ・スタシャホウ"},level:{1:1},value:{1:13}},

    //アディ・スピ
    supireda_ade:{name:{1:"アディ・スピレダ"},level:{1:1},value:{1:10}},
    supisya_ade:{name:{1:"アディ・スピレシャ"},level:{1:1},value:{1:10}},
    supihou_ade:{name:{1:"アディ・スピレホウ"},level:{1:1},value:{1:10}},
    supidasya_ade:{name:{1:"アディ・スピダシャ"},level:{1:1},value:{1:13}},
    supidahou_ade:{name:{1:"アディ・スピダホウ"},level:{1:1},value:{1:13}},
    supisyahou_ade:{name:{1:"アディ・スピシャホウ"},level:{1:1},value:{1:13}},

    //アディ・スタピ
    stabida_ade:{name:{1:"アディ・スタピダ"},level:{1:1},value:{1:10}},
    stapisya_ade:{name:{1:"アディ・スタピシャ"},level:{1:1},value:{1:10}},
    stapihou_ade:{name:{1:"アディ・スタピホウ"},level:{1:1},value:{1:10}},
    stapidasya_ade:{name:{1:"アディ・スタピダシャ"},level:{1:1},value:{1:13}},
    stapidahou_ade:{name:{1:"アディ・スタピダホウ"},level:{1:1},value:{1:13}},
    stapisyahou_ade:{name:{1:"アディ・スタピシャホウ"},level:{1:1},value:{1:13}},

    //アディ・アルム
    arumda_ade:{name:{1:"アディ・アルムダ"},level:{1:1},value:{1:10}},
    arumsya_ade:{name:{1:"アディ・アルムシャ"},level:{1:1},value:{1:10}},
    arumhou_ade:{name:{1:"アディ・アルムホウ"},level:{1:1},value:{1:10}},
    arumdasya_ade:{name:{1:"アディ・アムダシャ"},level:{1:1},value:{1:13}},
    arumdahou_ade:{name:{1:"アディ・アムダホウ"},level:{1:1},value:{1:13}},
    arumsyahou_ade:{name:{1:"アディ・アムシャホウ"},level:{1:1},value:{1:13}},

    //アディ・ガーディ
    gardda_ade:{name:{1:"アディ・ガーディダ"},level:{1:1},value:{1:10}},
    gardsya_ade:{name:{1:"アディ・ガーディシャ"},level:{1:1},value:{1:10}},
    gardhou_ade:{name:{1:"アディ・ガーディホウ"},level:{1:1},value:{1:10}},
    garddasya_ade:{name:{1:"アディ・ガディダシャ"},level:{1:1},value:{1:13}},
    garddahou_ade:{name:{1:"アディ・ガディダホウ"},level:{1:1},value:{1:13}},
    gardsyahou_ade:{name:{1:"アディ・ガディシャホウ"},level:{1:1},value:{1:13}},

    //アディ・レジリ
    rezirida_ade:{name:{1:"アディ・レジリダ"},level:{1:1},value:{1:10}},
    rezirisya_ade:{name:{1:"アディ・レジリシャ"},level:{1:1},value:{1:10}},
    rezirihou_ade:{name:{1:"アディ・レジリホウ"},level:{1:1},value:{1:10}},

    //アディレジダ
    rezidasya_ade:{name:{1:"アディ・レジダシャ"},level:{1:1},value:{1:13}},
    rezidahou_ade:{name:{1:"アディ・レジダホウ"},level:{1:1},value:{1:13}},
    rezisyahou_ade:{name:{1:"アディ・レジシャホウ"},level:{1:1},value:{1:13}},

    //セズン
    runa_sezun:{name:{1:"セズン・ルーナフィーヴ"},level:{1:1},value:{1:10}},
    auto_sezun:{name:{1:"セズン・オートナルフィーヴ"},level:{1:1},value:{1:10}},
    vuinta_sezun:{name:{1:"セズン・ヴィンターフィーヴ"},level:{1:1},value:{1:10}},
    spring_sezun:{name:{1:"セズン・スプリングフィーヴ"},level:{1:1},value:{1:10}},
}

export default tag_op;