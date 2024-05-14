function getBooleanSetting(settingName){try{var name = "emulatrix" + settingName;var nameEQ = name + "=";var ca = document.cookie.split(";");for(var i=0;i < ca.length;i++){var c = ca[i];while (c.charAt(0)==" "){c = c.substring(1,c.length);}if (c.indexOf(nameEQ) == 0){if (c.substring(nameEQ.length,c.length)=="true"){return true;}else{return false;}}}}catch(err){}return true;}
function setBooleanSetting(settingName,settingValue){try{var name = "emulatrix" + settingName;var value = String(settingValue);var days = 999;var expires = "";if (days){var date = new Date();date.setTime(date.getTime() + (days*24*60*60*1000));expires = "; expires=" + date.toUTCString() + "; SameSite=Lax";}document.cookie = name + "=" + (value || "")  + expires + "; Secure; path=/";}catch(err){}}
function isMobileDevice(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}
function alertCustom(title,message,accept){try{var alertContainer = document.createElement("div");alertContainer.style.position = "fixed";alertContainer.style.top = 0;alertContainer.style.bottom = 0;alertContainer.style.left = 0;alertContainer.style.right = 0;alertContainer.style.zIndex = 9999;alertContainer.style.backgroundColor = "rgba(0,0,0,0.5)";var alertForm = document.createElement("div");alertForm.style.position = "relative";alertForm.style.top = "50%";alertForm.style.left = 0;alertForm.style.right = 0;alertForm.style.marginLeft = "auto";alertForm.style.marginRight = "auto";alertForm.style.transform = "translateY(-50%)";alertForm.style.width = "400px";alertForm.style.backgroundColor = "white";alertForm.style.textAlign = "center";alertForm.style.borderRadius = "5px";alertForm.style.overflow = "hidden";var alertTitle = document.createElement("div");alertTitle.style.textAlign = "left";alertTitle.style.paddingLeft = "10px";alertTitle.style.backgroundColor = "#b9180b";alertTitle.style.fontFamily = "Arial";alertTitle.style.fontSize = "16px";alertTitle.style.fontWeight = "bold";alertTitle.style.color = "white";alertTitle.style.lineHeight = 2.5;alertTitle.style.textShadow = "0 0 3px #000000,0 0 7px #000000";alertTitle.innerHTML = title;var alertMessage = document.createElement("div");alertMessage.style.padding = "20px";alertMessage.style.fontFamily = "Arial";alertMessage.style.fontSize = "16px";alertMessage.style.color = "black";alertMessage.style.textAlign = "center";alertMessage.style.lineHeight = 2;alertMessage.innerHTML = message;var alertButton = document.createElement("div");alertButton.style.padding = "10px";alertButton.style.backgroundColor = "#dadada";alertButton.style.border = "1px solid #b2b2b2";alertButton.style.fontFamily = "Arial";alertButton.style.fontSize = "16px";alertButton.style.color = "black";alertButton.style.textAlign = "center";alertButton.style.lineHeight = 1.5;alertButton.style.display = "inline-block";alertButton.style.marginBottom = "10px";alertButton.style.paddingLeft = "40px";alertButton.style.paddingRight = "40px";alertButton.style.cursor = "pointer";alertButton.addEventListener("click",function(event){document.body.removeChild(alertContainer);});alertButton.addEventListener("mouseover",function(event){alertButton.style.backgroundColor = "silver"});alertButton.addEventListener("mouseout",function(event){alertButton.style.backgroundColor = "#dadada"});alertButton.style.borderRadius = "5px";alertButton.style.overflow = "hidden";alertButton.innerHTML = accept;alertForm.appendChild(alertTitle);alertForm.appendChild(alertMessage);alertForm.appendChild(alertButton);alertContainer.appendChild(alertForm);document.body.appendChild(alertContainer);}catch(err){}}
function usingiOS(){return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)}
function usingSafari(){return navigator.userAgent.toLowerCase().indexOf("safari")>-1 && navigator.userAgent.toLowerCase().indexOf("chrome")==-1}

var userLanguage = window.navigator.userLanguage || window.navigator.language;

var GAME_SOUND_ENABLED = getBooleanSetting("GAME_SOUND_ENABLED");

