import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public jsonTest = [{"dataPagamento":"2020-05-20","dataScadenza":"2020-05-30","id":"_01j9wjsf9","importo":"67.01","note":"","tipo":"Luce"},{"dataPagamento":"2019-11-16","dataScadenza":"2019-11-28","id":"_021iwaiu7","importo":"51.78","note":"","tipo":"Luce"},{"dataPagamento":"2019-11-04","dataScadenza":"2019-11-06","id":"_0kj9wo6sm","importo":"179.50","note":"","tipo":"Acqua"},{"dataPagamento":"2018-11-24","dataScadenza":"2018-11-25","id":"_17pe8497d","importo":"19.95","note":"Fastweb in promozione 6° mese (FINE)","tipo":"Internet"},{"dataPagamento":"2018-10-09","dataScadenza":"2018-10-08","id":"_1bcsxk3l2","importo":"37.54","note":"","tipo":"Gas"},{"dataPagamento":"2020-06-24","dataScadenza":"2020-06-25","id":"_1stx5rvlc","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2021-05-30","dataScadenza":"2021-06-03","id":"_313i6pgnw","importo":"21.80","note":"","tipo":"Gas"},{"dataPagamento":"2019-05-24","dataScadenza":"2019-06-03","id":"_3eontcjxc","importo":"169.30","note":"c'è stata la perdita. Vediamo...","tipo":"Acqua"},{"dataPagamento":"2020-01-18","dataScadenza":"2020-01-30","id":"_3n5di5nmz","importo":"53.14","note":"Prima bolletta 2020","tipo":"Luce"},{"dataPagamento":"2020-12-05","dataScadenza":"2020-12-10","id":"_3t1kbru9e","importo":"205.10","note":"","tipo":"Acqua"},{"dataPagamento":"2020-11-25","dataScadenza":"2020-12-02","id":"_4j7vpejhp","importo":"117","note":"rata unica, posticipata causa covid-19","tipo":"Spazzatura"},{"dataPagamento":"2021-12-14","dataScadenza":"2021-12-09","id":"_58qm0a7am","importo":"19.51","note":"","tipo":"Gas"},{"dataPagamento":"2020-09-18","dataScadenza":"2020-09-29","id":"_59ejpp897","importo":"55.44","note":"","tipo":"Luce"},{"dataPagamento":"2018-07-20","dataScadenza":"2018-07-30","id":"_5fob0zcrs","importo":"27.95","note":"Consumo del periodo","tipo":"Luce"},{"dataPagamento":"2020-09-26","dataScadenza":"2020-10-05","id":"_5kmj8jfi8","importo":"19.57","note":"","tipo":"Gas"},{"dataPagamento":"2022-07-26","dataScadenza":"2022-07-29","id":"_63rs9f2jh","importo":"108.90","note":"PagoPà","tipo":"Luce"},{"dataPagamento":"2018-11-26","dataScadenza":"2018-11-27","id":"_65jy1oocd","importo":"66.42","note":"","tipo":"Luce"},{"dataPagamento":"2018-08-08","dataScadenza":"2018-08-02","id":"_6gh0oic4a","importo":"87.92","note":"","tipo":"Gas"},{"dataPagamento":"2022-05-20","dataScadenza":"2022-05-30","id":"_6kg8pnxml","importo":"116.85","note":"PagoPà","tipo":"Luce"},{"dataPagamento":"2018-10-24","dataScadenza":"2018-10-25","id":"_6xt97an9j","importo":"19.95","note":"Fastweb in promozione 5° mese","tipo":"Internet"},{"dataPagamento":"2018-08-24","dataScadenza":"2018-08-25","id":"_769fj4vjp","importo":"19.95","note":"Fastweb in promozione 3° mese","tipo":"Internet"},{"dataPagamento":"2021-05-25","dataScadenza":"2021-05-31","id":"_76ciz5j8d","importo":"71.81","note":"","tipo":"Luce"},{"dataPagamento":"2020-06-12","dataScadenza":"2020-06-22","id":"_7dg11wuye","importo":"175.00","note":"Quarantena Covid-19","tipo":"Acqua"},{"dataPagamento":"2020-01-24","dataScadenza":"2020-01-25","id":"_7ocl9d3ta","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2019-04-30","dataScadenza":"2019-03-27","id":"_93lzqru7b","importo":"14.03","note":"Utilizzato il credito della precedente bolletta (5,50€)","tipo":"Gas"},{"dataPagamento":"2018-12-24","dataScadenza":"2018-12-25","id":"_99dee5yuv","importo":"27.36","note":"","tipo":"Internet"},{"dataPagamento":"2019-03-24","dataScadenza":"2019-03-25","id":"_9rmdq1cy3","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2019-05-24","dataScadenza":"2019-05-25","id":"_aemsymm19","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2020-02-09","dataScadenza":"2020-02-13","id":"_anu31tz42","importo":"129.80","note":"","tipo":"Acqua"},{"dataPagamento":"2021-04-05","dataScadenza":"2021-04-12","id":"_bhpqsr98y","importo":"251.35","note":"Bonifico Bancario a:\nL.E.M.C.A. S.R.L.\nIT61W0200802435000002318069\n\nCodice utente 52401021000, pagamento 1a rata fattura n. 055942\n\n251,35 Euro","tipo":"Acqua"},{"dataPagamento":"2021-01-30","dataScadenza":"2021-02-08","id":"_bj1rz03jb","importo":"29.40","note":"","tipo":"Gas"},{"dataPagamento":"2019-06-24","dataScadenza":"2019-06-25","id":"_bzmrxag01","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2020-04-24","dataScadenza":"2020-04-25","id":"_c4z10l2nv","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2022-10-03","dataScadenza":"2022-10-04","id":"_cer83dt5i","importo":"18.46","note":"","tipo":"Gas"},{"dataPagamento":"2019-09-24","dataScadenza":"2019-09-25","id":"_ci4rqbs5q","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2022-06-18","dataScadenza":"2022-06-23","id":"_cy3yqzq9z","importo":"210.90","note":"Siamo tornati ai livelli di prima...","tipo":"Acqua"},{"dataPagamento":"2019-04-24","dataScadenza":"2019-04-25","id":"_df0deyci1","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2021-09-18","dataScadenza":"2021-09-29","id":"_djkzber6o","importo":"67.90","note":"Pagamento PagoPà","tipo":"Luce"},{"dataPagamento":"2019-11-28","dataScadenza":"2019-12-28","id":"_dodd3oej0","importo":"88","note":"2a rata 2019","tipo":"Spazzatura"},{"dataPagamento":"2020-07-24","dataScadenza":"2020-07-25","id":"_dvm6p9lj8","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2019-03-06","dataScadenza":"2019-01-30","id":"_ey1iqc987","importo":"56.67","note":"Bolletta cartacea MAI arrivata. Pagata al tabacchi","tipo":"Luce"},{"dataPagamento":"2018-07-24","dataScadenza":"2018-07-25","id":"_ey6syz2b6","importo":"34.57","note":"Fastweb in promozione 1° e 2° mese","tipo":"Internet"},{"dataPagamento":"2019-10-24","dataScadenza":"2019-10-25","id":"_fp7fpz62a","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2019-08-24","dataScadenza":"2019-08-25","id":"_fzm64rkzp","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2021-03-31","dataScadenza":"2021-04-07","id":"_g5w7atdev","importo":"20.32","note":"","tipo":"Gas"},{"dataPagamento":"2022-01-14","dataScadenza":"2021-12-10","id":"_ghi6pm6on","importo":"105.50","note":"Periodo: 25-05-2021 a 30-09-2021. Pagata in ritardo in quanto non è arrivata la bolletta cartacea. Ora la bolletta arriva solo sulla mia mail. Omino ha detto che avrebbe tolto la mora.","tipo":"Acqua"},{"dataPagamento":"2022-03-25","dataScadenza":"2022-04-04","id":"_h28fwc714","importo":"21.09","note":"prima bolletta dallo scoppio guerra in Ucraina","tipo":"Gas"},{"dataPagamento":"2019-03-23","dataScadenza":"2019-03-27","id":"_hgysmc7p8","importo":"66.66","note":"","tipo":"Luce"},{"dataPagamento":"2018-10-22","dataScadenza":"2018-10-23","id":"_hmvbpo8qb","importo":"205","note":"","tipo":"Acqua"},{"dataPagamento":"2020-03-23","dataScadenza":"2020-04-02","id":"_i95marbwy","importo":"20.57","note":"Quarantena Covid-19","tipo":"Gas"},{"dataPagamento":"2019-07-25","dataScadenza":"2019-07-29","id":"_icp1vfdrh","importo":"59.31","note":"","tipo":"Luce"},{"dataPagamento":"2021-04-20","dataScadenza":"2021-05-15","id":"_ifp90w67v","importo":"251.35","note":"Bonifico Bancario a:\nL.E.M.C.A. S.R.L.\nIT61W0200802435000002318069\n\nCodice utente 52401021000, pagamento 2a rata fattura n. 055942\n\n251,35 Euro","tipo":"Acqua"},{"dataPagamento":"2020-11-19","dataScadenza":"2020-11-30","id":"_ifzmew4ah","importo":"56.58","note":"","tipo":"Luce"},{"dataPagamento":"2018-09-24","dataScadenza":"2018-09-25","id":"_iga4yjsug","importo":"19.95","note":"Fastweb in promozione 4° mese","tipo":"Internet"},{"dataPagamento":"2019-12-24","dataScadenza":"2019-12-25","id":"_ilsyvdtv4","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2022-01-21","dataScadenza":"2022-01-31","id":"_iuxpoijq0","importo":"86.60","note":"PagoPà","tipo":"Luce"},{"dataPagamento":"2020-12-24","dataScadenza":"2020-12-25","id":"_iyuue2d9e","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2020-05-24","dataScadenza":"2020-05-25","id":"_j5oxtiab5","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2019-05-17","dataScadenza":"2019-05-15","id":"_j9vpl5inq","importo":"88","note":"1a rata. \n2a rata entro 2/12/2019","tipo":"Spazzatura"},{"dataPagamento":"2019-11-23","dataScadenza":"2019-12-06","id":"_jgfv0hx9g","importo":"19.55","note":"","tipo":"Gas"},{"dataPagamento":"2020-02-14","dataScadenza":"2020-02-14","id":"_jkh1nu4ul","importo":"17.80","note":"","tipo":"Gas"},{"dataPagamento":"2020-09-24","dataScadenza":"2020-09-25","id":"_k4l73v0jm","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2021-11-27","dataScadenza":"2021-12-02","id":"_kjw5piqqw","importo":"118","note":"Pagamento in unica soluzione\n(56€+3€) + (56€+3€)","tipo":"Spazzatura"},{"dataPagamento":"2019-01-24","dataScadenza":"2019-01-25","id":"_krctswmi5","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2018-07-20","dataScadenza":"2018-07-27","id":"_kyh698dtz","importo":"88.54","note":"Spese Voltura","tipo":"Luce"},{"dataPagamento":"2020-07-15","dataScadenza":"2020-07-29","id":"_lb1qgqszu","importo":"60.96","note":"","tipo":"Luce"},{"dataPagamento":"2019-11-24","dataScadenza":"2019-11-25","id":"_ljiie2jzy","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2020-08-22","dataScadenza":"2020-08-04","id":"_lv6lmk85d","importo":"19.53","note":"Scaduta per ferie","tipo":"Gas"},{"dataPagamento":"2022-03-11","dataScadenza":"2022-03-30","id":"_m5vbz6xms","importo":"65.10","note":"Drastica diminuzione del prezzo, dopo svariate lamentele a LEMCA","tipo":"Acqua"},{"dataPagamento":"2022-07-28","dataScadenza":"2022-08-04","id":"_mmx78rdmj","importo":"19.57","note":"","tipo":"Gas"},{"dataPagamento":"2019-06-04","dataScadenza":"2019-06-04","id":"_mrkgtjf3m","importo":"20.14","note":"","tipo":"Gas"},{"dataPagamento":"2022-05-28","dataScadenza":"2022-06-06","id":"_mt5vxag3t","importo":"20.90","note":"","tipo":"Gas"},{"dataPagamento":"2021-03-20","dataScadenza":"2021-03-29","id":"_n7032ka3q","importo":"67.93","note":"","tipo":"Luce"},{"dataPagamento":"2019-05-17","dataScadenza":"2019-05-28","id":"_nww953w5g","importo":"61.02","note":"","tipo":"Luce"},{"dataPagamento":"2021-09-26","dataScadenza":"2021-10-05","id":"_objnzkksm","importo":"19.22","note":"","tipo":"Gas"},{"dataPagamento":"2020-06-01","dataScadenza":"2020-06-04","id":"_oqj6kuonk","importo":"20.60","note":"","tipo":"Gas"},{"dataPagamento":"2019-09-28","dataScadenza":"2019-10-03","id":"_pyhwunisg","importo":"19.50","note":"","tipo":"Gas"},{"dataPagamento":"2022-02-04","dataScadenza":"2022-02-07","id":"_q5y9qv3pw","importo":"21.29","note":"","tipo":"Gas"},{"dataPagamento":"2019-07-24","dataScadenza":"2019-07-25","id":"_qkld0isvd","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2020-11-24","dataScadenza":"2020-11-25","id":"_rdcptf3w5","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2021-01-16","dataScadenza":"2021-01-30","id":"_sdqm59qwq","importo":"63.19","note":"","tipo":"Luce"},{"dataPagamento":"2019-01-31","dataScadenza":"2019-01-31","id":"_swhhkutlx","importo":"0.01","note":"Importo: -5,55€\nAbbiamo un credito di 5,50€","tipo":"Gas"},{"dataPagamento":"2022-09-20","dataScadenza":"2022-09-27","id":"_tsgj27y5p","importo":"95.94","note":"PagoPà","tipo":"Luce"},{"dataPagamento":"2022-03-24","dataScadenza":"2022-03-29","id":"_tuld9q2l5","importo":"134.31","note":"PagoPà","tipo":"Luce"},{"dataPagamento":"2020-12-01","dataScadenza":"2020-12-03","id":"_uqyiwc7da","importo":"10.01","note":"","tipo":"Gas"},{"dataPagamento":"2018-12-17","dataScadenza":"2018-12-06","id":"_usursgyhs","importo":"18.65","note":"","tipo":"Gas"},{"dataPagamento":"2021-11-14","dataScadenza":"2021-11-29","id":"_ut83g0jhn","importo":"79.05","note":"Pagamento PagoPà","tipo":"Luce"},{"dataPagamento":"2021-07-23","dataScadenza":"2021-08-03","id":"_uyh0pvjvo","importo":"20.53","note":"","tipo":"Gas"},{"dataPagamento":"2019-02-20","dataScadenza":"2019-02-14","id":"_v5cffa6wn","importo":"150.40","note":"","tipo":"Acqua"},{"dataPagamento":"2019-02-24","dataScadenza":"2019-02-25","id":"_vfw279p4h","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2021-01-24","dataScadenza":"2021-01-25","id":"_vlsyuawfb","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2021-08-27","dataScadenza":"2021-07-27","id":"_vtu4v6xuh","importo":"220.30","note":"Ritardo pagamento dopo svariate chiamate e richieste all'amministrazione e LEMCA","tipo":"Acqua"},{"dataPagamento":"2020-10-24","dataScadenza":"2020-10-25","id":"_w28bjf755","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2022-06-28","dataScadenza":"2022-06-30","id":"_waed5tz9t","importo":"59","note":"1 rata 2022. Seconda da pagare entro il 2/12/2022","tipo":"Spazzatura"},{"dataPagamento":"2019-09-28","dataScadenza":"2019-09-30","id":"_x20rdih0x","importo":"57.47","note":"","tipo":"Luce"},{"dataPagamento":"2020-02-24","dataScadenza":"2020-02-25","id":"_y25gwwuro","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2020-03-24","dataScadenza":"2020-03-25","id":"_yltl1n0xz","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2020-08-24","dataScadenza":"2020-08-25","id":"_ytxboiyfk","importo":"29.95","note":"","tipo":"Internet"},{"dataPagamento":"2019-08-01","dataScadenza":"2019-08-05","id":"_z44gczz8q","importo":"19.09","note":"","tipo":"Gas"},{"dataPagamento":"2020-03-23","dataScadenza":"2020-03-30","id":"_z9775q407","importo":"60.42","note":"Quarantena Covid-19","tipo":"Luce"},{"dataPagamento":"2018-09-26","dataScadenza":"2018-09-29","id":"_zi8q6h7h2","importo":"73.80","note":"","tipo":"Luce"},{"dataPagamento":"2021-02-24","dataScadenza":"2021-02-25","id":"_zyp2uqh1x","importo":"29.95","note":"","tipo":"Internet"}];

  constructor() {}

  ngOnInit(): void {
  }

}
