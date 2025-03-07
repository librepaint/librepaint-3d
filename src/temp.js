//The following comment guarantees that this program will never appear on the hot list. Do not remove it unless you are using this imagenator for a legitimate use such making sprites for a game. Generated images that appear on the hotlist and are not being used for a legitamate purpose will be flagged and taken down:
// /cs/pro/5733417664643072

var base185={codeKey:" !#$%&'()*+-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",decode:function(num){var decoded=0;for(var i =num.length;i>0;i--){var value=pow(this.codeKey.length,i-1).toString();var value2=this.codeKey.indexOf(num.charAt(num.length-i));var value3=value*value2;decoded+=value3;}return decoded;}};var vexIMG={decode:function(imgCode){var newData="";var i=0;while (i<imgCode.length){var currChar=imgCode.charAt(i);if(currChar==="|"){var char=imgCode.charAt(i+1);var j=i+3;while(imgCode.charAt(j)!== "|"&&j<imgCode.length){j++;}var len=base185.decode(imgCode.substring(i+2,j));var seg="";for(var k=0;k<len;k++){ seg+=char;}newData+=seg;i+=j-i+1;}else{newData+=currChar;i++;}}var splitData=newData.split(",");var w=base185.decode(splitData[0]);var h=base185.decode(splitData[1]);var compressionFactor=base185.decode(splitData[2]);var img=get(0,0,w,h);var p=img;if(p.imageData){p=p.imageData;}if(p.data){p=p.data;}if(splitData.length===6){var currR=0;var currG=0;var currB=0;var strR=splitData[3].split("");var strG=splitData[4].split("");var strB=splitData[5].split("");for(var i=0;i<p.length;i+=4){var pix=i/4;currR+=base185.decode(strR[pix])-85; currG+=base185.decode(strG[pix])-85;currB+=base185.decode(strB[pix])-85;p[i]=currR*compressionFactor;p[i+1]=currG*compressionFactor;p[i+2]=currB*compressionFactor;}}else if(splitData.length===7){var currR=0;var currG=0;var currB=0;var currA=0;var strR=splitData[3].split("");var strG=splitData[4].split("");var strB=splitData[5].split("");var strA=splitData[6].split("");for (var i=0;i<p.length;i+=4){var pix=i/4;currR+=base185.decode(strR[pix])-85;currG+=base185.decode(strG[pix])-85;currB+=base185.decode(strB[pix])-85;currA+=base185.decode(strA[pix])-85;p[i]=currR*compressionFactor;p[i+1]=currG*compressionFactor;p[i+2]=currB*compressionFactor;p[i+3]=currA*compressionFactor;}}else if(splitData.length===4){var currAvg=0;var strAvg=splitData[3].split("");for(var i=0;i<p.length;i+=4){currAvg+=base185.decode(strAvg[i/4])-85;p[i]=currAvg*compressionFactor;p[i+1]=currAvg*compressionFactor;p[i+2]=currAvg*compressionFactor;}}if(img.set){img.set(p);}return img;}};