var ROMDATA = "";
var ROMNAME = "";
var DOSGAME = false;
var MOVEMENTS_IDLE = 0;
var ACTION_BUTTONS_VISIBLE = false;
var STATE_CHECK_TIMES = 8;
var STRING_HOW_DESKTOP1 = "";
var STRING_HOW_DESKTOP2 = "";
var STRING_HOW_MOBILE = "";
var STRING_HOW_MOBILE_IOS = "";
var STRING_SAFARI = "";
var STRING_INSERTCOIN = "";
var STRING_SELECTGAME = "";
var STRING_UPLOADFILE = "";
var STRING_DOWNLOADFILE = "";
var STRING_LOADSTATE = "";
var STRING_SAVESTATE = "";
var STRING_GOBACK = "";
var STRING_FULLSCREEN = "";
var STRING_RELOAD = "";
var STRING_READINGFILE = "";
var STRING_STARTINGEMULATOR = "";
var STRING_SELECTFOLDER = "";
var STRING_KEYBOARDANDMOUSE = "";
var STRING_ERROREXTENSION_TITLE = "";
var STRING_ERROREXTENSION_MESSAGE = "";
var STRING_ERROREXTENSION_ACCEPT = "";
var STRING_SAVING = "";
var STRING_LOADING = "";
var STRING_SAVED = "";
var STRING_SAVED_ERROR = "";
var STRING_SOUND = "";
var STRING_DECREASE = "";
var STRING_INCREASE = "";
var STRING_MOBILE_CONTROLS_HIDDEN = "";
var MAME2003_ROM_LIST = "|aburner.zip|champbas.zip|jpark.zip|kinst-chd.zip|mkla1.zip|mk2.zip|samsho2.zip|samsho5.zip|umk3.zip|";
var MAME32_ROM_LIST = "|1941.zip|1941j.zip|1941r1.zip|1941u.zip|1942.zip|1942a.zip|1942abl.zip|1942b.zip|1942w.zip|1943.zip|1943b.zip|1943b2.zip|1943j.zip|1943ja.zip|1943kai.zip|1943u.zip|1944.zip|1944ad.zip|1944d.zip|1944j.zip|1945kiii.zip|19xx.zip|19xxa.zip|19xxb.zip|19xxd.zip|19xxh.zip|19xxj.zip|19xxjr1.zip|2020bb.zip|2020bba.zip|2020bbh.zip|3countb.zip|3in1semi.zip|3wonders.zip|3wondersb.zip|3wondersh.zip|3wondersr1.zip|3wondersu.zip|4dwarrio.zip|4enraya.zip|4in1.zip|4in1boot.zip|4play.zip|600.zip|7ordi.zip|7toitsu.zip|800fath.zip|88games.zip|8bpm.zip|99lstwar.zip|99lstwara.zip|99lstwark.zip|abcop.zip|abcopj.zip|abscam.zip|aburner2.zip|aceattac.zip|aceattaca.zip|acitya.zip|acrobatm.zip|actfancr.zip|actfancr1.zip|actfancrj.zip|ad2083.zip|aerofgt.zip|aerofgtb.zip|aerofgtc.zip|afighter.zip|agallet.zip|agalleth.zip|agalletj.zip|agalletk.zip|agallett.zip|agalletu.zip|agress.zip|agressb.zip|airattck.zip|airattcka.zip|airbustr.zip|airbustrb.zip|airbustrj.zip|airduel.zip|airwolf.zip|airwolfa.zip|ajax.zip|ajaxj.zip|akumajou.zip|akumajoun.zip|alcon.zip|alexkidd.zip|alexkidd1.zip|alibaba.zip|alibabab.zip|aliencha.zip|alienchac.zip|aliens.zip|aliens2.zip|aliens3.zip|aliensa.zip|aliensec.zip|aliensj.zip|aliensj2.zip|aliensu.zip|aliensyn.zip|aliensyn2.zip|aliensyn3.zip|aliensyn5.zip|aliensyn7.zip|aliensynj.zip|aliensynjo.zip|alpham2.zip|alpham2p.zip|altbeast.zip|altbeast2.zip|altbeast4.zip|altbeast5.zip|altbeast6.zip|altbeastbl.zip|altbeastj.zip|altbeastj3.zip|amatelas.zip|amazon.zip|ambush.zip|ambushh.zip|ambushj.zip|ambushv.zip|amidar.zip|amidar1.zip|amidarb.zip|amidaro.zip|amidars.zip|amidaru.zip|amigo.zip|androdun.zip|angelkds.zip|anteater.zip|anteaterg.zip|anteateruk.zip|aodk.zip|aof.zip|aof2.zip|aof2a.zip|aof3.zip|aof3k.zip|aponow.zip|aquajack.zip|aquajackj.zip|aquajacku.zip|aquarium.zip|arabian.zip|arabiana.zip|aracnis.zip|arbalest.zip|arcadia.zip|area88.zip|area88r.zip|ark1ball.zip|ark1balla.zip|arkangc.zip|arkangc2.zip|arkanoid.zip|arkanoidj.zip|arkanoidjb.zip|arkanoidjb2.zip|arkanoidjba.zip|arkanoidu.zip|arkanoiduo.zip|arkatayt.zip|arkatour.zip|arkbloc2.zip|arkblock.zip|arkgcbl.zip|arknoid2.zip|arknoid2b.zip|arknoid2j.zip|arknoid2u.zip|arktayt2.zip|armedf.zip|armedff.zip|armorcar.zip|armorcar2.zip|armwar.zip|armwar1d.zip|armwara.zip|armwarr1.zip|armwaru.zip|armwaru1.zip|ashnojoe.zip|ashura.zip|ashuraj.zip|ashurau.zip|asideral.zip|astorm.zip|astorm3.zip|astormj.zip|astormu.zip|astrians.zip|asuka.zip|asukaj.zip|asurabld.zip|asurabus.zip|atehate.zip|atetris.zip|atetrisa.zip|atetrisb.zip|atetrisb2.zip|atetrisc.zip|atetrisc2.zip|atlantis.zip|atlantis2.zip|atlantisb.zip|atomboy.zip|atomboya.zip|atomicp.zip|atompunk.zip|aurail.zip|aurail1.zip|aurailj.zip|avengers.zip|avengers2.zip|avsp.zip|avspa.zip|avspd.zip|avsph.zip|avspj.zip|avspu.zip|aztarac.zip|azurian.zip|b2buster.zip|backfire.zip|backfirea.zip|backfirt.zip|baddudes.zip|bagmanm2.zip|bagmanmc.zip|bakatono.zip|bakubrkr.zip|ballboy.zip|ballbros.zip|bangbead.zip|bangbedp.zip|bankp.zip|baraduke.zip|batcir.zip|batcira.zip|batcird.zip|batcirj.zip|batman2.zip|batrider.zip|batriderc.zip|batriderj.zip|batriderja.zip|batriderk.zip|batridert.zip|batrideru.zip|batsugun.zip|batsuguna.zip|batsugunsp.zip|battroad.zip|bayroute.zip|bayroute1.zip|bayroutej.zip|bbakraid.zip|bbakraidj.zip|bbakraidja.zip|bballs.zip|bbmanw.zip|bbmanwj.zip|bbros.zip|bchopper.zip|bcstry.zip|bcstrya.zip|beast.zip|beastf.zip|berlwall.zip|berlwallt.zip|bestbest.zip|bestri.zip|bgaregga.zip|bgareggabl.zip|bgareggacn.zip|bgareggahk.zip|bgaregganv.zip|bgareggat2.zip|bgareggatw.zip|bigbang.zip|bigbucks.zip|bigkarnk.zip|bigtwin.zip|billiard.zip|biomtoy.zip|biomtoya.zip|bionicc.zip|bionicc1.zip|bionicc2.zip|bioship.zip|birdiy.zip|bjourney.zip|bjtwin.zip|bjtwina.zip|blandia.zip|blandiap.zip|blazeon.zip|blazstar.zip|blkdrgon.zip|blkdrgonb.zip|blkheart.zip|blkheartj.zip|blkhole.zip|blktiger.zip|blktigera.zip|blktigerb1.zip|blktigerb2.zip|blmbycar.zip|blmbycaru.zip|block.zip|blockbl.zip|blockcar.zip|blockgal.zip|blockhl.zip|blockj.zip|blockjoy.zip|blockout.zip|blockout2.zip|blockoutj.zip|bloodbro.zip|bloodbroa.zip|bloodbrob.zip|bloodwar.zip|blox16b.zip|bloxeed.zip|blswhstl.zip|blueprnt.zip|blueprntj.zip|bmaster.zip|boblbobl.zip|boblbobl2.zip|bodyslam.zip|bomber.zip|bombjack.zip|bombjack2.zip|bombjackt.zip|bombkick.zip|bombkicka.zip|bombrman.zip|bongo.zip|bonkadv.zip|bonzeadv.zip|bonzeadvo.zip|bonzeadvu.zip|boobhack.zip|boogwing.zip|boogwinga.zip|bottom9.zip|bottom9n.zip|bouldash.zip|bouldashj.zip|brain.zip|breakers.zip|breakrev.zip|breywood.zip|brix.zip|bshark.zip|bsharkj.zip|bsharkjjs.zip|bsharku.zip|bssoccer.zip|bstars.zip|bstars2.zip|bstarsh.zip|btlkroad.zip|bub68705.zip|bubl2000.zip|bublbobl.zip|bublbobl1.zip|bublboblr.zip|bublboblr1.zip|bublcave.zip|bublcave10.zip|bucaner.zip|buccanrs.zip|buccanrsa.zip|bullet.zip|bullfgt.zip|buraiken.zip|burglarx.zip|burningf.zip|burningfh.zip|burningfp.zip|buzzard.zip|bwcasino.zip|bygone.zip|cactus.zip|cadash.zip|cadashf.zip|cadashg.zip|cadashi.zip|cadashj.zip|cadashu.zip|calibr50.zip|calipso.zip|cameltry.zip|cameltrya.zip|cameltryau.zip|cameltryj.zip|candance.zip|cannonbp.zip|captcomm.zip|captcommb.zip|captcommb2.zip|captcommj.zip|captcommjr1.zip|captcommr1.zip|captcommu.zip|catacomb.zip|catapult.zip|catt.zip|cavelon.zip|cavenger.zip|cawing.zip|cawingb2.zip|cawingbl.zip|cawingj.zip|cawingr1.zip|cawingu.zip|cbuster.zip|cbusterj.zip|cbusterw.zip|cclimbr2.zip|cclimbr2a.zip|chainrec.zip|chaknpop.zip|charlien.zip|chasehq.zip|chasehqj.zip|chasehqu.zip|checkman.zip|checkmanj.zip|chelnov.zip|chelnovj.zip|chelnovu.zip|chewing.zip|chikij.zip|chinatwn.zip|chokchok.zip|choko.zip|chukatai.zip|chukataij.zip|chukataiu.zip|ckongg.zip|ckongmc.zip|ckongs.zip|cltchitr.zip|cltchitrj.zip|cnbe.zip|cndi.zip|cninja.zip|cninja1.zip|cninjabl.zip|cninjau.zip|cobracom.zip|cobracomb.zip|cobracomj.zip|cobracomja.zip|columnsn.zip|combh.zip|commando.zip|commandob.zip|commandob2.zip|commandoj.zip|commandou.zip|conquer.zip|contcirc.zip|contcircj.zip|contcircu.zip|contcircua.zip|contra.zip|contra1.zip|contrab.zip|contrabj1.zip|contraj.zip|cookbib.zip|cookbib2.zip|cookbib3.zip|cosmccop.zip|cotton.zip|cottonj.zip|cottonja.zip|cottonu.zip|cps1demo.zip|cps1frog.zip|crazycop.zip|crazyfgt.zip|crimec.zip|crimecj.zip|crimecu.zip|crimfght.zip|crimfght2.zip|crimfghtj.zip|crockman.zip|croquis.zip|crospang.zip|crossbld.zip|crshrace.zip|crshrace2.zip|crsword.zip|crush.zip|crush2.zip|crush3.zip|crush4.zip|crushbl.zip|crushbl2.zip|crushbl3.zip|crusherm.zip|crushs.zip|csclub.zip|csclub1.zip|csclub1d.zip|cscluba.zip|csclubh.zip|csclubj.zip|csclubjr.zip|csilver.zip|csilverj.zip|ct2k3sa.zip|ct2k3sp.zip|cthd2003.zip|cthd2k3a.zip|ctomaday.zip|ctribe.zip|ctribe1.zip|ctribeb.zip|ctribeb2.zip|ctribej.zip|ctrpllrp.zip|cuebrick.zip|cuebrickj.zip|cworld.zip|cworld2j.zip|cyberlip.zip|cybertnk.zip|cybots.zip|cybotsj.zip|cybotsjd.zip|cybotsu.zip|cybotsud.zip|cyvern.zip|daimakai.zip|daimakaib.zip|daimakair.zip|daioh.zip|daioha.zip|daisenpu.zip|dambustr.zip|dambustra.zip|dambustruk.zip|daraku.zip|darius.zip|darius2.zip|darius2d.zip|darius2do.zip|dariuse.zip|dariusj.zip|dariuso.zip|darkadv.zip|darkplnt.zip|darkseal.zip|darkseal1.zip|darkseal2.zip|darksealj.zip|darktowr.zip|dassault.zip|dassault4.zip|dblaxle.zip|dblaxleu.zip|dbldynj.zip|dbldynu.zip|dblpoint.zip|dblpointd.zip|dbreed.zip|dbreedm72.zip|dcon.zip|ddcrew.zip|ddcrew1.zip|ddcrew2.zip|ddcrewj.zip|ddcrewj2.zip|ddcrewu.zip|ddonpach.zip|ddonpachj.zip|ddonpachjh.zip|ddp2.zip|ddp2100.zip|ddp2100c.zip|ddp2100hk.zip|ddp2100j.zip|ddp2100k.zip|ddp2100t.zip|ddp2101.zip|ddp2101c.zip|ddp2101hk.zip|ddp2101j.zip|ddp2101k.zip|ddp2101t.zip|ddp2c.zip|ddp2hk.zip|ddp2j.zip|ddp2k.zip|ddp2t.zip|ddpdoj.zip|ddpdoja.zip|ddpdojb.zip|ddpdojblk.zip|ddpdojblka.zip|ddragon.zip|ddragon2.zip|ddragon2u.zip|ddragon3.zip|ddragon3b.zip|ddragon3j.zip|ddragon3p.zip|ddragonb.zip|ddragonb2.zip|ddragonba.zip|ddragonu.zip|ddragonua.zip|ddragonub.zip|ddragonw.zip|ddragonw1.zip|ddsom.zip|ddsoma.zip|ddsomb.zip|ddsomh.zip|ddsomj.zip|ddsomjr1.zip|ddsomr1.zip|ddsomr2.zip|ddsomr3.zip|ddsomu.zip|ddsomud.zip|ddsomur1.zip|ddtod.zip|ddtoda.zip|ddtodar1.zip|ddtodd.zip|ddtodh.zip|ddtodhr1.zip|ddtodhr2.zip|ddtodj.zip|ddtodjr1.zip|ddtodjr2.zip|ddtodr1.zip|ddtodu.zip|ddtodur1.zip|ddungeon.zip|ddux.zip|ddux1.zip|dduxbl.zip|deadconx.zip|deadconxj.zip|dealer.zip|deathbrd.zip|deerhunt.zip|deerhunta.zip|deerhuntb.zip|deerhuntc.zip|deerhuntd.zip|deerhunte.zip|defense.zip|demonwld.zip|demonwld1.zip|demonwld2.zip|demonwld3.zip|deroon.zip|desertbr.zip|desertbrj.zip|detatwin.zip|devilfsg.zip|devilfsh.zip|devilw.zip|devstors.zip|devstors2.zip|devstors3.zip|dfeveron.zip|diamond.zip|dietgo.zip|dietgoe.zip|dietgoj.zip|dietgou.zip|diggerma.zip|dimahoo.zip|dimahoou.zip|dimahoud.zip|dingo.zip|dingoe.zip|dino.zip|dinoeh.zip|dinoh.zip|dinohc.zip|dinohunt.zip|dinoj.zip|dinopic.zip|dinopic2.zip|dinopic3.zip|dinorex.zip|dinorexj.zip|dinorexu.zip|dinot.zip|dinotpic.zip|dinou.zip|diverboy.zip|dkgensan.zip|dkgensanm72.zip|dkingjr.zip|dkong.zip|dkong3.zip|dkong3b.zip|dkong3j.zip|dkongf.zip|dkongj.zip|dkongjnrj.zip|dkongjo.zip|dkongjo1.zip|dkongjr.zip|dkongjrb.zip|dkongjre.zip|dkongjrj.zip|dkongjrm.zip|dkongo.zip|dkongx.zip|dkongx11.zip|dland.zip|dmnfrnt.zip|dmnfrnta.zip|dmnfrntb.zip|dmnfrntpcb.zip|dogyuun.zip|dogyuuna.zip|dogyuunt.zip|dokaben.zip|dommy.zip|dondokod.zip|dondokodj.zip|dondokodu.zip|donpachi.zip|donpachihk.zip|donpachij.zip|donpachikr.zip|dorodon.zip|dorodon2.zip|dotrikun.zip|dotrikun2.zip|doubledr.zip|downtown.zip|downtown2.zip|downtownj.zip|downtownp.zip|dquizgo.zip|dragnblz.zip|drakton.zip|dremshpr.zip|drgnbowl.zip|drgnbstr.zip|drgninja.zip|drgninjab.zip|drgninjab2.zip|drgnmst.zip|drgnunit.zip|drgw2.zip|drgw2c.zip|drgw2j.zip|drgw3.zip|drgw3100.zip|drgw3105.zip|driftout.zip|driftoutj.zip|driveout.zip|drivfrcb.zip|drivfrcg.zip|drivfrcp.zip|drivfrct.zip|drktnjr.zip|drtomy.zip|drtoppel.zip|drtoppelj.zip|drtoppelu.zip|dsoccr94.zip|dsoccr94j.zip|dstlk.zip|dstlka.zip|dstlkh.zip|dstlku.zip|dstlku1d.zip|dstlkur1.zip|ducki.zip|dumpmtmt.zip|dunkshot.zip|dw2001.zip|dw2v100x.zip|dwex.zip|dwi.zip|dwia.zip|dwpc.zip|dynablst.zip|dynduke.zip|dyndukea.zip|dyndukej.zip|dyndukeu.zip|dynwar.zip|dynwara.zip|dynwarj.zip|dynwarjr.zip|eagle.zip|eagle2.zip|eagle3.zip|earthjkr.zip|ecofghtr.zip|ecofghtra.zip|ecofghtrd.zip|ecofghtrh.zip|ecofghtru.zip|ecofghtru1.zip|edrandy.zip|edrandy1.zip|edrandy2.zip|edrandyj.zip|egghunt.zip|eggor.zip|eggs.zip|eightfrc.zip|eightman.zip|endurobl.zip|enduror.zip|enduror1.zip|enforce.zip|enforcej.zip|enforceja.zip|esckids.zip|esckidsj.zip|espgal.zip|esprade.zip|espradej.zip|espradejo.zip|eswat.zip|eswatbl.zip|eswatj.zip|eswatu.zip|eto.zip|euroch92.zip|excelsr.zip|excelsra.zip|exctleag.zip|exedexes.zip|exerizerb.zip|exodus.zip|explbrkr.zip|explorer.zip|extdwnhl.zip|extrmatn.zip|extrmatnj.zip|extrmatnu.zip|eyes.zip|eyes2.zip|eyesb.zip|eyeszacb.zip|f1dream.zip|f1dreamb.zip|f1gp.zip|f1gp2.zip|f1gpb.zip|fantasia.zip|fantasiaa.zip|fantastc.zip|fantazia.zip|fantsia2.zip|fantsia2a.zip|fantsy95.zip|fantzn2x.zip|fantzn2xp.zip|fantzn2xps2.zip|fantznta.zip|fantzone.zip|fantzone1.zip|fantzonep.zip|farmer.zip|fatfursp.zip|fatfurspa.zip|fatfury1.zip|fatfury2.zip|fatfury3.zip|fbfrenzy.zip|fcrash.zip|feversos.zip|ffantasy.zip|ffantasya.zip|ffight.zip|ffighta.zip|ffightbl.zip|ffightj.zip|ffightj1.zip|ffightj2.zip|ffightjh.zip|ffightu.zip|ffightu1.zip|ffightua.zip|ffightub.zip|fghtbskt.zip|fightfev.zip|fightfeva.zip|finalb.zip|finalbj.zip|finalbu.zip|finalttr.zip|firehawk.zip|fireshrk.zip|fireshrkd.zip|fireshrkdh.zip|fixeight.zip|fixeighta.zip|fixeightat.zip|fixeighth.zip|fixeightht.zip|fixeightj.zip|fixeightjt.zip|fixeightk.zip|fixeightkt.zip|fixeightt.zip|fixeighttw.zip|fixeighttwt.zip|fixeightu.zip|fixeightut.zip|flashgal.zip|flashgala.zip|flicky.zip|flickyg.zip|flickyo.zip|flickys1.zip|flickys2.zip|flickys2g.zip|flipshot.zip|flstory.zip|flstoryj.zip|fncywld.zip|fnkyfish.zip|footchmp.zip|forgottn.zip|forgottnu.zip|forgottnu1.zip|forgottnua.zip|forgottnuaa.zip|fpoint.zip|fpoint1.zip|fpointbj.zip|fpointbl.zip|fr2ch.zip|freeze.zip|frogf.zip|frogg.zip|frogger.zip|froggermc.zip|froggers.zip|froggers1.zip|froggers2.zip|froggrs.zip|fround.zip|froundl.zip|fstarfrc.zip|fstarfrcj.zip|fswords.zip|fullthrl.zip|funcube2.zip|funcube4.zip|funkybee.zip|funkybeeb.zip|funkyjet.zip|funkyjetj.zip|funybubl.zip|funybublc.zip|fx.zip|fxa.zip|gaia.zip|gaiden.zip|galaga.zip|galagamf.zip|galagamk.zip|galagamw.zip|galagao.zip|galap1.zip|galap4.zip|galapx.zip|galaxbsf.zip|galaxian.zip|galaxiana.zip|galaxianbl.zip|galaxianm.zip|galaxianmo.zip|galaxiant.zip|galaxrf.zip|galaxyfg.zip|galemp.zip|galhustl.zip|gallag.zip|gallop.zip|galmedes.zip|galpanic.zip|galspnbl.zip|galturbo.zip|ganbare.zip|gangonta.zip|ganryu.zip|gardia.zip|gardiab.zip|garogun.zip|garou.zip|garoubl.zip|garouh.zip|garoup.zip|garuka.zip|garyoret.zip|gatedoom.zip|gatedoom1.zip|gaunt2.zip|gaunt22p.zip|gaunt22p1.zip|gaunt22pg.zip|gaunt2g.zip|gauntlet.zip|gauntlet2p.zip|gauntlet2pg.zip|gauntlet2pg1.zip|gauntlet2pj.zip|gauntlet2pj2.zip|gauntlet2pr3.zip|gauntletg.zip|gauntletgr3.zip|gauntletgr6.zip|gauntletgr8.zip|gauntletj.zip|gauntletj12.zip|gauntletr1.zip|gauntletr2.zip|gauntletr4.zip|gauntletr5.zip|gauntletr7.zip|gauntletr9.zip|gauntlets.zip|gberet.zip|gberetb.zip|gbusters.zip|gbustersa.zip|gemini.zip|genix.zip|gensitou.zip|geostorm.zip|getstar.zip|getstarj.zip|gforce2.zip|gforce2j.zip|gforce2ja.zip|ghostb.zip|ghostb3.zip|ghostbi.zip|ghostlop.zip|ghostmun.zip|ghouls.zip|ghoulsu.zip|ghox.zip|ghoxj.zip|gigaman2.zip|gigandes.zip|gigandesa.zip|gigawing.zip|gigawinga.zip|gigawingb.zip|gigawingd.zip|gigawingh.zip|gigawingj.zip|gigawingjd.zip|ginganin.zip|ginganina.zip|ginkun.zip|gloc.zip|glocr360.zip|gmahou.zip|gmgalax.zip|gnbarich.zip|gng.zip|gnga.zip|gngbl.zip|gngbla.zip|gngblita.zip|gngc.zip|gngprot.zip|gngt.zip|goalx3.zip|goldnaxe.zip|goldnaxe1.zip|goldnaxe2.zip|goldnaxe3.zip|goldnaxej.zip|goldnaxeu.zip|gondo.zip|gorkans.zip|gotcha.zip|gowcaizr.zip|gpilots.zip|gpilotsh.zip|gprider.zip|gpriderj.zip|gprideru.zip|gradius2.zip|gradius2a.zip|gradius2b.zip|gradius3.zip|gradius3a.zip|gradius3j.zip|grdians.zip|grdnstrm.zip|grdnstrmg.zip|grdnstrmk.zip|grdnstrmv.zip|grindstm.zip|grindstma.zip|growl.zip|growlu.zip|gryzor.zip|gryzor1.zip|gteikob2.zip|gteikokb.zip|gteikoku.zip|gtmr.zip|gtmr2.zip|gtmr2a.zip|gtmr2u.zip|gtmra.zip|gtmre.zip|gtmrusa.zip|gtstarb1.zip|gtstarb2.zip|gumbo.zip|gunball.zip|gunbird.zip|gunbird2.zip|gunbirdj.zip|gunbirdk.zip|gundamex.zip|gundhara.zip|gunforc2.zip|gunforce.zip|gunforcej.zip|gunforceu.zip|gunfront.zip|gunfrontj.zip|gunhohki.zip|gunnail.zip|gunsmoke.zip|gunsmokej.zip|gunsmokeu.zip|gunsmokeua.zip|gururin.zip|gussun.zip|guwange.zip|guwanges.zip|gyrodine.zip|gyrodinet.zip|gyruss.zip|gyrussb.zip|gyrussce.zip|hachamf.zip|hangly.zip|hangly2.zip|hangly3.zip|hangon.zip|hangon1.zip|hangon2.zip|happy6.zip|hasamu.zip|hatena.zip|hbarrel.zip|hbarrelw.zip|hcastle.zip|hcastlee.zip|hcastlek.zip|hedpanic.zip|hedpanicf.zip|hellfire.zip|hellfire1.zip|hellfire2.zip|hellfire3.zip|herbiedk.zip|herodk.zip|herodku.zip|heuksun.zip|hexa.zip|hexion.zip|hexpool.zip|hexpoola.zip|hgkairak.zip|hharry.zip|hharryu.zip|higemaru.zip|hippodrm.zip|hitice.zip|hiticej.zip|hncholms.zip|honeydol.zip|hook.zip|hookj.zip|hooku.zip|horekid.zip|horekidb.zip|horizon.zip|hotbubl.zip|hotdebut.zip|hotdogst.zip|hotgm4ev.zip|hotgmck.zip|hotgmck3.zip|hotgmcki.zip|hotmind.zip|hotpinbl.zip|hotshock.zip|hotshockb.zip|hpuncher.zip|hsf2.zip|hsf2a.zip|hsf2d.zip|hsf2da.zip|hsf2j.zip|htchctch.zip|hthero.zip|hunchbkd.zip|hunchbkg.zip|hunchbks.zip|hustler.zip|hustlerb.zip|hvymetal.zip|hwchamp.zip|hwchampj.zip|hyperpac.zip|hyperpacb.zip|hypsptsp.zip|igmo.zip|ikari3.zip|ikari3j.zip|ikari3k.zip|ikari3u.zip|ikki.zip|imgfight.zip|imgfightj.zip|imsorry.zip|imsorryj.zip|insectx.zip|inthunt.zip|inthuntu.zip|inttoote.zip|inttootea.zip|ironclad.zip|ironclado.zip|irrmaze.zip|isgsm.zip|jack.zip|jack2.zip|jack3.zip|janshin.zip|jchan.zip|jchan2.zip|jigkmgri.zip|jjsquawk.zip|jjsquawkb.zip|jjsquawkb2.zip|jockeyc.zip|jockeygp.zip|jockeygpa.zip|joemac.zip|joemacr.zip|joemacra.zip|joinem.zip|jojo.zip|jojoba.zip|jojoban.zip|jojobane.zip|jojobaner1.zip|jojobanr1.zip|jojobar1.zip|jojoj.zip|jojojr1.zip|jojojr2.zip|jojon.zip|jojonr1.zip|jojonr2.zip|jojor1.zip|jojor2.zip|joyjoy.zip|joyman.zip|jpopnics.zip|jrking.zip|juju.zip|jujub.zip|jujuba.zip|jumpbug.zip|jumpbugb.zip|jumping.zip|jumpkids.zip|jumppop.zip|jumppope.zip|jumpshot.zip|jumpshotp.zip|jungler.zip|jyangoku.zip|kabukikl.zip|kabukiz.zip|kabukizj.zip|kageki.zip|kagekih.zip|kagekij.zip|kaiteids.zip|kamakazi3.zip|kamenrid.zip|kangaroo.zip|kangarooa.zip|kangaroob.zip|karatblz.zip|karatblzj.zip|karatblzu.zip|karianx.zip|karnov.zip|karnova.zip|karnovj.zip|karnovr.zip|kbash.zip|kbash2.zip|kengo.zip|keroppi.zip|ket.zip|keta.zip|ketarr.zip|ketarr15.zip|ketarr151.zip|ketb.zip|ketstoicu.zip|kf10thep.zip|kf2k1pa.zip|kf2k1pls.zip|kf2k2mp.zip|kf2k2mp2.zip|kf2k2pla.zip|kf2k2plb.zip|kf2k2plc.zip|kf2k2pls.zip|kf2k2ps2.zip|kf2k3bl.zip|kf2k3bla.zip|kf2k3pcb.zip|kf2k3pl.zip|kf2k3upl.zip|kf2k4pls.zip|kf2k5uni.zip|kidniki.zip|kidnikiu.zip|kikcubic.zip|kikcubicb.zip|killbld.zip|killbld104.zip|killbldp.zip|kingball.zip|kingballj.zip|kingdmgp.zip|kiwame.zip|kizuna.zip|knights.zip|knightsb.zip|knightsb2.zip|knightsb3.zip|knightsb4.zip|knightsh.zip|knightsh2.zip|knightsj.zip|knightsja.zip|knightsu.zip|knockout.zip|kod.zip|kodb.zip|kodda.zip|kodh.zip|kodj.zip|kodja.zip|kodr1.zip|kodu.zip|kof10th.zip|kof2000.zip|kof2000n.zip|kof2001.zip|kof2001h.zip|kof2002.zip|kof2002b.zip|kof2003.zip|kof2003h.zip|kof2k4se.zip|kof94.zip|kof95.zip|kof95h.zip|kof96.zip|kof96ae.zip|kof96cn.zip|kof96ep.zip|kof96h.zip|kof97.zip|kof97cn.zip|kof97h.zip|kof97k.zip|kof97oro.zip|kof97pla.zip|kof97pls.zip|kof97xt.zip|kof98.zip|kof98ae.zip|kof98h.zip|kof98k.zip|kof98ka.zip|kof99.zip|kof99e.zip|kof99h.zip|kof99k.zip|kof99p.zip|kog.zip|kogplus.zip|konami88.zip|kong.zip|kontest.zip|korokoro.zip|korosuke.zip|koshien.zip|kotm.zip|kotm2.zip|kotm2p.zip|kotmh.zip|kov.zip|kov100.zip|kov115.zip|kov2.zip|kov2100.zip|kov2101.zip|kov2102.zip|kov2103.zip|kov2106.zip|kov2p.zip|kov2p202.zip|kov2p204.zip|kovassg.zip|kovlsjb.zip|kovlsjba.zip|kovlsqh.zip|kovlsqh2.zip|kovlsqhd.zip|kovplus.zip|kovplusa.zip|kovqhsgs.zip|kovqhsgsa.zip|kovsgqyz.zip|kovsgqyza.zip|kovsgqyzb.zip|kovsgqyzc.zip|kovsh.zip|kovsh101.zip|kovsh102.zip|kovsh103.zip|kovshb.zip|kovshp.zip|kovshpa.zip|kovshxas.zip|kovytzy.zip|kozure.zip|krzybowl.zip|kuhga.zip|kungfub.zip|kungfub2.zip|kungfub3.zip|kungfum.zip|kungfumd.zip|kuniokun.zip|kuniokunb.zip|kyustrkr.zip|ladybgb2.zip|ladybug.zip|ladybugb.zip|ladybugg.zip|lans2004.zip|lastblad.zip|lastbladh.zip|lastbld2.zip|lastduel.zip|lastduelb.zip|lastduelj.zip|lastduelo.zip|lastmisn.zip|lastmisnj.zip|lastmisno.zip|lastsold.zip|lastsurv.zip|lbowling.zip|ldrun.zip|ldrun2.zip|ldrun3.zip|ldrun3j.zip|ldrun4.zip|ldruna.zip|leaguemn.zip|ledstorm.zip|ledstorm2.zip|legend.zip|legendos.zip|legion.zip|legiono.zip|lemmings.zip|lethalth.zip|levers.zip|lghost.zip|lghostu.zip|lgtnfght.zip|lgtnfghta.zip|lgtnfghtu.zip|lhcdb.zip|liquidk.zip|liquidku.zip|lithero.zip|livequiz.zip|lizwiz.zip|lkage.zip|lkageb.zip|lkageb2.zip|lkageb3.zip|lkageo.zip|lkageoo.zip|loderndf.zip|loderndfa.zip|loffire.zip|loffirej.zip|loffireu.zip|logicpr2.zip|logicpro.zip|loht.zip|lohtb.zip|lohtb2.zip|lohtj.zip|lordgun.zip|losttomb.zip|losttombh.zip|lostwrld.zip|lostwrldo.zip|lotlot.zip|loverboy.zip|lresort.zip|ltorb1.zip|luctoday.zip|lvgirl94.zip|lwings.zip|lwings2.zip|lwingsb.zip|lwingsj.zip|macross.zip|macross2.zip|madgear.zip|madgearj.zip|madshark.zip|magdrop.zip|magdrop2.zip|magdrop3.zip|magdropp.zip|magicbub.zip|magicbuba.zip|maglord.zip|maglordh.zip|mahoudai.zip|mahretsu.zip|mainevt.zip|mainevt2p.zip|mainevto.zip|majest12.zip|majtitl2.zip|majtitl2j.zip|majtitle.zip|majtitlej.zip|majuu.zip|makaimur.zip|makaimurc.zip|makaimurg.zip|maketrax.zip|maketrxb.zip|makyosen.zip|mangchi.zip|maniacsp.zip|manybloc.zip|marineb.zip|mariner.zip|markham.zip|mars.zip|martmast.zip|martmastc.zip|martmastc102.zip|marukin.zip|marukodq.zip|masterw.zip|masterwj.zip|masterwu.zip|matchit2.zip|matrim.zip|matrimbl.zip|mazinger.zip|mazingerj.zip|mbombdje.zip|mbomberj.zip|mbombrd.zip|mbombrda.zip|mbombrdh.zip|mbombrdj.zip|mbombrdu.zip|mbrush.zip|mcatadv.zip|mcatadvj.zip|mchampdx.zip|mchampdxa.zip|md_12in1.zip|md_13mahjan.zip|md_16ton.zip|md_16tongnk.zip|md_16zhan.zip|md_2020bb.zip|md_2020bbj.zip|md_2psymmac.zip|md_3in1fwt.zip|md_3in1rmb.zip|md_3ninja.zip|md_4in1pb.zip|md_688atsub.zip|md_6pak.zip|md_aaahhrm.zip|md_aaahhrmu.zip|md_aaharima.zip|md_aburner2.zip|md_aburner2j.zip|md_action52.zip|md_action52a.zip|md_addfam.zip|md_addfamp1.zip|md_addfamp2.zip|md_addfamv.zip|md_advbatr.zip|md_advbatrp01.zip|md_advbatrp02.zip|md_advbatrp03.zip|md_advbatrp04.zip|md_advbatrp05.zip|md_advbatrp06.zip|md_advbatrp07.zip|md_advbatrp08.zip|md_advbatrp09.zip|md_advbatrp10.zip|md_advbatrp11.zip|md_advbatrp12.zip|md_advbatru.zip|md_advdaisn.zip|md_adveboy.zip|md_aero.zip|md_aero2.zip|md_aero2u.zip|md_aerobiz.zip|md_aerobizs.zip|md_aeroblst.zip|md_aerop.zip|md_aerou.zip|md_agassi.zip|md_agassiu.zip|md_agassiup.zip|md_airbustr.zip|md_airdiver.zip|md_airdiverj.zip|md_airmanag.zip|md_airmang2.zip|md_akumajo.zip|md_aladdin.zip|md_aladdin2.zip|md_aladdinj.zip|md_aladdinu.zip|md_aladdinup.zip|md_alexkidd.zip|md_alexkidd1.zip|md_alexkiddj.zip|md_alexkiddk.zip|md_alexkiddu.zip|md_alien3.zip|md_alien3a.zip|md_aliensol.zip|md_aliensolj.zip|md_alisiad.zip|md_alisiadj.zip|md_alisiadu.zip|md_altbeast.zip|md_amaznten.zip|md_amerglad.zip|md_andretti.zip|md_animania.zip|md_animaniau.zip|md_anotherw.zip|md_aof.zip|md_aofp.zip|md_aofu.zip|md_aqrenk.zip|md_aquagame.zip|md_ar.zip|md_arcadecl.zip|md_arcadegh.zip|md_arcadeghu.zip|md_archrivl.zip|md_arcus.zip|md_arcusj.zip|md_aresshmd.zip|md_ariel.zip|md_arnoldp.zip|md_arrow.zip|md_arrow1.zip|md_artalive.zip|md_arttool.zip|md_asscreed.zip|md_astergre.zip|md_astergreu.zip|md_asterpg.zip|md_asterpgp.zip|md_astorm.zip|md_atomrobo.zip|md_atomroboj.zip|md_atomrun.zip|md_atomrunu.zip|md_atptour.zip|md_atptourp1.zip|md_atptourp2.zip|md_atptourp3.zip|md_atptourp4.zip|md_atptourp5.zip|md_atptourp6.zip|md_atptourp7.zip|md_atptouru.zip|md_austrarl.zip|md_avatar.zip|md_awepossm.zip|md_awepossmp.zip|md_aworg.zip|md_awspro.zip|md_babyboom.zip|md_babyboom1.zip|md_babyboom2.zip|md_babyd.zip|md_babydo.zip|md_backtof3.zip|md_backtof3u.zip|md_badomen.zip|md_bahamuts.zip|md_balljack.zip|md_ballz3d.zip|md_barbiesm.zip|md_barbvac.zip|md_barkley.zip|md_barkley2.zip|md_barkley2p.zip|md_barney.zip|md_bartnigh.zip|md_bartvssm.zip|md_bartvssm1.zip|md_barver.zip|md_bassmc.zip|md_bassmpro.zip|md_batman.zip|md_batmanf.zip|md_batmanj.zip|md_batmanrj.zip|md_batmanrn.zip|md_batmanu.zip|md_battlems.zip|md_battlesq.zip|md_battlyui.zip|md_beast.zip|md_beast2.zip|md_beastbal.zip|md_beastj.zip|md_beastw.zip|md_beastwj.zip|md_beauty.zip|md_beautyrb.zip|md_beavis.zip|md_beavisu.zip|md_beavisup.zip|md_ben10.zip|md_berens.zip|md_berensp01.zip|md_berensp02.zip|md_berensp03.zip|md_berensp04.zip|md_berensp05.zip|md_berensp06.zip|md_berensp07.zip|md_berensp08.zip|md_berensp09.zip|md_berensp10.zip|md_berensp11.zip|md_berensp12.zip|md_berensp13.zip|md_berensp14.zip|md_berensp15.zip|md_berensp16.zip|md_berensp17.zip|md_berensp18.zip|md_berensp19.zip|md_berensp20.zip|md_bestof.zip|md_bestofp.zip|md_beyoasis.zip|md_beyoasisp.zip|md_beyondzt.zip|md_bibleadv.zip|md_bighurt.zip|md_billwl95.zip|md_billwlsh.zip|md_bimini.zip|md_biohazrb.zip|md_biohazrbp.zip|md_bk2p.zip|md_bk3.zip|md_bk3p.zip|md_bladeven.zip|md_blockb.zip|md_blockout.zip|md_bloodsht.zip|md_bluealma.zip|md_bmaster2.zip|md_bmaster2p.zip|md_bnzabros.zip|md_bnzabros1.zip|md_bnzabrosu.zip|md_bob.zip|md_bobp.zip|md_bodyco.zip|md_bodycob.zip|md_bodycop.zip|md_bodycop2.zip|md_bodycop3.zip|md_bodycop4.zip|md_bodycop5.zip|md_bomber.zip|md_bomboy.zip|md_bonkers.zip|md_bonkersp1.zip|md_bonkersp2.zip|md_bonkersp3.zip|md_bonkersp4.zip|md_bonkersp5.zip|md_booger.zip|md_boogeru.zip|md_boogie.zip|md_boxinglg.zip|md_bretth.zip|md_brianl96.zip|md_brianl96a.zip|md_brianlar.zip|md_brianlar1.zip|md_brutal.zip|md_brutalu.zip|md_bsteam3.zip|md_btech.zip|md_btlmania.zip|md_btlmanid.zip|md_btoads.zip|md_btoadsdd.zip|md_bubba.zip|md_bubbap.zip|md_bubbau.zip|md_bubblesq.zip|md_bubblesqu.zip|md_bubsy.zip|md_bubsy2.zip|md_buckrog.zip|md_budokan.zip|md_budokanu.zip|md_bugsbun.zip|md_bugsbunu.zip|md_bugslife.zip|md_bugslifea.zip|md_bullvsbl.zip|md_bullvsblj.zip|md_bullvsblj1.zip|md_bullvsla.zip|md_bullvslaj.zip|md_burnforc.zip|md_burnforcj.zip|md_burnforcu.zip|md_cadash.zip|md_caesar.zip|md_caesar2.zip|md_caesars.zip|md_cal50.zip|md_calgames.zip|md_calripkn.zip|md_captaven.zip|md_captavenu.zip|md_captavenup.zip|md_captlang.zip|md_captplan.zip|md_captplanu.zip|md_carmntim.zip|md_carmntimb.zip|md_carmnwld.zip|md_carmnwldb.zip|md_cars.zip|md_cars2.zip|md_castlill.zip|md_castlillj.zip|md_centur.zip|md_cfodder.zip|md_chakan.zip|md_champbwl.zip|md_champool.zip|md_champwcs.zip|md_chaosen2.zip|md_chaoseng.zip|md_chasehq2.zip|md_chavez2.zip|md_cheese.zip|md_chelnov.zip|md_chess.zip|md_chessa.zip|md_chessb.zip|md_chester.zip|md_chesterw.zip|md_chibim.zip|md_chichi.zip|md_chiki.zip|md_chikij.zip|md_chinesec.zip|md_chinf3.zip|md_chinf3a.zip|md_chuckrck.zip|md_chuckrcku.zip|md_chukrck2.zip|md_chukrck2j.zip|md_chukrck2u.zip|md_chukrck2up.zip|md_cjfuweng.zip|md_classicc.zip|md_clayfght.zip|md_clayfghtu.zip|md_cliffh.zip|md_cliffhp.zip|md_cliffhu.zip|md_clue.zip|md_coachk.zip|md_colleg96.zip|md_colleg97.zip|md_collnc.zip|md_collnc2.zip|md_collncp01.zip|md_collncp02.zip|md_collncp03.zip|md_collncp04.zip|md_collncp05.zip|md_collncp06.zip|md_collncp07.zip|md_collncp08.zip|md_collncp09.zip|md_collncp10.zip|md_collncp11.zip|md_collncp12.zip|md_collncp13.zip|md_collncp14.zip|md_collncp15.zip|md_collncp16.zip|md_collncp17.zip|md_collncp18.zip|md_collncp19.zip|md_collslam.zip|md_columns.zip|md_columns1.zip|md_columns3.zip|md_columns3j.zip|md_combat.zip|md_combatca.zip|md_comix.zip|md_comixj.zip|md_comixkp.zip|md_comixp.zip|md_comixsc.zip|md_comixu.zip|md_comixup.zip|md_comixup01.zip|md_comixup02.zip|md_comixup03.zip|md_comixup04.zip|md_comixup05.zip|md_comixup06.zip|md_comixup07.zip|md_comixup08.zip|md_comixup09.zip|md_comixup10.zip|md_commands.zip|md_commconq.zip|md_congo.zip|md_contra.zip|md_contraj.zip|md_coolspot.zip|md_coolspotj.zip|md_coolspotu.zip|md_coolspotup.zip|md_corporat.zip|md_cosmic.zip|md_cproam.zip|md_crash.zip|md_crashdum.zip|md_crashdump.zip|md_crayon.zip|md_crkdown.zip|md_crkdown1.zip|md_crkdownu.zip|md_crudeb.zip|md_crueball.zip|md_crueballj.zip|md_crusader.zip|md_crying.zip|md_crystlpt.zip|md_crystlptp01 .zip|md_crystlptp02 .zip|md_crystlptp03 .zip|md_crystlptp04 .zip|md_crystlptp05 .zip|md_crystlptp06 .zip|md_crystlptp07 .zip|md_crystlptp08 .zip|md_crystlptp09 .zip|md_crystlptp10 .zip|md_crystlptp11 .zip|md_crystlptp12 .zip|md_crystlptp13 .zip|md_crystlptp14 .zip|md_crystlptp15 .zip|md_cstrike.zip|md_curse.zip|md_cutiesuz.zip|md_cutthr.zip|md_cutthrp.zip|md_cvania.zip|md_cvaniap.zip|md_cvaniau.zip|md_cyberbal.zip|md_cybercop.zip|md_cyborgj.zip|md_cyborgjp.zip|md_daffy.zip|md_daffyp.zip|md_dahnam.zip|md_dahnamk.zip|md_daikok2.zip|md_daikokai.zip|md_daimakai.zip|md_dangseed.zip|md_darius2.zip|md_darkcast.zip|md_darwin.zip|md_dashdes.zip|md_dashdesp1.zip|md_dashdesp2.zip|md_daviscp2.zip|md_daviscp2a.zip|md_daviscup.zip|md_daviscupa.zip|md_dazexmas.zip|md_dazexmasp.zip|md_dbz.zip|md_dbzf.zip|md_ddanpei.zip|md_ddragon.zip|md_ddragon2.zip|md_ddragon3.zip|md_ddragon5.zip|md_ddribble.zip|md_ddwares.zip|md_deadlymv.zip|md_deathcal.zip|md_deathdl.zip|md_deathret.zip|md_decapatt.zip|md_deerhunt.zip|md_demoman.zip|md_demomanp.zip|md_desrtdem.zip|md_desrtdemp1.zip|md_desrtdemp2.zip|md_desrtdemp3.zip|md_desrtdemp4.zip|md_desrtdemp5.zip|md_desrtdemp6.zip|md_desrtdemp7.zip|md_desrtdemp8.zip|md_desrtdemp9.zip|md_devilish.zip|md_devlcrsh.zip|md_dfury.zip|md_dhead.zip|md_dheadj.zip|md_dheadjp.zip|md_dheadp1.zip|md_dheadp2.zip|md_dheadp3.zip|md_diablo.zip|md_dialqo.zip|md_dicktr.zip|md_dickvitl.zip|md_dinho98.zip|md_dinodini.zip|md_dinohire.zip|md_dinohirep1.zip|md_dinohirep2.zip|md_dinohirep3.zip|md_dinoland.zip|md_dinolandj.zip|md_dinotale.zip|md_disneycl.zip|md_ditkapf.zip|md_ditkapf1.zip|md_divine.zip|md_djboy.zip|md_djboyj.zip|md_djboyu.zip|md_dlair.zip|md_dokidoki.zip|md_dokidokignk .zip|md_domino.zip|md_dominus.zip|md_dongguri.zip|md_doomtrop.zip|md_doraemon.zip|md_doublecl.zip|md_dracula.zip|md_draculau.zip|md_dragnrev.zip|md_dragnrevj.zip|md_dragon.zip|md_dragonu.zip|md_draxos.zip|md_dreamteam.zip|md_drrobotn.zip|md_drrobotnu.zip|md_drrobotnup.zip|md_drsc.zip|md_drscj.zip|md_dslayed.zip|md_dslayed2.zip|md_dstrike.zip|md_dstrikej.zip|md_dukenk3d.zip|md_dukenk3da.zip|md_dune2.zip|md_dune2g.zip|md_duneu.zip|md_dynabr.zip|md_dynabr2.zip|md_dynabr2sp.zip|md_dynduke.zip|md_dynduke1.zip|md_dynoblaz.zip|md_eahockey.zip|md_eahockeyj.zip|md_earnest.zip|md_earthdef.zip|md_easports.zip|md_ecco.zip|md_ecco2.zip|md_ecco2j.zip|md_ecco2p.zip|md_ecco2p1.zip|md_ecco2p2.zip|md_ecco2px11.zip|md_ecco2u.zip|md_eccoj.zip|md_eccojr.zip|md_eccojr1.zip|md_ejim.zip|md_ejim2.zip|md_ejim2u.zip|md_ejimu.zip|md_elemast.zip|md_elemastj.zip|md_elimdown.zip|md_elit95.zip|md_elit96.zip|md_elviento.zip|md_elvientoj.zip|md_empsteel.zip|md_espnbb.zip|md_espnhn.zip|md_espnhnp.zip|md_espnnfl.zip|md_espnnflp.zip|md_espnsped.zip|md_espnspedp.zip|md_eswat.zip|md_eswatj.zip|md_eternalc.zip|md_eternalcj.zip|md_eternalcjp.zip|md_eternalcp.zip|md_eternalcu.zip|md_euroclub.zip|md_eurosens.zip|md_evander.zip|md_excelart.zip|md_exile.zip|md_exilej.zip|md_exmutant.zip|md_exodus.zip|md_exosquad.zip|md_exosquadu.zip|md_exosquadup.zip|md_exranza.zip|md_exranzap.zip|md_f1.zip|md_f117.zip|md_f117j.zip|md_f15se2.zip|md_f15se2u.zip|md_f15se2up.zip|md_f1circus.zip|md_f1heromd.zip|md_f1wc.zip|md_f1wcp.zip|md_f22.zip|md_f22a.zip|md_f22j.zip|md_f22p.zip|md_faerytal.zip|md_famfeud.zip|md_fantasia.zip|md_fantasia1.zip|md_fantdizz.zip|md_fantdizz1.zip|md_fastest1.zip|md_fastfur5.zip|md_fatallab.zip|md_fatalrew.zip|md_fatfury.zip|md_fatfury2.zip|md_fatfuryu.zip|md_fatman.zip|md_fengkuan.zip|md_fengshen.zip|md_fengshena.zip|md_ferias.zip|md_ferrari.zip|md_ferrarip.zip|md_ferrariu.zip|md_feverpit.zip|md_fidodido.zip|md_fifa.zip|md_fifa2k.zip|md_fifa2k10.zip|md_fifa2k2.zip|md_fifa2k3.zip|md_fifa95.zip|md_fifa95k.zip|md_fifa96.zip|md_fifa97.zip|md_fifa98.zip|md_fifa99.zip|md_fightmas.zip|md_fightmasj.zip|md_finalb.zip|md_firemust.zip|md_fireshrk.zip|md_fireshrku.zip|md_fireshrku1.zip|md_flashb.zip|md_flashbj.zip|md_flashbu.zip|md_flashbu1.zip|md_flashp.zip|md_flicky.zip|md_flink.zip|md_flint.zip|md_flintj.zip|md_flintu.zip|md_flux.zip|md_foreman.zip|md_forgottn.zip|md_forgottn1.zip|md_formula1.zip|md_franken.zip|md_frogger.zip|md_funcar.zip|md_funngame.zip|md_funngameu.zip|md_funnywld.zip|md_futbol.zip|md_fzone.zip|md_gadget.zip|md_gaiares.zip|md_galahad.zip|md_gambler.zip|md_gamenko.zip|md_gameto.zip|md_garfield.zip|md_gargoyle.zip|md_garou.zip|md_garou2.zip|md_gauntlt4.zip|md_gauntlt4a.zip|md_gauntlt4j.zip|md_gemfire.zip|md_gems.zip|md_genchaos.zip|md_genchaosj.zip|md_genchohi.zip|md_genelost.zip|md_genghis2.zip|md_georgeko.zip|md_georgekou.zip|md_gforce2.zip|md_gforce2a.zip|md_ggenie.zip|md_ggenie1.zip|md_gground.zip|md_gground1.zip|md_ghostbst.zip|md_ghostbst1.zip|md_ghouls.zip|md_ghouls1.zip|md_ghw.zip|md_ghwj.zip|md_ghwu.zip|md_gleylanc.zip|md_gloc.zip|md_glocp.zip|md_gods.zip|md_godsj.zip|md_godsu.zip|md_godsup.zip|md_golden10.zip|md_goldnax2.zip|md_goldnax2p.zip|md_goldnax3.zip|md_goldnaxe.zip|md_goldnaxe1.zip|md_gomora.zip|md_goofy.zip|md_gouketsu.zip|md_granada.zip|md_granada1.zip|md_grandsl.zip|md_grandslj.zip|md_greatcirj.zip|md_greendog.zip|md_grindst.zip|md_growl.zip|md_gt5.zip|md_gunship.zip|md_gunstar.zip|md_gunstarj.zip|md_gunstarjs.zip|md_gunstaru.zip|md_gynoug.zip|md_gynougj.zip|md_hardbal3.zip|md_hardball.zip|md_hardbl94.zip|md_hardbl95.zip|md_harddriv.zip|md_haunting.zip|md_havoc.zip|md_havocu.zip|md_headon.zip|md_heavynov.zip|md_heitao.zip|md_hellfire.zip|md_hellfirej.zip|md_hellfireu.zip|md_hercules.zip|md_herculs2.zip|md_herzog.zip|md_herzogj.zip|md_hitice.zip|md_hokuto.zip|md_homea.zip|md_homea2.zip|md_homeap.zip|md_hook.zip|md_hooku.zip|md_hpotter.zip|md_hpotter2.zip|md_huamul.zip|md_huanle.zip|md_hulk.zip|md_humans.zip|md_hurrican.zip|md_hvyunit.zip|md_hybridf.zip|md_hybridfp.zip|md_hyokkohj.zip|md_hyperdnk.zip|md_hyperdnkj.zip|md_hyperdnkjp.zip|md_hyperm.zip|md_hypermgnk.zip|md_iceage.zip|md_iceage3.zip|md_iceage4.zip|md_ichir.zip|md_imgitt.zip|md_immortal.zip|md_immortalj.zip|md_incredib.zip|md_indycrus.zip|md_indycrusu.zip|md_indyrus.zip|md_insectx.zip|md_insectxj.zip|md_instch.zip|md_instchp1.zip|md_instchp2.zip|md_instchp3.zip|md_instchp4.zip|md_instchp5.zip|md_instchp6.zip|md_instchp7.zip|md_instchp8.zip|md_instchp9.zip|md_intrugby.zip|md_iraqwar.zip|md_iraqwara.zip|md_ishido.zip|md_issdx.zip|md_itcame.zip|md_itchy.zip|md_izzyqst.zip|md_jammit.zip|md_janout.zip|md_jantei.zip|md_jb007.zip|md_jb007j.zip|md_jb007u.zip|md_jbdougko.zip|md_jdredd.zip|md_jdreddp1.zip|md_jdreddp2.zip|md_jellyboy.zip|md_jennifct.zip|md_jeopardd.zip|md_jeopards.zip|md_jeopardy.zip|md_jewelms.zip|md_jewelmsj.zip|md_jimmywws.zip|md_jimpower.zip|md_jiujim.zip|md_jlcs.zip|md_jleague.zip|md_jlps.zip|md_jlps2.zip|md_jlpsa.zip|md_jlpsp.zip|md_joemac.zip|md_joemont.zip|md_joemont2.zip|md_joemont2a.zip|md_jordanb.zip|md_jordanb1.zip|md_jordanbj.zip|md_joshua.zip|md_jpark.zip|md_jparkj.zip|md_jparkre.zip|md_jparkrep1.zip|md_jparkrep2.zip|md_jparkrep3.zip|md_jparkrep4.zip|md_jparkrep5.zip|md_jparkrep6.zip|md_jparkrep7.zip|md_jparkrep8.zip|md_jparkrep9.zip|md_jparku.zip|md_jparkup.zip|md_jpond.zip|md_jpond3.zip|md_jstrike.zip|md_jstrikej.zip|md_jstrikep.zip|md_junction.zip|md_jungle.zip|md_jungleu.zip|md_junker.zip|md_juuouki.zip|md_juuouki1.zip|md_kageki.zip|md_kagekij.zip|md_kawasaki.zip|md_kawasakip.zip|md_kfpanda2.zip|md_kickbox.zip|md_kickoff3.zip|md_kidcham.zip|md_kidchamj.zip|md_killshow.zip|md_kingcol.zip|md_kingsal.zip|md_kingsalj.zip|md_kingsbty.zip|md_kishiden.zip|md_kissshot.zip|md_klax.zip|md_klaxj.zip|md_knucklp.zip|md_kof2k.zip|md_kof98.zip|md_kof98a.zip|md_kof99.zip|md_kof99a.zip|md_kolobok.zip|md_koteteik.zip|md_kotm.zip|md_kotm2.zip|md_kotmj.zip|md_kotmu.zip|md_krusty.zip|md_krusty1.zip|md_ktiger.zip|md_kujaku2.zip|md_kuuga.zip|md_kuzyaeo.zip|md_kuzyamd.zip|md_kyukaidk.zip|md_labdeath.zip|md_labdeathgnk .zip|md_lakers.zip|md_landstlk.zip|md_landstlkf.zip|md_landstlkg.zip|md_landstlkj.zip|md_landstlku.zip|md_landstlkup.zip|md_langris2.zip|md_langris2a.zip|md_langris2b.zip|md_langriss.zip|md_laruss95.zip|md_larussa.zip|md_lasorda.zip|md_lastact.zip|md_lastbtle.zip|md_lawnmowr.zip|md_le2.zip|md_le2u.zip|md_lemming2.zip|md_lemming2u.zip|md_lemmings.zip|md_lemmingsju.zip|md_lemmingsju1 .zip|md_lethalen.zip|md_lethalenj.zip|md_lethalenu.zip|md_leynos.zip|md_lhx.zip|md_lhxj.zip|md_liberty.zip|md_lightc.zip|md_lightcj.zip|md_lightck.zip|md_lightcp.zip|md_lightcu.zip|md_lightfor.zip|md_lionkin2.zip|md_lionkin2a.zip|md_lionkin3.zip|md_lionkin3a.zip|md_lionkin3b.zip|md_lionking.zip|md_lobo.zip|md_long.zip|md_lordmon.zip|md_lostvik.zip|md_lostvikp.zip|md_lostviku.zip|md_lostwrld.zip|md_lotr.zip|md_lotrgs.zip|md_lotus2.zip|md_lotus2p.zip|md_lotust.zip|md_m1abrams.zip|md_madagopp.zip|md_madagsc3.zip|md_madd93ce.zip|md_madden.zip|md_madden92.zip|md_madden93.zip|md_madden94.zip|md_madden95.zip|md_madden96.zip|md_madden97.zip|md_madden98.zip|md_maddenj.zip|md_madoumon.zip|md_mafia.zip|md_magichat.zip|md_magist16.zip|md_mahjongc.zip|md_majian.zip|md_majiana.zip|md_mamono.zip|md_manover.zip|md_mansell.zip|md_mansellu.zip|md_maouren.zip|md_maqiao.zip|md_marble.zip|md_mario3.zip|md_mario4.zip|md_mariolh.zip|md_marko.zip|md_markop.zip|md_markou.zip|md_marsup.zip|md_marsupu.zip|md_marvland.zip|md_marvlandj.zip|md_masterm.zip|md_mastermj.zip|md_maten.zip|md_mathblst.zip|md_mauimall.zip|md_mauimallb.zip|md_mazinsaga.zip|md_mazinsagj.zip|md_mazinsagu.zip|md_mazinwar.zip|md_mbubble.zip|md_mcdonald.zip|md_mcdonaldj.zip|md_mcdonaldjp.zip|md_mcdonaldu.zip|md_medalc.zip|md_megabm8.zip|md_megabomb.zip|md_megabombu.zip|md_megaga1.zip|md_megaga10.zip|md_megaga2.zip|md_megaga3.zip|md_megaga61.zip|md_megaga62.zip|md_megaga63.zip|md_megalo.zip|md_megalo1.zip|md_megalof.zip|md_megaloj.zip|md_megaman.zip|md_megamind.zip|md_meganet.zip|md_meganser.zip|md_megapanl.zip|md_megaswiv.zip|md_megaswivb.zip|md_megatrax.zip|md_megaturr.zip|md_megaturru.zip|md_menacer.zip|md_menghu.zip|md_mercs.zip|md_metalfng.zip|md_mfpool.zip|md_mgs.zip|md_mickeycm.zip|md_mickeyuc.zip|md_mickmack.zip|md_mickmacku.zip|md_mickmackup.zip|md_microm96.zip|md_microm96a.zip|md_micromac.zip|md_micromaca.zip|md_micromacb.zip|md_micromacc.zip|md_micromc2.zip|md_micromc2a.zip|md_micromm.zip|md_midres.zip|md_midresj.zip|md_mig29.zip|md_mig29j.zip|md_mig29u.zip|md_mightmag.zip|md_mightmax.zip|md_mightmaxu.zip|md_mightmg3.zip|md_miracle9.zip|md_miraclep.zip|md_mk.zip|md_mk2.zip|md_mk3.zip|md_mk3u.zip|md_mk5.zip|md_mk5a.zip|md_mka.zip|md_mlbpa.zip|md_mlfootb.zip|md_mlfootbj.zip|md_mlhockey.zip|md_mmania.zip|md_mmaniaj.zip|md_mmaniau.zip|md_mmaniaup.zip|md_mmpr.zip|md_mmprfe.zip|md_mmprp1.zip|md_mmprp2.zip|md_mmprp3.zip|md_mmprp4.zip|md_mmprp5.zip|md_mmprp6.zip|md_mmprtm.zip|md_mmprtmp1.zip|md_mmprtmp2.zip|md_mmprtmp3.zip|md_mmprtmp4.zip|md_mmprtmu.zip|md_mmpru.zip|md_monopoly.zip|md_monopolyp.zip|md_monstinc.zip|md_mrnutz.zip|md_mrnutz2.zip|md_msb.zip|md_msbp01.zip|md_msbp02.zip|md_msbp03.zip|md_msbp04.zip|md_msbp05.zip|md_msbp06.zip|md_msbp07.zip|md_msbp08.zip|md_msbp09.zip|md_msbp10.zip|md_msbp11.zip|md_msbp12.zip|md_mspacman.zip|md_mspacmanpir .zip|md_mtaruru.zip|md_muhammad.zip|md_muhammadu.zip|md_muhammadup.zip|md_musha.zip|md_mushaj.zip|md_mvpbb.zip|md_mwalk.zip|md_mwalk1.zip|md_mweapon.zip|md_mworld4.zip|md_mystdef.zip|md_mystdefa.zip|md_mysticf.zip|md_n3dgaugu.zip|md_n3dgdevi.zip|md_n3dgpebb.zip|md_n3dgwaia.zip|md_nadia.zip|md_nakaf1gp.zip|md_nakaf1sl.zip|md_narnia3.zip|md_naruto.zip|md_nba2k.zip|md_nba2k5.zip|md_nbaact.zip|md_nbaact95.zip|md_nbaact95p01 .zip|md_nbaact95p02 .zip|md_nbaact95p03 .zip|md_nbaact95p04 .zip|md_nbaact95p05 .zip|md_nbaact95p06 .zip|md_nbaact95p07 .zip|md_nbaact95p08 .zip|md_nbaact95p09 .zip|md_nbaact95p10 .zip|md_nbaact95p11 .zip|md_nbaact95p12 .zip|md_nbaact95p13 .zip|md_nbaact95p14 .zip|md_nbaact95p15 .zip|md_nbaact95p16 .zip|md_nbaact95p17 .zip|md_nbaact95p18 .zip|md_nbaact95p19 .zip|md_nbaact95p20 .zip|md_nbaact95p21 .zip|md_nbaact95p22 .zip|md_nbaact95p23 .zip|md_nbaact95p24 .zip|md_nbaact95p25 .zip|md_nbaactp1.zip|md_nbaactp2.zip|md_nbaactp3.zip|md_nbaallst.zip|md_nbahang.zip|md_nbahangu.zip|md_nbajam.zip|md_nbajam1.zip|md_nbajamj.zip|md_nbajamjp.zip|md_nbajamte.zip|md_nbajamtef.zip|md_nbaliv95.zip|md_nbaliv95k.zip|md_nbaliv96.zip|md_nbaliv97.zip|md_nbaliv98.zip|md_nbapro94.zip|md_nbashow.zip|md_nbashowp.zip|md_ncaabask.zip|md_ncaafoot.zip|md_ncirc.zip|md_ncirc1.zip|md_ncircp.zip|md_neksoccr.zip|md_nemo.zip|md_newhoriz.zip|md_newmanh.zip|md_nfl94.zip|md_nfl94j.zip|md_nfl95.zip|md_nfl95p01.zip|md_nfl95p02.zip|md_nfl95p03.zip|md_nfl95p04.zip|md_nfl95p05.zip|md_nfl95p06.zip|md_nfl95p07.zip|md_nfl95p08.zip|md_nfl95p09.zip|md_nfl95p10.zip|md_nfl95p11.zip|md_nfl95p12.zip|md_nfl95p13.zip|md_nfl95p14.zip|md_nfl95p15.zip|md_nfl95p16.zip|md_nfl95p17.zip|md_nfl95p18.zip|md_nfl95p19.zip|md_nfl95p20.zip|md_nfl95p21.zip|md_nfl98.zip|md_nflqb.zip|md_nflqb96.zip|md_nflsport.zip|md_nfsu.zip|md_ngaiden.zip|md_nhktaidr.zip|md_nhl.zip|md_nhl94.zip|md_nhl95.zip|md_nhl96.zip|md_nhl97.zip|md_nhl98.zip|md_nhlas.zip|md_nhlasp01.zip|md_nhlasp02.zip|md_nhlasp03.zip|md_nhlasp04.zip|md_nhlasp05.zip|md_nhlasp06.zip|md_nhlasp07.zip|md_nhlasp08.zip|md_nhlasp09.zip|md_nhlasp10.zip|md_nhlasp11.zip|md_nhlasp12.zip|md_nhlasp13.zip|md_nhlasp14.zip|md_nhlasp15.zip|md_nhlasp16.zip|md_nhlpa2k3.zip|md_nhlpa93.zip|md_nhlpa93a.zip|md_nicklaus.zip|md_nikkan.zip|md_ninjab.zip|md_nobuamb.zip|md_nobubufu.zip|md_nobuhao.zip|md_nobuzenk.zip|md_noescape.zip|md_normy.zip|md_olympgld.zip|md_olympgldj.zip|md_olympgldu.zip|md_olympgldu1.zip|md_olympsum.zip|md_ondal.zip|md_onslau.zip|md_ootw.zip|md_ootwp.zip|md_ooze.zip|md_oozeju.zip|md_oozep01.zip|md_oozep02.zip|md_oozep03.zip|md_oozep04.zip|md_oozep05.zip|md_oozep06.zip|md_oozep07.zip|md_opensea.zip|md_opensea3.zip|md_opeurope.zip|md_orunners.zip|md_orunnersj.zip|md_osomatsu.zip|md_ottifant.zip|md_ottifantg.zip|md_outlandr.zip|md_outlandru.zip|md_outr2019.zip|md_outr2019j.zip|md_outr2019u.zip|md_outr2019up.zip|md_outrun.zip|md_outrunj.zip|md_pacattak.zip|md_pachinko.zip|md_pacman2.zip|md_pacmania.zip|md_pacpanic.zip|md_paddle.zip|md_paddlegnk.zip|md_pagemstr.zip|md_pagemstru.zip|md_pagemstrup.zip|md_paperbo2.zip|md_paperboy.zip|md_paperboyj.zip|md_par.zip|md_par2.zip|md_par2a.zip|md_partyq.zip|md_patlabor.zip|md_patriley.zip|md_pcarib.zip|md_pcarib2.zip|md_pcotton.zip|md_pdrive.zip|md_pebble.zip|md_pebbleu.zip|md_pele.zip|md_pele2.zip|md_pga.zip|md_pga2.zip|md_pga2a.zip|md_pga2j.zip|md_pga3.zip|md_pga96.zip|md_pgaa.zip|md_pgaeuro.zip|md_phantom.zip|md_phantomu.zip|md_phelios.zip|md_pheliosj.zip|md_pheliosu.zip|md_pigskinf.zip|md_pink.zip|md_pinkp.zip|md_pinoc.zip|md_pinocu.zip|md_piratedw.zip|md_piratedw1.zip|md_pirates.zip|md_piratesp.zip|md_pitfall.zip|md_pitfallu.zip|md_pitfight.zip|md_pitfight1.zip|md_pmonger.zip|md_pmongerj.zip|md_pocahont.zip|md_pocahontu.zip|md_pokecd.zip|md_pokecda.zip|md_pokemon.zip|md_pokemon2.zip|md_pokemona.zip|md_pokestad.zip|md_populous.zip|md_populousj.zip|md_populousu.zip|md_powerath.zip|md_powerbal.zip|md_ppengo.zip|md_ppersia.zip|md_ppersia2.zip|md_ppersiap.zip|md_ppersiap1.zip|md_ppersiau.zip|md_predatr2.zip|md_premierm.zip|md_premrm97.zip|md_primal.zip|md_primetim.zip|md_probot.zip|md_proqb.zip|md_prostrfs.zip|md_proyakyu.zip|md_ps2aa.zip|md_ps2ab.zip|md_ps2ac.zip|md_ps2ad.zip|md_ps2ae.zip|md_ps2af.zip|md_ps2ag.zip|md_ps2ah.zip|md_pstar2.zip|md_pstar2a.zip|md_pstar2br.zip|md_pstar2j.zip|md_pstar3.zip|md_pstar3br.zip|md_pstar3j.zip|md_pstar4.zip|md_pstar4j.zip|md_pstar4p1.zip|md_pstar4p2.zip|md_pstar4p3.zip|md_pstar4p4.zip|md_pstar4p5.zip|md_pstar4u.zip|md_psycho.zip|md_psycho1.zip|md_psyoblad.zip|md_pto.zip|md_puggsy.zip|md_puggsyp.zip|md_puggsyu.zip|md_pulseman.zip|md_punisher.zip|md_punisheru.zip|md_putter.zip|md_puttergnk.zip|md_puyopuy2.zip|md_puyopuy2a.zip|md_puyopuyo.zip|md_pyramid.zip|md_pyramid2.zip|md_pyramid3.zip|md_pyramidgnk.zip|md_pyramids.zip|md_qpoker.zip|md_quacksht.zip|md_quacksht1.zip|md_quadchal.zip|md_racedriv.zip|md_radicasf.zip|md_radicav1.zip|md_radrex.zip|md_radrexu.zip|md_ragnacen.zip|md_ragnacenk.zip|md_ragnacenp.zip|md_raiden.zip|md_rambo3.zip|md_rambo3a.zip|md_rampart.zip|md_rampartj.zip|md_rangerx.zip|md_rangerxu.zip|md_ransei.zip|md_rastan2.zip|md_rastan2j.zip|md_rbibb3.zip|md_rbibb4.zip|md_rbibb4j.zip|md_rbibb4p.zip|md_rbibb93.zip|md_rbibb94.zip|md_rbisland.zip|md_redcliff.zip|md_redcliffa.zip|md_redzone.zip|md_renstim.zip|md_renstimu.zip|md_renstimup.zip|md_renthero.zip|md_resq.zip|md_revshin.zip|md_revshin1.zip|md_revshin2.zip|md_revx.zip|md_rhl2k7.zip|md_rickdang.zip|md_riddle.zip|md_ringspow.zip|md_riserobo.zip|md_risk.zip|md_riskyw.zip|md_ristar.zip|md_ristar1.zip|md_ristarj.zip|md_ristarp1.zip|md_ristarp2.zip|md_ristarp3.zip|md_ristarp4.zip|md_rnrracin.zip|md_rnrracinu.zip|md_roadblst.zip|md_roadblstj.zip|md_roadrash.zip|md_robocod.zip|md_robocodj.zip|md_robocop3.zip|md_robotbat.zip|md_roboterm.zip|md_robotermj.zip|md_robotermp.zip|md_robotermp1.zip|md_robotermu.zip|md_robowrek.zip|md_rocket.zip|md_rocketj.zip|md_rocketu.zip|md_rockman.zip|md_rockman1.zip|md_rockmnx3.zip|md_rockybw.zip|md_rolo.zip|md_roman3k2.zip|md_roman3k3.zip|md_royalbld.zip|md_rrash2.zip|md_rrash2a.zip|md_rrash2j.zip|md_rrash3.zip|md_rrash3p.zip|md_rsbt.zip|md_rsbtp1.zip|md_rsbtp2.zip|md_rsbtp3.zip|md_rsbtp4.zip|md_rsbtp5.zip|md_rsbtp6.zip|md_rsbtp7.zip|md_rthun2.zip|md_rthun2j.zip|md_rthun2u.zip|md_rthun3.zip|md_rugbywc.zip|md_runark.zip|md_ryukoken.zip|md_s15in1.zip|md_s19in1.zip|md_sagaia.zip|md_sailormn.zip|md_samesame.zip|md_sampra96.zip|md_sampras.zip|md_sampras1.zip|md_sampras2.zip|md_samsho.zip|md_samshou.zip|md_samspir.zip|md_sangoku2.zip|md_sangoku3.zip|md_sangoret.zip|md_sanguo.zip|md_sanguo5.zip|md_sansan.zip|md_sbship.zip|md_sbtank.zip|md_scooby.zip|md_scrabble.zip|md_scrack.zip|md_sdkong99.zip|md_sdkong99a.zip|md_sdmilha2.zip|md_sdmilha2a.zip|md_sdmilhao.zip|md_sdvalis.zip|md_seaquest.zip|md_seaquestu.zip|md_seconds.zip|md_segachd.zip|md_segachnl.zip|md_segachnla.zip|md_segasprt.zip|md_segatop.zip|md_sensibie.zip|md_sensible.zip|md_sensiblep.zip|md_sesame.zip|md_sf2.zip|md_sf2j.zip|md_sf2pir.zip|md_sf2u.zip|md_sfzone.zip|md_sfzonej.zip|md_shadow.zip|md_shadowrn.zip|md_shadowrnj.zip|md_shadowrnp1.zip|md_shadowrnp2.zip|md_shadowrnp3.zip|md_shadowrnp4.zip|md_shanewar.zip|md_shangh2.zip|md_shangh2p.zip|md_shangh2p1.zip|md_shangh3.zip|md_shangon.zip|md_shangon1.zip|md_shaqfu.zip|md_sharrier.zip|md_sharrierj.zip|md_shdancer.zip|md_shijie.zip|md_shikinjo.zip|md_shimpact.zip|md_shindark.zip|md_shindarkbr.zip|md_shindarkj.zip|md_shinfrc2.zip|md_shinfrc2j.zip|md_shinfrc2p1.zip|md_shinfrc2p2.zip|md_shinfrc2u.zip|md_shinfrce.zip|md_shinfrcej.zip|md_shinfrcep.zip|md_shinobi3.zip|md_shinobi3u.zip|md_ship.zip|md_shiten.zip|md_shougi.zip|md_shoveit.zip|md_shrek.zip|md_shrek2.zip|md_shuihu.zip|md_shuihuzh.zip|md_shuramon.zip|md_sidepock.zip|md_sidepockj.zip|md_sidepocku.zip|md_sinv90.zip|md_sinv91.zip|md_sk.zip|md_skelkrew.zip|md_skelkrewu.zip|md_skickoff.zip|md_skitchin.zip|md_skkong99.zip|md_skp01.zip|md_skp02.zip|md_skp03.zip|md_skp04.zip|md_skp05.zip|md_skp06.zip|md_skp07.zip|md_skp08.zip|md_skp09.zip|md_skp10.zip|md_skp11.zip|md_skp12.zip|md_sks1.zip|md_sks2.zip|md_sks3.zip|md_slamdunk.zip|md_slammast.zip|md_slammastu.zip|md_slamshaq.zip|md_slapfigh.zip|md_slaughtr.zip|md_slimew.zip|md_slimewj.zip|md_smario2.zip|md_smario2a.zip|md_smario64.zip|md_smario64h.zip|md_smasters.zip|md_smb.zip|md_smba.zip|md_smbb.zip|md_smbbc.zip|md_smgp.zip|md_smgp2.zip|md_smgp2u.zip|md_smgpa.zip|md_smgpj.zip|md_smgpu.zip|md_smurfs.zip|md_smurfstw.zip|md_snakernr.zip|md_sndtool.zip|md_snezkoro.zip|md_snowbros.zip|md_socket.zip|md_sokoban.zip|md_soldeace.zip|md_soldfort.zip|md_soleil.zip|md_soleilf.zip|md_soleilg.zip|md_soleils.zip|md_sonic.zip|md_sonic2.zip|md_sonic2a.zip|md_sonic2b.zip|md_sonic2c.zip|md_sonic2p1.zip|md_sonic2p2.zip|md_sonic2p3.zip|md_sonic2p4.zip|md_sonic2p5.zip|md_sonic2p6.zip|md_sonic2p7.zip|md_sonic2p8.zip|md_sonic3.zip|md_sonic3c.zip|md_sonic3ca.zip|md_sonic3d.zip|md_sonic3dp1.zip|md_sonic3dp2.zip|md_sonic3dp3.zip|md_sonic3dp4.zip|md_sonic3dp5.zip|md_sonic3dp6.zip|md_sonic3dp7.zip|md_sonic3dp8.zip|md_sonic3j.zip|md_sonic3pir.zip|md_sonic3u.zip|md_soniccmp.zip|md_soniccmp1.zip|md_sonicer.zip|md_sonicj.zip|md_sonicjam.zip|md_sonicjam1.zip|md_sonicjam2.zip|md_sonicpir.zip|md_sor.zip|md_sor2.zip|md_sor2u.zip|md_sor3.zip|md_sor3k.zip|md_sor3p1.zip|md_sor3p2.zip|md_sor3p3.zip|md_sor3p4.zip|md_sor3p5.zip|md_sor3u.zip|md_sor3up01.zip|md_sor3up02.zip|md_sor3up03.zip|md_sor3up04.zip|md_sor3up05.zip|md_sor3up06.zip|md_sor3up07.zip|md_sor3up08.zip|md_sor3up09.zip|md_sor3up10.zip|md_sora.zip|md_sorcer.zip|md_sorcerk.zip|md_sorcerk1.zip|md_sorcerkj.zip|md_soulblad.zip|md_soulblada.zip|md_souledge.zip|md_souledgea.zip|md_spacebob.zip|md_sparkstr.zip|md_sparkstrj.zip|md_sparkstru.zip|md_speedbl2.zip|md_speedbl2j.zip|md_speedbl2u.zip|md_spidermn.zip|md_spidermnp1.zip|md_spidermnp2.zip|md_spidking.zip|md_spidmaxc.zip|md_spidxmen.zip|md_spiritwf.zip|md_spirou.zip|md_splatth2.zip|md_splatth2j.zip|md_splatth2u.zip|md_splatth3.zip|md_splatth3j.zip|md_spongbob.zip|md_sportg.zip|md_sporttbb.zip|md_spotgo.zip|md_spotgou.zip|md_spykids4.zip|md_squirrel.zip|md_sracer.zip|md_srealbas.zip|md_srealbasj.zip|md_srobowrs.zip|md_ssf2.zip|md_ssf2j.zip|md_ssf2u.zip|md_sskid.zip|md_sskidp.zip|md_ssmart.zip|md_ssmashtv.zip|md_sspin.zip|md_sspinj.zip|md_sspinp.zip|md_sspinu.zip|md_sspinua.zip|md_ssriders.zip|md_ssridersu.zip|md_ssword.zip|md_sswordj.zip|md_starcrus.zip|md_starctrl.zip|md_starfl.zip|md_starfl1.zip|md_stargate.zip|md_stargatep.zip|md_starjedi.zip|md_starwars.zip|md_stblad.zip|md_stbladj.zip|md_stds9.zip|md_stds9u.zip|md_steelemp.zip|md_steeltal.zip|md_steeltalj.zip|md_steeltalp.zip|md_stonprot.zip|md_strider.zip|md_strider2.zip|md_strider2u.zip|md_striderj.zip|md_striker.zip|md_strikerp.zip|md_strmlord.zip|md_strmlordj.zip|md_sttng.zip|md_sttnga.zip|md_sttngp01.zip|md_sttngp02.zip|md_sttngp03.zip|md_sttngp04.zip|md_sttngp05.zip|md_sttngp06.zip|md_subterr.zip|md_subterrj.zip|md_subterrp1.zip|md_subterrp2.zip|md_subterrp3.zip|md_subterru.zip|md_summer.zip|md_supdaisn.zip|md_supdaisna.zip|md_superair.zip|md_superhq.zip|md_superman.zip|md_supermanp.zip|md_supermanu.zip|md_superoff.zip|md_suphydl.zip|md_suphydlj.zip|md_suphydlu.zip|md_supmagic.zip|md_suprbubl.zip|md_suprleag.zip|md_suprleagj.zip|md_supshin.zip|md_supshin2.zip|md_supshin2p1.zip|md_supshin2p2.zip|md_surging.zip|md_svolley.zip|md_svolley1.zip|md_svolleyj.zip|md_swamp.zip|md_swordsod.zip|md_swordsodj.zip|md_sydvalis.zip|md_sylvestr.zip|md_sylvestru.zip|md_syndicat.zip|md_t2ag.zip|md_t2agj.zip|md_t2agp.zip|md_t3ag.zip|md_taikoris.zip|md_taiwan.zip|md_talespin.zip|md_talmit.zip|md_tank2011.zip|md_tantr.zip|md_taskfhex.zip|md_taskfhexj.zip|md_tazmania.zip|md_tazmars.zip|md_tazmarsp01.zip|md_tazmarsp02.zip|md_tazmarsp03.zip|md_tazmarsp04.zip|md_tazmarsp05.zip|md_tazmarsp06.zip|md_tazmarsp07.zip|md_tazmarsp08.zip|md_tazmarsp09.zip|md_tazmarsp10.zip|md_tazmarsp11.zip|md_tazmarsu.zip|md_tc2000.zip|md_td2.zip|md_teamusa.zip|md_technocl.zip|md_tecmobb.zip|md_tecmocup.zip|md_tecmohck.zip|md_tecmonba.zip|md_tecmonbaj.zip|md_tecmosb2.zip|md_tecmosb2j.zip|md_tecmosb3.zip|md_tecmosbw.zip|md_tecmosbwa.zip|md_tecmosbwj.zip|md_tecmow92.zip|md_tecmowc.zip|md_tecnocop.zip|md_teddyboy.zip|md_teiketsu.zip|md_tekkn3sp.zip|md_telebrad.zip|md_telmah.zip|md_telstad.zip|md_term2.zip|md_termintr.zip|md_termintru.zip|md_tetris.zip|md_tetris1.zip|md_tf2.zip|md_tf2j.zip|md_tf3.zip|md_tf4.zip|md_tf4j.zip|md_tfox.zip|md_tfoxj.zip|md_themeprk.zip|md_thomas.zip|md_thor.zip|md_thorf.zip|md_thorg.zip|md_thorj.zip|md_thorjp.zip|md_thork.zip|md_thorp1.zip|md_thorp2.zip|md_thors.zip|md_tick.zip|md_timedom.zip|md_timekill.zip|md_timekillu.zip|md_tinhead.zip|md_tintin.zip|md_tmhthh.zip|md_tmhttf.zip|md_tmnthh.zip|md_tmntru.zip|md_tmntshj.zip|md_tmnttfj.zip|md_tmnttfu.zip|md_tnnbass.zip|md_tnnout.zip|md_tnzs.zip|md_toejam.zip|md_toejam2.zip|md_toejam2g.zip|md_toejam2j.zip|md_toejam2u.zip|md_toejama.zip|md_toki.zip|md_toki1.zip|md_tomjerry.zip|md_tomjerry1.zip|md_topf2k5.zip|md_topfight.zip|md_topgear2.zip|md_topgolf.zip|md_topgolf2.zip|md_totlfoot.zip|md_toughman.zip|md_toutrun.zip|md_toxicc.zip|md_toys.zip|md_toystory.zip|md_toystoryu.zip|md_tplay96.zip|md_tplaygld.zip|md_tplayglda.zip|md_tpwres.zip|md_trampter.zip|md_transf3.zip|md_traysia.zip|md_traysiaj.zip|md_trgearth.zip|md_troubsht.zip|md_troyaik.zip|md_truco96.zip|md_truelies.zip|md_truxton.zip|md_ttacme.zip|md_ttacmeu.zip|md_ttoon3.zip|md_ttoonbht.zip|md_ttoonbhtk.zip|md_ttoonbhtu.zip|md_tunshi.zip|md_tunshi1.zip|md_turmamon.zip|md_turrican.zip|md_twincobr.zip|md_twinhawk.zip|md_twinklet.zip|md_twistedf.zip|md_twocrude.zip|md_twocrudeu.zip|md_twotribe.zip|md_tyrant.zip|md_ultqix.zip|md_ultraman.zip|md_ultsoccr.zip|md_ultsoccrp.zip|md_umk3.zip|md_umk3u.zip|md_unchartd.zip|md_undead.zip|md_univsold.zip|md_unknown2.zip|md_unnecess.zip|md_ustrike.zip|md_uzukeo.zip|md_valis.zip|md_valis3.zip|md_valis3j.zip|md_valisj.zip|md_vaportr.zip|md_vbart.zip|md_vecman.zip|md_vecman2.zip|md_vecman2p1.zip|md_vecman2p2.zip|md_vecman2p3.zip|md_vecman2p4.zip|md_vecman2p5.zip|md_vecman2p6.zip|md_vecmanp1.zip|md_vecmanp2.zip|md_vecmanp3.zip|md_venom.zip|md_vermil.zip|md_vermilj.zip|md_verytex.zip|md_vf2.zip|md_vf2k.zip|md_vf2p1.zip|md_vf2p2.zip|md_vf2p3.zip|md_vf2p4.zip|md_vf2p5.zip|md_vf2tek.zip|md_vfive.zip|md_viewpoin.zip|md_viewpoinp.zip|md_virak.zip|md_vixen357.zip|md_volfied.zip|md_vpinball.zip|md_vr.zip|md_vrj.zip|md_vrtroop.zip|md_vru.zip|md_wackyrac.zip|md_waldo.zip|md_waniwani.zip|md_wardner.zip|md_wardnerj.zip|md_wario3.zip|md_warlock.zip|md_warlockp.zip|md_warpsped.zip|md_warrior.zip|md_warrior2.zip|md_warsong.zip|md_waterwld.zip|md_wayneg.zip|md_waynewld.zip|md_wboy3.zip|md_wboy5.zip|md_wboymw.zip|md_wclead.zip|md_wcleadu.zip|md_wcs.zip|md_wcs2.zip|md_wcs2p01.zip|md_wcs2p02.zip|md_wcs2p03.zip|md_wcs2p04.zip|md_wcs2p05.zip|md_wcs2p06.zip|md_wcs2p07.zip|md_wcs2p08.zip|md_wcs2p09.zip|md_wcs2p10.zip|md_wcs2p11.zip|md_wcs2p12.zip|md_wcs2p13.zip|md_wcs2p14.zip|md_wcs2p15.zip|md_wcs2p16.zip|md_wcs2p17.zip|md_wcs2p18.zip|md_wcs2u.zip|md_wcs2up.zip|md_wcsa.zip|md_wcsb.zip|md_wcup90.zip|md_wcup94.zip|md_weaponld.zip|md_wh.zip|md_whacacri.zip|md_wheelfor.zip|md_whiprush.zip|md_whiprushj.zip|md_whj.zip|md_whjp1.zip|md_whjp2.zip|md_whjp3.zip|md_whjp4.zip|md_whjp5.zip|md_whp01.zip|md_whp02.zip|md_whp03.zip|md_whp04.zip|md_whp05.zip|md_whp06.zip|md_whp07.zip|md_whp08.zip|md_whp09.zip|md_whp10.zip|md_whp11.zip|md_whp12.zip|md_whp13.zip|md_wildsnak.zip|md_wimbled.zip|md_wimbledj.zip|md_wimbledu.zip|md_wimbledup.zip|md_wingswor.zip|md_wintchal.zip|md_wintchal1.zip|md_wintchalp.zip|md_wintol.zip|md_wintolj.zip|md_wintolu.zip|md_winx.zip|md_winx3d.zip|md_wiznliz.zip|md_wiznlizu.zip|md_wolfchld.zip|md_wolverin.zip|md_wondlib.zip|md_worldill.zip|md_worldillj.zip|md_worldilljp.zip|md_worldillu.zip|md_worldts.zip|md_worms.zip|md_wormsp.zip|md_wrestwar.zip|md_wrestwarp.zip|md_wrstball.zip|md_wsb.zip|md_wsb95.zip|md_wsb95p01.zip|md_wsb95p02.zip|md_wsb95p03.zip|md_wsb95p04.zip|md_wsb95p05.zip|md_wsb95p06.zip|md_wsb95p07.zip|md_wsb95p08.zip|md_wsb95p09.zip|md_wsb95p10.zip|md_wsb95p11.zip|md_wsb95p12.zip|md_wsb95p13.zip|md_wsb95p14.zip|md_wsb95p15.zip|md_wsb95p16.zip|md_wsb95p17.zip|md_wsb95p18.zip|md_wsb95p19.zip|md_wsb95p20.zip|md_wsb95p21.zip|md_wsb95p22.zip|md_wsb95p23.zip|md_wsb96.zip|md_wsb98.zip|md_wsbp01.zip|md_wsbp02.zip|md_wsbp03.zip|md_wsbp04.zip|md_wsbp05.zip|md_wsbp06.zip|md_wsbp07.zip|md_wsbp08.zip|md_wsbp09.zip|md_wsbp10.zip|md_wukong.zip|md_wwfag.zip|md_wwfagp.zip|md_wwfraw.zip|md_wwfroyal.zip|md_wwfsup.zip|md_wworlds.zip|md_wworldsp1.zip|md_wworldsp2.zip|md_wworldsp3.zip|md_xdr.zip|md_xenon2.zip|md_xfire.zip|md_xiaomo.zip|md_xinqig.zip|md_xinqig1.zip|md_xmen.zip|md_xmen2.zip|md_xmen2p01.zip|md_xmen2p02.zip|md_xmen2p03.zip|md_xmen2p04.zip|md_xmen2p05.zip|md_xmen2p06.zip|md_xmen2p07.zip|md_xmen2p08.zip|md_xmen2p09.zip|md_xmen2p10.zip|md_xmen2p11.zip|md_xmen2p12.zip|md_xmen2p13.zip|md_xmen2p14.zip|md_xmen2p15.zip|md_xmen2p16.zip|md_xmen2p17.zip|md_xmen2p18.zip|md_xmen2p19.zip|md_xmenu.zip|md_xperts.zip|md_xpertsp.zip|md_yangji.zip|md_yasech.zip|md_yogibear.zip|md_youngind.zip|md_ys3.zip|md_ys3j.zip|md_yuyug.zip|md_yuyumt.zip|md_yuyusf.zip|md_zanyasha.zip|md_zanygolf.zip|md_zanygolf1.zip|md_zero.zip|md_zerotol.zip|md_zerou.zip|md_zerowing.zip|md_zerowingj.zip|md_zhuogu.zip|md_zombhigh.zip|md_zombies.zip|md_zombiesu.zip|md_zool.zip|md_zoolu.zip|md_zoom.zip|md_zoop.zip|md_zoopu.zip|md_zouzou.zip|megablst.zip|megablstj.zip|megablstu.zip|megadon.zip|megaman.zip|megaman2.zip|megaman2a.zip|megaman2h.zip|megamana.zip|megamn2d.zip|meijinsn.zip|meikyuh.zip|meikyuha.zip|mercs.zip|mercsj.zip|mercsu.zip|mercsur1.zip|metafox.zip|metalb.zip|metalbj.zip|metlsavr.zip|metmqstr.zip|metrocrs.zip|metrocrsa.zip|mgakuen.zip|mgakuen2.zip|mgcrystl.zip|mgcrystlj.zip|mgcrystlo.zip|mia.zip|mia2.zip|miaj.zip|midres.zip|midresj.zip|midresu.zip|miexchng.zip|mimonkey.zip|mimonsco.zip|mimonscr.zip|minasan.zip|minefld.zip|minivadr.zip|missmw96.zip|missw96.zip|mizubaku.zip|mj4simai.zip|mjgtaste.zip|mjleague.zip|mjnquest.zip|mjnquestb.zip|mmancp2u.zip|mmatrix.zip|mmatrixd.zip|mmatrixj.zip|mofflott.zip|mogura.zip|mole.zip|momoko.zip|monsterz.zip|moonal2.zip|moonal2b.zip|moonaln.zip|mooncmw.zip|mooncptc.zip|mooncreg.zip|mooncrgx.zip|mooncrs2.zip|mooncrs3.zip|mooncrs4.zip|mooncrsb.zip|mooncrsl.zip|mooncrst.zip|mooncrstg.zip|mooncrsto.zip|mooncrstu.zip|mooncrstuk.zip|mooncrstuku.zip|moonqsr.zip|moonwar.zip|moonwara.zip|moremore.zip|moremorp.zip|mosyougi.zip|mpang.zip|mpangj.zip|mpangr1.zip|mpangu.zip|mrdo.zip|mrdofix.zip|mrdot.zip|mrdoy.zip|mrdu.zip|mrflea.zip|mrgoemon.zip|mrheli.zip|mrkougar.zip|mrkougar2.zip|mrkougb.zip|mrkougb2.zip|mrlo.zip|mrtnt.zip|mrviking.zip|mrvikingj.zip|ms4plus.zip|ms5pcb.zip|ms5plus.zip|msbingo.zip|mschamp.zip|mschamps.zip|msgundam.zip|msgundam1.zip|msh.zip|msha.zip|mshb.zip|msheartb.zip|mshh.zip|mshj.zip|mshjr1.zip|mshu.zip|mshud.zip|mshuttle.zip|mshuttle2.zip|mshuttlej.zip|mshuttlej2.zip|mshvsf.zip|mshvsfa.zip|mshvsfa1.zip|mshvsfb.zip|mshvsfb1.zip|mshvsfh.zip|mshvsfj.zip|mshvsfj1.zip|mshvsfj2.zip|mshvsfu.zip|mshvsfu1.zip|mshvsfu1d.zip|mslug.zip|mslug2.zip|mslug2t.zip|mslug3.zip|mslug3b6.zip|mslug3h.zip|mslug4.zip|mslug4h.zip|mslug5.zip|mslug5b.zip|mslug5h.zip|mslugx.zip|mspacmab.zip|mspacman.zip|mspacmanbg.zip|mspacmat.zip|mspacmbe.zip|mspacmnf.zip|mspacpls.zip|mspuzzle.zip|mspuzzleg.zip|mspuzzlen.zip|mstadium.zip|mstworld.zip|msword.zip|mswordj.zip|mswordr1.zip|mswordu.zip|mtwins.zip|mugsmash.zip|multchmp.zip|multchmpk.zip|mustang.zip|mustangb.zip|mustangb2.zip|mustangs.zip|mutantf.zip|mutantf3.zip|mutantf4.zip|mutnat.zip|mvp.zip|mvpj.zip|mvsc.zip|mvsca.zip|mvscar1.zip|mvscb.zip|mvsch.zip|mvscj.zip|mvscjr1.zip|mvscjsing.zip|mvscr1.zip|mvscu.zip|mvscud.zip|mvscur1.zip|mwalk.zip|mwalkbl.zip|myangel.zip|myangel2.zip|myhero.zip|myherok.zip|mysticri.zip|mysticrib.zip|mystston.zip|myststono.zip|myststonoi.zip|nam1975.zip|naname.zip|nastar.zip|nastarw.zip|nbbatman.zip|nbbatmanu.zip|ncombat.zip|ncombath.zip|ncommand.zip|nemo.zip|nemoj.zip|neo2500.zip|neo3ddmo.zip|neobattl.zip|neobombe.zip|neocdz.zip|neocstlv.zip|neocup98.zip|neodemo.zip|neodrift.zip|neogalag.zip|neogalaga.zip|neogeo.zip|neogeo.zip|neomrdo.zip|neonopon.zip|neopong.zip|neoponga.zip|neoprimo.zip|neotet.zip|neothndr.zip|neoww2.zip|newapunk.zip|newfant.zip|newfanta.zip|newpuc2.zip|newpuc2b.zip|newpuckx.zip|news.zip|newsa.zip|newsin7.zip|ngem2k.zip|ngfrog.zip|ngftdemo.zip|nightstr.zip|nightstrj.zip|nightstru.zip|ninja.zip|ninjak.zip|ninjakj.zip|ninjaku.zip|ninjamas.zip|ninjaw.zip|ninjawj.zip|ninjawu.zip|nitd.zip|nitdbl.zip|nitrobal.zip|nmaster.zip|nmg5.zip|nmg5e.zip|nmouse.zip|nmouseb.zip|nob.zip|nobb.zip|nost.zip|nostj.zip|nostk.zip|nouryoku.zip|nprinces.zip|nprincesb.zip|nprinceso.zip|nprincesu.zip|nrallyx.zip|nspirit.zip|nspiritj.zip|nwarr.zip|nwarra.zip|nwarrb.zip|nwarrh.zip|nwarru.zip|nwarrud.zip|ohmygod.zip|oisipuzl.zip|olds.zip|olds100.zip|olds100a.zip|olds103t.zip|oldsplus.zip|omega.zip|omni.zip|onna34ro.zip|onna34roa.zip|opwolf.zip|opwolf3.zip|opwolf3u.zip|opwolfa.zip|opwolfb.zip|opwolfj.zip|opwolfu.zip|orbitron.zip|orbs.zip|orlegend.zip|orlegend105k.zip|orlegend111c.zip|orlegendc.zip|orlegendca.zip|orlegende.zip|oscar.zip|oscarj1.zip|oscarj2.zip|oscaru.zip|osman.zip|othunder.zip|othunderj.zip|othunderu.zip|othunderuo.zip|outrun.zip|outrunb.zip|outrundx.zip|outruno.zip|outrunra.zip|outzone.zip|outzonea.zip|outzoneb.zip|outzonec.zip|outzoned.zip|overtop.zip|ozon1.zip|pacgal.zip|pacheart.zip|pacland.zip|paclandj.zip|paclandjo.zip|paclandjo2.zip|paclandm.zip|pacman.zip|pacmanbl.zip|pacmanbla.zip|pacmanf.zip|pacmansp.zip|pacmod.zip|pacplus.zip|pacuman.zip|paddle2.zip|paintrlr.zip|pairlove.zip|pajaroes.zip|pang.zip|pang3.zip|pang3b.zip|pang3b2.zip|pang3b3.zip|pang3j.zip|pang3r1.zip|pang3r1a.zip|pangb.zip|pangb2.zip|pangbold.zip|pangpang.zip|panicbom.zip|paprazzi.zip|parodius.zip|parodiusa.zip|parodiuse.zip|parodiusj.zip|pass.zip|passsht.zip|passsht16a.zip|passshta.zip|passshtb.zip|passshtj.zip|pbobbl2n.zip|pbobble.zip|pbobblen.zip|pbobblenb.zip|pce_1943kai.zip|pce_21emon.zip|pce_aburner2.zip|pce_acrush.zip|pce_advislnd.zip|pce_aeroblst.zip|pce_alice.zip|pce_ankoku.zip|pce_aoiblink.zip|pce_appgateb.zip|pce_armedf.zip|pce_arttool.zip|pce_atomrobo.zip|pce_avpoker.zip|pce_baibai.zip|pce_ballistx.zip|pce_baribari.zip|pce_barunba.zip|pce_batloder.zip|pce_batman.zip|pce_beball.zip|pce_benkei.zip|pce_benkei1.zip|pce_bikkuri.zip|pce_bikkuri1.zip|pce_blodia.zip|pce_blodwolf.zip|pce_bodycon2.zip|pce_bombman.zip|pce_bombmn93.zip|pce_bombmn93s.zip|pce_bombmn94.zip|pce_bombmnub.zip|pce_bravoman.zip|pce_breakin.zip|pce_bubblegm.zip|pce_bullfght.zip|pce_burnangl.zip|pce_cadash.zip|pce_cdsys.zip|pce_cdsysa.zip|pce_cdsysb.zip|pce_champwrs.zip|pce_chasehq.zip|pce_chibim.zip|pce_chikuden.zip|pce_chikuden1.zip|pce_chukatai.zip|pce_circusld.zip|pce_cityhunt.zip|pce_columns.zip|pce_coryoon.zip|pce_coryoon1.zip|pce_cyberdod.zip|pce_cyberx.zip|pce_cybrcore.zip|pce_cyknight.zip|pce_daisenpu.zip|pce_dariusa.zip|pce_dariusp.zip|pce_ddanpei.zip|pce_ddungw.zip|pce_deadmoon.zip|pce_deepblue.zip|pce_devlcrsh.zip|pce_diehard.zip|pce_digichmp.zip|pce_donaturl.zip|pce_dondoko.zip|pce_dorams.zip|pce_dorandn.zip|pce_download.zip|pce_download1.zip|pce_dragnegg.zip|pce_droprock.zip|pce_droprock1.zip|pce_druaga.zip|pce_dsaber.zip|pce_dsaber1.zip|pce_dspirit.zip|pce_dungexpl.zip|pce_energy.zip|pce_etercity.zip|pce_f1circ91.zip|pce_f1circ92.zip|pce_f1circus.zip|pce_f1circus1.zip|pce_f1dream.zip|pce_f1pilot.zip|pce_f1tb.zip|pce_fantzone.zip|pce_fightrun.zip|pce_finallap.zip|pce_finalmt.zip|pce_finalsol.zip|pce_finalsols.zip|pce_finlblst.zip|pce_fireprow.zip|pce_fireprw2.zip|pce_fireprw3.zip|pce_fsoccer.zip|pce_fsoccr90.zip|pce_gaiamons.zip|pce_gaiflame.zip|pce_galaga88.zip|pce_ganbgolf.zip|pce_gecd.zip|pce_gekisboy.zip|pce_genjitsu.zip|pce_genpei.zip|pce_genpemak.zip|pce_gomola.zip|pce_gradius.zip|pce_gunhed.zip|pce_gunhedht.zip|pce_hanataka.zip|pce_haniirod.zip|pce_haniisky.zip|pce_hatris.zip|pce_hitice.zip|pce_hvyunit.zip|pce_idolhana.zip|pce_imagefgt.zip|pce_jchan.zip|pce_jigomegu.zip|pce_jinmu.zip|pce_jinmu1.zip|pce_jleag11.zip|pce_juuouki.zip|pce_juuouki1.zip|pce_katochan.zip|pce_kattobi.zip|pce_kickball.zip|pce_kikikai.zip|pce_kingcasn.zip|pce_klax.zip|pce_knightrs.zip|pce_ktiger.zip|pce_kungfu.zip|pce_kyukyom2.zip|pce_kyukyomj.zip|pce_ladyswrd.zip|pce_ladyswrd1.zip|pce_ldrun.zip|pce_loht.zip|pce_lostsunh.zip|pce_magchase.zip|pce_makaihak.zip|pce_makaipri.zip|pce_makyoden.zip|pce_maniacpw.zip|pce_marchen.zip|pce_mesopot.zip|pce_metlstok.zip|pce_mikkoku.zip|pce_mizubaku.zip|pce_mjgakmld.zip|pce_mjgakmld1.zip|pce_mjgakuen.zip|pce_mjgokusp.zip|pce_mjkaiser.zip|pce_mjwars.zip|pce_mnstprow.zip|pce_momo2.zip|pce_momogdn.zip|pce_momoktsg.zip|pce_momotrbo.zip|pce_moritash.zip|pce_motoroad.zip|pce_motorod2.zip|pce_motorod2a.zip|pce_mrheli.zip|pce_mrheli1.zip|pce_naxopen.zip|pce_naxstad.zip|pce_nazomasq.zip|pce_necromcr.zip|pce_necros.zip|pce_nectaris.zip|pce_nekdodge.zip|pce_neksoccr.zip|pce_neutopi2.zip|pce_neutopia.zip|pce_nhktaidr.zip|pce_nicklaus.zip|pce_nikopun.zip|pce_ninjawar.zip|pce_nryukend.zip|pce_oboccha.zip|pce_opwolf.zip|pce_ordyne.zip|pce_outlive.zip|pce_outrun.zip|pce_override.zip|pce_p47.zip|pce_pachikun.zip|pce_pacland.zip|pce_paranoia.zip|pce_parasol.zip|pce_parodius.zip|pce_pcdenj.zip|pce_pcdenja.zip|pce_pcgenj.zip|pce_pcgenj2.zip|pce_pcgenj3.zip|pce_pcgenj3t.zip|pce_pcgenja.zip|pce_pcpachi.zip|pce_pdrift.zip|pce_pdrift1.zip|pce_pgolf.zip|pce_pleag2.zip|pce_pleag3.zip|pce_pleag4.zip|pce_pleag5.zip|pce_pleag93.zip|pce_pleagas.zip|pce_pleague.zip|pce_populous.zip|pce_populous1.zip|pce_power11.zip|pce_powergat.zip|pce_proyak.zip|pce_proyak89.zip|pce_proyak90.zip|pce_proyak91.zip|pce_psports.zip|pce_psychas.zip|pce_ptennis.zip|pce_ptennwc.zip|pce_puzzlboy.zip|pce_puzznic.zip|pce_quizts.zip|pce_rabiolep.zip|pce_racindam.zip|pce_raiden.zip|pce_rastan2.zip|pce_rockon.zip|pce_rtypep1.zip|pce_rtypep2.zip|pce_ryukyu.zip|pce_sadaki7.zip|pce_saigonin.zip|pce_salamand.zip|pce_scdsys.zip|pce_sci.zip|pce_sdragon.zip|pce_sekigaha.zip|pce_sengokmj.zip|pce_sf2ce.zip|pce_shanghai.zip|pce_sharrier.zip|pce_shingen.zip|pce_shingen1.zip|pce_shinobi.zip|pce_shiryo.zip|pce_shogisi.zip|pce_shogism.zip|pce_shubibi.zip|pce_shubibi2.zip|pce_sidearms.zip|pce_silentd.zip|pce_sindibad.zip|pce_skweek.zip|pce_smcrush.zip|pce_smomo.zip|pce_smomo2.zip|pce_sokoban.zip|pce_soldblad.zip|pce_soldblas.zip|pce_sonson2.zip|pce_spaceinv.zip|pce_spinpair.zip|pce_spirwave.zip|pce_splatth.zip|pce_sssoldr.zip|pce_stratego.zip|pce_stripf2.zip|pce_susano.zip|pce_svolley.zip|pce_takameib.zip|pce_tatsujin.zip|pce_tatsujinp.zip|pce_tatsunok.zip|pce_tblade.zip|pce_tennokoe.zip|pce_terracr2.zip|pce_timcrus2.zip|pce_titan.zip|pce_tnzs.zip|pce_toiletk.zip|pce_toramich.zip|pce_toyshopb.zip|pce_tricky.zip|pce_tsuppari.zip|pce_tvbasket.zip|pce_tvfootbl.zip|pce_tvhockey.zip|pce_twinbee.zip|pce_usaprobs.zip|pce_valkyrie.zip|pce_veigues.zip|pce_victoryr.zip|pce_vigilant.zip|pce_violents.zip|pce_volfied.zip|pce_waiwaimj.zip|pce_wallaby.zip|pce_wataru.zip|pce_wbeach.zip|pce_wcircuit.zip|pce_winshot.zip|pce_wjockey.zip|pce_wonderm.zip|pce_wring.zip|pce_xevious.zip|pce_xserd.zip|pce_xwiber.zip|pce_youkaid.zip|pce_yuyu.zip|pce_zero4c.zip|pce_zero4ca.zip|pce_zipang.zip|pclubys.zip|pclubysa.zip|pdrift.zip|pdrifta.zip|pdrifte.zip|pdriftj.zip|penbros.zip|pengo.zip|pengo2.zip|pengo2u.zip|pengo3u.zip|pengo4.zip|pengob.zip|penta.zip|pestplce.zip|pfghtj.zip|pgear.zip|pgearr1.zip|pgemeni.zip|pgm.zip|pgm3in1.zip|pgmdemo.zip|pgmfrog.zip|pgoal.zip|phoenxp2.zip|photoy2k.zip|photoy2k102.zip|photoy2k104.zip|pipibibs.zip|pipibibsa.zip|pipibibsp.zip|piranha.zip|piranhah.zip|piranhao.zip|pirates.zip|pisces.zip|piscesb.zip|pitfall2.zip|pitfall2a.zip|pitfall2u.zip|pkladies.zip|pkladiesl.zip|pkladiesla.zip|pktgaldx.zip|pktgaldxb.zip|pktgaldxj.zip|pkunwar.zip|pkunwarj.zip|plegends.zip|plegendsj.zip|plumppop.zip|pnickj.zip|pnicku.zip|pnyaa.zip|poknight.zip|pompingw.zip|ponpoko.zip|ponpokov.zip|pootan.zip|pooyan.zip|pooyans.zip|popbounc.zip|popeyeman.zip|popspops.zip|porky.zip|porter.zip|poundfor.zip|poundforj.zip|poundforu.zip|pow.zip|powerins.zip|powerinsa.zip|powerinsb.zip|powerinsj.zip|powj.zip|ppan.zip|ppchamp.zip|prehisle.zip|prehislek.zip|prehisleu.zip|preisle2.zip|progear.zip|progeara.zip|progearj.zip|progearjbl.zip|progearjd.zip|progearud.zip|prtytime.zip|psoldier.zip|pspikes2.zip|puckman.zip|puckmanb.zip|puckmanf.zip|puckmanh.zip|puckmod.zip|pulirula.zip|pulirulaj.zip|pulstar.zip|punipic.zip|punipic2.zip|punipic3.zip|punisher.zip|punisherbz.zip|punisherh.zip|punisherj.zip|punisheru.zip|punkshot.zip|punkshot2.zip|punkshotj.zip|pushman.zip|pushmana.zip|pushmans.zip|puzlstar.zip|puzzldpr.zip|puzzledp.zip|puzzli2.zip|puzzli2s.zip|pwheelsj.zip|pwrinst2.zip|pwrinst2j.zip|py2k2.zip|pzlbowl.zip|pzlbreak.zip|pzloop2.zip|pzloop2j.zip|pzloop2jr1.zip|qad.zip|qadjr.zip|qcrayon.zip|qcrayon2.zip|qgakumon.zip|qjinsei.zip|qndream.zip|qsangoku.zip|qtono1.zip|qtono2j.zip|qtorimon.zip|quartet.zip|quartet2.zip|quartet2a.zip|quarteta.zip|quarth.zip|quiz18k.zip|quizdai2.zip|quizdais.zip|quizdaisk.zip|quizf1.zip|quizhq.zip|quizkof.zip|quizkofk.zip|quizo.zip|qzchikyu.zip|qzkklgy2.zip|qzkklogy.zip|qzquest.zip|qzshowby.zip|rabiolep.zip|rachero.zip|racingb.zip|racknrol.zip|radarscp.zip|radarscp1.zip|raflesia.zip|ragnagrd.zip|ragtime.zip|ragtimea.zip|raiden.zip|raidena.zip|raidenb.zip|raidenk.zip|raident.zip|raidenu.zip|raidenua.zip|raiga.zip|rallybik.zip|rallyx.zip|rallyxa.zip|rallyxm.zip|rallyxmr.zip|rambo3.zip|rambo3p.zip|rambo3u.zip|raphero.zip|rascot.zip|rastan.zip|rastana.zip|rastanu.zip|rastanua.zip|rastanub.zip|rastsag2.zip|rastsaga.zip|rastsagaa.zip|rbff1.zip|rbff1a.zip|rbff2.zip|rbff2h.zip|rbff2k.zip|rbffspec.zip|rbffspeck.zip|rbisland.zip|rbislande.zip|rbislando.zip|rchase.zip|rchasej.zip|redearth.zip|redearthr1.zip|redfoxwp2.zip|redfoxwp2a.zip|redhawk.zip|redhawkb.zip|redhawke.zip|redhawki.zip|redufo.zip|redufob.zip|regulus.zip|reguluso.zip|regulusu.zip|renegade.zip|repulse.zip|rescue.zip|retofinv.zip|retofinv1.zip|retofinv2.zip|revenger.zip|rezon.zip|rezont.zip|ridhero.zip|ridheroh.zip|ringdest.zip|ringdesta.zip|ringdstd.zip|ringohja.zip|riot.zip|riotcity.zip|riskchal.zip|rmancp2j.zip|roboarmy.zip|robocop.zip|robocop2.zip|robocop2j.zip|robocop2u.zip|robocopb.zip|robocopi.zip|robocopj.zip|robocopu.zip|robocopu0.zip|robocopw.zip|rockclim.zip|rockduck.zip|rockman2j.zip|rockmanj.zip|rocktrv2.zip|rohga.zip|rohga1.zip|rohga2.zip|rohgah.zip|rohgau.zip|rollerg.zip|rollergj.zip|rotd.zip|route16.zip|route16a.zip|route16b.zip|routex.zip|rpunch.zip|rtype.zip|rtype2.zip|rtype2j.zip|rtype2jc.zip|rtypeb.zip|rtypej.zip|rtypejp.zip|rtypeleo.zip|rtypeleoj.zip|rtypeu.zip|runark.zip|rushatck.zip|rushcrsh.zip|rygar.zip|rygar2.zip|rygar3.zip|rygarb.zip|rygarj.zip|ryujin.zip|ryukendn.zip|ryukendna.zip|ryukyu.zip|s1945.zip|s1945a.zip|s1945ii.zip|s1945iii.zip|s1945j.zip|s1945jn.zip|s1945k.zip|s1945p.zip|sabotenb.zip|sabotenba.zip|sailormn.zip|sailormnh.zip|sailormnj.zip|sailormnk.zip|sailormno.zip|sailormnoh.zip|sailormnoj.zip|sailormnok.zip|sailormnot.zip|sailormnou.zip|sailormnt.zip|sailormnu.zip|samesame.zip|samesame2.zip|samsh5sp.zip|samsh5sph.zip|samsh5spho.zip|samsho.zip|samsho2k.zip|samsho3.zip|samsho3h.zip|samsho4.zip|samsho4k.zip|samsho5b.zip|samsho5h.zip|samshoh.zip|samuraia.zip|saturnzi.zip|savagere.zip|savgbees.zip|sbbros.zip|sbm.zip|sboblboa.zip|sboblbob.zip|sbomber.zip|sbombera.zip|sbp.zip|sbsgomo.zip|scessjoe.zip|schmeisr.zip|sci.zip|scia.zip|scij.zip|scinegro.zip|sciu.zip|scobra.zip|scobrab.zip|scobras.zip|scobrase.zip|scontra.zip|scontraj.zip|scorpion.zip|scorpiona.zip|scorpionb.zip|scorpionmc.zip|scotrsht.zip|scramb2.zip|scramblb.zip|scramble.zip|scramblebb.zip|scramblebf.zip|scrambler.zip|scrambles.zip|scrambp.zip|scrampt.zip|scregg.zip|sdfight.zip|sdgndmps.zip|sdi.zip|sdib.zip|sdibl.zip|sdodgeb.zip|searchar.zip|searcharj.zip|searcharu.zip|searchey.zip|searchp2.zip|secretag.zip|sectionz.zip|sectionza.zip|seganinj.zip|seganinju.zip|selfeena.zip|semibase.zip|sengoku.zip|sengoku2.zip|sengoku3.zip|sengokuh.zip|setaroul.zip|sf.zip|sf2.zip|sf2acc.zip|sf2acca.zip|sf2accp2.zip|sf2amf.zip|sf2amf2.zip|sf2amf3.zip|sf2amf4.zip|sf2amf5.zip|sf2amf6.zip|sf2amf7.zip|sf2any.zip|sf2b.zip|sf2b2.zip|sf2bhh.zip|sf2ce.zip|sf2cebr.zip|sf2ceea.zip|sf2ceeab2.zip|sf2ceeabl.zip|sf2ceh.zip|sf2ceja.zip|sf2cejab2.zip|sf2cejabl.zip|sf2cejb.zip|sf2cejc.zip|sf2ceua.zip|sf2ceuab2.zip|sf2ceuab3.zip|sf2ceuab4.zip|sf2ceuab5.zip|sf2ceuab6.zip|sf2ceuabl.zip|sf2ceub.zip|sf2ceuc.zip|sf2ceucbl.zip|sf2dkot2.zip|sf2dongb.zip|sf2eb.zip|sf2ebbl.zip|sf2ee.zip|sf2hf.zip|sf2hfj.zip|sf2hfjb.zip|sf2hfjb2.zip|sf2hfu.zip|sf2hfub.zip|sf2j.zip|sf2ja.zip|sf2jc.zip|sf2jf.zip|sf2jh.zip|sf2jl.zip|sf2koryu.zip|sf2koryu2.zip|sf2koryu3.zip|sf2mdt.zip|sf2mdta.zip|sf2mega.zip|sf2mega2.zip|sf2qp1.zip|sf2rb.zip|sf2rb2.zip|sf2rb3.zip|sf2rb4.zip|sf2rb5.zip|sf2rb6.zip|sf2red.zip|sf2red2.zip|sf2stt.zip|sf2thndr.zip|sf2tlona.zip|sf2tlonb.zip|sf2tlonc.zip|sf2ua.zip|sf2ub.zip|sf2uc.zip|sf2ud.zip|sf2ue.zip|sf2uf.zip|sf2ug.zip|sf2ui.zip|sf2uk.zip|sf2v004.zip|sf2v0042.zip|sf2v0043.zip|sf2yyc.zip|sf2yyc2.zip|sfa.zip|sfa2.zip|sfa2u.zip|sfa2ur1.zip|sfa3.zip|sfa3b.zip|sfa3h.zip|sfa3hr1.zip|sfa3u.zip|sfa3ud.zip|sfa3ur1.zip|sfach.zip|sfad.zip|sfar1.zip|sfar2.zip|sfar3.zip|sfau.zip|sfaud.zip|sfiii.zip|sfiii2.zip|sfiii2j.zip|sfiii2n.zip|sfiii3.zip|sfiii3n.zip|sfiii3nr1.zip|sfiii3r1.zip|sfiii3u.zip|sfiii3ur1.zip|sfiiih.zip|sfiiij.zip|sfiiin.zip|sfj.zip|sfp.zip|sfu.zip|sfua.zip|sfx.zip|sfz2a.zip|sfz2ad.zip|sfz2al.zip|sfz2alb.zip|sfz2ald.zip|sfz2alh.zip|sfz2alj.zip|sfz2b.zip|sfz2br1.zip|sfz2h.zip|sfz2j.zip|sfz2jd.zip|sfz2jr1.zip|sfz2n.zip|sfz3a.zip|sfz3ar1.zip|sfz3j.zip|sfz3jr1.zip|sfz3jr2.zip|sfz3jr2d.zip|sfza.zip|sfzach.zip|sfzar1.zip|sfzb.zip|sfzbch.zip|sfzbr1.zip|sfzch.zip|sfzech.zip|sfzh.zip|sfzhch.zip|sfzhr1.zip|sfzj.zip|sfzjr1.zip|sfzjr2.zip|sgemf.zip|sgemfa.zip|sgemfd.zip|sgemfh.zip|sgx_1941.zip|sgx_aldynes.zip|sgx_battlace.zip|sgx_daimakai.zip|sgx_granzort.zip|sgyxz.zip|shackled.zip|shadfrce.zip|shadfrcej.zip|shadfrcejv2.zip|shadoww.zip|shadowwa.zip|shangon.zip|shangon2.zip|shangon3.zip|shangonle.zip|shangonrb.zip|shangonro.zip|sharrier.zip|sharrier1.zip|shdancbl.zip|shdancer.zip|shdancer1.zip|shdancerj.zip|shinfz.zip|shinobi.zip|shinobi1.zip|shinobi2.zip|shinobi3.zip|shinobi4.zip|shinobi5.zip|shinoblb.zip|shinobls.zip|shippumd.zip|shisen2.zip|shocking.zip|shocktr2.zip|shocktro.zip|shocktroa.zip|shootbul.zip|sidepckt.zip|sidepcktb.zip|sidepcktb2.zip|sidepcktj.zip|silentd.zip|silentdj.zip|silentdu.zip|silkroad.zip|silkroada.zip|silkworm.zip|silkwormb.zip|silkwormj.zip|silvmil.zip|simpsons.zip|simpsons2p.zip|simpsons2p2.zip|simpsons2pa.zip|simpsons2pj.zip|simpsons4pa.zip|sinvasn.zip|sinvasnb.zip|sjryuko.zip|sjryuko1.zip|skelagon.zip|skingame.zip|skingame2.zip|skybase.zip|skyfox.zip|skykid.zip|skykidd.zip|skykido.zip|skykids.zip|skylancr.zip|skylancre.zip|skyraidr.zip|skysmash.zip|skywolf.zip|skywolf2.zip|skywolf3.zip|slammasa.zip|slammash.zip|slammast.zip|slammastu.zip|slampic.zip|slapfigh.zip|slapfighb1.zip|slapfighb2.zip|slapfighb3.zip|slapshot.zip|slyspy.zip|slyspy2.zip|smbomb.zip|smbombr1.zip|smgp.zip|smgp5.zip|smgp6.zip|smgpj.zip|smgpja.zip|smgpu.zip|smgpu1.zip|smgpu2.zip|smooncrs.zip|smw.zip|smwa.zip|smwj.zip|smwu.zip|snapjack.zip|snapper.zip|sngkace.zip|snowbro2.zip|snowbro3.zip|snowbros.zip|snowbrosa.zip|snowbrosb.zip|snowbrosc.zip|snowbrosd.zip|snowbrosj.zip|snowbroswb.zip|socbrawl.zip|socbrawlh.zip|sokonuke.zip|soldivid.zip|solfigtr.zip|solomon.zip|solomonj.zip|sonicbom.zip|sonicwi.zip|sonicwi2.zip|sonicwi3.zip|sonofphx.zip|sonson.zip|sonsonj.zip|sotsugyo.zip|spacbat2.zip|spacbatt.zip|spacecho.zip|spacedx.zip|spacedxj.zip|spacedxo.zip|spacegun.zip|spacempr.zip|spang.zip|spangj.zip|spartanx.zip|spatter.zip|spcdrag.zip|spcdraga.zip|spcpostn.zip|spctbird.zip|spdcoin.zip|speakres.zip|spec2k.zip|speedspn.zip|spelunk2.zip|spelunkr.zip|spelunkrj.zip|spf2t.zip|spf2ta.zip|spf2td.zip|spf2th.zip|spf2xj.zip|spf2xjd.zip|spidermi.zip|spinlbrk.zip|spinlbrkj.zip|spinlbrku.zip|spinmast.zip|sprglbpg.zip|sprglobp.zip|springer.zip|spy.zip|spyu.zip|squash.zip|sraider.zip|srdarwin.zip|srdarwinj.zip|srdmissn.zip|srumbler.zip|srumbler2.zip|srumbler3.zip|ssanchan.zip|sscandal.zip|ssf2.zip|ssf2a.zip|ssf2ar1.zip|ssf2d.zip|ssf2h.zip|ssf2j.zip|ssf2jr1.zip|ssf2jr2.zip|ssf2t.zip|ssf2ta.zip|ssf2tad.zip|ssf2tb.zip|ssf2tbd.zip|ssf2tbh.zip|ssf2tbj.zip|ssf2tbr1.zip|ssf2td.zip|ssf2tu.zip|ssf2tur1.zip|ssf2u.zip|ssf2ud.zip|ssf2xj.zip|ssf2xjd.zip|ssf2xjr.zip|ssi.zip|ssideki.zip|ssideki2.zip|ssideki3.zip|ssideki4.zip|ssmissin.zip|ssoldier.zip|ssriders.zip|ssridersabd.zip|ssridersadd.zip|ssridersb.zip|ssriderseaa.zip|ssridersebc.zip|ssridersebd.zip|ssridersjac.zip|ssridersjbd.zip|ssridersuab.zip|ssridersuac.zip|ssridersubc.zip|ssridersuda.zip|sstarcrs.zip|sstriker.zip|sstrikera.zip|stagger1.zip|stakwin.zip|stakwin2.zip|starfght.zip|starfgmc.zip|starjack.zip|starjacks.zip|stera.zip|stg.zip|stoneage.zip|strahl.zip|strahla.zip|stratgys.zip|stratgyx.zip|stratof.zip|stratvox.zip|stratvoxb.zip|streakng.zip|streaknga.zip|streetsm.zip|streetsm1.zip|streetsmj.zip|streetsmw.zip|strfbomb.zip|strhoop.zip|strider.zip|striderj.zip|striderjr.zip|striderua.zip|striv.zip|striv2.zip|strkfgtr.zip|strongx.zip|sucasino.zip|sunaq.zip|supbtime.zip|supbtimea.zip|supbtimej.zip|superbar.zip|superbon.zip|superchs.zip|superchsj.zip|superchsu.zip|superg.zip|supergx.zip|superman.zip|supermanj.zip|supermanu.zip|superspy.zip|supmodel.zip|suprglob.zip|suprheli.zip|suprleag.zip|suprloco.zip|suprlocoo.zip|suprtrio.zip|suratk.zip|suratka.zip|suratkj.zip|svc.zip|svcboot.zip|svcpcb.zip|svcpcba.zip|svcplus.zip|svcplusa.zip|svcsplus.zip|svg.zip|svgpcb.zip|svolley.zip|svolleyk.zip|svolleyu.zip|swarm.zip|swat.zip|swatpolc.zip|syscheck.zip|tangtang.zip|taotaido.zip|taotaidoa.zip|tazmani2.zip|tazmania.zip|tazzmang.zip|tdpgal.zip|tdragon.zip|tdragon1.zip|tdragon2.zip|tdragon2a.zip|tdragonb.zip|teddybb.zip|teddybbo.zip|teddybbobl.zip|tekipaki.zip|tengai.zip|tengaij.zip|terracre.zip|terracrea.zip|terracren.zip|terracreo.zip|terraf.zip|terrafb.zip|terrafjb.zip|terrafu.zip|tetrbx.zip|tetris.zip|tetris1.zip|tetris2.zip|tetris3.zip|tetrisbl.zip|tetrist.zip|tetrista.zip|tetrsark.zip|tg_acrush.zip|tg_advislnd.zip|tg_aeroblst.zip|tg_airzonk.zip|tg_ballistx.zip|tg_batlroyl.zip|tg_blazlazr.zip|tg_blodwolf.zip|tg_bombman.zip|tg_bombmn93.zip|tg_bonk.zip|tg_bonk2.zip|tg_bonk3.zip|tg_boxyboy.zip|tg_bravoman.zip|tg_cadash.zip|tg_cdsys.zip|tg_chasehq.zip|tg_chewman.zip|tg_chinawar.zip|tg_cratermz.zip|tg_cybrcore.zip|tg_darkwing.zip|tg_daviscup.zip|tg_ddungw.zip|tg_deadmoon.zip|tg_deepblue.zip|tg_devlcrsh.zip|tg_dragcrse.zip|tg_dropoff.zip|tg_dspirit.zip|tg_dungexpl.zip|tg_falcon.zip|tg_fantzone.zip|tg_finallap.zip|tg_forevbox.zip|tg_galaga90.zip|tg_ghostman.zip|tg_griffon.zip|tg_gunboat.zip|tg_hitice.zip|tg_impossam.zip|tg_jchan.zip|tg_jjnjeff.zip|tg_keithcor.zip|tg_kingcasn.zip|tg_klax.zip|tg_legaxe.zip|tg_legaxe2.zip|tg_loht.zip|tg_magchase.zip|tg_miltrymd.zip|tg_motoroad.zip|tg_neutopi2.zip|tg_neutopia.zip|tg_nicklaus.zip|tg_nightcr.zip|tg_nspirit.zip|tg_ordyne.zip|tg_pacland.zip|tg_panzakb.zip|tg_parasol.zip|tg_pgolf.zip|tg_psychos.zip|tg_raiden.zip|tg_rtype.zip|tg_samuraig.zip|tg_scdsys.zip|tg_sharrier.zip|tg_shockman.zip|tg_sidearms.zip|tg_silentd.zip|tg_sinistrn.zip|tg_soldblad.zip|tg_somerass.zip|tg_splatth.zip|tg_sssoldr.zip|tg_svolley.zip|tg_taknhoop.zip|tg_talespin.zip|tg_tigerrod.zip|tg_timcrus.zip|tg_timeball.zip|tg_tricky.zip|tg_turrican.zip|tg_tvbasket.zip|tg_tvfootbl.zip|tg_tvhockey.zip|tg_veigues.zip|tg_victoryr.zip|tg_vigilant.zip|tg_wbeach.zip|tg_wcbasebl.zip|tg_wctennis.zip|tg_wscomp.zip|tg_yobro.zip|tgm2.zip|tgm2p.zip|tharrier.zip|tharrieru.zip|theend.zip|theends.zip|theglad.zip|theglada.zip|thegladpcb.zip|theglob.zip|theglob2.zip|theglob3.zip|theglobp.zip|thepitm.zip|theroes.zip|thetogyu.zip|thndblst.zip|thndrbld.zip|thndrbld1.zip|thndrx2.zip|thndrx2a.zip|thndrx2j.zip|thndzone.zip|thndzone4.zip|thndzonea.zip|thndzonej.zip|thoop.zip|thunderl.zip|thunderx.zip|thunderxa.zip|thunderxb.zip|thunderxj.zip|thundfox.zip|thundfoxj.zip|thundfoxu.zip|tigerh.zip|tigerhb1.zip|tigerhb2.zip|tigerhb3.zip|tigerhj.zip|tigeroad.zip|tigeroadb.zip|timefgtr.zip|timescan.zip|timescan1.zip|timesup.zip|tjumpman.zip|tkdensho.zip|tkdenshoa.zip|tknight.zip|tmht.zip|tmht22pe.zip|tmht2p.zip|tmht2pa.zip|tmhta.zip|tmnt.zip|tmnt2.zip|tmnt22pu.zip|tmnt2a.zip|tmnt2pj.zip|tmnt2po.zip|tmnti.zip|tmntia.zip|tmntj.zip|tmntu.zip|tmntua.zip|tndrcade.zip|tndrcadej.zip|tnzs.zip|tnzsj.zip|tnzsjo.zip|tnzso.zip|tnzsop.zip|toki.zip|tokia.zip|tokib.zip|tokio.zip|tokiob.zip|tokioo.zip|tokiou.zip|tokiu.zip|tophuntr.zip|tophuntrh.zip|toppyrap.zip|topsecrt.zip|topspeed.zip|topspeedu.zip|toramich.zip|toryumon.zip|totcarib.zip|toutrun.zip|toutrun1.zip|toutrun2.zip|toutrun3.zip|toutrunj.zip|tpgolf.zip|trally.zip|treahunt.zip|trigon.zip|triothep.zip|triothepj.zip|triplep.zip|triplepa.zip|triplfun.zip|tripool.zip|tripoola.zip|trojan.zip|trojana.zip|trojanj.zip|trojanr.zip|trophyh.zip|truxton.zip|truxton2.zip|tst_galx.zip|ttmahjng.zip|tturf.zip|tturfu.zip|tumbleb.zip|tumbleb2.zip|tumblep.zip|tumblepj.zip|turbofrc.zip|turfmast.zip|turkhunt.zip|turpin.zip|turpins.zip|turtles.zip|twinactn.zip|twinadv.zip|twinadvk.zip|twineagl.zip|twinhawk.zip|twinhawku.zip|twinkle.zip|twinspri.zip|twocrude.zip|tws96.zip|typhoon.zip|uballoon.zip|uccops.zip|uccopsar.zip|uccopsj.zip|uccopsu.zip|uecology.zip|ultraman.zip|umanclub.zip|uniwars.zip|unkpacg.zip|unsquad.zip|uopoko.zip|uopokoj.zip|upndown.zip|upndownu.zip|usclssic.zip|utoukond.zip|vampj.zip|vampja.zip|vampjr1.zip|vandyke.zip|vandykeb.zip|vandykejal.zip|vandykejal2.zip|vanvan.zip|vanvanb.zip|vanvank.zip|vaportra.zip|vaportra3.zip|vaportrau.zip|varth.zip|varthj.zip|varthr1.zip|varthu.zip|vendetta.zip|vendetta2p.zip|vendetta2pd.zip|vendetta2pu.zip|vendettaj.zip|vendettar.zip|venus.zip|vfive.zip|vhunt2.zip|vhunt2d.zip|vhunt2r1.zip|vhuntj.zip|vhuntjr1.zip|vhuntjr1s.zip|vhuntjr2.zip|victnine.zip|viewpoin.zip|vigilant.zip|vigilant1.zip|vigilantj.zip|vigilantu.zip|vigilantu2.zip|vimana.zip|vimanaj.zip|vimanan.zip|viofight.zip|viofightj.zip|viofightu.zip|vliner.zip|vlinero.zip|vmetal.zip|vmetaln.zip|volfied.zip|volfiedj.zip|volfiedjo.zip|volfiedu.zip|vpool.zip|vsav.zip|vsav2.zip|vsav2d.zip|vsava.zip|vsavd.zip|vsavh.zip|vsavj.zip|vsavu.zip|vulcan.zip|vulcana.zip|vulcanb.zip|vulgus.zip|vulgusa.zip|vulgusj.zip|wakuwak7.zip|wallc.zip|wallca.zip|warofbug.zip|warofbugg.zip|warofbugu.zip|warriorb.zip|warzard.zip|warzardr1.zip|watrball.zip|wb3.zip|wb31.zip|wb32.zip|wb33.zip|wb34.zip|wb35.zip|wb3bbl.zip|wbdeluxe.zip|wboy.zip|wboy2.zip|wboy2u.zip|wboy3.zip|wboy4.zip|wboy5.zip|wboyo.zip|wboyu.zip|wc90.zip|wc90a.zip|wc90b.zip|wc90b1.zip|wc90b2.zip|wc90t.zip|welltris.zip|welltrisj.zip|weststry.zip|wh1.zip|wh1h.zip|wh1ha.zip|wh2.zip|wh2j.zip|whoopee.zip|whp.zip|wiggie.zip|wildfang.zip|willow.zip|willowj.zip|willowo.zip|wilytowr.zip|wintbob.zip|wits.zip|wizdfire.zip|wizdfireu.zip|wjammers.zip|wlstar.zip|wmatch.zip|wndrplnt.zip|wof.zip|wof3js.zip|wof3jsa.zip|wof3sj.zip|wof3sja.zip|wofa.zip|wofah.zip|wofaha.zip|wofahb.zip|wofb.zip|wofch.zip|woffr.zip|wofh.zip|wofha.zip|wofhfh.zip|wofj.zip|wofjh.zip|wofr1.zip|wofsj.zip|wofsja.zip|wofsjb.zip|wofu.zip|wolffang.zip|wonder3.zip|wondl96.zip|wondstck.zip|woodpeca.zip|woodpeck.zip|wownfant.zip|wrestwar.zip|wrestwar1.zip|wrestwar2.zip|wrofaero.zip|wschamp.zip|wschampa.zip|wschampb.zip|wwallyj.zip|wwallyja.zip|wwfsstar.zip|wwfsstarb.zip|wwfsstarj.zip|wwfsstaru.zip|wwfsstarua.zip|wwfwfest.zip|wwfwfesta.zip|wwfwfestb.zip|wwfwfestj.zip|wwfwfestk.zip|xmcota.zip|xmcotaa.zip|xmcotaar1.zip|xmcotah.zip|xmcotahr1.zip|xmcotaj.zip|xmcotaj1.zip|xmcotaj2.zip|xmcotaj3.zip|xmcotajr.zip|xmcotar1.zip|xmcotar1d.zip|xmcotau.zip|xmen.zip|xmen2pa.zip|xmen2pe.zip|xmen2pj.zip|xmen6p.zip|xmen6pu.zip|xmena.zip|xmenaa.zip|xmene.zip|xmenj.zip|xmultipl.zip|xmultiplm72.zip|xmvsf.zip|xmvsfa.zip|xmvsfar1.zip|xmvsfar2.zip|xmvsfb.zip|xmvsfh.zip|xmvsfj.zip|xmvsfjr1.zip|xmvsfjr2.zip|xmvsfr1.zip|xmvsfu.zip|xmvsfu1d.zip|xmvsfur1.zip|xorworld.zip|yanchamr.zip|yankeedo.zip|yesnoj.zip|youjyudn.zip|yuyugogo.zip|zedblade.zip|zeropnt.zip|zeropnt2.zip|zeropnta.zip|zeropntj.zip|zerotime.zip|zerowing.zip|zerowing2.zip|zerozone.zip|zigzag.zip|zigzag2.zip|zingzip.zip|zintrckb.zip|zintrkcd.zip|zipzap.zip|zombraid.zip|zupapa.zip|zzyzzyxx.zip|zzyzzyxx2.zip|";
var MOBILE_CONTROLS_VISIBLE = getBooleanSetting("MOBILE_CONTROLS_VISIBLE");

