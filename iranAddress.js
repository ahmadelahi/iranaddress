$(document).ready(function(){
    loadprovince();
    $(".province").change(function(){
        $(this).closest('body').find('.city').addClass( "tempClass" );
        loadCity($(this).val());
    });
});

function loadprovince() {
    selectValues = {"":"","1":"آذربایجان شرقی","2":"آذربایجان غربی","3":"اردبیل","4":"اصفهان","5":"البرز","6":"ایلام",
        "7":"بوشهر","8":"تهران","9":"چهارمحال و بختیاری","10":"خراسان جنوبی","11":"خراسان رضوی","12":"خراسان شمالی","13":"خوزستان",
        "14":"زنجان","15":"سمنان","16":"سیستان و بلوچستان","17":"فارس","18":"قزوین","19":"قم","20":"کردستان",
        "21":"کرمان","22":"کرمانشاه","23":"کهگیلویه و بویراحمد","24":"گلستان","25":"گیلان","26":"لرستان","27":"مازندران",
        "28":"مرکزی","29":"هرمزگان","30":"همدان","31":"یزد"};

    $.each(selectValues, function (key, value) {
        $('.province')
            .append($("<option></option>")
                .attr("value", key)
                .text(value));
    });
}

//Load city for selete
function loadCity(province){
    $(".tempClass").find('option').remove();

    switch (province) {
        case "1":
            var selectValues = {"1":"آذرشهر","2":"اسکو","3":"اهر","4":"بستان‌آباد","5":"بناب","6":"تبریز","7":"جلفا","8":"چاراویماق","9":"سراب","10":"شبستر","11":"عجب‌شیر","12":"کلیبر","13":"مراغه","14":"مرند","15":"ملکان","16":"میانه","17":"ورزقان","18":"هریس","19":"هشترود"};
            break;
        case "2":
            var selectValues = {"20":"ارومیه","21":"اشنویه","22":"بوکان","23":"پیرانشهر","24":"تکاب","25":"چالدران","26":"خوی","27":"سردشت","28":"سلماس","29":"شاهین‌دژ","30":"ماکو","31":"مهاباد","32":"میاندوآب","33":"نقده"};
            break;
        case "3":
            var selectValues = {"34":"اردبیل","35":"بیله‌سوار","36":"پارس‌آباد","37":"خلخال","38":"کوثر","39":"گرمی","40":"مشگین شهر","41":"نمین","42":"نیر"};
            break;
        case "4":
            var selectValues = {"43":"آران و بیدگل","44":"اردستان","45":"اصفهان","46":"برخوردار و میمه","47":"تیران و کرون","48":"چادگان","49":"خمینی‌شهر","50":"خوانسار","51":"سمیرم","52":"شهرضا","53":"سمیرم سفلی","54":"فریدن","55":"فریدون‌شهر","56":"فلاورجان","57":"کاشان","58":"گلپایگان","59":"لنجان","60":"مبارکه","61":"نائین","62":"نجف‌آباد","63":"نطنز"};
            break;
        case "5":
            var selectValues = {"64":"ساوجبلاغ","65":"طالقان","66":"کرج","67":"نظرآباد"};
            break;
        case "6":
            var selectValues = {"68":"آبدانان","69":"ایلام","70":"ایوان","71":"دره‌شهر","72":"دهلران","73":"شیروان و چرداول","74":"مهران"};
            break;
        case "7":
            var selectValues = {"75":"بوشهر","76":"تنگستان","77":"جم","78":"دشتستان","79":"دشتی","80":"دیر","81":"دیلم","82":"کنگان","83":"گناوه"};
            break;
        case "8":
            var selectValues = {"84":"ورامین","85":"فیروزکوه","86":"شهریار","87":"شمیرانات","88":"ری","89":"رباط‌کریم","90":"دماوند","91":"تهران","92":"پاکدشت","93":"اسلام‌شهر"};
            break;
        case "9":
            var selectValues = {"94":"اردل","95":"بروجن","96":"شهرکرد","97":"فارسان","98":"کوهرنگ","99":"لردگان"};
            break;
        case "10":
            var selectValues = {"100":"بیرجند","101":"درمیان","102":"سرایان","103":"سربیشه","104":"فردوس","105":"قائنات","106":"نهبندان"};
            break;
        case "11":
            var selectValues = {"107":"بردسکن","108":"تایباد","109":"تربت جام","110":"تربت حیدریه","111":"چناران","112":"خلیل‌آباد","113":"خواف","114":"درگز","115":"رشتخوار","116":"سبزوار","117":"سرخس","118":"فریمان","119":"قوچان","120":"کاشمر","121":"کلات","122":"گناباد","123":"مشهد","124":"مه ولات","125":"نیشابور"};
            break;
        case "12":
            var selectValues = {"126":"اسفراین","127":"بجنورد","128":"جاجرم","129":"شیروان","130":"فاروج","131":"مانه و سملقان"};
            break;
        case "13":
            var selectValues = {"132":"آبادان","133":"امیدیه","134":"اندیمشک","135":"اهواز","136":"ایذه","137":"باغ‌ملک","138":"بندر ماهشهر","139":"بهبهان","140":"خرمشهر","141":"دزفول","142":"دشت آزادگان","143":"رامشیر","144":"رامهرمز","145":"شادگان","146":"شوش","147":"شوشتر","148":"گتوند","149":"لالی","150":"مسجد سلیمان","151":"هندیجان"};
            break;
        case "14":
            var selectValues = {"152":"ابهر","153":"ایجرود","154":"خدابنده","155":"خرمدره","156":"زنجان","157":"طارم","158":"ماه‌نشان"};
            break;
        case "15":
            var selectValues = {"159":"دامغان","160":"سمنان","161":"شاهرود","162":"گرمسار","163":"مهدی‌شهر"};
            break;
        case "16":
            var selectValues = {"164":"ایرانشهر","165":"چابهار","166":"خاش","167":"دلگان","168":"زابل","168":"زاهدان","169":"زهک","170":"سراوان","171":"سرباز","172":"173","174":"نیک‌شهر"};
            break;
        case "17":
            var selectValues = {"175":"آباده","176":"ارسنجان","177":"استهبان","178":"اقلید","179":"بوانات","180":"پاسارگاد","181":"جهرم","182":"خرم‌بید","183":"خنج","184":"داراب","185":"زرین‌دشت","189":"سپیدان","190":"شیراز","191":"فراشبند","192":"فسا","193":"فیروزآباد","194":"قیر و کارزین","195":"کازرون","196":"لارستان","197":"لامرد","198":"مرودشت","199":"ممسنی","200":"مهر","201":"نی‌ریز"};
            break;
        case "18":
            var selectValues = {"202":"آبیک","203":"البرز","204":"بوئین‌زهرا","205":"تاکستان","206":"قزوین"};
            break;
        case "19":
            var selectValues = {"207":"قم"};
            break;
        case "20":
            var selectValues = {"208":"بانه","209":"بیجار","210":"دیواندره","211":"سروآباد","212":"سقز","213":"سنندج","214":"قروه","215":"کامیاران","216":"مریوان"};
            break;
        case "21":
            var selectValues = {"217":"بافت","218":"بردسیر","219":"بم","220":"جیرفت","221":"راور","222":"رفسنجان","223":"رودبار جنوب","224":"زرند","225":"سیرجان","226":"شهر بابک","227":"عنبرآباد","228":"قلعه گنج","229":"کرمان","230":"کوهبنان","231":"کهنوج","232":"منوجان"};
            break;
        case "22":
            var selectValues = {"233":"اسلام‌آباد غرب","234":"پاوه","235":"ثلاث باباجانی","236":"جوانرود","237":"دالاهو","238":"روانسر","239":"سرپل ذهاب","240":"سنقر","241":"صحنه","242":"قصر شیرین","243":"کرمانشاه","244":"کنگاور","245":"گیلان غرب","246":"هرسین"};
            break;
        case "23":
            var selectValues = {"247":"بویراحمد","248":"بهمئی","249":"دنا","250":"کهگیلویه","251":"گچساران"};
            break;
        case "24":
            var selectValues = {"252":"آزادشهر","253":"آق‌قلا","254":"بندر گز","255":"ترکمن","256":"رامیان","257":"علی‌آباد","258":"کردکوی","259":"کلاله","260":"گرگان","261":"گنبد کاووس","262":"مراوه‌تپه","263":"مینودشت"};
            break;
        case "25":
            var selectValues = {"264":"آستارا","265":"آستانه","267":"اشرفیه","268":"املش","269":"بندر انزلی","270":"رشت","271":"رضوانشهر","272":"رودبار","273":"رودسر","274":"سیاهکل","275":"شفت","276":"صومعه‌سرا","277":"طوالش","278":"فومن","279":"لاهیجان","280":"لنگرود","281":"ماسال"};
            break;
        case "26":
            var selectValues = {"282":"ازنا","283":"الیگودرز","284":"بروجرد","285":"پل‌دختر","286":"خرم‌آباد","287":"دورود","288":"دلفان","289":"سلسله","290":"کوهدشت"};
            break;
        case "27":
            var selectValues = {"291":"آمل","292":"بابل","293":"بابلسر","294":"بهشهر","295":"تنکابن","296":"جویبار","297":"چالوس","298":"رامسر","299":"ساری","300":"سوادکوه","301":"قائم‌شهر","302":"گلوگاه","303":"محمودآباد","304":"نکا","305":"نور","306":"نوشهر"};
            break;
        case "28":
            var selectValues = {"307":"آشتیان","308":"اراک","309":"تفرش","310":"خمین","311":"دلیجان","312":"زرندیه","313":"ساوه","314":"شازند","315":"کمیجان","316":"محلات"};
            break;
        case "29":
            var selectValues = {"317":"ابوموسی","318":"بستک","319":"بندر عباس","320":"بندر لنگه","321":"جاسک","322":"حاجی‌آباد","323":"خمیر","324":"رودان","325":"قشم","326":"گاوبندی","327":"میناب"};
            break;
        case "30":
            var selectValues = {"328":"اسدآباد","329":"بهار","330":"تویسرکان","331":"رزن","332":"کبودرآهنگ","333":"ملایر","334":"نهاوند","335":"همدان"};
            break;
        case "31":
            var selectValues = {"336":"ابرکوه","337":"اردکان","338":"بافق","339":"تفت","340":"خاتم","341":"صدوق","342":"طبس","343":"مهریز","344":"میبد","345":"یزد"};
            break;
        case "":
            var selectValues = {"":""}
            
    }


    $.each( selectValues , function (key, value) {
        $(".tempClass")
            .append($("<option></option>")
                .attr("value", key)
                .text(value));
    });
    $(".tempClass").removeClass("tempClass");
}