var myImage = "$O,#4,8,z|xî|wy|x/V|wy|x#)|yw|x.|yw|x'|yw|x(|yxw|x/|yxwxyxxw|x#Ë|{ywxyt|x2|yxwxzv|x0|y}szztxxxzxxwzv}twywxyw¡r|x'|}ywwuxxzwwywyzvwx}yux}uzuv|x#Ê|{uxx}t|x2|yzwxxv|x0|y}sz{uzwxzwwx{uztzxwwzx{r|x'|{ywyvywxxyyvzztvxyzxwzty}s|x#´|yxxxxw|x2|{uxx}t|x3|zzxuw|x0|y}sz{vxxxxwzvzu}vzu{wvw~rxxyxwx}yvwxzxwyxvzwyuwxzyxwzty}s|x#´|{xxxxu|x2|{uxx}t|x3|zyxvw|x0|y}uyywwyxxxyvzv{v{wvyvw~rxx{wvx{xuz{yvwywv{wyuwxyy{u{tzxu|x#Ê|{wwx{t|x2|yyvyyww|x0|{xxvywyxxxyvzwyvzxvx{wyt|x'|zxvyzyvxxxwzvzwvyzxvx{wxu|x#Ë|zyxxxu|x2|ywxxyw|x)|yw|x$M|yw|x$M|yw|x(+|w|x/|y|x/|y|x&|w|x$+|ww|x'|y|x'|y|x'|y|x'|yxxxxv|x$+|ww|x'|y|x'|y|x'|y|x'|yxxxxv|x$+|ww|x'|y|x'|y|x'|y|x'|yxxxxv|x#ª|yzxyxwxxwv|xx|ww|x'|y|x'|yxxxzzvw|x'|yxxxxv|x0|yzxxwww|x;|y{wvw|x=|yzxxxu|x<|zy|x&|u|x>|}t|x>|y}s|xA|{yvv|x¯|zzt|x`|yyyxxwv|x?|yw|xT|zzxxvwxxzvw|xw|ww|x'|y|x'|yxxzzxwv|x'|yxxxxv|x.|yzyxux{vv|x9|y{xvxyxu|x;|zywwxyzt|x;|¡tw}txxw|x<|{u}ty{t|x;|{zvxxwwyv|x9|y{wwxywv|xª|~xwvyxvw|x<|yw|x?|y{wwxwzwv|x@|yw|xR|zyvxwxxx{vw|xw|ww|x'|y|x'|yxzzxxu|x(|yxxxxv|x-|zzvzwux}vv|x9|}{uuw}ytw|x:|}vvxxz}tv|x:|}tx¡r|x?|{xzvxvw|x;|z}sxxxw|x;|y}xvyzvt|xª|¢uxwyvxv|x<|yw|x?|y}wvxvyyww|x>|yxw|xR|zxv|x&|{vw|xw|ww|x'|y|x'|yyzyxuwy|x'|yxxxxv|x-|zwwz{vu}vv|x9|}xwzwvyvw|x:|zvxy{xyvu|x:|ywx¡r|x?|y~sx}s|x<|y¡q|x@|yzyuyywv|x©|¡sx~vxwvw|x@|yw|x;|yxyyuxzww|xr|zxv|x&|{vw|xw|ww|x'|y|x'|z{xxvvxy|x'|yxxxxv|x-|zwwz{xxytv|x9|}wu~vuzww|x9|yxwx~uzw}q|x=|¡r|x>|{u~sy~uxu|x:|y¡q|xA|zztzyxwv|x¨|¡rx¡sxxyv|xZ|yyvyzxvyww|xr|zxv|x&|{vw|xw|ww|x'|yxxxyzzyxyuuxxy|x'|yxxxxv|x-|zzxzvvywv|x:|}wu}vvzww|x:|}u{vyxvyv|x=|¡r|x@|~wyuv|x<|}}txxvwyv|x9|y}wxtzxzwu|x¨|¡rx¡rxxzv|x[|zyuyxzxu|xs|yzy|x&|wu|xx|ww|x'|yxxxx{{vvzuxxxy|x'|yxxxxv|x/|zyvw}vv|x:|{yu{vx{tw|x:|{x{wvu{vw|x=|¡r|x?|¡r{v{wu|x;|y{t|x@|y{zvxxvv|x©|¡rx¡rxxzv|x[|yzyxxwu|xZ|zzuw|x»|ww|x'|yxxxxz}xwwuxxxy|x'|yxxxxv|x/|zzxxxwvw|x;|{}wuvw|x<|{}uxxuw|x=|zzxt|x@|~s|x?|{u|xB|zzvv|x«|{yx{uxxvv|x¾|zywzuw|xº|ww|x'|y|x&|y|x(|y|x'|yxxxxv|x#l|zyvwy{uw|x¹|ww|x'|y|x'|y|x'|y|x'|yxxxxv|x#k|zzuwxxy{uw|x2|zwwzxv|x¡|ww|x'|y|x'|y|x'|y|x'|yxxxxv|x#(|zvyyxv|xw|y}wt}xt|x¡|ww|x&|y~wtxxxxyxxyyvxy|x'|yxxxxvxxy{wv{xvvxxxyyv|x5|y{vxzxuwxxxzww|x9|zyvwzww|x@|{yxt|x<|}xt}vzt|x<|}wu|x;|zztx}xtxxzwzwv|x©|{ywu|x^|y}tzwvxxzyu|x<|yw|xV|y{xwzvxzvzxxxt{t|xu|ww|x&|z}vww|x'|{yu|x)|yxxxxvxxxx~u{t{uwxx{xu|x6|z{uzvyvwxx}vv|x8|{xv{vvxxxyw|x>|~twxxxxyyv|x5|}uw¡r}txxxxyyv|x4|¡rzv|x;|yw¡rxy~ry{tzzt|x©|~t~swxxxy}s|x8|yw|x>|y~vywywxxywyxvzyuyvv|xj|yzyyxvyyvyvzyt{t|xu|ww|x&|z¡ws¡vyt}vyxzwwxywywvwyxxxxvxxxy}u{szyu{yxzxux{uzxvyxywytw|x&|y{xvztzxv{yyxyty{t}wvzwywxt|x*|yzwzyxuzxux}uzzs~uywu|x4|~t{yuzzvxt|x5|¡vw}t{uzys}wywxwu|x4|y}zs}wuywyzvxzuv|x-|}wuxx{uy{v}wxwxywyu{xxtzu|xz|~t~uyywxw{vywvv|x4|ywxxyxwxyxwyxw|x2|y}s{yyvyw|x'|vzztw|x2|yxwxywxyxwyxw|xL|yyyxwxyyvzu{wyzsw|xt|ww|x&|z~uzys~u{uzxxw{wxvyxvwyxxxxvxxy}sz{tywwzzxwxyw{uxwz{vwwztw|x'|zzvzuyww{yyuzwy{szu~ztxwztw|x*|y{yuzvxwx~tzywuzu~vu|x4|~wywt¢rwzv|x5|}uw¡r}zvxwvxxx{xt|x1|{uy{y{qwyy~uv}uwzvv|x+|yw¢qyx{ty{v}vvwzwy{t{u{xtw|xz|~wu{yyuyv{u}vvv|x4|ywxxywyw|x9|}tzyywy|x&|vxwzxu|x7|ywxxxyw|xÕ|ww|x&|z~vv{t{yyuzxwxyxyvxzuwyxxxxvxxzzww}vwuxzzyvwyxzvzxuyywxyvv|x&|y{xv{wwuxzzyuyxx{t}vvyywxyuw|x)|zzxwxyvzxuw~uzwu{u}xt|x4|}u}wvyzs}t|x5|~wt~s{wzwv}vvzxxvw|x0|}xywxzswyx{wv}vw{uv|x+|~wwu}wwvyzv}xxvwxyzuzux}tw|xz|}uw~wyuyxywzvvw|x6|ywxxxxywxyw|xC|{vw|x6|yxwxxywxyw|xÓ|ww|x'|y|x'|y|x'|y|x'|yxxxww|x5|yzvw|x?|yzu|xî|zww|xí|yyv|xò|ww|x'|y|x'|y|x'|y|x'|yxxxxv|x6|yw|xA|yw|xî|zv|x!S|wy|x°|ww|x'|y|x'|y|x'|y|x'|yxxxxv|x#b|wy|x)|wywyxxxwyxxwyxwzz|x°|wwxxy|x+|y|x*|y|x)|w|x!¬|wy|xÑ|wxxxyxxxwy|x*|wxyxwxxyxxxwz~|x$M|s~|x$M|s~|x$M|s~|x$M|s~|x$M|s~|x$M|s~|x)|wvyyyxxwxy|x(|vwzyuxyz|x1|wyxxxxvz|x3|vyxyxxxvzxxvz|x&|wy|x(|wxy|x(|u{xxvzvz|x2|wwzxxxxuyz|xD|wxy|x)|vyy|x<|wy|x=|vyy|x4|wwzwxy|x2|vz|x-|vyyxxxux{xux{vwzyxwxyxxwxy|x!w|s~|x)|vuyy{xxwxyxxxu{xxvxu~r}wx{|x0|tzxzxwt~|x3|wwwzyxxr¡xxs~|x&|wy|x&|vxxxz|x(|p¡zwr¢vz|x2|s{v{yxs{xyv{|xB|wy|x)|vwzyxxwxy|x7|t{yxxwwz|x-|wxy|x&|tzxyy|x4|tw}vyz|x1|wt~|x+|ws}zxxxvwzvxw{vxv~wuzzxxtx}|x!w|s~|x)|uwywywzwzuxxzs}{xvvw~r¡vu~wwxwyxwwxzvxx{wvv~ywr{x}txy{xvvyyxxwxwzwxwzww{q}w~q¡uxzzwwxuyy{wtxyxxzxww{yxo{¡tv¡t{uyxv{xvyywwzwwyyr}t~{xr{{tu~wwyzt{xvzzxvwwzww{ywuzwwx{uyyvxyzvxyxwwzyytxyzxvww}v{r~tzxwy{xwxvwywxzwwu~wwzvv~tyyyvx}wvwxwzyvzxwxt{w{vxw}tyw~xwtyxztzx}xtt~wyywv}u{t}ux}syvzxzs{yzwvyxv{zxur¡{xxxxvxr£wwywr£vvy{xxsx~wvv{vxx{uyt{v¡xwszwyx{uxyxv{wv{z|x!V|t}|x)|uuzzwuzw{uyw{t}zxwwt¡r¡wt~wvwwxyxywyvyw{zuv}ywr~u{rzx¡xvtyzwyxwu}vyxzuu¢q¡vzs~syy~wuztzx}xtxxyxxvww~zxpz~sy}s}vzwu{xyvxxwzxyuzt}t~zxvwvzu}u{wxu{vwy{ztxyxvzzyvvzrzw~wywszx}vxyvxwx}ztyw{xuxx{u}n¤s{szy~xvxuwzxxyxxu}wux{v}qzv~vz{wuw{wywuyyyys{u}u{s¢t{s¢xwuywys}w~xtvzv{vyyyt~szvx{s¡t}wys~wuwyzvw¡yuxs~{xxxvv{o¥xuzuyzuzw{xxsx~tvw{xwt£t{p£r£xwq}t}v{vzxuxzvwz}y|x!U|t}|x)|uv}wwwxw{u{u}t}yxwyq¢r¡vv}xvtyxyxyxxv{vzzvv{ywr¢r}s~xzwuyvzvzxxvzvyxw{s¡q¢u{r}v{xzwuzu{w{xtyxyxwu{yyyxp¡s}v}s{w}uv{wzuxzvwzzt{s~s¡yxvys}t}t~vxv}uyyyyszywv}yxvxyq¡xxv}ut~xxxwwyxxyyyuzvyxvzwzs¡n¤uzr¡xzxuxvwzywyxyt{wys¡v{r~wywu¡wwwv{xxwww{zr{t}v}q¢t~o¤xwt}tzt~v}xtw{t{u{zwxwyvyyyq£s~wwt¡vtx}ysx¡xtwu}yzywvyzq¢vxu{zuvxy{yxsx~syzys{r¢w{n¥r~ywq¡r¡t{u}wuyzv{xyy|x!U|s~|x)|vw{wvvzxzvzvzvx{xtxy{rzyzyxwvywyxvx{vywzyxs}ywtyy{txzzwvwyzvyxvw{wyxwww}tyx}t{uxzzwwyvzwzxvwxzxwxvx{yxs~s~u{t{uyyw{uwyywwzwwyzu{uy{xtxx{t{vxyyw{vvy{xvvxzwzyxwxyuwyzux{uxyzxww{uwzzxvyxuxyzt~syv~wzuwy{xvuxyyvy{vww}tyw}t}uxyyvx}wuxzxwxwyxzytyv{wzt}uxt£xwuxyyv{v{xux{tzxvx{yt{xux}s~u{wxtyyzvwzvx}xwwu{v{yvvxyyvx{szyzwxwzxyuvyyxw{txv¡wzq¢t}xwt}t{vzvxyxxzvwzz|x!V|s~|x.|wxxxywywywxyxwxyxwxxyxxxwyxxxwxywywyxxwyxxwxxywxxyxwxxyxxxwxywyxxwxywxxywywxxyxxxwyxxxxwxyxxxwxyxxwywywywywxywywxxywxywxyxwywxyxwxxywywxxywywxxyxxwxy|x)|wxywxywxxyxxwywxxyxxxxwxxywywxxyxxxwxyxxwxxvxzywxxywxxywywxxxxyxxwxyw|x&|yxwxxywywyswx¡xxwxyxwyxxxwxywxywxyxwyxwxywywyxxwxxywxxxxyxxxwywyxxwxxywxywxxy|x'|uvxyxwywxxyxxwy|x'|wyxxxwyxxxxwy{y|x!U|s~|x!=|wy|xI|wxxy|xh|w|xC|y|x!V|s~|x$M|s~|x$M|s~|x$M|s~|x$M|s}|x#ª|y|xÆ|r~xwywxxywxxxyxxxw|x&|yxxwxy|xi|wy|xK|wyxwy|x:|wy|xS|wy|x@|wy|x+|wyxwy|xL|wy|x5|wywy|x)|wy|x@|wy|x*|wyxwy|xC|wy|x)|wy|x*|wxy|x&|wywywy|x)|wy|xÇ|s~wyxwywxxyxxxwyxwxyxwxywxxyxwxxxxy|x-|wy|xT|wywy|x@|wy|xF|wy|xS|wyxwy|x@|wy|x8|wy|x]|wyxxxwy|x<|wy|x&|wy|x8|wy|x-|wy|x)|wy|x5|wxy|x4|wy|xÈ|s~xwywyxxwyxwyxxwyxxxxwxyxwxxyxwy|xt|wy|xU|wy|x?|wy|x'|wy|xv|wy|x?|wy|x®|wy|x5|wxy|xÜ|s~xxwywyxxxwyxwxyxxxwxxxyxxwywxywxy|x;|wy|xP|wy|xÁ|wy|x>|wy|xO|wy|x>|wyxxxwy|x7|wxxyxxxxwy|xT|wyxxxxwy|x/|wxy|x)|wyxxwy|xÎ|s}ywyxwyxxxwxxywywywyxxwxyxwxxywy|x8|wy|xQ|wy|x/|wy|xW|wyxxxwy|x>|wy|x2|wxy|xÀ|wy|x/|wvv{yy|xS|wyxxxwxy|x5|wxy|xÜ|s~wyxwywywxywxywywywxxxywxyxwywxy|x!*|wy|x`|wy|x6|wy|x>|wyxxxwy|x3|urwx¤y|x?|wy|x:|wy|x5|wxy|xÜ|s}ywyxxxw|x(|yxxxxwywywxxyxwxyxwy|x9|wxyxxwxxy|x§|wy|x1|wy|x1|wxy|x7|wy|xF|wxxy|x9|wxy|xB|wy|xK|quxx£z|xJ|wy|x/|wywy|x2|wxxy|xÜ|s~xxwxxxxvyyxywxy|x&|wxxyxwyxxxwxywy|x7|wwu}xxwwyz|xG|wxxxxwxyy|xy|wy|x=|wy|x;|wyxxxwvxzwyxy|xw|wy|x-|pvxx£z|xM|wxy|x*|wyxwy|x2|wxy|xÜ|s}yxwyxxwuw{yywyxxxwywxywwyxxxxyxxwy|x8|vvvzxxwz{|x(|wxxxy|x<|vwwwxyw}y|x(|wxywxxy|x&|wxy|x)|wxy|xX|wy|x=|wy|x?|wuzvxxyyyy|x'|wxxxxwyyxxxwxxy|xa|wy|x+|pvxx£z|x7|wy|x6|uyz|x*|wyxxxwwxyxwyxwyxwyxxywxy|xÜ|s~xxxwyxwvxxyyxyxxxxwxxyuxzxywv{xxxxwxxy|x5|wt}xuw~|x)|vwxzy|x<|vyxrx~wyz|x(|vv{xvyzxxxxwwyy|x)|vyyxxxxwwz|x²|wu}xxwwuy}|x'|wvw{uxyzyxxwxxy|xL|uxwywy|x&|wyxw|x0|yxwswxx~zwyxxwyxxwxxyxxwxyxxxwxxywyxxwyzy|x-|uyz|x*|wyxxxwuv~uxxyvzxuzyyzwxy|xÜ|s~xwxxyxwvyxwyyxxyxxxxwxuzywxxv{wxywxww{y|x4|wt}vxx{|x(|wvyyxw|x(|z|x4|vyxrxzzw{ywyxxxxvt{yuy{wxxxywxxxyxwxyw|x&|ywxwv}y|xR|wy|xZ|wu}xxxxvw{|x(|vt}u}vyzvywyxwxywywyy|x+|wy|x&|ww|x'|yy|x)|sv|x@|uxxxzy|x@|~z|x-|uyz|x*|wyxxxxvt}vzs{zwxwxyzxxxy|x'|w|x(|y|x3|wv{xxxu{|x(|vw{|x©|s}ywxxyxwvyxwwzyxywxxxxyuxyuxyxzuxzwywx{y|x4|ws{xzv{|x(|wvyzwtzwxxwzv}y|x3|vxwsxy}w{y|x'|vuyyvyyvyywyvxzxzxtyxwx{xtyzvzxv}y|xp|wy|x=|wu}xxxxvw{|x(|vu}t}xv{uyu{yszxwywz{|x3|wv|x'|yz|xJ|pvxx£z|xI|wwxxvxzxyxy|x&|wyxxxxvt}vztzzwzwwxxzxxy|x'|uzxvzxvzy|x3|ur£yxvq£y|x'|uw{y|x¨|s~wxyxxxwvwxxxzyyxw|x&|wwwvyyxztzywzww{y|x4|wszzwwzyy|x&|wvxyxwyvyww{v{y|x3|v|w&|}v}y|x'|vuzwyvyvyzxyuxzyyxuxxwyzwuzyv{wv}y|xG|wy|xf|wu}xwwxwx{|x'|wwu{t{xzywtzyxtzxvxx{{|x3|wy|xR|pvxx£z|xI|wvxxvyyxyyy|x&|wyxxxxwt}uyxxxxzwwxxzxxy|x'|vyxwyxwyy|x3|uty¡xrv¢xwxyxvyvxzxyxwwzxvyz|x}|s~wxyxxxwvvyxzyxyxxxwxxxvxywxywzvxywyxwzy|x4|wvxxxvzzy|x'|vwxyxyvxyvyw}|x8|wvzww{|x'|wvywywxxxyvyxywyyxvxywyxyuyywyxwzy|x±|wt{xxwxxyz|x'|vwxzuyxzywu{xxuzxxxxyy|xf|pvxx£z|xM|uyz|x*|wyxxxxwwywxyxwyxxxwxyxxy|xB|uvu¢xrx¡xuvyzt}wwyxzvxwzwv{{|x}|s}yxxxwxxxxwwz|x&|ywxxyxxxwxxxyxxwxxxxy|x2|wy|x&|wwz|x3|uzy|x9|wxyxvz|x0|wwwyz|xÆ|wvxxyz|x©|ssxx¤y|x<|wy|x1|uyz|x*|wy|x5|wxy|xB|uvyxwzu}wxwv{u¡uty}xuzxwxx}|x~|s~xwxyxw|x'|ywxxxywxxyxxxwxxxywyxwyxwy|xM|wy|xN|wwxyy|xe|wywy|xÁ|wy|xH|wswz}y|xM|vyy|x*|wy|x5|wxy|xB|uv~qx¡s}t{xt}v~uuyzyuyyyvy{|x~|s}yxxxxwxywxywyxxwxyxxwxxxywxywyxwxy|x!Ù|wwyy|xZ|wy|x5|wxy|xB|vw{ty{t{vxww{v}vwyvzwxxzwxz|x~|s~wywyxxwywxywxyxwy|x&|wxxyxxwyxwxxxywy|x!Ø|wy|xY|wy|x5|wxy|xC|wyxxxwyxvyxywyxwywxywwz|x£|s}xxyxxwyxwywxxyxxxxwxyxxwxxyxxwywxxxy|x2|wy|x¼|wyxxxwy|x!_|wywy|x5|wxy|xÜ|s}xywywxyxxxwxxy|x'|wxyxxwy|x(|wy|x!4|wy|x-|wy|x´|wy|x_|wy|x5|wxy|xÜ|s}xyxw|x*|yxxwxxyxxxwywywyxxwyxwxy|xÆ|wy|xÕ|wy|x^|wy|xX|wy|x5|wxy|xÜ|s}yxwyxwxyxxwxyxxwxxxyxwyxxxwyxwxxy|x±|wy|x·|wy|xñ|wy|x5|wxy|xÜ|s}|x#Y|wy|x5|wy|x7|wz|xÆ|r}|x#¨|wxzy|xÅ|r{|x#ª|zy|xÅ|r}|x#¨|wxzy|xÅ|s{|x#¨|wxzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|x+|quxxyxxxyxxxxyxxxyx{{|x¥|s{|x#©|wzy|x+|quxxxyxxxyxxxyxxxyx{{|x*|uwy{|xJ|tx}|xI|s{|x#©|wzy|x+|quxxxyxxyyyvxyxxxyx{{|x*|qyw¡y|x/|uu|x'|w~z|x0|vs{}|x3|wv{|x5|s{|x#©|wzy|x+|quxxxyxxz}vvwyxxxyx{{|x)|uwwyzz|x/|tyzxwyxxvx{|x0|twz{|x3|wu}|x5|s{|x#©|wzy|x+|quxxxyxxzywzuyxxxyx{{|x)|r{v{u~|x/|ty{wywyxux{|x/|uxxx{|x3|tu{}|x4|s{|x#©|wzy|x+|quxxxyxy{vyzuxxxxyx{{|x)|q¡t{t¡|x/|tz{wyxxwux{|x/|uyyvzy|x1|wtxx~|x4|s{|x#©|wzy|x+|quxxxyxz}uyyvwxxxyx{{|x(|vu}t{u{z|x.|t{z|x&|tyz|x.|vw{ytyz|x1|wsyx~|x4|s{|x#©|wzy|x+|quxxxyy{zwxzwtxxxyx{{|x(|r}yt{wv~|x.|tz{|x&|szz|x.|ux}xuw{|x1|wszw}y|x3|s{|x#©|wzy|x+|quxxxyy{wvx{ztxxxyx{{|x'|ws~xt{xu}y|x-|tz{|x&|szz|x-|wvzzxwtzz|x0|vtzw{z|x3|s{|x#©|wzy|x+|quxxxyy{xvx{ytxxxyx{{|x'|szzwu{xww}|x-|tyz|x&|s~y|x-|wv{yxxszz|x0|twywy}|x3|s{|x#©|wzy|x+|quxxxyy~vxxyyuwxxyx{{|x'|r~xtwy{wu¡|x-|tvy|x&|v¡y|x-|vw{yxxszz|x/|wtyxwx~|x3|s{|x#©|wzy|x+|quxxxyz}sxxyzyuxxyx{{|x'|r}yuxxzwv~|x-|tyz|x&|s¡|x.|wvy{xwtzz|x/|ws{wwx~|x3|s{|x#©|wzy|x+|quxxxy~uvyxx{yvwxyx{{|x'|uxzxwxxvy{|x-|uxz|x&|s¡|x/|uv{xvx{y|x/|ws{wwx}y|x2|s{|x#©|wzy|x+|quxxyy~swyxxy{wvxyx{{|x'|ws~xxwxt~y|x-|vwz|x&|s¡|x/|uvyxv{{|x0|vuzwwx{z|x2|s{|x#©|wzy|x+|quxxyy}sxyxxyzyuxyx{{|x(|q}xxxwv¡|x.|wvyyxxxxs¡|x/|uw{xuy{|x0|tvyxwx{{|x2|s{|x#©|wzy|x+|quxxy{xuxyxxx{ztxyx{{|x(|qwxyxxy¡|x.|wuzyxxxwu~|x/|uw{xvx{|x0|swxxwx{}|x2|s{|x#©|wzy|x+|quxxy~uvxyxxx{ztxyx{{|x(|rtxxyx{¡|x/|tzyxxxvw}|x/|uw{xvxzy|x/|swxxwx{}|x2|s{|x#©|wzy|x+|quxxy¡swxyxxx{zuwyx{{|x(|rtxxyx{¡|x/|tyzxxxuy{|x/|uw{xwwzy|x/|swxxwx{}|x2|s{|x#©|wzy|x+|quxxy~twxyxxx{yvwyx{{|x(|uuxxxyz{|x/|uyyyxxuzy|x/|vxzxwwyy|x/|tvywxxz}|x2|s{|x#©|wzy|x+|vwxxxzv|x&|yxywxxxyy|x)|wxxxxy|x6|wy|xE|wwxxxxyy|x2|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|x6|wy|x3|rxxxx}z|x1|vvy{|x3|utz{z|xI|s{|x#©|wzy|x5|vt¡|x2|r~zxxws}y|x/|wtzv{z|x2|uvyzz|x-|t|x/|zz|x.|s{|x#©|wzy|x5|tv}z|x1|r¡yxxwuyz|x/|ux{vw{|x0|wuuxxy}z|x+|vq|x-|}}y|x.|s{|x#©|wzy|x4|wtyx}|x1|r¡yxxwuyz|x/|tzzxs~|x0|ty{yxwsz{|x+|o|x)|ywx~}|x/|s{|x#©|wzy|x4|ws{v~|x1|r¡yxxwuyz|x/|s}zwr~y|x.|vv}xxxxvv{y|x*|oxyxwxxxyyww~}|x/|s{|x#©|wzy|x4|vtzx{y|x0|r¡xxxxtzz|x.|wv{ywtzz|x-|wswy|x&|wz}y|x)|ox{xuyxwyyww~}|x/|s{|x#©|wzy|x3|wuzwv{z|x0|q¢xxxwuzz|x.|uyzywwu}|x.|vw}|x&|szz|x*|oyzxvxzvxzww}}|x/|s{|x#©|wzy|x3|wt~xuw}|x/|wr}xywxvz{|x.|szzxxxs~y|x-|vw}|x&|szz|x*|pyyxwxyvxzxw{}|x/|s{|x#©|wzy|x3|wu~wvv}|x/|wr}vzxvxy}|x-|vu|x&|w{{|x-|vw}|x&|szz|x*|p{xxxwxwxyxw{}|x/|s}|x#¨|wxyy|x3|uy{wwvyz|x/|r¡v{xtxyz|x-|ux{xxxxwt~|x-|vw}|x&|szz|x*|p{xxxw|x&|w{}|x/|t~|x#©|w|x4|wt~ywxvw{|x/|r¡v{xtxyz|x-|uwzxxxxwv~|x-|vw}|x&|szz|x*|p{xxxw|x&|w{}|x/|t~|x#©|w|x4|ws¢wwyuw}|x/|r¡v{xtxyz|x-|ux{xxxxwt~|x-|vw}|x&|szz|x*|p{xxxw|x&|w{}|x/|t~|x#©|w|x4|ws~wwyvw~|x/|r¡v{xtxyz|x-|uyzyxxxws~|x-|vw}|x&|szz|x*|p{xxxw|x&|w{}|x/|t~|x#©|w|x4|ws{xzuwy}|x/|r¡v{xtxyz|x-|uyzyxxxws~|x-|vw}|x&|szz|x*|p{xxxw|x&|w{}|x/|t~|x#©|w|x4|wt{yzvux}|x/|r¡v{xtxyz|x-|uyzyxxxws~|x-|vw}|x&|szz|x*|p{xxxw|x&|w{}|x/|t~|x#©|w|x4|wt}yywuw}|x/|r¡v{xtxyz|x-|uyzyxxxws~|x-|vw}|x&|szz|x*|p{xw|x&|wxx{}|x/|t~|x#©|w|x5|t{xywvx{|x/|s~v{wuxzy|x-|uyzxxxxwu}|x-|wwz|x&|uzy|x*|ry|x'|wxxx{{|x/|t~|x#©|w|x5|wyxxxwxy|x/|vzwyxwxy|x.|wxy|x&|wy|xA|v|x-|yy|x/|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xo|y|xI|w|x-|t~|x#©|w|xo|y|xI|w|x-|t~|x#©|w|xo|y|xI|w|x-|t~|x#©|w|xo|y|xI|w|x-|t~|x#©|w|xo|y|x;|wxy|x-|w|x-|t~|x#©|w|x.|wxxy|x_|y|x;|tyzywxy|x(|w|x-|t~|x#©|w|x.|vvyx{xxwyxwwz|xU|y|x;|uyyxvyxxxyyxxxw|x-|t~|x#©|w|x/|s~tzxzwxxwwzxwyxxwyxxxxy|xI|y|x<|wvzvzvxx{xxxxw|x-|t~|x#©|w|x/|s~tyv}vwzxuzxwywxwzwzww{y|xH|y|x;|wwxyuzxxxyyxxxw|x-|t~|x#©|w|x/|s~t{u{ux{wuzyxxuxyyxywv}y|xH|y|x;|wwzwvzxxxxyxxxw|x-|t~|x#©|w|x/|vzvzvzvxxywxyxxwxxywywxz|xI|y|x?|wy|x)|w|x-|t~|x#©|w|xo|y|xI|w|x-|t~|x#©|w|xo|y|xI|w|x-|t~|x#©|w|xo|y|xI|w|x-|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#¥|wvxz|x3|utz}y|x²|t~|x#¥|wuyz|x3|pvy}~|x²|t~|x#¥|wuyz|x3|nxxz£|x²|t~|x#¥|wuyz|x3|nxxz£|x²|t~|x#¥|wuyz|x3|nxxz£|x²|t~|x#¥|wuyz|x/|sxxxsxxz¢|x¥|y|x-|t~|x#¥|wuyz|x/|sxxxsxxy£|x¥|y|x-|t~|x#¥|wuyz|x3|nxxz£|x²|t~|x#¥|wuyz|x3|nxxz£|x²|t~|x#¥|wuyz|x3|nxxz£|x²|t~|x#¥|wuyz|x3|owx~~|x²|t~|x#¥|wuyz|x3|uty~y|x²|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xp|y|xI|w|x-|t~|x#¥|wuyz|xp|y|xI|w|x-|t~|x#¥|wuyz|xp|y|xI|w|x-|t~|x#¥|wuyz|xp|y|xI|w|x-|t~|x#¥|wuyz|xp|y|x6|wv{wwxyvyzvxyxyxxxxw|x-|t~|x#¥|wuyz|x0|vw{|x*|wxy|xR|y|x6|wt~uyvzxwyvxzyyxxxxw|x-|t~|x#¥|wuyz|x/|uyyu}|x*|wxy|xQ|y|x7|t}t}ty{vxywwyzxxxxw|x-|t~|x#¥|wuyz|x/|t}xt{uyyxwyxwywwxzxyy|xM|y|x7|t}t}tyzvzxwxxxzxxxw|x-|t~|x#¥|wuyz|x/|s~xt{vzuxxxyzwvzxxwzy|xM|y|x7|u{vwyyvyzwxxwyyxxxw|x-|t~|x#¥|wuyz|x/|vvyx{syyvyxyxxxywxx{|xN|y|x:|wyxwy|x+|w|x-|t~|x#¥|wuyz|x0|wyxxu{xwy|x(|uyz|xN|y|xI|w|x-|t~|x#¥|wuyz|x4|wy|x*|wwz|xO|y|xI|w|x-|t~|x#¥|wuyz|xp|y|xI|w|x-|t~|x#¥|wuyz|xp|y|xI|w|x-|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|x¸|wsu}}y|x+|t~|x#¥|wuyz|x¸|trxy¡{|x+|t~|x#¥|wuyz|x¸|ssxx¡}|x+|t~|x#¥|wuyz|x¸|ssxx¡}|x+|t~|x#¥|wuyz|x/|w|x©|tsxx¡}|x+|t~|x#¥|wuyz|x/|s|x©|uvxx¡}|x+|t~|x#¥|wuyz|x/|u|x©|tuxx¡}|x+|t~|x#¥|wuyz|x¸|ssxx¡}|x+|t~|x#¥|wuyz|x¸|ssxx¡}|x+|t~|x#¥|wuyz|x¸|trxx¡}|x+|t~|x#¥|wuyz|x¸|vrv{~z|x+|t~|x#¥|wuyz|x¹|uwzz|x-|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|u}|x#¥|wuyz|xÈ|u}|x#¥|wuyz|xÈ|u}|x#¥|wuyz|xÈ|u}|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|x0|y|x¬|w|x-|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|u}|x#¥|wuyz|xÈ|u}|x#¥|wuyz|xÈ|u}|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xS|vwxyz|x'|wy|xf|t~|x#¥|wuyz|xR|wu{xxxywxxvyvx{xvzywvzww{|xD|vzxxwxy|x1|t~|x#¥|wuyz|xR|wv{xwvzwwyxyuyywzu{t{u{v{y|xC|wwzwwz|x2|t~|x#¥|wuyz|xR|wv{xwvzwwyvzvzwyzt{t~r~vyz|xD|wvyz|x3|t~|x#¥|wuyz|xR|wt~xvwyww{vxwzxw{t{t~s}wxz|xY|t~|x#¥|wuyz|xS|wvxzxvxyxwzxvzwwyzvzu{wxy|xY|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|xÈ|t~|x#¥|wuyz|x0|w|xe|y|xQ|t~|x#¥|wuyz|x0|t|xe|y{|xP|t~|x#¥|wuyz|x0|rw|xd|{}xxy|x?|w|x/|t~|x#¥|wuyz|x0|q|xe|{}xxy|x?|w|x/|t~|x#¥|wuyz|x0|q|xe|{}xxy|x?|w|x/|t~|x#¥|wuyz|x0|q|xe|{}xxy|x?|w|x/|t~|x#¥|wuyz|x0|q|xe|{}xxy|x?|w|x/|t~|x#¥|wuyz|x0|q|xe|z~xxy|x2|wvx{|x*|w|x/|t~|x#¥|wuyz|x0|q|xe|z~xxy|x0|vvxyv~|x*|w|x/|t~|x#¥|wuyz|x0|q|xe|z~xxy|x0|tv}wx{|x*|w|x/|t~|x#¥|wuyz|x0|q|xe|z~xxy|x/|ws{wv~y|x*|w|x/|t~|x#¥|wuyz|x0|q|xe|z~xxy|x.|wuzvwx~|x+|w|x/|t~|x#¥|wuyz|x0|q|xe|z~xxy|x-|wuzvyyyy|x+|w|x/|t~|x#¥|wuyz|x0|qw|xd|{~xxy|x-|tywyzy|x.|w|x/|t~|x#¥|wuyz|x0|p|xe|{~xxy|x-|ryzzy|x/|w|x/|t~|x#¥|wuyz|x0|p|xe|{~xxy|x-|wxxy|x0|w|x/|t~|x#¥|wuyz|x0|p|xe|{~xxy|x?|w|x/|t~|x#¥|wuyz|x0|p|xe|{~xxy|x?|w|x/|t~|x#¥|wuyz|x0|p|xe|{~xxy|x?|w|x/|t~|x#¥|wuyz|x0|p|xe|{~xxy|x?|w|x/|t~|x#¥|wuyz|x0|p|xe|z¡xxy|x?|w|x/|t~|x#©|w|x/|p|xe|{~xxy|x?|w|x/|t~|x#©|w|x/|t|xe|y{|xP|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xÇ|t~|x#©|w|xQ|w|xD|y|xO|t~|x#©|w|x@|w|x1|wv|x2|vw|x1|zz|x2|{|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|wv|x2|t|x2|t|x2|z}|x2|}|x>|t~|x#©|w|x.|y|x2|w|x2|wv|x2|v|x3|z|x2|w|x2|zz|x+|t~|x#©|w|x.|y|xg|wv|x2|q|x2|~}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x.|y|xg|wv|x2|p|x2|¡}|x+|t~|x#©|w|x?|ww|x1|y|x3|y|x3|w|x2|q|x2|~{|x+|t~|x#©|w|x.|u|x2|vu|x1|yz|x2|{y|x2|y|x2|t|x2|{y|x+|t~|x#©|w|x.|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|t~|x#©|w|x.|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|t~|x#©|w|x.|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|t~|x#©|w|x.|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|t~|x#©|w|x.|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|t~|x#©|w|x.|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|t}|x!F|yxxxxw|x!i|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|s}|x#§|wxxyy|x+|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|s{xxy|x+|wxxy|x#W|wxxy|x*|wxxy|x+|wxxyy|x+|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|s}|x#¨|wxyy|x+|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|s}|x*|wxxy|x:|wy|x<|wy|x!Ý|wy|x<|wxy|x;|wxxy|x&|wxxyy|x+|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|s{|x§|y|x!}|w|x§|yy|x+|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|s{|x#ª|yy|x+|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|s{|x#ª|yy|x+|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|s{|x#ª|yy|x+|t|x2|tv|x2|z|x2|~y|x1|yz|x2|u|x2|yy|x+|s{|x#ª|yy|x+|t|x2|uu|x2|{|x2|}y|x1|yz|x2|u|x2|yy|x+|s{|x#ª|yy|x+|v|x2|wv|x1|yy|x2|yy|x2|y|x2|w|x2|y|x-|s{|x#ª|yy|xÅ|s{|x#ª|yy|xÅ|s{|x#ª|yy|xÅ|s{|x#ª|yy|xÅ|s{|x#ª|yy|xÅ|s{|x#ª|yy|xÅ|s{|x#ª|yy|x+|y|x3|w|x§|s{|x#ª|yy|x+|y|x3|w|x§|s{|x#ª|yy|x+|y|x3|w|x§|s{|x#ª|yy|x+|y|x3|w|x§|s{|x#ª|yy|x+|y|x3|w|x'|ux{|x{|s{|x#ª|yy|x+|y|x3|w|x'|sw¡|x{|s{|x#©|wzy|x+|y|x3|w|x'|rx~y|xz|s{|x#©|wzy|x+|y|x3|wxxxuvxux{xz{|xx|s{|x#©|wzy|x+|y|x3|wxxxvvxtx{yy{|xx|s{|x#©|wzy|x+|y|x3|w|x'|rx~y|xz|s{|x#©|wzy|x+|y|x3|w|x'|sw¡|x{|s{|x#©|wzy|x+|y|x3|w|x'|vw{|x{|s{|x#©|wzy|x+|y|x3|w|x§|s{|x#©|wzy|x+|y|x3|w|x§|s{|x#©|wzy|x+|y|x3|w|x§|s{|x#©|wzy|x+|y|x3|w|x§|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|x#©|wzy|xÅ|s{|xæ|ww|xÔ|yy|xì|wzy|xÅ|s{|xæ|w|xÕ|y|xí|wzy|xÅ|s{|x#©|wzy|xÅ|r{|x#ª|yy|xÅ|,z|x2P|ywxyw|x*|yw|x'|yw|x'|yxxw|x/|yxwxyxxw|x#Ë|{yxxxt|x2|yxwxzww|x/|y}szztywxzxxxyv}twywxyx~r|x&|y{ywwuyxywwywyzvwx}yux}uzuv|x#Ê|{vwx}t|x2|yzwxxv|x0|y}sz{uzwxzwwx{uztzxxv{w{r|x&|yzywyvywxxyyvzztvxyzxwzty}s|x#´|yxxxxw|x2|{vwx}t|x3|zzxuw|x0|y}sz{vxxxxwzvzv{vzu{xuw~rxxyxwy{yvwxzxwyxvzwyuwxzyxwzty}s|x#´|{xxxxu|x2|{vwx}t|x3|zyxvw|x0|y}uyywwyxxxyvzv{v{wvyvx}rxx{wvyzxuz{yvwywv{wyuwxyy{u{tzxu|x#Ê|{wwx{t|x2|yywxzvw|x0|{xxvywyxxyxvzwyvzxww{wyt|x'|zxvyzywwxxwzvzwvyzxvx{wxu|x#Ë|zyxxxu|x2|ywxxyw|x/¶|y|xA|w|x$.|z|x9|w|x)|w|x$-|z|x9|w|x)|w|x$-|z|x9|w|x)|w|x#ª|yzxyxwxxwv|xy|z|x3|zyvwxxw|x)|w|x0|yzxxxvw|x;|y{wvw|x=|yzxxxu|x<|zy|x&|u|x>|}t|x>|y}s|xA|{yvv|x¯|zzt|xA|yxw|x=|yyyxxwv|x>|yxw|xT|zzywvwxxzvw|xx|z|x2|zyxwvxxw|x)|w|x.|yzyxux{vv|x9|y{xvxyxvw|x:|zywwxyzt|x;|¡tw}txyv|x<|{u}ty{t|x;|{zvxxwwyv|x9|y{wwxywv|xª|~xwvzwvw|x<|yw|x?|y{wwxxywv|x?|yxw|xR|zyvxwxxx{vw|xx|z|x1|yzxwvxxxw|x)|w|x-|zzvzwux}vv|x9|}{uuw}zsw|x:|}vvxxz}tv|x:|}uw¡r|x?|{xzvxvw|x;|z}sxxxwyw|x9|y}xvyzvt|xª|¢uxwyvxv|x<|yxw|x>|y}wwwvzxww|x>|yxw|xR|zxv|x&|}uw|xx|z|x0|yzxxvwxxxw|x)|w|x+|yyxvz{vu}vv|x9|}xwzwvyvw|x9|yyvxy{xyvu|x:|ywx¡r|x?|y~sy{s|x<|y¡q|x@|yzyuyywv|x©|¡sx~vxwvw|x@|yw|x;|yxyyuxzww|xr|zxv|x&|{vw|xx|z|x/|yzxxvwxxxxw|x)|w|x+|yyxvz{xxytv|x9|}wu~vuzww|x9|yxwx~uzw}q|x=|¡r|x>|}t~sy~vwu|x:|y¡q|xA|zztzyxxu|x¨|¡ry~sxxyv|xZ|yyvyzxvyww|x;|yw|xV|zxv|x&|{vw|xx|z|x-|zyywyvv|x&|w|x)|w|x-|zzxzvvywv|x:|}wu}vvzww|x:|}u{vyxvyv|x=|¡r|x>|yw~wyuww|x;|}}txxwvyv|x9|y}wxtzxzwu|x¨|¡ry~rxxzv|x[|zyuyxzxu|xs|yzy|x&|wvw|xx|z|x-|zzwvyv|x'|w|x)|w|x.|yyyvw}vv|x:|{yu{vyztw|x:|{x{wvvzvw|x=|¡r|x?|¡szv{wu|x;|y{t|x@|y{zvxxvv|x©|¡ry~rxxzv|x[|yzzwxwvw|x=|yw|x<|{zuv|x¼|z|x-|y{xwwv|x'|w|x)|w|x/|zzxxxwvw|x:|yz}wuvw|x<|{}uxxuw|x=|zzxt|x@|~s|x?|{u|xB|zzvv|x«|}xx{uxxvv|x£|yw|x:|zywzuw|x»|z|x9|w|x)|w|x#l|zyvwy{uw|xº|z|x9|w|x)|w|x#k|zzuwxxy{uw|x2|zwwzxv|x¢|z|x9|w|x)|w|x#(|zvyyyu|xw|y}wt~wt|x¢|z|x&|y{wu|x(|yxwxxxxw|x)|wxxy{wv{xvvxxxyyv|x5|y{wwzxuwxxxzww|x9|zyvwzww|x@|{yxt|x<|}xt}vzt|x<|}xt|x;|zztx}xtxyywzwv|x©|{ywu|x^|y}tzwvxxzyu|x<|yw|xV|y{xwzvxzvzxxxt{uw|xu|z|x&|y{vxv|x'|zyu|x(|w|x&|wxxyw~u{t{uwxx{xu|x6|z{uzvyvwxx}vv|x8|{xv{vvxxxyw|x>|~twxxxxyyv|x5|}uw¡r}txxxxyyv|x4|¡rzv|x;|yw¡rxy~ry{t{yuw|x¨|~t~swxxxy}s|x8|yw|x>|y~vywywxxzwxxvzyuyvv|x:|yw|xO|yzyyxwxyvzuzyt{uw|xu|z|x&|y}wu}vyu{vyxyxwwzvyxuw|x&|wxxxy}u{szyu{yyyxux{uzxvyyxwytw|x&|y{xvzt{wv{yyxyux{t}wvzwywxuw|x)|yzwzyxu{wvw}uzzs~uywu|x4|~t{yuzzvxt|x5|¡vw}t{uzys}wywxwu|x4|y}zt{wuywyzvxzuv|x-|}wuxx{uy{v}wxwxywyu{xxtzu|xz|~t~uzxwxw}uywvv|x4|ywxxyxxwyxxxxw|x2|y}tzyyvyw|x'|vzztw|x2|yxwxywyxxwyxw|xL|yyyxxwyyvzu{wyzsw|xu|z|x&|y{vyyu{vzvyxxwzwxwxyuw|x&|wxxy}ty{tyxvzzyvxyw{vww{zvwwztw|x'|zzvzuyww{yyuzwy{szu~ztxwztw|x*|y{yuzwwwx~t{xwuzv}vu|x4|~wywt¢rxyv|x5|}uw¡r}zvxwvxxx{xt|x1|{uy{y{rvyy~uv}uwzvv|x+|yx¡qyx}sy{v}vvxywzzt{u{ysw|xz|~wvzyztyv{u}vvv|x4|ywywywyxw|x7|y{t{xywy|x&|vxw{wu|x6|yxwxxyxw|xÖ|z|x&|y{wwyu{xyvyxwxxxyvyyvv|x&|wxxzzww}vwuxzzyvxxxzvzxuyywxyvv|x&|zzxv{wwuxzzyuyxx{t}vvzxwxyuw|x)|zzxwxzuzxuw~uzwvzu}xt|x4|}u}wvy{s{t|x5|~wt~s{wzwv}vvzxxvw|x0|}xywxzswyx{ww{vw{uv|x+|~wwu}xwuyzw{xxvwxyzuzux}tw|xz|}uw~wyvxxywzvvw|x4|yxxwxxywywxyxw|xB|}uw|x6|yxwxyxwxyw|xÔ|z|x9|w|x)|w|x5|yzvw|x?|yzu|xî|zww|xí|yyv|xó|z|x9|w|x)|w|x6|yw|xA|yw|xî|zv|x!ä|z|x9|w|x)|w|x#{|yy|x°|yy|x=|wxxxxw|x#{|z}|x$M|t}|x$M|t}|x$M|t}|x$M|t}|x$M|t}|x$M|t}|x)|wvyyyxxwxy|x(|wvzyuxyz|x1|wyxxxxwy|x3|wxxyxxxvzxxvz|x&|wy|x(|wy|x)|vzxxvzvz|x2|wwzxxxxuyz|xD|wxy|x)|vyy|x<|wy|x=|vyy|x4|wxywxy|x2|vz|x-|vyyxxxux{xux{vxyyxwxyxxwxy|x!w|t}|x)|vvyx{xxwxyxxxu{xxvxv}r}wx{|x0|tzxzxwu}|x3|wxvzyxxs~xxs~|x&|wy|x&|vxxyy|x(|q¡yws¡vz|x2|s{v}xxtzxyv{|xB|wy|x)|wwyyxxwxy|x7|uzyxxxvz|x-|wxy|x&|uzxy|x5|uv}vyz|x1|wt~|x-|r}zxxxvwzwxv{vxv~wuzzxxvxz|x!w|t}|x)|vvywzvzxyvwxzt{{xwvw}r¡vu~wwxwyxxwxzvwx{wvw}ywr}w}tyx{xvvyyxxwyvzwxxyww{r{x}r~uyyzwwxvxy{xtwyxxzxww{yxp{~tv¡uzuyxwzxvyywxywwyys{u}{xsz{uu~vxxzuzxvzzxwvw{vxzywuzwxw{uyyvyxzvxzwxvzzxtxyzxwvw}wzs}uyxxx{xwxvxxwxzwwv}wwzvw}uyxywx{wwwwxyyvzxwxt{x{uxx}tyv~xwuywzuyy{xtu}wzxww{u{u{ux}szvzwzt{xzwvyxv}yxus~{xxxxwws¢wwyws¢vvzzxxvxzxwwywxxzvyvyw{xxuyxxxywxyxwyxwyy|x!V|t}|x)|uu{ywuzxzuzv{t}zxwwu~r¡wu}wvwwxzxxxyuyw{zuv}yws}u{szx~xvtyzwyxxu{wyxyvu¡r~vzt}szx~wvyuzx{xtxxyxxvwx}zxqz}sz{s}vzwu}wyvxxxyxyvyt}t~zxvwv{t}u{wxv{vvy{ztxyxvzzyvwyszv~wyxsyy{wxxwxvy{zuxw{xuyxzu}o£tztyy~xvxvwzwxyxxv{wvw{w{rzv~uz{wuxzwyxuyxyzs{u}t{t¡uzs¢xwuzvzs}w}xtwyv}vyyxu}tyvx{t~t}wyt}wvwxzww~yuxt~zxxxvv{p¤xuzvyyuzxzxxvxzvwxyxxv{wyt}v{xwuzvzwzwyxvxywxyyy|x!U|t}|x)|vu}wwwxw{vzu}t}yxwyr¡r¡vv}xvuywyyxxyvzvzzvv}xws¡s{t}xzwvxwzvyxxwywyxwzt~r¡u{s}u{xzwvyvzw{xuxxyxwu{yyyxq~t{w{s}v}uv{wzvwzvw{yt{t~s~yxvys~t{t~vxw{vyxyyszywv}yxvxyq¡xxw{vt}xxxwwyxxyyyuzvzwvzxys¡o£u{r~xzxvwwwzxwyxzs}vyt~wzr~wyxt¡wwwwzxxwww{zr{u}u}r¡u}p£xwt}t{t}v}xtxzt{u{zwxwyvyyyr¢t}wwt¡vux{ytx~xuwt}yzywwxzq¢vxu}yvuyx{yxvxzvxyxwyu{xys~u{xxuzu{vzwyxvyywyxy|x!V|t}|x)|wwzwvwyxzvzvzvx{xuwy{syyzyxwvywyxvyzvzvzyxt{ywuxy{txzzwvwyzwxyvwzwyxwwx{tyx}t{ux{ywwyvzwzxvwxzxwxww{yxs~t}u{t{uyyw{vvyywwzwwzyu{vx{xtxyzt{wwyzv{vvzzxvwwzwzyxwxyuwyzuyzvwzyxww{vvzzxvyxvwyzu}syv~wzuwy{xvvwzxwyzvwx{uxw}u{uxzxvy{wvwzxwyvyxzytyw{vzt}uxu¢xwuxzyu{wzxux{tzxww{yt{xux}s~u{wxtyyzvwzwx{xwxt{v{ywuxyyvyztyyzxwxyyxwwxyxwywxw{wyu{vzxxvywywywxyxxywwyy|x!V|t}|x.|wxxxyxxwywxyxwxyxwxxyxxxwyxxxwxy|x'|wyxxwxxywxxyxwxxyxxxwxywyxxwxywxxywywxyxxxxwyxxxxwxyxxxwxyxxwywyxxwywxywyxwxywxywxyxwywxyxwxxywyxwxywyxwxyxxwxy|x)|wxywxywxxyxxwywxxyxxxxwxxywywxxyxxxwxyxxwxxvxzywxxywxxywywxxxxyxxwxyxwxxxxyxwxxywywysxx~xxwxyxwy|x'|wyxwxyxwyxwxywywyxxwxxyxwxxxyxxxwywyxxwxxywxywxxy|x'|ww|xB|z|x!V|t}|x!=|wy|xI|wxxy|x!ã|t}|x$M|t}|x$M|t}|x$M|t}|x$M|t}|x$M|t}|x#Y|wy|xN|y|xÅ|r~|x#Y|wy|x5|wy|x9|y|xÅ|r~|x#Y|wy|x5|wy|x9|y|xÅ|r~|x!ü|wy|x[|wy|xN|y|xÅ|s}|x!ú|wwwzy|xZ|wy|xN|y|xÅ|s}|x!ú|vuwx~y|xY|wy|x5|wy|x9|y|xÅ|s}|x'|wxxy|xR|wyxxxwxy|x!*|wxy|x«|tvxx~y|xY|wy|x5|wy|x9|y|xÅ|r~|x'|wvyyy|xO|wwu}xxwwyz|xG|w|x&|wz|xÛ|wvxzxxxy|x§|tvxx~y|xM|wxy|x*|wy|x5|wy|x9|y|xÅ|s}|x'|wuw{yy|x+|wwyyxxwy|x<|vvv{wxwz{|x)|wxxy|x<|vwwwxyw}y|x(|wxyxwxy|x&|wxy|x)|wxy|x¹|wuzvxxyyyy|x(|wxywwyyxxxxwxy|xm|tvxx~y|xM|uyz|x*|wyxxxxwwyxxxxwyxwyxxy|x;|y|xÅ|s}|x'|wvxxyyy|x*|uxzyxwv{|x&|wxy|x5|wt~wuw~|x)|wvxzy|x<|vyxrx~wyz|x(|wu{xvyz|x&|vyy|x)|vyyxxxxwwz|x²|wu}xxwwvx}|x(|uw{uxyzyxxxwxy|xL|v|xA|uwxx{y|x@|yy|x-|uyz|x*|wyxxxwuv~uxxyvzxuzyyz|x;|y|x:|wxxy|x¨|s}|x'|wvyxwyyy|x)|tzywxxv{wxywxww{y|x4|wt}vxx{|x(|wvyyxw|x(|z|x4|vyxrxzzw}|x(|vt{yuy{wxxxywxxxyxwxyw|x&|ywxwv}y|x±|wu}xxxxvw{|x(|ws}u}vyzvzvyxwxywyxxy|x4|v|x'|yy|x)|uw|x@|wwxxz|xA|{y|x-|uyz|x*|wyxxxxvt}vzs{zwxwxyzywy|x(|wxywxxxxy|x(|y|x*|wvzyxwwyy|x'|vxyy|x¨|r~|x'|wvyxwwzyy|x(|uxyuxyxzuxzwywx{y|x4|ws{xzv{|x(|wvyzwtzwxxwzv}y|x3|vxwsxy}w}|x(|vuyyvyyvyywyvyyyyxtyxwx{xtyzvzxv}y|x±|wu}xxxxvw{|x(|vu}t}xv{uyu{yszxwywz{|x3|wv|x'|yz|xJ|tvxx~y|xI|wwxxvxzxyy|x'|wyxxxxvt}vztzzwzxvxxzxy|x(|uzxvzxvzy|x(|y|x*|vt}zwwt~y|x'|vwzy|x¨|s}|x'|wvwxxxzyy|x'|wwwwvyyxztzywzxv{y|x4|wszzwwzyy|x&|wvxyxwywxwxzv{y|x3|v|w&|}v}y|x'|vuzwyvyvyzxyuxzyyxuxxwyzwuzyv{xu}y|x±|wu}xwwxwx{|x'|wwu{uzxzywtzyyszxvxx{{|xf|tvxx~y|xI|wvxxvyyxyyy|x&|wyxxxxwt}uyxxxxzwwxxzy|x)|vyxwyxwyy|x(|y|x*|vuy}wtx{ywxxywxwxyxywxxyxwxyy|x{|s}|x'|wvwxxzz|x)|wvxywxywzvyyvyxwzy|x5|uxxxv{yy|x'|vwxyxyvxyvyx{|x8|wvzww{|x'|wvywywxxxyvyxywyyxvxywyyxuyywyxwzy|x±|wuzxxwxxyz|x'|wvxzuyx{xxt}wxuzywxxyy|xf|tvxx~y|xM|uyz|x*|wyxxxxwwyxwyxwyxxxwxyy|x:|y|x*|vwv}wux{yvwxzuzxwyxywxxxxwyzy|x{|s}|x'|wxxwwzy|xR|wwz|x3|u{|x:|wyxxvz|x0|wwwyz|xÆ|wvxxyz|x©|uuxx~y|xM|uyz|x*|wy|x5|wy|x9|y|x*|vwxxwzvzxwxwzv{wuyzxvyxxxxzy|x}|s}|xt|wy|xN|wwxyy|x!Q|wvwyzy|xM|vyy|x*|wy|x5|wy|x9|y|x*|vwztx}uzvzxuzw{wvxyyvyyxwxzy|x}|s}|x!û|wxxy|xZ|wy|x5|wy|x9|y|x*|vw{uyyvyxwxwzwzwwywywxyywxyy|x}|r~|x#Y|wy|x5|wy|x9|y|x*|wxyw|x&|wxy|x*|wxyxxxy|x}|s}|x#Y|wy|x5|wy|x9|y|xÅ|s}|x#Y|wy|x5|wy|x9|y|xÅ|s}|x#Y|wy|x5|wy|x9|y|xÅ|s}|x#Y|wy|x5|wy|x9|y|xÅ|r}|x#ª|yy|xÅ|r{|x#¨|wxzz|xÅ|r{|x#¨|wxzz|xÅ|r{|x#¨|wxzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|x+|sv|x0|wxx{}y|x¤|r{|x#©|wzz|x+|sv|x/|wxxx{}y|x)|twy{y|x/|w|x*|y|x0|wtx}y|x2|wxy|x5|r{|x#©|wzz|x+|sv|x(|yyvxxxwxxx{}y|x(|wqyw¢y|x/|su|x(|~zy|x.|wvs{}y|x2|vv}|x5|r{|x#©|wzz|x+|sv|x'|y{vwwxxwxxx{}y|x(|twwyz{|x/|swy|x&|wz{y|x.|wtu}{y|x1|wwu}y|x4|r{|x#©|wzz|x+|sv|x'|yywyvxxwxxx{}y|x(|q}u{u~y|x.|swzwywywwz{y|x-|wuvxy}y|x1|wtu{~|x4|r{|x#©|wzz|x+|sv|x'|zwxzuxxwxxx{}y|x'|wq¡t{t¡y|x.|sxzwxxxxvz{y|x-|wtxxx{z|x1|vtxx~y|x3|r{|x#©|wzz|x+|sv|x&|y{uyyvwxwxxx{}y|x'|uu}t{u{{|x.|sxzxxwxxu}zy|x-|uvyxv{zy|x0|vsyx~y|x3|r{|x#©|wzz|x+|sv|x&|{ywxyxtxwxxx{}y|x&|wr}yt}vv~y|x-|sxzxxwxxu}zy|x+|wuv{wvy}y|x/|wwszw}z|x3|r{|x#©|wzz|x+|sv|x&|zwwxzyuxwxxx{}y|x&|vs~xt}wu}z|x-|sxzxxwxxu}zy|x+|wuwzwww{{|x/|wvtzw{{|x3|r{|x#©|wzz|x+|sv|x&|{wwxyztxwxxx{}y|x&|rzzwu{xww}y|x+|swy|x&|u¡z|x-|vuyywxu}{|x/|wtwywy~|x3|r{|x#©|wzz|x+|svxxxxy{wwxyxvwwxxx{}y|x&|q~xtwy{wu¡y|x+|svy|x&|u¢z|x-|vuyywxu}{|x/|vtyxwx~y|x2|r{|x#©|wzz|x+|svxxxxy{txxxzxvwxxx{}y|x&|q}yuxxzwv~y|x+|txz|x&|s¡y|x-|vuxzwww{{|x/|vs{wwx~y|x2|r{|x#©|wzz|x+|svxxxx{vwxxxzyuwxxx{}y|x&|txzxwxxvy}|x-|txz|x&|s¡y|x-|wuuzxvz{z|x.|wws{wwx}z|x2|r{|x#©|wzz|x+|svxxxy{t|x&|zwvxxx{}y|x&|vs~xxxwt~z|x-|uwz|x&|s¡y|x.|uuyxv{{y|x.|wvuzwwx{{|x2|r{|x#©|wzz|x+|svxxxyzu|x&|zxuxxx{}y|x&|wq}xxxwv¡y|x-|vvyyxxxxs¡y|x.|tw{xuy{y|x.|wtvyxxw{}|x2|r{|x#©|wzz|x+|svxxxzxv|x&|zyuwxx{}y|x&|wqyyxxxw¡y|x-|vuzyxxxwu~y|x.|tw{xvx{y|x.|wswxxxw{~|x2|r{|x#©|wzz|x+|svxxx}uw|x&|zyuwxx{}y|x&|wryyxxxv¡y|x-|wtzyxxxvw}y|x.|tw{xvxzz|x.|wswywxw{~|x2|r{|x#©|wzz|x+|svxxx}uw|x&|zyuwxx{}y|x'|qzxyxxu¢|x/|syzxxxuy{y|x.|tw{xwwzz|x.|wswywxw{~|x2|r{|x#©|wzz|x+|svxxx}uw|x&|yyvwxx{}y|x'|txxyxxw}|x/|tyzxxxuzyy|x-|wvxzxwwzy|x.|wtwxxwxz~|x2|r{|x#©|wzz|x+|vwxxxyw|x'|yxwxxxyyy|x'|w|x'|y|x/|w|x&|wyy|x/|w|x'|y|x.|wwxxwxxyz|x2|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|x5|wwz|x2|wrwxxx~{|x1|uvy{y|x2|ttz{{|xI|r{|x#©|wzz|x4|wvt¡y|x1|qyxxxxv¡z|x/|vrvx¡{y|x1|tvyz{|x-|s|x/|{z|x.|r{|x#©|wzz|x4|wtv~z|x1|pzxxxxw}{|x/|ttvw¡}y|x/|wtuwxy~zy|x*|us~|x*|uy}y|x.|r{|x#©|wzz|x4|vtyx~|x1|pzxxxxw}{|x/|stww{¢y|x.|wtuzwxxw}{y|x)|wr¡|x'|wwyvx}|x/|r{|x#©|wzz|x4|vs{v~y|x0|pzxxxxw}{|x.|wrvwwy£yy|x+|wvtyxwxxwz}yy|x(|wr¡vxzxxxvuzxx}|x/|r{|x#©|wzz|x3|wvtzx{z|x0|pzxxxxw}{|x.|vsvwwx¢{y|x+|vsv|x(|{}z|x(|wr~vw{xwywuzwy}|x/|r{|x#©|wzz|x3|vuxwx{{|x/|wqy|x&|}{|x.|ttwwwx~~y|x-|utyxwxxxx}{|x)|wr~vw{vwzxtywz~|x/|r{|x#©|wzz|x3|vs}xvx}y|x.|vryxxxwx}}|x-|wsvwwwx{¡yy|x+|utyxwxxxx}{|x)|wq}wxywxzxtxw{~|x/|r{|x#©|wzz|x2|wwt{xvw~y|x.|vryxyxvx{}y|x+|usv|x&|~}y|x+|utyxwxxxx}{|x)|wq{xwxxxzxuxw{~|x/|r}|x#¨|wxyz|x2|wuwzxww{z|x/|p{wzxuy{{|x-|tswxxwxx~~y|x+|utyxwxxxx}{|x)|wq{xw|x&|wxw{~|x/|s~|x#©|wxy|x2|vt{xxwwy{y|x.|p{wzxuy{{|x-|tswxxxwx~~y|x+|utyxwxxxx}{|x)|wq{xw|x&|wxw{~|x/|s~|x#©|wxy|x2|vs}xwyuy}y|x.|p{wzxuy{{|x-|tswxxwxx~~y|x+|utyxwxxxx}{|x)|wq{xw|x&|wxw{~|x/|s~|x#©|wxy|x2|vr}wxxwx~y|x.|p{wzxuy{{|x-|tswxxwxx~~y|x+|utyxwxxxx}{|x)|wq{xw|x&|wxw{~|x/|s~|x#©|wxy|x2|vrzxzvvz~y|x.|p{wzxuy{{|x-|tswxxwxx~~y|x+|utyxwxxxx}{|x)|wq{xw|x&|wxw{~|x/|s~|x#©|wxy|x2|vrzzywuy~y|x.|p{wzxuy{{|x-|tswxxwxx~~y|x+|utyxwxxxx}{|x)|wq{xw|x&|wxw{~|x/|s~|x#©|wxy|x2|vszyywuy~y|x.|p{wzxuy{{|x-|tswxxwxx~~y|x+|utyxwxxxx}{|x)|wqzxxxxwxxxxw{~|x/|s~|x#©|wxy|x2|vtyyywvy}y|x.|rzwyxvy{z|x-|ttwwxxxx}~y|x+|vuyw|x&|{z|x)|wry|x*|w{}|x/|s~|x#©|wxy|x2|wvyxxxwyyy|x.|uyxxxwyyy|x-|vvxxwxxxzzy|x+|ww|x'|yxy|x)|wv|x-|zy|x/|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xl|w|xJ|y|x-|s~|x#©|wxy|xk|w|xL|y|x+|s~|x#©|wxy|xk|wxy|xI|wy|x+|s~|x#©|wxy|xk|wxy|xI|wy|x+|s~|x#©|wxy|xk|wxy|xI|wy|x+|s~|x#©|wxy|xk|wxy|xI|wy|x+|s~|x#©|wxy|xk|wxy|x;|wxy|x-|wy|x+|s~|x#©|wxy|x+|vxxyxywxyxwxy|xS|wxy|x;|tyzywxy|x(|wy|x+|s~|x#©|wxy|x+|uvyx{ywwzxvw{|xS|wxy|x;|uyyxvyxxxyyxxxwy|x+|s~|x#©|wxy|x-|r~tzxzwxxwwzxwy|x&|ywxyy|xF|wxy|x<|wvzvzvxx{xxxxwy|x+|s~|x#©|wxy|x-|r~tyv}vwzxuzxwywxxywzww}y|xF|wxy|x;|wwxyuzxxxyyxxxwy|x+|s~|x#©|wxy|x-|r~t{u{ux{wuzyxxvwyyxywv}yy|xE|wxy|x;|wwzwvzxxxxyxxxwy|x+|s~|x#©|wxy|x-|uzvzvzvxxywxyxxwxxywywxzxy|xE|wxy|x?|wy|x)|wy|x+|s~|x#©|wxy|xk|wxy|xI|wy|x+|s~|x#©|wxy|xk|wxy|xI|wy|x+|s~|x#©|wxy|xk|wxy|xI|wy|x+|s~|x#©|wxy|xk|w|xL|y|x+|s~|x#©|wxy|xl|w|xK|y|x+|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#¥|wvxzxxy|x/|wwuy{y|x²|s~|x#¥|wuyzxxy|x/|wswyz}|x²|s~|x#¥|wuyzxxy|x/|wrxxz~|x²|s~|x#¥|wuyzxxy|x/|wrxxy¡|x²|s~|x#¥|wuyzxxy|x/|wrxxy¡|x²|s~|x#¥|wuyzxxy|x+|uwxxuxxy}|x¥|yy|x+|s~|x#¥|wuyzxxy|x+|txxxuxxy}|x¥|yy|x+|s~|x#¥|wuyzxxy|x/|wrxxy¡|x²|s~|x#¥|wuyzxxy|x/|wrxxy¡|x²|s~|x#¥|wuyzxxy|x/|wrxxy¡|x²|s~|x#¥|wuyzxxy|x/|wswyz}|x²|s~|x#¥|wuyzxxy|x/|wvvy{y|x²|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xl|w|xK|y|x+|s~|x#¥|wuyzxxy|xk|w|xL|y|x+|s~|x#¥|wuyzxxy|xk|wxy|xI|wy|x+|s~|x#¥|wuyzxxy|xk|wxy|xI|wy|x+|s~|x#¥|wuyzxxy|xk|wxy|xI|wy|x+|s~|x#¥|wuyzxxy|xk|wxy|xI|wy|x+|s~|x#¥|wuyzxxy|xk|wxy|x6|wv{wwxyvyzvxyxyxxxxwy|x+|s~|x#¥|wuyzxxy|x-|uxzy|x)|wwz|xP|wxy|x6|wt~uyvzxwyvxzyyxxxxwy|x+|s~|x#¥|wuyzxxy|x+|tyyu}y|x(|wxwyy|xN|wxy|x7|t}t}ty{vxywwyzxxxxwy|x+|s~|x#¥|wuyzxxy|x+|s}xt{uyyxwyxwywwxzxyyy|xJ|wxy|x7|t}t}tyzvzxwxxxzxxxwy|x+|s~|x#¥|wuyzxxy|x+|r~xt{vzuywxyzwwyxxwzyy|xJ|wxy|x7|u{vwyyvyzwxxwyyxxxwy|x+|s~|x#¥|wuyzxxy|x+|uvyx{szxvyxyxxxyxwx{y|xK|wxy|x:|wyxwy|x+|wy|x+|s~|x#¥|wuyzxxy|x+|wxxxxu{|x+|vxzy|xK|wxy|xI|wy|x+|s~|x#¥|wuyzxxy|x0|wwz|x*|vwzy|xL|wxy|xI|wy|x+|s~|x#¥|wuyzxxy|x1|wy|x*|wxxy|xL|wxy|xI|wy|x+|s~|x#¥|wuyzxxy|xk|wxy|xI|wy|x+|s~|x#¥|wuyzxxy|xk|w|xL|y|x+|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xµ|wxxxxy|x+|s~|x#¥|wuyzxxy|xµ|wuvz{y|x+|s~|x#¥|wuyzxxy|xµ|uuwy{{|x+|s~|x#¥|wuyzxxy|xµ|utxx}{|x+|s~|x#¥|wuyzxxy|xµ|utxx}{|x+|s~|x#¥|wuyzxxy|x+|w|x©|uuxx}{|x+|s~|x#¥|wuyzxxy|x+|t|x©|wvxx}{|x+|s~|x#¥|wuyzxxy|x+|u|x©|vvxx}{|x+|s~|x#¥|wuyzxxy|xµ|utxx}{|x+|s~|x#¥|wuyzxxy|xµ|utxx}{|x+|s~|x#¥|wuyzxxy|xµ|utxx}{|x+|s~|x#¥|wuyzxxy|xµ|vuwy{z|x+|s~|x#¥|wuyzxxy|xµ|wwwyyy|x+|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|t}|x#¥|wuyzxxy|xÅ|t}|x#¥|wuyzxxy|xÅ|t}|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|x-|w|x«|y|x.|s~|x#¥|wuyzxxy|x-|w|x¬|y|x-|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|t}|x#¥|wuyzxxy|x+|w|x¯|y|x+|t}|x#¥|wuyzxxy|x+|w|x¯|y|x+|t}|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|xC|wvwxy{|x'|vyy|xM|wxyxxwxyxxwxy|x+|s~|x#¥|wuyzxxy|x+|wy|xC|wt{xxxyxwxvyvx{xvzywwyww}|xC|wvzywwxzxxwxy|x+|s~|x#¥|wuyzxxy|x+|wy|xB|wwv}xvv{vwyxyuyywzu{t{u{v{z|xB|wwwzwwzyxxwxy|x+|s~|x#¥|wuyzxxy|x+|wy|xB|www{xvvzwwyv{uzwyzt{t~r~vy{|xC|wwvyzyxxxwxy|x+|s~|x#¥|wuyzxxy|x+|wy|xB|wwt~xvwyww{vxwzxw{t{u}s~vx{|xD|wxxyxxxxwxy|x+|s~|x#¥|wuyzxxy|x+|wy|xC|wwvxzxvxyxwzxvzwwyzvzu{wxz|xE|wy|x&|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|xD|w|x9|y|xL|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|w|x¯|y|x+|s~|x#¥|wuyzxxy|x+|w|x¯|y|x+|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|x+|ww|xe|y|xE|y|x-|s~|x#¥|wuyzxxy|x+|wt|xe|y{|xD|y|x-|s~|x#¥|wuyzxxy|x+|wr|xe|z}xxy|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|wr|xe|z}xxy|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|wr|xe|z}xxy|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|wr|xe|z}xxy|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|wr|xe|z}xxy|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|wq|xe|{}xxy|x2|wvx{|x*|wxy|x-|s~|x#¥|wuyzxxy|x+|wq|xe|{}xxy|x0|vvxyv~|x*|wxy|x-|s~|x#¥|wuyzxxy|x+|wq|xe|{}xxy|x0|tv}wx{|x*|wxy|x-|s~|x#¥|wuyzxxy|x+|wq|xe|z~xxy|x/|wtzxu~y|x*|wxy|x-|s~|x#¥|wuyzxxy|x+|wq|xe|z~xxy|x.|wuzvwx~|x+|wxy|x-|s~|x#¥|wuyzxxy|x+|wq|xe|z~xxy|x-|wuzvyzxy|x+|wxy|x-|s~|x#¥|wuyzxxy|x+|wq|xe|z~xxy|x-|tzvyzy|x.|wxy|x-|s~|x#¥|wuyzxxy|x+|wq|xe|z~xxy|x-|ryzzy|x/|wxy|x-|s~|x#¥|wuyzxxy|x+|wqw|xd|{~xxy|x-|wxxy|x0|wxy|x-|s~|x#¥|wuyzxxy|x+|wp|xe|{~xxy|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|wp|xe|{~xxy|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|wp|xe|{~xxy|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|wp|xe|{~xxy|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|wp|xe|{~xxy|x?|wxy|x-|s~|x#©|wxy|x+|wp|xe|{~xxy|x?|wxy|x-|s~|x#©|wxy|x+|wt|xe|y{|xD|y|x-|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|x+|w|xU|w|xU|yy|x+|s~|x#©|wxy|x+|wy|x1|ww|x1|wv|x2|vw|xC|y|x2|}{|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|xD|y|x2|¡}|x+|s~|x#©|wxy|x+|uy|xB|wv|x2|ww|x2|y|x2|w|x2|}{|x+|s~|x#©|wxy|x+|s|x2|yz|x2|y|xD|y|x2|v|x1|wzy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|r|x2|zz|x2|y|x3|y|xC|v|x2|yy|x+|s~|x#©|wxy|x+|t|x2|y|x3|y|xD|y|x2|v|x2|yz|x+|s~|x#©|wxy|x+|vy|x1|v|x2|wv|x2|w|x2|zz|x2|v|x2|{z|x+|s~|x#©|wxy|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|s~|x#©|wxy|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|s~|x#©|wxy|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|s~|x#©|wxy|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|s~|x#©|wxy|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|s~|x#©|wxy|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|s}|xs|yw|x'|y|x5|w|x'|y|x6|w|x&|y|x6|w|x&|y|x6|w|x&|y|x6|wxxxy|x8|w|x'|y|x6|w|x&|y|x6|w|x'|y|x5|w|x'|y|x6|w|x'|y|x5|w|x'|yxw|xs|y|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|r}|x#¨|wxyz|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|r}|x#¨|wxyz|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|r}|x#¨|wxyz|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|r}|x#¨|wxyz|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|r}|x#§|wxxyz|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|r{|x¹|y|x!Y|w|x¹|yz|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|r{|x#ª|yz|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|r{|x#ª|yz|x=|vv|x2|t|x2|w|x2|z{|x2|v|x2|{{|x+|r{|x#ª|yz|x=|vv|x2|t|x3|w|x1|z{|x2|v|x2|{{|x+|r{|x#ª|yz|x+|w|x2|w|x2|ww|xD|z|x2|w|x2|yz|x+|r{|x#ª|yz|xÅ|r{|x#ª|yz|xÅ|r{|x#ª|yz|xÅ|r{|x#ª|yz|xÅ|r{|x#ª|yz|x+|w|x°|y|x*|r{|x#ª|yz|x+|w|x°|y|x*|r{|x#ª|yz|x¹|wxy|x*|r{|x#ª|yz|x¹|wxy|x*|r{|x#ª|yz|x¹|wxy|x*|r{|x#ª|yz|xE|wxxy|xn|wxy|x*|r{|x#ª|yz|xE|tx{y|xn|wxy|x*|r{|x#ª|yz|xE|rw¡y|xn|wxy|x*|r{|x#ª|yz|xB|wxxrx~yxy|xl|wxy|x*|r{|x#ª|yz|xB|tvxux{xz}|xl|wxy|x*|r{|x#ª|yz|xB|uvxtx{yy}|xl|wxy|x*|r{|x#ª|yz|xB|wxxrx~yxy|xl|wxy|x*|r{|x#ª|yz|xE|rw¡y|xn|wxy|x*|r{|x#ª|yz|xE|uw{y|xn|wxy|x*|r{|x#ª|yz|xE|wxxy|xn|wxy|x*|r{|x#ª|yz|x¹|wxy|x*|r{|x#ª|yz|x¹|wxy|x*|r{|x#ª|yz|x¹|wxy|x*|r{|x#ª|yz|x+|w|x°|y|x*|r{|x#ª|yz|x+|w|x¯|y|x+|r{|x#ª|yz|xÅ|r{|x#ª|yz|xÅ|r{|x#ª|yz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|xæ|ww|xÔ|yy|xì|wzz|xÅ|r{|xæ|w|xÕ|y|xí|wzz|xÅ|r{|x#©|wzz|xÅ|q{|x1|ywxxxxyxw|x#o|yy|xÅ|,z|x2$|yxxxxw|xG|ywxyw|x*|yw|x'|yw|x'|yxxxw|x.|yxwxyxxw|x#Ë|{yxxys|x2|yyvxzww|x/|z{sz{syxxyxywyw{twywxyx~r|x&|y{zwvvxxywxxwzyvwx}yvx{vyuv|x#Ê|{vwx~s|x2|yzwxyvw|x/|z{sz{uzwxzwwx{u{tyywv{w{r|x&|yzywyvzvxyxywyztvxyzxxyty}s|x#´|yxxxxw|x2|{vwx~s|x3|z{wuw|x0|z{sz{vxxxxwzvzv{vzu{xuw~rxxyxwy{yvwxzxwyxwywyuwxzyxxyty}s|x#´|{xxxxu|x2|{vwx~s|x2|yyzwwv|x0|y}uyywwyxxxyvzv{v{wwxvx}rxyzwvyzxuz{yvwyww{vyvvyyx{vzuyxu|x#Ê|{wwx}s|x2|zyvxzvw|x/|yzywvyxxxxyxwywzuzxww{wyt|x'|zxvzyywwywwzwzvvyzyvxzwxu|x#Ë|zyxxxu|x2|yxwxyxw|x(|yw|x'{|yw|x(+|yz|x-|y|x5|wu|x$+|z{y|x*|y|x0|y|x&|vr|x$+|z{y|x*|y|x0|y|x&|vr|x$+|z{y|x*|y|x0|y|x&|vsw|x#©|zyxyxwxxwww|xw|z{y|x*|y|x'|yxw|x&|y|x&|vsw|x/|zyxxxvw|x;|zzxuw|x=|yzxywu|x<|zy|x&|u|x>|}t|x>|y}s|x@|yzyvv|x¯|zzuw|x>|yxxxw|x=|yyzwxwv|x=|y|x&|w|xQ|z{xwwwxxzuw|xw|z{y|x*|y|x&|yxxxwxxxxy|x&|vsw|x-|zyyxvxzvv|x9|zzxwwyxvw|x:|zywxxx{s|x;|¡tw~txxv|x<|{u}ty{t|x;|}yvxxwwyv|x9|y}vwxywv|xª|~xwvzxuw|x<|yxwyxxw|x:|zzwwxxywv|x;|y|x'|w|xQ|zyvxwxxx}uw|xw|z{y|x*|y|x&|yxxw|x&|y|x&|vsw|x+|zzvzxtx}wu|x9|}{uux{zsw|x:|}vvxxz}tv|x:|~tw¡rxyw|x<|{x{uxwv|x;|z~r|x&|w|x9|y}xvyzvt|xª|¢vwxxwwv|x<|yxwxyxw|x:|z{wwxuzyvw|x:|yxwxyxxw|xQ|zyu|x&|}uw|xw|z{y|x*|yxxxxyxxw|x'|y|x&|vsw|x*|yyxvz{vv{wu|x9|}xwzwvyvw|x9|yywwy}wyvu|x:|ywx¡r|x?|y~tx{s|x<|y¡q|x@|zyyuyzvv|x©|¡sy}wwxuw|x?|yxw|x:|yxxzxvwzxv|x:|yxw|xV|zxv|x&|}uw|xw|z{y|x*|yxxxyxxw|x(|y|x&|vsw|x*|yyxv{zywyuu|x9|}wv}vu{vw|x9|yxwx~uzw}q|x=|¡r|x>|}t~sy~vwu|x:|y¡q|x@|yyztzyxxu|x¨|¡ry~sxxyv|x?|yxw|x:|yywx{wvzvw|x:|yxw|xV|zxv|x&|}uw|xw|z{y|x*|yxyxxxxw|x(|y|x&|vsw|x+|z{wzvwxwww|x9|}wu}vv{vw|x9|y{vzvyxvyv|x=|¡r|x>|yw~wzuvxw|x9|y}{txxwwxv|x9|z{wxuyxzxt|x¨|¡ry~rxyyv|x>|yxw|x;|yzxuyxzxvw|x;|yxw|xU|yzy|x&|wvw|xw|z{y|x*|yxyxwyw|x)|y|x&|vsw|x-|yyzux{wu|x:|{zuzvyztw|x:|{x{wvvzvw|x=|¡r|x?|¡szv{wu|x;|y{uxxxw|x<|y{zvxxwvw|x¨|¡ry~rxyyv|x=|yxw|x=|yzzwyvvw|x=|yxw|x;|{zuv|x8|y|x'|w|xy|z{y|x*|yxyxxxw|x)|y|x&|vsw|x.|z{wxyvvw|x:|yz}xtvw|x<|{}vwxvv|x=|{zwt|x>|yw¡ryw|x<|y{t|xB|zzvww|xª|}xyzuxxvv|x<|yxw|x@|yxxxw|x?|yxw|x9|{ywyvv|xº|z{y|x*|y|x0|y|x&|vr|x1|yxxw|x>|yxw|x?|yw|x!ø|{yuwzzvv|x¹|z{y|x*|y|x0|y|x&|vsw|x#j|{yuwxxz{uv|x1|yywwzxv|x¡|z{y|x*|y|x0|y|x&|vsw|x#&|yzvyxyu|xw|y}wu}wt|x¡|z{yxxxxyyxvxy|x0|y|x&|vswxy{wv}wvvxxxzxv|x5|zzww{wvvxxxzww|x8|yzyuwzwwxyw|x=|}ywt|x<|}xt}vzt|x<|}xt|x;|zzux{xuwyywzwv|x©|{ywu|x?|yw|x>|y}tzwvxx{xu|x;|yxxwxxxxyw|xO|y}wwzvxzvzxxxt{uw|xt|z{yxxxxyyw|x)|yxw|x&|y|x'|vrxxyx}u{t{uwxyzyuxwywyxwyxxxxw|x'|yy{vyvzuwxx}wvwxywyxwxxyw|x-|{yvzvwwxxywywxywyw|x7|¡swxxxyxyv|x5|~tw¡s}sxywyxyv|x4|¡rzvxywyxw|x5|zw~ryx~rzzuzyuw|x¨|~t~swywxz{s|x8|ywyw|x&|yw|x5|y¡vxwywxxzwxxvzyvxvv|x2|yxxwxxxxyw|xO|yzyyxwyxvzuzyu{tw|xt|z{yxxxxyyxwyxxwy|x3|vrxxxy}u{tzxvzyyyxvw{vyxwyxxwytw|x&|y{xwyuzxvzyyxyuyzt}wwyxyvxuw|x)|zzvzyxu{xuw}vyzs~uzvu|x4|¡tzyuzzvys|x5|¡vw}uzuzys}wywxwvw|x0|ywxz{zt{wuywyzwwzuv|x-|}wuyx{uyzv}xwwxywyu}wxuyu|xz|~u}uzxwxw}uywvv|x4|ywy|x-|w|x1|y}tzyyvyxw|x&|vzztw|x2|y|x.|w|xK|yzxxxwyzuzvzxxzsw|xt|z{yxxxxyywyxwywywy|x1|vrxxz{ty{tzwwzyyvxyxzvxv{zvwwztw|x'|z{vyuyxv{yyuzwy{tyv}zuwwztw|x*|y{yuzwwwx~t{xxtzv}vu|x4|¡vyxt¡rxyv|x5|~tw¡r}zwwwvxyw{xuw|x0|{vx{y{rwyx~uv}vv{uv|x+|yx¡qyy{szzv}vvxyxyzuzu{ysw|xz|~xuzyztywzu}vvv|x4|ywyxxwy|x(|w|x1|y{uzxywy|x&|vxw{wvw|x2|y|x'|wyxxwyw|xÒ|z{yxxxxyyxwywyxxwy|x1|vrxx{yxv}vxtyyzyvxywzvzxvyxwxyvv|x&|zzxwzwwuxzzyuzwx{t}wuzxwxyvv|x)|zzxwxzuzxvw}uzxuzv{ys|x4|~t}wwx{s}s|x5|~wt~s{wzwv}vv{wxvw|x0|}xywx{swxx{ww{vw{vu|x+|~wwu}xwuyzw{xxvwxyzuzvw}tw|xz|}uw~wzuxxzwyvvw|x4|yxxwywy|x'|w|xB|}vv|x5|y|x*|w|xÓ|z{y|x*|y|x0|y|x&|vr|x5|yzvw|x?|y{uw|xí|zww|xí|yyww|xñ|z{y|x*|y|x0|y|x&|vr|x5|yxxw|x@|zv|xî|{vw|x!â|z{y|x*|y|x0|y|x&|vr|x#{|yz|x°|yzy|x5|y|x+|wt|x#z|wz}|x$M|t}|x$M|t}|x$M|t}|x$M|t}|x$M|t}|x$M|t}|x)|wvyyyxxwxy|x(|wvzyuxyz|x1|wyxxxxwy|x3|wxxyxxxvzxxvz|x&|wy|x(|wy|x)|vzxxvzvz|x2|wwzxxxxuyz|xD|wy|x*|vyy|x<|wy|x=|vyy|x4|wxywxy|x2|wy|x-|vyyxxxux{xux{wwzxxxwy|x!}|t}|x)|vvyx{xxwyxxxxu{xxvxv}s{wx{|x0|tzxzxwu}|x3|wxvzyxxs~xxs~|x&|wy|x&|vxxyy|x(|q¡yws¡wy|x2|s{v}xxtzxyv{|xB|wy|x)|wwyyxxwxy|x7|uzyxxxvz|x-|wxy|x&|uzxy|x5|uv}vyz|x1|wu}|x-|r}zxxxvwzwxv{vxv~wuzz|x!}|t}|x)|vvywzvzxyvwxzt{{xwvw}r¡wt~wwyvyxxwxzvwx{wvw}ywr}w}uxx{xvwxyxxwyvzwywyww}q{x}r¡tyyzwwyuxzzxtwyxxzyvw{yxp{~uu¡uzuyxwzxvyywxywwyys}t}{xsz{uu~vxxzuzxvzzxwvw{vxzywvywxw}tyyvyxzwwzwxvzzxtxyzxwvw}wzs}uyywx{xwxwwyvxzwwv}wxyvw}uyxywx{xvwwxyywyxwys{x{uxx}tyv~xxtyxztyy{xtu}xyxww{u{u{ux}szvzw{s{xzwvyxv}yxus¡zxxxxwws¢wwyws¢vvzz|x!}|t}|x)|uu{ywuzxzuzv{u{zxxvu~r¡wu}wvwwxzxxxyuyw}yvv{yws}u{szx~xvtyzwyxxu{wyxyvu¡r~vzt}szx~wvyuzx{xtxxyxxvxw}zxqz}sz{s}wywu}wyvxxxyxyvzs}t~zxvwwzt}u{wxv{vvy{ztxyxvzzyvwyszv~wyxsyy{wxxwxvy{zuxw{xuyxzu}o£tztyy~xvxvwzxwyxyu{wvw{w{rzv~u{zwuxzwyxuyxyzs{u}t{t¡uzs¢xwuzvzs}w}xtwyv}vyyxu}tyvyzt~t}wzs}wvwx{vw~yuxt~zxxxvv}o¤xu{uyyu{wz|x-|wyxxwy|x!k|t}|x)|vu}wwwxxzvzv{t}yxwyr¡r¡vv}xvuywzxywyvzv{yvv}xws¡s{t}xzwvxwzvyxxwywyxwzt~r¡u{s}u{xzwvyvzw{xuxxyxwu{yyyxq~t{w{s}v}uv}vzvw{uxzyt{t~s~yxvys~t{t~vxw{vyxyyszzvv}yxvxyq¡xxw{vt}xxxwxxxyxyyuzvzwvzxys¡o£u{r~yyxvwwwzxwyxzs}vyt~wzr~wyxt¡xvww{wxwxv{zr{u}u}r¡u}p£xwt}t{t}v}xtxzt{u{zwxwywyxyr¢t}wxs¡vux{ytx~xuwt}yzywwxzq¢vyt}yvuyx}|x-|wyxxwy|x!k|t}|x)|wwzwvwyxzvzvzvyzxuwy{syyzyxwvywyxvyzvzvzyxt{yxtxy{uwzzwvwyzwxyvwzwyxwwx{tyx}t{uyzywwyvzwzxvwxzxwxwx{xxs~t}u{uzuyyw{vvyywwzwwzyu{vx{xtxyzt{wwyzv{vvzzxvwwzxyyxwxyuwyzuyzvwzyxww{vvzzxvyxvwyzu}syv~wzuwzzxvvwzxwyzvwx{uxw}u{uxzxvy{wvwzxwyvyxzyuxw{v{s}uxu¢xxtxzyu{wzxux{tzxww{yt{xux}s~u{wxuxyzvwzwx{xwxuzv{ywuxyzuyztyyzxwxyy|x!{|t}|x.|wxxy|x&|wxyxwxyxwxxy|x)|wxy|x'|wyxxwxyxwxxyxwxxyxxxwxyxxxxwxywxxywywxy|x+|wxyxxxwxyxxwywyxxwywxyxxxwxywxywxyxwyxwyxwxxywyxwyxxxxwxyxxwxy|x)|wxywxywxxyxxwyxwxyxxxxwxyxwywxxyxxxwxyxxwxxvxzywxxywxxywywxxxxyxxwxyxwywxyxxwxxyxxwysxx~xxwxyxwy|x'|wyxwxyxwyxwxywyxxxxwxxyxwxxxyxxxwywyxxwxxywxywxxy|x!£|t}|x!g|wxxy|x!ã|t}|x$M|t}|x$M|t}|x$M|t}|x$M|t}|x$M|t}|x#«|y|xÅ|s}|x#«|y|xÅ|s}|x#«|y|xÅ|s}|x#«|y|xÅ|s}|x!û|wxxy|x¬|y|xÅ|s}|x!ú|wwxxz|x¬|y|xÅ|s}|x(|wxy|xR|wyxxxwxy|x!*|wxy|x«|vxxxyy|x«|y|xÅ|s}|x'|wwxyy|xO|wxu{xxxwyy|xG|w|x'|y|xÛ|wvyyxxxy|x§|vxxxyy|xM|wxy|xY|y|xÅ|s}|x'|wvxyyy|x+|wxxyxxwy|x<|wvvzxxwzz|x)|wxxy|x<|vwxwxyw{y|x)|wyxwxy|x&|wxy|xÄ|wvzvxxyyxy|x(|wxywxxyxxxxwy|xn|vxxxyy|xM|vxz|x1|wwzw|x+|y|x;|y|xÅ|s}|x'|wwxxxyy|x*|vwzyxxvz|x&|wxy|x5|wu}wvw}|x)|wwxyy|x<|vyxtx{xyy|x(|wvzxwxz|x&|vyy|x)|wxyxxxxwxy|x²|wv{xxxwvx{|x(|vwzvxyyyxxxwxy|xL|w|xA|wxxxy|xA|y|x.|vxz|x0|wvv}v|x&|yvyyyy|x;|y|x:|wxy|x©|s}|x'|wwyxwxyy|x)|uzxxxxvz|x&|ww{|x5|wu{wwyz|x)|vxyxwywxyxxwz|x4|vyxtxyyx{|x(|wuzyuyzxxxwyxxxxyxvyxxxwywyxxxwv{y|x±|wv{xxxxvxz|x(|wu{u{wxzwywxxwy|x&|y|x4|w|x(|y|x)|ww|xe|yy|x-|vxz|x1|wu{vyuzyxxwxyyy|x*|wxywyxwy|x)|y|x*|wxxyxwxxy|x'|wxxy|x¨|s}|x'|wwxyvxyyy|x(|vxyvxxxzuyywywxzy|x4|wuzxywz|x(|wwyywvywxxxyv{y|x3|vxwuxy{w{|x(|wuyyvyxwyywyvyyxyxuyxxwzxvyywyww{y|x±|wv{xxxxvxz|x(|vv{u{xwzvyu{xuyxwywy{|x4|v|x(|z|xJ|vxxxyy|xI|wxxxvxzxxy|x.|wu{vyuzyxyxwxxyy|x)|vyyvyxwyy|x(|y|x*|wvzyxwvzy|x'|wwyy|x¨|s}|x'|wwwxxxyyy|x(|vxwwyxxyvyywzwwzy|x4|wuyyxwzxy|x'|vxxywxwywxywzy|x3|wwwwxwzxzy|x'|wvywyvywxzxxvxzyywvxxxxyxuzxxzwwzy|x±|wv{xwwxxxz|x'|wxu{uzxyyxtyzxtzxwxxzz|xf|vxxxyy|xI|wwxxwxyxyy|x.|wu{vyxxxxzvxxxyy|x)|vyyvyxxxy|x(|y|x*|wwxzwwxy|x)|wy|x+|y|x{|s}|x'|wwwxxyz|x*|vxywxywywxywxywyy|x5|vxxxwyyy|x'|wwxyxxwxyvyw{|x8|wwywxz|x'|wwywywxxxxwyxxxxyxwxywxyxvyywxywyy|x±|wvy|x&|yy|x'|wwxyvyxzxxu{wxvyywxyxy|xf|vxxxyy|xM|vxz|x1|wxywwzwwyywxxxy|x;|y|x*|wwxyxwxyxwxxywywxxxywywywxyxy|x{|s}|x'|wxxwxyy|xR|wxy|x3|vz|x:|wyxxwy|x0|wxwyy|xÆ|wwxxyy|x©|wwxxyy|xM|vxz|xY|y|x*|wwxxxywyxxwxywyxwxyxwyxxwyxy|x}|s}|xt|wy|xN|wxwyy|x!R|wwyy|xN|wxy|xY|y|x*|wwywxywywyxwywyxwxyxwxyxwyxy|x}|s}|x!ü|wy|x®|y|x*|wxyvyxwyxxwxywy|x.|y|x}|s}|x#«|y|x*|wxywxyw|x(|ywxyw|x(|y|x~|s}|x#«|y|xÅ|s}|x#«|y|xÅ|s}|x#«|y|xÅ|s}|x#«|y|xÅ|r}|x#ª|yy|xÅ|r{|x#¨|wxzz|xÅ|rz|xo|y|x!Ë|w|xn|zz|xÅ|r{|x#¨|wxzz|xÅ|r{|x#¨|wxzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|x+|vwxxxxy|x)|y|x&|y|x¤|r{|x#©|wzz|x+|vw|x&|y|x)|yxxxxy|x)|uwy{|x0|w|x)|y|x1|wux{y|xH|r{|x#©|wzz|x+|vw|x&|y|x)|yxxxxy|x(|wsyw~y|x/|tuw|x&|y~z|x0|uuz{y|x2|wv{|x5|r{|x#©|wzz|x+|vw|x&|yxyxwxxxxyxxxxy|x(|uwxxy{|x/|st|x(|~}|x/|wtu}{y|x2|vv{y|x4|r{|x#©|wzz|x+|vw|x&|yxxxywxxxyxxxxy|x(|szwzu~|x/|suw|x'|¡{|x/|utv}}y|x1|wuvz}|x4|r{|x#©|wzz|x+|vw|x&|yywxywxxxyxxxxy|x'|ws}vzu}y|x.|st|x(|¡{|x.|wttx{}z|x1|wtxx~|x4|r{|x#©|wzz|x+|vwxxxxyxywyxxwxxyxxxxy|x'|uwzvzvy{|x.|suw|x'|¡{|x.|vsvxz}zy|x0|vtyx}y|x3|r{|x#©|wzz|x+|vwxxxxyy|x&|wxxyxxxxy|x&|wt{xvzwv}y|x-|ttw|x&|y~{|x-|wutwxx}}y|x0|vtyx{z|x3|r{|x#©|wzz|x+|vwxxxxyywxxyxwxxyxxxxy|x&|vu{xvzxu{z|x-|ttw|x&|y¡z|x-|wttxxxz~z|x/|wvvywz{|x3|r{|x#©|wzz|x+|vwxxxxyyxwxyxwxxyxxxxy|x&|szyxu{xww{y|x+|ttw|x&|y¡z|x-|vtuxxxy~{|x/|wuwywy}|x3|r{|x#©|wzz|x+|vwxxxxyy|x'|wxyxxxxy|x&|r}ytwzzwv}y|x+|tvy|x&|v~z|x-|vtuxxxy~{|x/|wtyxwy}|x3|r{|x#©|wzz|x+|vwxxxxyywxxxyxwxyxxxxy|x&|s{yuxxzwv}y|x+|uxyyxxxxs~y|x-|wttxxxz~z|x/|wtyxwx}y|x2|r{|x#©|wzz|x+|vwxxxyywxxxxyxxwyxxxxy|x&|uxyxwyxvy{|x-|uxyyxxxxs~y|x-|wuuwxx{}y|x/|vtzxwx{z|x2|r{|x#©|wzz|x+|vwxxxyyw|x&|yxwyxxxxy|x&|wt{xxxxu}y|x-|vwyyxxxxt}y|x.|uvyxwzzy|x.|wvvyxwx{z|x2|r{|x#©|wzz|x+|vwxxxyyw|x&|yxwyxxxxy|x&|ws{xxxwv~y|x-|vwyyxxxxt}y|x.|uw{xvxzy|x.|wuwxxxw{{|x2|r{|x#©|wzz|x+|vwxxxy|x(|y|x(|y|x&|wswyxxxx~y|x-|wuzyxxxwu}y|x.|uw{xvxzy|x.|wtwxxxxz}|x2|r{|x#©|wzz|x+|vwxxxzw|x'|y|x(|y|x&|wsvxxxxz~y|x-|wuyzxxxvw{y|x.|uw{xvxzy|x.|wtwxxxw{}|x2|r{|x#©|wzz|x+|vwxxxzw|x'|y|x(|y|x'|suxxxx{~|x/|tyzxxxuyzy|x.|uw{xvxzy|x.|wtwxxxw{}|x2|r{|x#©|wzz|x+|vwxxxzw|x'|y|x(|y|x'|uvxxxxz{|x/|uyyxxxvyz|x/|vwzxwxyy|x.|wuwxwxxz}|x2|r{|x#©|wzz|x+|w|x5|y|x(|w|x'|y|x/|w|x(|y|x/|w|x'|y|x.|ww|x&|yy|x2|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|x5|wwz|x2|wtwxxx{{|x1|vvyzy|x2|uuy{z|xI|r{|x#©|wzz|x5|vu}y|x1|sxyxxww~y|x/|wswx}zy|x1|uvyzz|x-|t|x/|zz|x.|r{|x#©|wzz|x4|wuw{z|x1|rzxxxwx{z|x/|uuwx{{y|x/|wuuwxz{zy|x*|vtz|x*|wy{y|x.|r{|x#©|wzz|x4|vuzx{|x1|rzxxxwx{z|x/|tvwxy~y|x.|wtswxxxz¡zy|x)|ws{|x*|wy{|x/|r{|x#©|wzz|x4|vuzw{y|x0|ry|x&|{z|x.|wtwwxx~z|x-|wvsuxxxxy}}yy|x(|ws{xwyxxxwvzxy{|x/|r{|x#©|wzz|x3|wvuzx{y|x0|ryxxxxw}z|x.|vuwwxw~zy|x+|vtvw|x&|y{}y|x(|ws{wwzxwywvyxz{|x/|r{|x#©|wzz|x3|wuwwyz{|x/|wsyxxxxw}z|x.|uuxwxw}{y|x-|uqw|x&|{¡z|x)|ws{wwzwwyxvxxz}|x/|r{|x#©|wzz|x3|vtyxwz{y|x.|wry|x&|{{|x-|wtwxwxwz~y|x-|uqw|x&|{¡z|x)|wszwxywxyxvxw{}|x/|r{|x#©|wzz|x2|wwtzwwy}y|x.|vsvywxyx}}|x-|vtwxxwxx~zy|x+|uqw|x&|{¡z|x)|wrz|x(|wxw{}|x/|r}|x#¨|wxyz|x2|wuwywxx{z|x/|qvxwxyy¡z|x-|uuwxxxxw{}y|x+|uqw|x&|{¡z|x)|wrzxxxxwxxxxw{}|x/|s~|x#©|wxy|x2|wtyxwxxz{|x/|qvxwxyy¡z|x-|uuwxxxwx{}y|x+|uqw|x&|{¡z|x)|wrzxxxxwxxxxw{}|x/|s~|x#©|wxy|x2|wszwxxwz{y|x.|qvxwxyy¡z|x-|uuwxxxxw{}y|x+|uqw|x&|{¡z|x)|wrzxxxxwxxxxw{}|x/|s~|x#©|wxy|x2|vszwwywz}y|x.|qvxwxyy¡z|x-|uuwxxxxw{}y|x+|uqw|x&|{¡z|x)|wrzxxxxwxxxxw{}|x/|s~|x#©|wxy|x2|vryvwzx{}y|x.|qvxwxyy¡z|x-|uuwxxxxw{}y|x+|uqw|x&|{¡z|x)|wrzxxxxwxxxxw{}|x/|s~|x#©|wxy|x2|vrwwwyy}}y|x.|qvxwxyy¡z|x-|uuwxxxxw{}y|x+|uqw|x&|{¡z|x)|wrzxxxxwxxxxw{}|x/|s~|x#©|wxy|x2|vrwwwyy}}y|x.|qvxwxyy¡z|x-|uuwxxxxw{}y|x+|uqw|x&|{¡z|x)|wrzxxxwxxxxwx{}|x/|s~|x#©|wxy|x2|vswxwxzz}y|x.|rvxxxyx~z|x-|uuw|x&|{{y|x+|vtv|x&|{{z|x)|wt|x-|z{|x/|s~|x#©|wxy|x2|wvxwxxyyyy|x.|vw|x&|zy|x-|wv|x'|yyy|x+|ww|x'|yxy|x*|v|x-|yy|x/|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|t}|x#©|wxy|xÅ|t}|x#©|wxy|xl|w|xK|y|x+|t}|x#©|wxy|xl|wy|xU|t}|x#©|wxy|xl|wy|xU|t}|x#©|wxy|xl|wy|xU|t}|x#©|wxy|xl|wy|xU|t}|x#©|wxy|xl|wy|x;|wxy|x9|t}|x#©|wxy|x+|wwxyxywxyxwxy|xT|wy|x;|tyzywxy|x5|t}|x#©|wxy|x+|uwyxzywwzxwwz|xT|wy|x;|uyyxvyxxxyy|x1|t}|x#©|wxy|x-|t{uzxywxxxwyxxxywxxxywxyy|xG|wy|x<|wvzvzvxx{|x2|t}|x#©|wxy|x-|t{uyw{vwzxvyxwywxxywzww{y|xG|wy|x;|wwxyuzxxxyy|x1|t}|x#©|wxy|x-|t{u{u{vwzxvyxxyvxxyxxxw{y|xG|wy|x;|wwzwvzxxxxy|x1|t}|x#©|wxy|x-|u{vywyw|x(|yw|x'|wzy|xG|wy|x?|wy|x6|t}|x#©|wxy|xl|wy|xU|t}|x#©|wxy|xl|wy|xU|t}|x#©|wxy|xl|wy|xU|t}|x#©|wxy|xl|wy|xH|wxy|x+|t}|x#©|wxy|xl|w|xJ|y|x-|t}|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#¥|wvxzxxy|x0|wwxyy|x²|s~|x#¥|wuyzxxy|x/|wvxxyz|x²|s~|x#¥|wuyzxxy|x/|wvxxx{|x²|s~|x#¥|wuyzxxy|x/|wvxxx{|x²|s~|x#¥|wuyzxxy|x/|wvxxx{|x²|s~|x#¥|wuyzxxy|x+|vxxxwxxxy|x¥|yy|x+|s~|x#¥|wuyzxxy|x+|vxxxwxxxy|x¥|yy|x+|s~|x#¥|wuyzxxy|x/|wvxxx{|x²|s~|x#¥|wuyzxxy|x/|wvxxx{|x²|s~|x#¥|wuyzxxy|x/|wvxxx{|x²|s~|x#¥|wuyzxxy|x/|wvxxyz|x²|s~|x#¥|wuyzxxy|x0|wwxyy|x²|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xl|w|xJ|y|x-|s~|x#¥|wuyzxxy|xl|wy|xH|wxy|x+|s~|x#¥|wuyzxxy|xl|wy|xU|s~|x#¥|wuyzxxy|xl|wy|xU|s~|x#¥|wuyzxxy|xl|wy|xU|s~|x#¥|wuyzxxy|xl|wy|xU|s~|x#¥|wuyzxxy|xl|wy|x6|wv{wwxyvyzvxyxy|x2|s~|x#¥|wuyzxxy|x-|vwzy|x)|wxy|xQ|wy|x6|wt~uyvzxwyvxzyy|x2|s~|x#¥|wuyzxxy|x+|uyxv{y|x(|wxxxy|xO|wy|x7|t}t}ty{vxywwyz|x2|s~|x#¥|wuyzxxy|x+|t{xu{uyyxwyxwxxwxzxxyy|xK|wy|x7|t}t}tyzvzxwxxxz|x1|s~|x#¥|wuyzxxy|x+|s~wu{vyvywxyzvxywywyz|xL|wy|x7|u{vwyyvyzwxxwyy|x1|s~|x#¥|wuyzxxy|x+|uwyxztzxwxxyxxxywxxzy|xL|wy|x:|wyxwy|x8|s~|x#¥|wuyzxxy|x+|wxxxxvz|x+|vyyy|xL|wy|xU|s~|x#¥|wuyzxxy|x0|wwz|x*|wwyy|xM|wy|xU|s~|x#¥|wuyzxxy|x1|wy|x*|wxy|xN|wy|xU|s~|x#¥|wuyzxxy|xl|wy|xU|s~|x#¥|wuyzxxy|xl|w|xK|y|x+|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|x¶|wxxy|x-|s~|x#¥|wuyzxxy|xµ|wwwyyy|x+|s~|x#¥|wuyzxxy|xµ|vwxxzy|x+|s~|x#¥|wuyzxxy|xµ|vwxxyz|x+|s~|x#¥|wuyzxxy|xµ|vwxxyz|x+|s~|x#¥|wuyzxxy|x+|w|x©|wwxxyz|x+|s~|x#¥|wuyzxxy|x+|v|xª|wxxyz|x+|s~|x#¥|wuyzxxy|x+|w|x©|wwxxyz|x+|s~|x#¥|wuyzxxy|xµ|vwxxyz|x+|s~|x#¥|wuyzxxy|xµ|vwxxyz|x+|s~|x#¥|wuyzxxy|xµ|vwxxzy|x+|s~|x#¥|wuyzxxy|xµ|wwwyyy|x+|s~|x#¥|wuyzxxy|xµ|wxwyxy|x+|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|t}|x#¥|wuyzxxy|xÅ|t}|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|x-|w|x¬|y|x-|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|t}|x#¥|wuyzxxy|x+|w|x®|y|x-|t}|x#¥|wuyzxxy|x+|w|x¯|y|x+|t}|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|t}|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|xC|wwwxyz|x'|vyy|xN|wyxxxwyxxwxy|x+|s~|x#¥|wuyzxxy|x+|wy|xC|wu{xwyxxxwwyvx{wwyywwyxw{|xC|wwyywwxzxxwxy|x+|s~|x#¥|wuyzxxy|x+|wy|xB|www{xwvzwwyxyuyywyv{t{u{vzz|xB|wwxywxyyxxwxy|x+|s~|x#¥|wuyzxxy|x+|wy|xB|www{xvwzwwxwzvzwyyuzu}t}vx{|xC|wwwyyyxxxwxy|x+|s~|x#¥|wuyzxxy|x+|wy|xC|wu{xwwyww{vxwzwxzuzv{t}vx{|xD|wxxyxxxxwxy|x+|s~|x#¥|wuyzxxy|x+|wy|xC|wwwxzwwxywxyxwyxwyyvzvzwxz|xL|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|xD|w|x2|ywywywxy|xL|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|wy|x«|wxy|x+|s~|x#¥|wuyzxxy|x+|w|x¯|y|x+|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|xÅ|s~|x#¥|wuyzxxy|x+|w|xh|yw|xB|y|x-|s~|x#¥|wuyzxxy|x+|w|x®|y|x-|s~|x#¥|wuyzxxy|x+|w|xj|y|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|w|xj|y|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|w|xj|y|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|w|xj|y|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|w|xj|y|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|ww|xe|yxxxy|x2|wvyz|x*|wxy|x-|s~|x#¥|wuyzxxy|x+|ww|xf|yxxy|x0|wvxyv}|x*|wxy|x-|s~|x#¥|wuyzxxy|x+|ww|xf|yxxy|x0|uwzwx{|x*|wxy|x-|s~|x#¥|wuyzxxy|x+|wv|xe|yyxxy|x/|wuyxv}y|x*|wxy|x-|s~|x#¥|wuyzxxy|x+|wv|xe|yyxxy|x.|wvywwx}|x+|wxy|x-|s~|x#¥|wuyzxxy|x+|wv|xe|yyxxy|x-|wvzvyyxy|x+|wxy|x-|s~|x#¥|wuyzxxy|x+|wu|xe|yzxxy|x-|uywyyy|x.|wxy|x-|s~|x#¥|wuyzxxy|x+|wu|xe|yzxxy|x-|syzyy|x/|wxy|x-|s~|x#¥|wuyzxxy|x+|wu|xe|yzxxy|x-|wxxy|x0|wxy|x-|s~|x#¥|wuyzxxy|x+|wt|xe|zzxxy|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|wt|xe|y{xxy|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|ws|xe|z{xxy|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|ws|xe|z{xxy|x?|wxy|x-|s~|x#¥|wuyzxxy|x+|ws|xe|z{xxy|x?|wxy|x-|s~|x#©|wxy|x+|ws|xe|z{xxy|x?|wxy|x-|s~|x#©|wxy|x+|wu|xe|yz|xD|y|x-|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|xÅ|s~|x#©|wxy|x+|w|xU|w|xU|yy|x+|s~|x#©|wxy|x+|wy|x1|ww|x1|wv|x2|vw|x1|y|xD|}{|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x=|wv|x2|t|x2|t|x3|y|xC|¡}|x+|s~|x#©|wxy|x+|t|x2|ww|xC|tw|x2|y|x2|y|x2|~}|x+|s~|x#©|wxy|x+|o|x2|w|x2|y~|x2|rw|xC|{|x1|w~}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|ow|xB|y~|x2|rw|xC|{|x2|}}|x+|s~|x#©|wxy|x+|q|x2|w|x2|y{|x2|tv|x1|y|x3|y|x2|}}|x+|s~|x#©|wxy|x+|u|xU|v|xD|u|x2|~{|x+|s~|x#©|wxy|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|s~|x#©|wxy|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|s~|x#©|wxy|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|s~|x#©|wxy|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|s~|x#©|wxy|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|s~|x#©|wxy|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|s}|x!F|yxxxxw|x!^|y|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|r}|x#§|wxxyz|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|r{xxy|x+|wxxy|x#W|wxxxy|x(|wxxxy|x+|wxxyz|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|r}|x#¨|wxyz|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|r}|x*|wxxy|x:|wy|x#7|wxy|x;|wxxy|x&|wxxyz|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|r{|x¡|y|x!«|w|x¡|yz|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|r{|x#ª|yz|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|r{|x#ª|yz|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|r{|x#ª|yz|xN|ww|x2|w|x3|y|x2|r|x2|~{|x+|r{|x#ª|yz|xN|ww|x2|w|x3|y|x2|s|x1|w~{|x+|r{|x#ª|yz|x+|w|xD|w|xU|v|x2|zz|x+|r{|x#ª|yz|xÅ|r{|x#ª|yz|xÅ|r{|x#ª|yz|xÅ|r{|x#ª|yz|xÅ|r{|x#ª|yz|x+|v|x2|y|xz|y|x+|r{|x#ª|yz|x+|q|x2|{{|xz|y|x*|r{|x#ª|yz|x+|m|x2|¡~|xx|wxy|x*|r{|x#ª|yz|x+|m|x2|¡~|xx|wxy|x*|r{|x#ª|yz|x+|m|x2|¡~|xx|wxy|x*|r{|x#ª|yz|x+|m|x2|¡~|x'|wxy|xo|wxy|x*|r{|x#ª|yz|x+|m|x2|¡~|x'|tx{y|xn|wxy|x*|r{|x#ª|yz|x+|m|x2|¡~|x'|rw¡y|xn|wxy|x*|r{|x#ª|yz|x+|m|x2|¡~xxxwxxrx~yxy|xl|wxy|x*|r{|x#ª|yz|x+|m|x2|¡~xxxtvxux{xz}|xl|wxy|x*|r{|x#ª|yz|x+|m|x2|¡~xxxuvxtx{yy}|xl|wxy|x*|r{|x#ª|yz|x+|m|x2|¡~xxxwxxrx~yxy|xl|wxy|x*|sz|x#ª|yz|x+|m|x2|¡~|x'|rw¡y|xn|wxy|x*|sz|x#©|wzz|x+|m|x2|¡~|x'|uw{y|xn|wxy|x*|r{|x#©|wzz|x+|m|x2|¡~|x'|wxy|xo|wxy|x*|r{|x#©|wzz|x+|m|x2|¡~|xx|wxy|x*|r{|x#©|wzz|x+|m|x2|¡~|xx|wxy|x*|r{|x#©|wzz|x+|m|x2|¡~|xx|wxy|x*|r{|x#©|wzz|x+|rw|x1|{{|xz|y|x*|r{|x#©|wzz|x+|w|x3|y|x§|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|x#©|wzz|xÅ|r{|xæ|ww|xÔ|yy|xì|wzz|xÅ|r{|xæ|w|xÕ|y|xí|wzz|xÅ|r{|x#©|wzz|xÅ|q{|x1|yw|x&|yw|x#o|yz|x)|w|x¼|";