// CHECKING THE USER LANGUAGE
if (userLanguage.substring(0,2) === "ru")
{
	STRING_HOW_DESKTOP1 = "Как это работает?";
	STRING_HOW_DESKTOP2 = "Нажмите красный значок, расположенный в нижней части экрана, а затем выберите на своем компьютере файл игры, в которую вы хотите играть.<br>Чтобы играть в игру для DOS, вам необходимо создать ZIP-файл. со всеми файлами игры и откройте его в Emulatrix.<br>При загрузке он попытается запустить AUTORUN.BAT.<br>Для загрузки виртуальных машин необходимо создать ZIP-файл с образом диска с именем c .img.";
	STRING_HOW_MOBILE = "Нажмите на значок ниже,<br>выберите ПЗУ на своем телефоне<br>и начните играть на MegaDrive,<br>NES, SNES, Gameboy, MAME32 и DOS.";
	STRING_HOW_MOBILE_IOS = "Emulatrix<br>несовместим<br>с системами iOS."
	STRING_SAFARI = "Emulatrix<br>несовместим<br>с веб-браузером Safari."
	STRING_INSERTCOIN = "ВСТАВИТЬ МОНЕТУ = 1";
	STRING_SELECTGAME = "Выбрать игру";
	STRING_UPLOADFILE = "Загрузить файл";
	STRING_DOWNLOADFILE = "Загрузить файл";
	STRING_LOADSTATE = "Загрузить состояние игры";
	STRING_SAVESTATE = "Загрузить состояние игры";
	STRING_GOBACK = "Вернуться в главное меню";
	STRING_FULLSCREEN = "Полноэкранный режим";
	STRING_RELOAD = "Перезагрузить игру";
	STRING_READINGFILE = "Чтение файла...";
	STRING_STARTINGEMULATOR = "Запуск эмулятора...";
	STRING_SELECTFOLDER = "Выберите папку";
	STRING_KEYBOARDANDMOUSE = "КЛАВИАТУРА<br>И МЫШЬ";
	STRING_ERROREXTENSION_TITLE = "СООБЩЕНИЕ";
	STRING_ERROREXTENSION_MESSAGE = "Убедитесь, что файл игры имеет разрешенный<br>формат: NES, SMC, SFC, SRM, GB, GBC,<br>GBA, BIN, SMD, MD или ZIP.";
	STRING_ERROREXTENSION_ACCEPT = "ОК";
	STRING_SAVING = "Идет сохранение. Подождите...";
	STRING_LOADING = "Идет загрузка. Подождите...";
	STRING_SAVED = "Файл сохранен в папке 'Загрузки'";
	STRING_SAVED_ERROR = "Состояние игры не найдено.";
	STRING_SOUND = "Звук игры";
	STRING_DECREASE = "Уменьшить количество циклов";
	STRING_INCREASE = "Увеличить количество циклов";
	STRING_MOBILE_CONTROLS_HIDDEN = "МОБИЛЬНЫЕ УПРАВЛЕНИЯ СКРЫТЫ";
}
else if (userLanguage.substring(0,2) === "es")
{
	STRING_HOW_DESKTOP1 = "&iquest;C&oacute;mo funciona?";
	STRING_HOW_DESKTOP2 = "Haga click en el &iacute;cono rojo ubicado en el extremo inferior de la pantalla y luego seleccione de su computadora el archivo del juego que desea jugar.<br>Para cargar juegos de DOS, crea un archivo ZIP con los archivos del juego y &aacute;brelo con Emulatrix.<br>Al iniciarse, se intentar&aacute; ejecutar AUTORUN.BAT.<br>Para cargar maquinas virtuales, crea un archivo ZIP con la imagen del disco con el nombre c.img.";
	STRING_HOW_MOBILE = "Presiona el &iacute;cono inferior,<br>selecciona un ROM de tu m&oacute;vil<br>y comienza a jugar al MegaDrive,<br>NES, SNES, Gameboy, MAME32 y DOS.";
	STRING_HOW_MOBILE_IOS = "Emulatrix<br>no es compatible<br>con sistemas iOS."
	STRING_SAFARI = "Emulatrix<br>no es compatible<br>con el navegador Web Safari."
	STRING_INSERTCOIN = "INSERTAR MONEDA = 1";
	STRING_SELECTGAME = "Seleccionar juego";
	STRING_UPLOADFILE = "Subir archivo";
	STRING_DOWNLOADFILE = "Descargar archivo";
	STRING_LOADSTATE = "Subir estado del juego";
	STRING_SAVESTATE = "Descargar estado del juego";
	STRING_GOBACK = "Volver al men" + String.fromCharCode(250) + " principal";
	STRING_FULLSCREEN = "Pantalla completa";
	STRING_RELOAD = "Recargar juego";
	STRING_READINGFILE = "Leyendo archivo...";
	STRING_STARTINGEMULATOR = "Iniciando emulador...";
	STRING_SELECTFOLDER = "Indique la carpeta";
	STRING_KEYBOARDANDMOUSE = "TECLADO<br>Y MOUSE";
	STRING_ERROREXTENSION_TITLE = "MENSAJE";
	STRING_ERROREXTENSION_MESSAGE = "Por favor verifique que el juego se encuentre en<br>formato NES, SMC, SFC, SRM, GB, GBC,<br>GBA, BIN, SMD, MD o ZIP.";
	STRING_ERROREXTENSION_ACCEPT = "Aceptar";
	STRING_SAVING = "Guardando, por favor espere...";
	STRING_LOADING = "Cargando, por favor espere...";
	STRING_SAVED = "Archivo guardado en Descargas.";
	STRING_SAVED_ERROR = "Estado del juego no encontrado.";
	STRING_SOUND = "Sonido en el juego";
	STRING_DECREASE = "Reducir ciclos";
	STRING_INCREASE = "Incrementar ciclos";
	STRING_MOBILE_CONTROLS_HIDDEN = "CONTROLES T&Aacute;CTILES DESACTIVADOS";
}
else
{
	STRING_HOW_DESKTOP1 = "How does it work?";
	STRING_HOW_DESKTOP2 = "Please click in the red icon located at the bottom of the screen and then select from your computer the file of the game that you want to play.<br>In order to play a DOS game, you must create a ZIP file with all the game files and open it in Emulatrix.<br>On booting, it will try to run AUTORUN.BAT.<br>In order to boot virtual machines, you must create a ZIP file with the disk image with the name c.img.";
	STRING_HOW_MOBILE = "Touch the icon below,<br>select a ROM from your phone<br>and start playing to the MegaDrive,<br>NES, SNES, Gameboy, MAME32 and DOS.";
	STRING_HOW_MOBILE_IOS = "Emulatrix<br>is not compatible<br>with iOS systems."
	STRING_SAFARI = "Emulatrix<br>is not compatible<br>with the Safari Web browser."
	STRING_INSERTCOIN = "INSERT COIN = 1";
	STRING_SELECTGAME = "Select game";
	STRING_UPLOADFILE = "Upload file";
	STRING_DOWNLOADFILE = "Download file";
	STRING_LOADSTATE = "Upload game state";
	STRING_SAVESTATE = "Download game state";
	STRING_GOBACK = "Go back to the main menu";
	STRING_FULLSCREEN = "Fullscreen";
	STRING_RELOAD = "Reload game";
	STRING_READINGFILE = "Reading file...";
	STRING_STARTINGEMULATOR = "Starting emulator...";
	STRING_SELECTFOLDER = "Select the folder";
	STRING_KEYBOARDANDMOUSE = "KEYBOARD<br>AND MOUSE";
	STRING_ERROREXTENSION_TITLE = "MESSAGE";
	STRING_ERROREXTENSION_MESSAGE = "Please check that the game file has an allowed<br>format: NES, SMC, SFC, SRM, GB, GBC,<br>GBA, BIN, SMD, MD or ZIP.";
	STRING_ERROREXTENSION_ACCEPT = "OK";
	STRING_SAVING = "Saving, please wait...";
	STRING_LOADING = "Loading, please wait...";
	STRING_SAVED = "File saved in Downloads.";
	STRING_SAVED_ERROR = "Game state not found.";
	STRING_SOUND = "Game sound";
	STRING_DECREASE = "Decrease cycles";
	STRING_INCREASE = "Increase cycles";
	STRING_MOBILE_CONTROLS_HIDDEN = "MOBILE CONTROLS HIDDEN";
}

