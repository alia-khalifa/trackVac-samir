const db = require('../db');
const City = require('../models/city');
const Place = require('../models/place');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const cities = ['القاهرة', 'أسيوط', 'المنيا', 'السويس', 'بني سويف', 'الفيوم', 'الدقهلية', 'دمياط', 'البحيرة', 'مرسى مطروح', 'كفرالشيخ', 'الغربية', 'المنوفية', 'شمال سيناء', 'جنوب سيناء', 'بورسعيد', 'الإسماعيلية', 'الأسكندرية', 'سوهاج', 'قنا', 'الشرقية', 'الأقصر', 'أسوان', 'البحر الأحمر', 'الوادي الجديد', 'الجيزة', 'القليوبية'];

let nameandcities = [];

nameandcities['القاهرة'] = ['النزهة - مركز طبي النزهة', 'القاهرة الجديدة - مركز طبي القطامية', 'شبرا - مركز المؤتمارات الأنجيلي'
    , 'مصر الجديدة - مستشفى هليوبليس', 'المطرية - مستشفى المطرية التعليمي'
    , 'الزيتون - مستشفى الزيتون التخصصي', 'السلام أول - مركز طبي الدلتا', 'السلام الثاني - مركز طبي النهضة القديم', 'المرج - مركز طبي الأندلس'
    , 'عين شمس - مركز صحة الأسرة', 'المطرية - عيادة المطرية الشاملة', 'الزيتون - مركز طبي سراي القبة', 'حدائق القبة - مركز طبي الخليج المصري'
    , 'مصر الجديدة - مكتب صحة بيروت', 'مدينة نصر غرب - مركز طبي السادس', 'مدينة نصر شرق - مركز طبي الحي السابع'
    , 'النزهة - مركز طبي المحكمة', 'الوايلي - مركز رعاية طفل العباسية'
    , 'وسط - مركز طبي الدراسة', 'عابدين - مركز طبي عابدين', 'المقطم - مركز صحة الأسمارات 3', 'الساحل - مركز طبي المقسى', 'الخليفة - مركز طبى التونسى الحضرى الجديد'
    , 'السيدة زينب - رعاية طفل مصر القديمة', 'مصر القديمة - مركز طبى عين الصيرة', 'البساتين - مركز طبى صقر قريش'
    , 'المعادى - مركز طبى الخبيرى', 'الشروق - مركز طبي ال100 متر', 'بدر - مركز طبي الحي الأول ', 'القاهرة الجديدة - مركز طبي التجمع الثالث'
    , 'طرة - مركز طبي طرة', '15 مايو - مركز طبي مجاورة 5', 'حلوان - مركز طبي الست خضرة'];

nameandcities['الجيزة'] = ['الشيخ زايد - مستشفى الشيخ زايد التخصصي', 'المهندسين - مركز فاكسيرا'
    , 'وحدة الباويطي الطبية', 'أوسيم - مركز طبي البراجيل', 'الهرم - مركز طبي كفر نصار'
    , 'الهرم - مركز طبي نزلة السمان', 'الصف - المركز المتميز بالاخصاص'
    , 'مدينة 6 أكتوبر - المركز الطبي بشرق الفيوم', 'ميت عقبة - مركز صحة ميت عقبة'
    , 'بولاق الدكرور - مركز طبي كفر طهرمس', 'بولاق الدكرور - مركز طبي بولاق الحضر'
    , 'جنوب الجيزة - مركز طبي المنيب', 'الوراق - مركز طبي طناش', 'شمال الجيزة - مركز طبي غرب المطار'
    , 'شمال الجيزة - مركز طبي عزيز عزت', 'العمرانية - مركز الطالبية', 'العمرانية - مركز الكونيسة'
    , 'كرادسة - مركز المعتمدية', 'أبو النمرس - مركز شبرامنت', 'أطفيح - مركز صول'
    , 'شمال العياط - مركز كفر ترك ', 'البدرشين - مركز الطرفاية', 'شرق القناطر - مركز نكلا'
    , 'غرب القناطر - مركز بهرمس']

nameandcities['القليوبية'] = ['شبرا - مستشفى معهد ناصر', 'كفر شكر - مستشفى كفر شكر', 'سنديون - مركز طبي الاسرة بسنديون'
    , 'شبرا – مركز طبي حجازية'];

nameandcities['الأسكندرية'] = ['العاطرين - المركز الأفريقي لصحة المرأة ', 'مينا البصل - مركز صحة أسرة المفروزة'
    , 'المنتزة - مركز صحة أسرة العمراوي', 'المنتزة - وحدة طب أسرة المندرة'
    , 'المنتزة - مستشفى شرق المدينة', 'شرق - مركز طب أسرة سان ستيفانو', 'شرق - وحدة أسرة دنا الوطنية'
    , 'وحدة شرق - مركز طب أسرة أبيس 2', 'شرق - مستشفى أطفال الرمل '
    , 'وسط - رعاية طفل محرم بك', 'وسط - مستشفى الرمد', 'الجمرك - مستوصف صدر الجمرك', 'غرب - وحدة طب أسرة أبن سهلان'
    , 'غرب - مستشفى القماري', 'العامرية - وحدة المجزر الآلي عبد القادر', 'العامرية - وحدة طب أسرة الناصرية'
    , 'العجمي - وحدة طب أسرة البيطاش', 'العجمي - مركز الداخلية لطب الأسرة', 'برج العرب - وحدة طب أسرة البرج القديم'];