myImage = vexIMG.decode(myImage);

// ----------

function menu(x, y, s, r) {
    pushMatrix();
        translate(x + 5, y);
        scale(s);
        rotate(r);
        
        rect(0, 0, 35, 25); // main
        rect(-11, -12, 13, 5, 0, 3, 0, 0); // corner piece
    popMatrix();
}


function OPpaste(x, y, s, r) {
    pushMatrix();
        translate(x, y);
        scale(s);
        rotate(r);
        fill(255, 255, 255);
        
        rect(0, 0, 25, 30, 2); // clipboard
        rect(0, -13, 15, 1); // clip for paper
        arc(1, -14, 5, 7, -180, 0);
        rect(8, 4, 19, 25); // paper
        
        // "writing" on paper (aka the squiggly lines we pretended were words as children)
        for(var i = -1; i < 17; i += 6) {
            line(16, i, 2, i);
        }
    popMatrix();
}

function canvas(x, y, s, r) {
    pushMatrix();
        translate(x, y);
        scale(s);
        rotate(r);
        
        line(14, 14, 14, -14);
        line(18, 10, -16, 10);
        line(-12, 14, -12, -14);
        line(18, -10, -16, -10);
    popMatrix();
}

function undo_redo(x, y, xScale, yScale, rotation) {
    pushMatrix();
        translate(x, y);
        rotate(rotation);
        scale(xScale, yScale);
        
        strokeWeight(1.2);
        
        beginShape();
        vertex(-8, 0);
        bezierVertex(-10, -16, 10, -16, 9, 0);
        vertex(8, 15);
        endShape();
        
        line(-8, 2, -3, -4);
        line(-8, 2, -12, -4);
    popMatrix();
}