function runEmulator(files)
{
	try
	{
		// GETTING THE FILE EXTENSION
		var extension = files[0].name.split(".").pop().toLowerCase();

		// CHECKING THE FILE EXTENSION
		// if (extension=="nes" | extension=="smc" | extension=="sfc" | extension=="srm" | extension=="gb" | extension=="gbc" | extension=="gba" | extension=="bin" | extension=="smd" | extension=="md" | extension=="zip")
		if (["nes" ,"smc" ,"sfc" ,"srm" ,"gb" ,"gbc" ,"gba" ,"bin" ,"smd" ,"md" ,"zip"].includes(extension))
		{
			// CLEARING THE CONTAINER FROM ANY GAME IN PROGRESS
			document.getElementById("container").contentDocument.location.replace("about:blank");

			var filereader = new FileReader();
			filereader.file_name = files[0].name;
			filereader.onload = function()
			{
				// SETTING THE FILE CONTENT FOR THE EMULATORS
				ROMDATA = this.result;
				ROMNAME = files[0].name;
				ROMNAME = ROMNAME;
				DOSGAME = false;

				// HIDING THE GUI
				document.getElementsByClassName("gui_container")[0].style.display = "none";

				// DISPLAYING THE EMULATOR CONTAINER
				document.getElementById("container").style.display = "block";
				document.getElementById("container").focus();

				// HIDING THE PLEASE WAIT ANIMATION
				document.getElementsByClassName("gui_pleasewait")[0].style.display = "none";

				// CLEARING THE SELECTED FILE VALUE
				document.getElementById("gui_controls_file").value = null;

				// CHECKING IF IT IS A MOBILE DEVICE
				if (isMobileDevice() === true)
				{
					// SHOWING THE GO BACK BUTTON (FOR MOBILE DEVICES)
					document.getElementsByClassName("gui_goback_mobile")[0].style.display = "block";
				}

				// UPDATING THE TOOLTIPS FOR THE DOWNLOAD AND UPLOAD ICON
				document.getElementsByClassName("gui_download")[0].title = STRING_SAVESTATE;
				document.getElementsByClassName("gui_uploadsave")[0].title = STRING_LOADSTATE;

				// UPDATING THE WEB TITLE
				parent.updateTitle();

				// CHECKING THE ROM EXTENSION AND STARTING THE REQUIRED EMULATOR FOR THE SELECTED ROM
				if (extension === "nes")
				{
					// LOADING THE NINTENDO EMULATOR
					document.getElementById("container").contentDocument.location.replace("./platforms/nintendo/Emulatrix_Nintendo.htm");
				}
				else if (["smc" ,"sfc" ,"srm"].includes(extension))
				{
					// LOADING THE SUPER NINTENDO EMULATOR
					document.getElementById("container").contentDocument.location.replace("./platforms/nintendo/Emulatrix_SuperNintendo.htm");
				}
				else if (["gb", "gbc"].includes(extension))
				{
					// LOADING THE GAME BOY AND GAMEBOY COLOR EMULATOR
					document.getElementById("container").contentDocument.location.replace("./platforms/gb/Emulatrix_GameBoy.htm");
				}
				else if (extension === "gba")
				{
					// LOADING THE GAME BOY ADVANCE EMULATOR
					document.getElementById("container").contentDocument.location.replace("./platforms/gb/Emulatrix_GameBoyAdvance.htm");
				}
				else if (["bin", "smd", "md"].includes(extension))
				{
					// LOADING THE SEGA GENESIS EMULATOR
					document.getElementById("container").contentDocument.location.replace("./platforms/sega/Emulatrix_SegaGenesis.htm");
				}
				else if (extension === "zip")
				{
					// RENAMING THE ROMNAME TO LOWER CASE FOR LATER CHECKING
					ROMNAME = ROMNAME.toLowerCase();

					// CHECKING IF THE FILE IS A MAME2003 GAME
					if (MAME2003_ROM_LIST.indexOf("|" + ROMNAME + "|")>-1)
					{
						// LOADING THE MAME2003 EMULATOR
						document.getElementById("container").contentDocument.location.replace("./platforms/mame/Emulatrix_MAME2003.htm");
					}
					// CHECKING IF THE FILE IS A MAME32 GAME
					else if (MAME32_ROM_LIST.indexOf("|" + ROMNAME + "|")>-1)
					{
						// LOADING THE MAME32 EMULATOR
						document.getElementById("container").contentDocument.location.replace("./platforms/mame/Emulatrix_MAME32.htm");
					}
					else
					{
						// SETTING THAT IT'S A DOS GAME
						DOSGAME = true;

						// UPDATING THE TOOLTIPS FOR THE DOWNLOAD AND UPLOAD ICON
						document.getElementsByClassName("gui_download")[0].title = STRING_DOWNLOADFILE;
						document.getElementsByClassName("gui_uploadsave")[0].title = STRING_UPLOADFILE;

						// LOADING THE DOSBOX EMULATOR
						document.getElementById("container").contentDocument.location.replace("./platforms/dos/Emulatrix_DOSBox.htm");
					}
				}

				// SHOWING ALL THE BUTTONS
				goBackButtonResetIncrement();
			};

			// SHOWING THE PLEASE WAIT ANIMATION
			document.getElementsByClassName("gui_pleasewait")[0].style.display = "block";

			// READING THE SELECTED FILE
			filereader.readAsArrayBuffer(files[0]);
		}
		else
		{
			// CLEARING THE SELECTED FILE VALUE
			document.getElementById("gui_controls_file").value = null;

			// SHOWING AN ALERT MESSAGE WITH ALL THE COMPATIBLE FILE FORMATS
			alertCustom(STRING_ERROREXTENSION_TITLE,STRING_ERROREXTENSION_MESSAGE,STRING_ERROREXTENSION_ACCEPT);
		}
	}
	catch(err)
	{
	}
}