nameandcities['بني سويف'] = ['بني سويف - مستشفى بني سويف التخصصي'];
nameandcities['الإسماعيلية'] = ['الإسماعيلية - مجمع الإسماعيلية'];
nameandcities['بورسعيد'] = ['بورسعيد - مستشفى النصر'];
nameandcities['جنوب سيناء'] = ['شرم الشيح - مستشفى شرم الشيخ الولي'];
nameandcities['شمال سيناء'] = ['العريش - مستشفى العريش العام'];
nameandcities['المنوفية'] = ['شبين الكوم - مركز صحي شبين الكوم', 'أشمون - مركز صحي أشمون', 'السادات - وحدة صحة أسرة اسكان المستقبل', 'منوف - مستشفى حميات منوف'];
nameandcities['الغربية'] = ['طنطا ثاني - مركز طبي سعيد', 'زفتي - مستشفى زفتي التخصصي', 'قطور - مستشفى قطور المركزي', 'بسيون - مكتب صحة أول بسيون', 'سمنود - ديوت الإدارة الصحية بسمنود', 'كفر الزيات - مكتب ثاني كفر الزيات', 'المحلة ثاني - معهد كبد المحلة'];
nameandcities['كفرالشيخ'] = ['الحامول - مكتب صحة الحامول', 'كفر الشيخ - مستشفى سيدي غازي المركزي', 'دسوق - مستشفى دسوق العام', 'مركز قلين - مستشفى قلين الجديدة'];
nameandcities['مرسى مطروح'] = ['مرسى مطروح - مستشفى القلب بمجمع المستشفيات'];
nameandcities['البحيرة'] = ['دمنهور - معهد الطب القومي بدمنهور', 'مركز دمنهور - مستشفى دنشال التعليمي'];
nameandcities['دمياط'] = ['دمياط - مركز القلب و الجهاز الهضمي'];
nameandcities['الدقهلية'] = ['المنصورة - مستشفى منصورة الدولي', 'طلحا - مركز رعاية الأمومة و الطفولة بطلحا', 'المنزلة - المركز الحضري بالمنزلة', 'دكرنس - مستشفى دكرنس العام', 'بلقاس - مستشفى بلقاس المركزي', 'ميت غمرة - مستشفى مست غمرة المركزي', 'السنبلاوين - مستشفى السنبلاوين العام'];
nameandcities['الفيوم'] = ['بندر الفيوم - المركز الطبي بكبمان فارس'];
nameandcities['السويس'] = ['فيصل - وحدة طب أسرة مبارك'];
nameandcities['المنيا'] = ['المنيا الجديدة - مركز طبي شباب المستقبل', 'ملوي - مركز طبي قلندول', 'بني مزار - وحدة القيمي', 'سمالوط - مستشفى سمالوط النموذجي'];
nameandcities['أسيوط'] = ['غرب أسيوط - مستشفى الإيمان العام', 'شرق أسيوط - مركز صحة الوليدية', 'القوصية - الوحدة الصحية بني زيد بوق', 'أبو تيج - الوحدة الصحية نزلة بأكور'];
nameandcities['سوهاج'] = ['المراغة - المركز الطبي الحضري', 'البلينا - المركز الطبي بالبلينا', 'سوهاح - مرطو رعاية طفل شرق'];
nameandcities['قنا'] = ['قنا - مرطو صحو الأسرة المشروع الأوروبي'];
nameandcities['الشرقية'] = ['الشرقية - مرطو صحة ثاني الزقازيق', 'فاقوس - وحدة الدمبين بالإدارة الصحية بفاقوس', 'بلبيس - المرطو الطبي بإداردة بلبيس', 'أبو حماد - المركز الطبي بإدراة أبو حماد', 'العاشر من رمضان - مرطو الحي 29 بإدارة العاشر من رمضان', 'ههيا - قسم الحميات بمستشفى ههيا المركزي', 'السعديين - وحدة الفيروسات الكبدية سابقا بمستشفة السعديين المركزي'];
nameandcities['الأقصر'] = ['الأقصر - مستشفى حميات الأقصر'];
nameandcities['أسوان'] = ['أسوان - مستشفة صدر أسوان'];
nameandcities['البحر الأحمر'] = ['الغردقة - وحدة صحة الأسرة بالأحياء'];
nameandcities['الوادي الجديد'] = ['الخارجة - مركز طبي الخارجة', 'الداخلة - مركز طبي الداخلة', 'الفرافرة - مركز طبي الفرافرة'];

async function initDB() {
    for (let i = 0; i < cities.length; i++) {
        const tmpCity = new City({ name: cities[i] });
        await tmpCity.save();

        for (let j = 0; j < nameandcities[cities[i]].length; j++) {
            const tmpPlace = new Place({
                name: nameandcities[cities[i]][j],
                location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13822.985791185452!2d31.4414096!3d29.986716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e7220116094726d!2z2KfZhNis2KfZhdi52Kkg2KfZhNij2YTZhdin2YbZitipINio2KfZhNmC2KfZh9ix2Kk!5e0!3m2!1sen!2seg!4v1632217284429!5m2!1sen!2seg',
                cityID: tmpCity._id
            });

            await tmpPlace.save();
            tmpCity.places.push(tmpPlace._id);
        }
        await City.findByIdAndUpdate(tmpCity._id, { places: tmpCity.places });
    }
    db.close();
}

initDB();