function history(x, y, s, r) {
    pushMatrix();
        translate(x, y);
        rotate(r);
        scale(s);
        strokeWeight(1.2);
        
        arc(0, 0, 28, 28, -170, 136);
        
        // arrow
        line(-14, 0, -8, -6);
        line(-14, 0, -18, -7);
        
        // time thing
        line(-1, 0, -1, -8);
        line(-1, 0, 4, 6);
    popMatrix();
}

// "Brushes" Icon
var brushes = function(x, y, s, r) {
    pushMatrix();
        translate(x, y);
        scale(s);
        rotate(r);
        
        beginShape();
        vertex(0, 0);
        bezierVertex(12, -1, 12, 14, 0, 14);
        bezierVertex(-6, 14, -8, 13, -12, 12);
        bezierVertex(-4, 8, -10, 3, 0, 0);
        endShape();
        
        beginShape();
        vertex(5, 2);
        bezierVertex(5, -2, 7, -9, 40, -30);
        bezierVertex(48, -33, 44, -25, 44, -26);
        bezierVertex(26, -4, 7, 10, 5, 2);
        endShape();
    popMatrix();
};

// "2d shapes" Icon
var flatShapes = function(x, y, s, r) {
    pushMatrix();
        translate(x, y);
        scale(s);
        
        rect(11, -9, 25, 25);
        rect(11, -20, 25, 0);
        rect(11, 3, 25, 0);
        ellipse(-10, 4, 25, 25);
        triangle(-10, 23, 24, 23, 7, -4);
        rect(6, 22, 32, 0);
    popMatrix();
};