function reload()
{
	try
	{
		// CHECKING IF THE GAME IS A DOS GAME
		if (DOSGAME==true)
		{
			// RELOADING THE IFRAME
			document.getElementById("container").contentDocument.location.reload(true);
		}
		else
		{
			// RUNNING THE FUNCTION THAT IS LOCATED WITHIN THE IFRAME DOCUMENT TO RELOAD THE ROM
			document.getElementById("container").contentWindow.reloadROM();
		}
	}
	catch(err)
	{
	}
}

function goBack()
{
	try
	{
		// CHECKING IF THE GAME IS RUNNING IN FULLSCREEN
		if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height))
		{
			// GOING BACK TO WINDOW MODE
			document.exitFullscreen();
		}

		// SHOWING THE GUI
		document.getElementsByClassName("gui_container")[0].style.display = "block";

		// CLEARING THE CONTAINER FROM ANY GAME IN PROGRESS
		document.getElementById("container").contentDocument.location.replace("about:blank");

		// HIDING THE CONTAINER
		document.getElementById("container").style.display = "none";

		// HIDING THE GO BACK BUTTON (DESKTOP AND MOBILE)
		document.getElementsByClassName("gui_goback")[0].style.display = "none";
		document.getElementsByClassName("gui_goback_mobile")[0].style.display = "none";

		// HIDING THE FULLSCREEN BUTTON (DESKTOP ONLY)
		document.getElementsByClassName("gui_fullscreen")[0].style.display = "none";

		// HIDING THE DECREASE CYCLES BUTTON (DESKTOP AND MOBILE)
		document.getElementsByClassName("gui_decrease")[0].style.display = "none";
		document.getElementsByClassName("gui_decrease_mobile")[0].style.display = "none";

		// HIDING THE INCREASE CYCLES BUTTON (DESKTOP AND MOBILE)
		document.getElementsByClassName("gui_increase")[0].style.display = "none";
		document.getElementsByClassName("gui_increase_mobile")[0].style.display = "none";

		// HIDING THE RELOAD BUTTON (DESKTOP AND MOBILE)
		document.getElementsByClassName("gui_reload")[0].style.display = "none";
		document.getElementsByClassName("gui_reload_mobile")[0].style.display = "none";

		// HIDING THE DOWNLOAD BUTTON (DESKTOP AND MOBILE)
		document.getElementsByClassName("gui_download")[0].style.display = "none";
		document.getElementsByClassName("gui_download_mobile")[0].style.display = "none";

		// HIDING THE UPLOAD SAVE BUTTON (DESKTOP AND MOBILE)
		document.getElementsByClassName("gui_uploadsave")[0].style.display = "none";
		document.getElementsByClassName("gui_uploadsave_mobile")[0].style.display = "none";

		// HIDING THE SOUND TOGGLE BUTTON (DESKTOP AND MOBILE)
		document.getElementById("gui_sound_handler").style.display = "none";
		document.getElementById("gui_sound_handler_mobile").style.display = "none";

		// SETTING THAT THE ACTION BUTTONS MUST BE HIDDEN
		ACTION_BUTTONS_VISIBLE = false;
	}
	catch(err)
	{
	}
}

async function openGameList(url) {
	const response = await fetch(url)
	const json = await response.json();
	const romsList = document.getElementById('roms-list')
	const romsItems = document.querySelector('#roms-list .items')
	json.forEach(rom => {
		const div = document.createElement('div')
		div.setAttribute("onclick","getRom('" + rom.bin + "');");
		div.setAttribute("class","rom-item");
		const img = document.createElement('img')
		img.src = rom.png
		div.appendChild(img)
		romsItems.appendChild(div)
	})
	romsList.classList.remove('hide')
}

async function getRom(romName) {
	const response = await fetch(romName);
	const blob = await response.blob();
	if(!blob.size) return;

	const file = new File([blob], romName, {type: 'text/plain'});
	const dt = new DataTransfer();
	dt.items.add(file);
	const file_list = dt.files;
	runEmulator(file_list)
}

function closeRomList() {
	document.getElementById('roms-list').classList.add('hide')
	document.querySelector('#roms-list .items').innerHTML = ''
}

function ROMState_DownloadFile()
{
	try
	{
		// RUNNING THE FUNCTION THAT IS LOCATED WITHIN THE IFRAME DOCUMENT TO DOWNLOAD THE ROM STATE
		document.getElementById("container").contentWindow.downloadROMState();
	}
	catch(err)
	{
	}
}