// "3d shapes" Icon
var thiccShapes = function(x, y, s, r) {
    pushMatrix();
        translate(x, y);
        scale(s);
        rotate(r);
        
        quad(1, 23, 1, -2, -19, -12, -19, 13); // left face
        quad(1, 23, 1, -2, 21, -12, 21, 13); // right face
        quad(-19, -12, 1, -2, 21, -12, 1, -22); // top face
    popMatrix();
};

var fc = color(255, 255, 255);

// "Stickers" Icon
var stickers = function(x, y, s, r) {
    pushMatrix();
        translate(x, y);
        scale(s);
        rotate(r);
        
        // half circle
        arc(10, -10, 30, 30, 109, 339);
        
        // fold
        pushMatrix();
        rotate(-45);
        arc(14, 6, 26, 20, 184, 360);
        popMatrix();
        
        line(5, 4, 24, -15);
        
        // dashes
        for(var i = 0; i < 100; i += 30) {
            noFill();
            arc(10, -10, 30, 30, -10+i, 10+i);
        } 
        fill(fc);
    popMatrix();
};

// "Text" Icon
var Text = function(x, y, s, r) {
    pushMatrix();
        translate(x, y);
        scale(s);
        
        beginShape();
        vertex(-2, 13);
        vertex(-2, -12);
        vertex(-11, -12);
        vertex(-11, -8);
        vertex(-15, -8);
        vertex(-15, -16);
        vertex(16, -16);
        vertex(16, -8);
        vertex(12, -8);
        vertex(12, -12);
        vertex(3, -12);
        vertex(3, 13);
        vertex(8, 13);
        vertex(8, 17);
        vertex(-7, 17);
        vertex(-7, 13);
        endShape(CLOSE);
    popMatrix();
};