function ROMState_UploadFile()
{
	try
	{
		// RUNNING THE FUNCTION THAT IS LOCATED WITHIN THE IFRAME DOCUMENT TO UPLOAD THE ROM STATE
		document.getElementById("container").contentWindow.uploadROMState();
	}
	catch(err)
	{
	}
}

function ROMState_ToggleSound()
{
	try
	{
		// CHECKING IF THE SOUND IS ENABLED
		if (GAME_SOUND_ENABLED==true)
		{
			// DISABLING THE SOUND
			GAME_SOUND_ENABLED = false;
		}
		else
		{
			// ENABLIND THE SOUND
			GAME_SOUND_ENABLED = true;
		}

		// UPDATING THE SOUND ICON
		updateSoundIcon();

		// SAVING THE USER PREFERENCE
		setBooleanSetting("GAME_SOUND_ENABLED", GAME_SOUND_ENABLED);

		// RUNNING THE FUNCTION THAT IS LOCATED WITHIN THE IFRAME DOCUMENT TO TOGGLE THE SOUND STATUS
		document.getElementById("container").contentWindow.toggleSound(GAME_SOUND_ENABLED);
	}
	catch(err)
	{
	}
}

function decreaseCycles()
{
	try
	{
		// RUNNING THE FUNCTION THAT IS LOCATED WITHIN THE IFRAME DOCUMENT TO DECREASE CYCLES
		document.getElementById("container").contentWindow.decreaseCycles();
	}
	catch(err)
	{
	}
}