// "Effects" Icon
var effects = function(x, y, s, r) {
    pushMatrix();
        translate(x, y);
        scale(s);
        rotate(r);
        
        ellipse(0, 0, 16, 16);
        
        // I hated this *tears*
        line(0, -12, 0, -18); // north
        line(8, -8, 13, -13); // northeast
        line(12, 0, 18, 0); // east
        line(8, 8, 13, 13); // southeast
        line(0, 12, 0, 18); // south
        line(-8, 8, -13, 13); // southwest
        line(-12, 0, -18, 0); // west
        line(-8, -8, -13, -13); // northwest
    popMatrix();
};

// "Canvas" Icon
var canvas = function(x, y, s, r) {
    pushMatrix();
        translate(x, y);
        scale(s);
        rotate(r);
        
        line(14, 14, 14, -14);
        line(18, 10, -16, 10);
        line(-12, 14, -12, -14);
        line(18, -10, -16, -10);
    popMatrix();
};

// "3d library" Icon
var thiccLibrary = function(x, y, s, r) {
    pushMatrix();
        translate(x, y);
        scale(s);
        rotate(r);
        
        // cube
        quad(0, 23, 0, -2, -20, -12, -20, 13); // left face
        quad(0, 23, 0, -2, 20, -12, 20, 13); // right face
        quad(-20, -12, 0, -2, 20, -12, 0, -22); // top face
        
        // magnifying class lense
        ellipse(20, 9, 18, 18);
        
        //handle
        pushMatrix();
            translate(8, 23);
            rotate(-49);
            
            rect(0, 0, 14, 1);
        popMatrix();
    popMatrix();
};