function increaseCycles()
{
	try
	{
		// RUNNING THE FUNCTION THAT IS LOCATED WITHIN THE IFRAME DOCUMENT TO INCREASE CYCLES
		document.getElementById("container").contentWindow.increaseCycles();
	}
	catch(err)
	{
	}
}

function goBackButtonResetIncrement()
{
	try
	{
		// CLEARING THE MOVEMENTS IDLE TIMER
		MOVEMENTS_IDLE = 0;

		// CHECKING IF A GAME IS RUNNING
		if (document.getElementById("container").style.display=="block")
		{
			// CHECKING IF IT IS A MOBILE DEVICE
			if (isMobileDevice()==false)
			{
				// SHOWING THE GO BACK BUTTON
				document.getElementsByClassName("gui_goback")[0].style.display = "block";

				// SHOWING THE MOUSE POINTER
				try{document.getElementById("container").contentWindow.showMouse();}catch(err){}

				// CHECKING IF THE ACTION BUTTON CAN BE DISPLAYED
				if (ACTION_BUTTONS_VISIBLE==true)
				{
					// SHOWING THE FULLSCREEN BUTTON
					document.getElementsByClassName("gui_fullscreen")[0].style.display = "block";

					// SHOWING THE SOUND TOGGLE BUTTON
					document.getElementById("gui_sound_handler").style.display = "block";

					// SHOWING THE DOWNLOAD BUTTON
					document.getElementsByClassName("gui_download")[0].style.display = "block";

					// SHOWING THE UPLOAD SAVE BUTTON
					document.getElementsByClassName("gui_uploadsave")[0].style.display = "block";

					// SHOWING THE RELOAD BUTTON
					document.getElementsByClassName("gui_reload")[0].style.display = "block";

					// CHECKING IF THE GAME IS A DOS GAME
					if (DOSGAME==true)
					{
						// SHOWING THE DECREASE CYCLES BUTTON
						document.getElementsByClassName("gui_decrease")[0].style.display = "block";

						// SHOWING THE INCREASE CYCLES BUTTON
						document.getElementsByClassName("gui_increase")[0].style.display = "block";
					}
				}
			}
		}
	}
	catch(err)
	{
	}
}

function goBackButtonTimerIncrement()
{
	try
	{
		// UPDATING THE MOVEMENTS IDLE TIMER
		MOVEMENTS_IDLE = MOVEMENTS_IDLE + 1;

		// CHECKING THE MOVEMENTS IDLE TIMER IS EQUAL OR GREATER THAN 3 SECONDS
		if (MOVEMENTS_IDLE >= 3)
		{
			// HIDING THE GO BACK BUTTON
			document.getElementsByClassName("gui_goback")[0].style.display = "none";

			// HIDING THE FULLSCREEN BUTTON
			document.getElementsByClassName("gui_fullscreen")[0].style.display = "none";

			// HIDING THE SOUND TOGGLE BUTTON
			document.getElementById("gui_sound_handler").style.display = "none";

			// HIDING THE DOWNLOAD BUTTON
			document.getElementsByClassName("gui_download")[0].style.display = "none";

			// HIDING THE UPLOAD SAVE BUTTON
			document.getElementsByClassName("gui_uploadsave")[0].style.display = "none";

			// HIDING THE RELOAD BUTTON
			document.getElementsByClassName("gui_reload")[0].style.display = "none";

			// CHECKING IF THE GAME IS A DOS GAME
			if (DOSGAME==true)
			{
				// HIDING THE DECREASE CYCLES BUTTON
				document.getElementsByClassName("gui_decrease")[0].style.display = "none";

				// HIDING THE INCREASE CYCLES BUTTON
				document.getElementsByClassName("gui_increase")[0].style.display = "none";
			}
			else
			{
				// HIDING THE MOUSE POINTER (ONLY IF IT IS NOT A DOS GAME)
				try{document.getElementById("container").contentWindow.hideMouse();}catch(err){}
			}
		}
	}
	catch(err)
	{
	}
}

function enableControls()
{
	// SETTING THAT THE ACTIONS BUTTONS (STATES HANDLER, RESTART, SOUND, ETC.) CAN BE DISPLAYED
	ACTION_BUTTONS_VISIBLE = true;

	// UPDATING THE SOUND ICON ACCORDING TO THE SOUND PREFERENCE
	updateSoundIcon();

	// CHECKING IF IT IS A MOBILE DEVICE
	if (isMobileDevice()==true)
	{
		// SHOWING THE SOUND TOGGLE BUTTON (FOR MOBILE DEVICES)
		document.getElementById("gui_sound_handler_mobile").style.display = "block";

		// SHOWING THE DOWNLOAD BUTTON (FOR MOBILE DEVICES)
		document.getElementsByClassName("gui_download_mobile")[0].style.display = "block";

		// SHOWING THE UPLOAD SAVE BUTTON (FOR MOBILE DEVICES)
		document.getElementsByClassName("gui_uploadsave_mobile")[0].style.display = "block";

		// SHOWING THE RELOAD BUTTON (FOR MOBILE DEVICES)
		document.getElementsByClassName("gui_reload_mobile")[0].style.display = "block";

		// CHECKING IF THE GAME IS A DOS GAME
		if (DOSGAME==true)
		{
			// SHOWING THE DECREASE CYCLES BUTTON (FOR MOBILE DEVICES)
			document.getElementsByClassName("gui_decrease_mobile")[0].style.display = "block";

			// SHOWING THE INCREASE CYCLES BUTTON (FOR MOBILE DEVICES)
			document.getElementsByClassName("gui_increase_mobile")[0].style.display = "block";
		}
	}
	else
	{
		// ON DESKTOP DEVICES, SHOWING ALL THE ACTIONS BUTTONS FOR A FEW SECONDS
		// JUST TO VISUALLY NOTIFY THE USER ABOUT ALL THE AVAILABLE BUTTONS
		goBackButtonResetIncrement();
	}
}

function getSoundStatus()
{
	// PASSING TO THE EMULATOR THE SOUND STATUS
	return GAME_SOUND_ENABLED;
}

function mobileControlsVisible()
{
	// PASSING TO THE EMULATOR IF THE MOBILE CONTROLS MUST BE VISIBLE OR NOT
	return MOBILE_CONTROLS_VISIBLE;
}

function updateSoundIcon()
{
	// CHECKING IF IT IS A MOBILE DEVICE
	if (isMobileDevice()==true)
	{
		// CHECKING IF THE SOUND IS ENABLED
		if (GAME_SOUND_ENABLED==true)
		{
			// SHOWING THE ENABLED MOBILE SOUND ICON
			document.getElementById("gui_sound_handler_mobile_icon").className = "gui_sound_on_mobile_icon";
		}
		else
		{
			// SHOWING THE DISABLED MOBILE SOUND ICON
			document.getElementById("gui_sound_handler_mobile_icon").className = "gui_sound_off_mobile_icon";
		}
	}
	else
	{
		// CHECKING IF THE SOUND IS ENABLED
		if (GAME_SOUND_ENABLED==true)
		{
			// SHOWING THE ENABLED SOUND ICON
			document.getElementById("gui_sound_handler").className = "gui_sound_on";
		}
		else
		{
			// SHOWING THE DISABLED SOUND ICON
			document.getElementById("gui_sound_handler").className = "gui_sound_off";
		}
	}
}

function fullscreenHandler()
{
	try
	{
		// CHECKING IF THE GAME IS RUNNING IN FULLSCREEN
		if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height))
		{
			// GOING BACK TO WINDOW MODE
			document.exitFullscreen();

			// NO POINT GOING ANY FURTHER
			return;
		}

		// SETTING THE ELEMENT THAT WILL BE PRESENTED IN FULLSCREEN
		var elem = document.getElementsByTagName("body")[0];

		// CHECKING IF THERE IS A REQUESTFULLSCREEN
		if (elem.requestFullscreen)
		{
			// REQUESTING FULLSCREEN
			elem.requestFullscreen();
		}
		else if (elem.webkitRequestFullscreen) // SAFARI
		{
			// REQUESTING FULLSCREEN
			elem.webkitRequestFullscreen();
		}
		else if (elem.msRequestFullscreen) // IE11
		{
			// REQUESTING FULLSCREEN
			elem.msRequestFullscreen();
		}
	}
	catch(err)
	{
	}
}

window.addEventListener("load", function()
{
	document.getElementsByClassName("gui_fullscreen")[0].style.display = "none";
	// ENABLING THE UPLOAD ICON FUNCTIONALITY
	document.getElementById("gui_controls_file").disabled = false;

	// CLEARING THE SELECTED FILE VALUE
	document.getElementById("gui_controls_file").value = null;

	// UPDATING THE IFRAME SOURCE WITH A BLANK PAGE
	document.getElementById("container").contentDocument.location.replace("about:blank");

	// CREATING A 250 MS INTERVAL
	setInterval(function()
	{
		// FOCUSING THE CONTAINER
		document.getElementById("container").focus();
	}, 250);

	// KEEPING TRACK OF MOUSE CLICKS AND MOVEMENTS WHEN PLAYING IN ORDER TO KNOW WHEN TO HIDE/SHOW ALL THE ICONS
	setInterval(goBackButtonTimerIncrement, 1000);

	// SETTING FUNCTIONS THAT WILL BE CALLED WHEN THE USER CLICKS, DOUBLE CLICKS OR MOVES THE MOUSE IN ORDER TO SHOW THE SYSTEM ICONS
	document.addEventListener("click", goBackButtonResetIncrement, false);
	document.addEventListener("dblclick", goBackButtonResetIncrement, false);
	document.addEventListener("mousemove", goBackButtonResetIncrement, false);

	// CHECKING IF IT IS A MOBILE DEVICE
	if (isMobileDevice()==true)
	{
		// CHECKING IF THE USER IS USING IOS. EMULATRIX IS NOT COMPATIBLE WITH IOS.
		if (usingiOS()==true)
		{
			// UPDATING THE LABEL SAYING THAT EMULATRIX IS NOT COMPATIBLE WITH IOS.
			document.getElementsByClassName("gui_how_mobile_label")[0].innerHTML = STRING_HOW_MOBILE_IOS;
		}

		// SHOWING THE 'HOW DOES IT WORK' TEXT FOR MOBILE DEVICES
		document.getElementsByClassName("gui_title_how_desktop")[0].style.display = "block";
		document.getElementsByClassName("gui_controls")[0].style.display = "block";
	}
	else
	{
		// SHOWING THE 'HOW DOES IT WORK' TEXT FOR DESKTOP DEVICES
		document.getElementsByClassName("gui_title_how_desktop")[0].style.display = "block";

		// CHECKING IF THE USER IS USING SAFARI. EMULATRIX IS NOT COMPATIBLE WITH SAFARI.
		if (usingSafari()==true)
		{
			// SHOWING THE LABEL THAT WILL SAYS THAT EMULATRIX IS NOT COMPATIBLE WITH SAFARI.
			document.getElementsByClassName("gui_safari")[0].style.display = "block";
		}
		else
		{
			// SHOWING THE KEYS FOR EACH EMULATOR FOR DESKTOP DEVICES
			document.getElementsByClassName("gui_controls")[0].style.display = "block";
		}
	}

	// CHECKING IF THE USER IS USING IOS OR SAFARI. EMULATRIX IS NOT COMPATIBLE WITH IOS OR SAFARI.
	if (usingiOS()==true || usingSafari()==true)
	{
		// DISABLING THE UPLOADER ICON
		document.getElementById("gui_uploader").className = "gui_uploader gui_uploader_ios";
	}
	else
	{
		// SETTING WHAT WILL HAPPEN WHEN THE USER CLICKS ON THE UPLOADER ICON
		document.getElementById("gui_uploader").addEventListener("click",function(event){document.getElementById("gui_controls_file").click()});
	}

	// CHECKING IF THE MOBILE CONTROLS ARE HIDDEN
	if (MOBILE_CONTROLS_VISIBLE==false)
	{
		// SHOWING THE MOBILE CONTROLS HIDDEN LABEL
		document.getElementsByClassName("gui_mobile_controls_label")[0].style.display = "block";
	}

	// UPDATING THE SOUND ICON ACCORDING TO THE SOUND PREFERENCE
	this.updateSoundIcon();

	// SHOWING THE UPLOADER ICON
	document.getElementById("gui_uploader").style.display = "block";

	// UPDATING THE EMAIL ADDRESS CONTAINER
	document.getElementsByClassName("gui_title_email_value")[0].href = atob("bWFpbHRvOmluZm9AZW11bGF0cml4LmNvbQ==");
	document.getElementsByClassName("gui_title_email_value")[0].innerHTML = atob("aW5mb0BlbXVsYXRyaXguY29t");

	// SETTING THE TITLES FOR EACH BUTTON
	document.getElementsByClassName("gui_uploader")[0].title = STRING_SELECTGAME;
	document.getElementById("gui_sound_handler").title = STRING_SOUND;
	document.getElementsByClassName("gui_goback")[0].title = STRING_GOBACK;
	document.getElementsByClassName("gui_fullscreen")[0].title = STRING_FULLSCREEN;
	document.getElementsByClassName("gui_reload")[0].title = STRING_RELOAD;
	document.getElementsByClassName("gui_decrease")[0].title = STRING_DECREASE;
	document.getElementsByClassName("gui_increase")[0].title = STRING_INCREASE;

	// SETTING WHAT WILL HAPPEN WHEN THE USER MOUSE OVER/OUT THE HOW DOES IT WORK LABEL
	document.getElementsByClassName("gui_title_how_desktop_question")[0].addEventListener("mouseover",function(event){document.getElementsByClassName("gui_title_how_desktop_label")[0].style.display="block"});
	document.getElementsByClassName("gui_title_how_desktop_question")[0].addEventListener("mouseout",function(event){document.getElementsByClassName("gui_title_how_desktop_label")[0].style.display="none"});

	// SETTING WHAT WILL HAPPEN WHEN THE USER CLICKS ON A ITEM
	document.getElementsByClassName("gui_goback")[0].addEventListener("click",function(event){goBack()});
	document.getElementsByClassName("gui_fullscreen")[0].addEventListener("click",function(event){fullscreenHandler()});
	document.getElementsByClassName("gui_decrease")[0].addEventListener("click",function(event){decreaseCycles()});
	document.getElementsByClassName("gui_increase")[0].addEventListener("click",function(event){increaseCycles()});
	document.getElementById("gui_sound_handler").addEventListener("click",function(event){ROMState_ToggleSound()});
	document.getElementsByClassName("gui_download")[0].addEventListener("click",function(event){ROMState_DownloadFile()});
	document.getElementsByClassName("gui_uploadsave")[0].addEventListener("click",function(event){ROMState_UploadFile()});
	document.getElementsByClassName("gui_reload")[0].addEventListener("click",function(event){reload()});

	// SETTING WHAT HAPPEN WHEN THE USER TOUCHES AN ITEM
	document.getElementsByClassName("gui_goback_mobile")[0].addEventListener("touchstart",function(event){goBack()});
	document.getElementsByClassName("gui_decrease_mobile")[0].addEventListener("click",function(event){decreaseCycles()});
	document.getElementsByClassName("gui_increase_mobile")[0].addEventListener("click",function(event){increaseCycles()});
	document.getElementById("gui_sound_handler_mobile").addEventListener("click",function(event){ROMState_ToggleSound()});
	document.getElementsByClassName("gui_download_mobile")[0].addEventListener("touchstart",function(event){ROMState_DownloadFile()});
	document.getElementsByClassName("gui_uploadsave_mobile")[0].addEventListener("touchstart",function(event){ROMState_UploadFile()});
	document.getElementsByClassName("gui_reload_mobile")[0].addEventListener("touchstart",function(event){reload()});

	// SETTING WHAT HAPPEN WHEN THE USER STOP PRESSING A KEY
	document.addEventListener("keyup", function(e)
	{
		try
		{
			// GETTING THE KEY EVENT
			e = e || window.event;

			// CHECKING IF IT IS THE "C" KEY
			if (e.keyCode == 67)
			{
				// CHECKING IF THE MOBILE CONTROLS WILL BE VISIBLE
				if (MOBILE_CONTROLS_VISIBLE==true)
				{
					// SETTING THAT THE MOBILE CONTROLS WILL BE HIDDEN
					MOBILE_CONTROLS_VISIBLE = false;

					// SAVING THE HIDE MOBILE CONTROLS PREFERENCE
					setBooleanSetting("MOBILE_CONTROLS_VISIBLE", MOBILE_CONTROLS_VISIBLE);

					// SHOWING THE MOBILE CONTROLS HIDDEN LABEL
					document.getElementsByClassName("gui_mobile_controls_label")[0].style.display = "block";
				}
				else
				{
					// SETTING THAT THE MOBILE CONTROLS WILL BE VISIBLE
					MOBILE_CONTROLS_VISIBLE = true;

					// SAVING THE HIDE MOBILE CONTROLS PREFERENCE
					setBooleanSetting("MOBILE_CONTROLS_VISIBLE", MOBILE_CONTROLS_VISIBLE);

					// HIDING THE MOBILE CONTROLS HIDDEN LABEL
					document.getElementsByClassName("gui_mobile_controls_label")[0].style.display = "none";
				}
			}
		}
		catch(err)
		{
		}
	});
});