// "Show or hide names in the menu" Icon (also doubles as the "Choose a material" Icon) 
var arrow = function(x, y, s, r) {
    pushMatrix();
        translate(x, y);
        scale(s);
        rotate(r);
        
        strokeWeight(1.1);
        line(-10, 5, 0, -5);
        line(10, 5, 0, -5);
    popMatrix();
};


var document_ = (function() { return this[["document"]]; })();
var styleEl = document_[["createElement"]]("style");
styleEl.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Protest+Guerrilla&display=swap');";
document_.body.append(styleEl);

enableContextMenu();

draw = function() {
    var get = this;
    var lWidth = width;
    var lHeight = height;
    
    image(myImage, 0, -32, width, height);

    
    // fill(255, 0, 0, 100);
    // noStroke();
    // // top bar
    // fill(45, 50, 55);
    // rect(0, 0, get.width, 48);

    // // 2nd row of top bar
    // fill(221, 221, 223);
    // rect(0, 48, get.width - 264, 48);

    // // side bar
    // fill(240, 242, 243);
    // rect(get.width - 264, 48, 264, get.height - 48);

    // // canvas area
    // fill(190, 190, 190);
    // rect(0, 48 * 2, get.width - 264, get.height - 48 * 2);

      var Icon = {
        menu: 0,
        OPpaste: 1,
        canvas: 2,
        undo: 3,
        redo: 4,
        history: 5,
        brushes: 6,
        shapes2d: 7,
        shapes3d: 8,
        stickers: 9,
        text: 10,
        effects: 11,
        library3d: 12
    };

    function renderIcon(which, x, y, s, r) {
        rectMode(CENTER);
        switch (which) {
            case Icon.menu:
                noFill();
                stroke(255, 255, 255);
                menu(x, y, s, r);
                break;
            case Icon.OPpaste:
                OPpaste(x, y, s, r);
                break;
            case Icon.canvas:
                noFill();
                stroke(255);
                canvas(x, y, s, r);
                break;
            case Icon.redo:
                noFill();
                stroke(255);
                undo_redo(x, y, -s, s, r);
                break;
            case Icon.undo:
                noFill();
                stroke(255);
                undo_redo(x, y, s, s, r);
                break;
            case Icon.history:
                noFill();
                stroke(255);
                history(x, y, s, r);
                break;
            case Icon.brushes:
                noFill();
                stroke(255, 255, 255);
                brushes(x-7, y+3, s * 0.9, r);
                break;
            case Icon.shapes2d:
                noFill();
                stroke(255, 255, 255);
                flatShapes(x, y-1, s*0.9, r);
                break;
            case Icon.shapes3d:
                noFill();
                stroke(255, 255, 255);
                thiccShapes(x, y, s, r);
                break;
            case Icon.stickers:
                noFill();
                stroke(255, 255, 255);
                stickers(x-6, y+6, s*1.32, r);
                break;
            case Icon.text:
                noFill();
                stroke(255, 255, 255);
                Text(x, y, s, r);
                break;
            case Icon.effects:
                noFill();
                stroke(255, 255, 255);
                effects(x, y, s, r);
                break;
            case Icon.library3d:
                noFill();
                stroke(255, 255, 255);
                thiccLibrary(x, y-1, s*0.9, r);
                break;
        }
    }
    
    textFont(createFont("Open Sans", 11));

    noStroke();
    fill(255, 0, 0, 50);
    rect(0, 0, 68, 48);
    renderIcon(Icon.menu, 29, 16, 0.5, 0);
    fill(255, 255, 255);
    text("Menu", 34, 40);
    
    var labels = [
        "Brushes",
        "2D shapes",
        "3D shapes",
        "Stickers",
        "Text",
        "Effects",
        "Canvas",
        '3D library'
    ];
    var labelsIcons = [
        Icon.brushes,
        Icon.shapes2d,
        Icon.shapes3d,
        Icon.stickers,
        Icon.text,
        Icon.effects,
        Icon.canvas,
        Icon.library3d
    ];
    var btnX = (68 + (lWidth - (4*68 + 48 + 8*68))) / 2;
    textAlign(CENTER);
    for (var i = 0; i < labels.length; i++) {
        fill(255, 0, 0, 50);
        noStroke();
        rectMode(CORNER);
        rect(btnX, 0, 68, 48);
        
        fill(255, 255, 255);
        text(labels[i], btnX + 68/2, 40);

        strokeWeight(1);
        renderIcon(labelsIcons[i], btnX + 34, 16, 0.5, 0);
        
        btnX += 68;
    }
    
    var labels2 = [
        "Paste",
        "Undo",
        "History",
        "Redo"
    ];
    var labels2Icons = [
        Icon.OPpaste,
        Icon.undo,
        Icon.history,
        Icon.redo
    ];
    for (var i = 0; i < labels2.length; i++) {
        var rx = width - 48 - 68*(i+1);
        fill(255, 0, 0, 50);
        noStroke();
        rectMode(CORNER);
        rect(rx, 0, 68, 48);
        
        fill(255, 255, 255);
        text(labels2[3-i], rx + 68/2, 40);

        strokeWeight(1);
        rectMode(CENTER);
        renderIcon(labels2Icons[3-i], rx + 34, 16, 0.5, 0);
        rectMode(CORNER);
        
    }

    fill(255, 0, 0, 50);
    rect(width - 48, 0, 48, 48);
    stroke(255, 255, 255);
    arrow(width - 26, 24, 0.7, 0);

    
    // println(mouseY);
};




