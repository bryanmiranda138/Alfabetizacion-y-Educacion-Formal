var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Distritos_1 = new ol.format.GeoJSON();
var features_Distritos_1 = format_Distritos_1.readFeatures(json_Distritos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritos_1.addFeatures(features_Distritos_1);
var lyr_Distritos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distritos_1, 
                style: style_Distritos_1,
                popuplayertitle: 'Distritos',
                interactive: true,
                title: '<img src="styles/legend/Distritos_1.png" /> Distritos'
            });
var format_EducacinNosabeMujeres_2 = new ol.format.GeoJSON();
var features_EducacinNosabeMujeres_2 = format_EducacinNosabeMujeres_2.readFeatures(json_EducacinNosabeMujeres_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EducacinNosabeMujeres_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducacinNosabeMujeres_2.addFeatures(features_EducacinNosabeMujeres_2);
var lyr_EducacinNosabeMujeres_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EducacinNosabeMujeres_2, 
                style: style_EducacinNosabeMujeres_2,
                popuplayertitle: 'Educación: No sabe - Mujeres',
                interactive: true,
    title: 'Educación: No sabe - Mujeres<br />\
    <img src="styles/legend/EducacinNosabeMujeres_2_0.png" /> 0 - 8<br />\
    <img src="styles/legend/EducacinNosabeMujeres_2_1.png" /> 8 - 17.4<br />\
    <img src="styles/legend/EducacinNosabeMujeres_2_2.png" /> 17.4 - 33<br />\
    <img src="styles/legend/EducacinNosabeMujeres_2_3.png" /> 33 - 82.8<br />\
    <img src="styles/legend/EducacinNosabeMujeres_2_4.png" /> 82.8 - 744<br />' });
var format_EducacinNosabeHombres_3 = new ol.format.GeoJSON();
var features_EducacinNosabeHombres_3 = format_EducacinNosabeHombres_3.readFeatures(json_EducacinNosabeHombres_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EducacinNosabeHombres_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducacinNosabeHombres_3.addFeatures(features_EducacinNosabeHombres_3);
var lyr_EducacinNosabeHombres_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EducacinNosabeHombres_3, 
                style: style_EducacinNosabeHombres_3,
                popuplayertitle: 'Educación: No sabe - Hombres',
                interactive: true,
    title: 'Educación: No sabe - Hombres<br />\
    <img src="styles/legend/EducacinNosabeHombres_3_0.png" /> 0 - 12<br />\
    <img src="styles/legend/EducacinNosabeHombres_3_1.png" /> 12 - 25<br />\
    <img src="styles/legend/EducacinNosabeHombres_3_2.png" /> 25 - 46<br />\
    <img src="styles/legend/EducacinNosabeHombres_3_3.png" /> 46 - 116<br />\
    <img src="styles/legend/EducacinNosabeHombres_3_4.png" /> 116 - 918<br />' });
var format_EducacinNuncaasistiacentroeducativoformalMujeres_4 = new ol.format.GeoJSON();
var features_EducacinNuncaasistiacentroeducativoformalMujeres_4 = format_EducacinNuncaasistiacentroeducativoformalMujeres_4.readFeatures(json_EducacinNuncaasistiacentroeducativoformalMujeres_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EducacinNuncaasistiacentroeducativoformalMujeres_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducacinNuncaasistiacentroeducativoformalMujeres_4.addFeatures(features_EducacinNuncaasistiacentroeducativoformalMujeres_4);
var lyr_EducacinNuncaasistiacentroeducativoformalMujeres_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EducacinNuncaasistiacentroeducativoformalMujeres_4, 
                style: style_EducacinNuncaasistiacentroeducativoformalMujeres_4,
                popuplayertitle: 'Educación: Nunca asistió a centro educativo formal - Mujeres',
                interactive: true,
    title: 'Educación: Nunca asistió a centro educativo formal - Mujeres<br />\
    <img src="styles/legend/EducacinNuncaasistiacentroeducativoformalMujeres_4_0.png" /> 0 - 281<br />\
    <img src="styles/legend/EducacinNuncaasistiacentroeducativoformalMujeres_4_1.png" /> 281 - 551<br />\
    <img src="styles/legend/EducacinNuncaasistiacentroeducativoformalMujeres_4_2.png" /> 551 - 934<br />\
    <img src="styles/legend/EducacinNuncaasistiacentroeducativoformalMujeres_4_3.png" /> 934 - 1724<br />\
    <img src="styles/legend/EducacinNuncaasistiacentroeducativoformalMujeres_4_4.png" /> 1724 - 12767<br />' });
var format_EducacinNuncaasistiacentroeducativoformalHombres_5 = new ol.format.GeoJSON();
var features_EducacinNuncaasistiacentroeducativoformalHombres_5 = format_EducacinNuncaasistiacentroeducativoformalHombres_5.readFeatures(json_EducacinNuncaasistiacentroeducativoformalHombres_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EducacinNuncaasistiacentroeducativoformalHombres_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducacinNuncaasistiacentroeducativoformalHombres_5.addFeatures(features_EducacinNuncaasistiacentroeducativoformalHombres_5);
var lyr_EducacinNuncaasistiacentroeducativoformalHombres_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EducacinNuncaasistiacentroeducativoformalHombres_5, 
                style: style_EducacinNuncaasistiacentroeducativoformalHombres_5,
                popuplayertitle: 'Educación: Nunca asistió a centro educativo formal - Hombres',
                interactive: true,
    title: 'Educación: Nunca asistió a centro educativo formal - Hombres<br />\
    <img src="styles/legend/EducacinNuncaasistiacentroeducativoformalHombres_5_0.png" /> 0 - 207<br />\
    <img src="styles/legend/EducacinNuncaasistiacentroeducativoformalHombres_5_1.png" /> 207 - 388<br />\
    <img src="styles/legend/EducacinNuncaasistiacentroeducativoformalHombres_5_2.png" /> 388 - 693<br />\
    <img src="styles/legend/EducacinNuncaasistiacentroeducativoformalHombres_5_3.png" /> 693 - 1273<br />\
    <img src="styles/legend/EducacinNuncaasistiacentroeducativoformalHombres_5_4.png" /> 1273 - 8579<br />' });
var format_EducacinAsistiacentroeducativoformalMujeres_6 = new ol.format.GeoJSON();
var features_EducacinAsistiacentroeducativoformalMujeres_6 = format_EducacinAsistiacentroeducativoformalMujeres_6.readFeatures(json_EducacinAsistiacentroeducativoformalMujeres_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EducacinAsistiacentroeducativoformalMujeres_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducacinAsistiacentroeducativoformalMujeres_6.addFeatures(features_EducacinAsistiacentroeducativoformalMujeres_6);
var lyr_EducacinAsistiacentroeducativoformalMujeres_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EducacinAsistiacentroeducativoformalMujeres_6, 
                style: style_EducacinAsistiacentroeducativoformalMujeres_6,
                popuplayertitle: 'Educación: Asistió a centro educativo formal - Mujeres',
                interactive: true,
    title: 'Educación: Asistió a centro educativo formal - Mujeres<br />\
    <img src="styles/legend/EducacinAsistiacentroeducativoformalMujeres_6_0.png" /> 0 - 1251<br />\
    <img src="styles/legend/EducacinAsistiacentroeducativoformalMujeres_6_1.png" /> 1251 - 2218<br />\
    <img src="styles/legend/EducacinAsistiacentroeducativoformalMujeres_6_2.png" /> 2218 - 3787<br />\
    <img src="styles/legend/EducacinAsistiacentroeducativoformalMujeres_6_3.png" /> 3787 - 8513<br />\
    <img src="styles/legend/EducacinAsistiacentroeducativoformalMujeres_6_4.png" /> 8513 - 120094<br />' });
var format_EducacinAsistiacentroeducativoformalHombres_7 = new ol.format.GeoJSON();
var features_EducacinAsistiacentroeducativoformalHombres_7 = format_EducacinAsistiacentroeducativoformalHombres_7.readFeatures(json_EducacinAsistiacentroeducativoformalHombres_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EducacinAsistiacentroeducativoformalHombres_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducacinAsistiacentroeducativoformalHombres_7.addFeatures(features_EducacinAsistiacentroeducativoformalHombres_7);
var lyr_EducacinAsistiacentroeducativoformalHombres_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EducacinAsistiacentroeducativoformalHombres_7, 
                style: style_EducacinAsistiacentroeducativoformalHombres_7,
                popuplayertitle: 'Educación: Asistió a centro educativo formal - Hombres',
                interactive: true,
    title: 'Educación: Asistió a centro educativo formal - Hombres<br />\
    <img src="styles/legend/EducacinAsistiacentroeducativoformalHombres_7_0.png" /> 0 - 1048<br />\
    <img src="styles/legend/EducacinAsistiacentroeducativoformalHombres_7_1.png" /> 1048 - 1865<br />\
    <img src="styles/legend/EducacinAsistiacentroeducativoformalHombres_7_2.png" /> 1865 - 3373<br />\
    <img src="styles/legend/EducacinAsistiacentroeducativoformalHombres_7_3.png" /> 3373 - 7270<br />\
    <img src="styles/legend/EducacinAsistiacentroeducativoformalHombres_7_4.png" /> 7270 - 98167<br />' });
var format_AlfabetizacinNosabeNorespondeMujeres_8 = new ol.format.GeoJSON();
var features_AlfabetizacinNosabeNorespondeMujeres_8 = format_AlfabetizacinNosabeNorespondeMujeres_8.readFeatures(json_AlfabetizacinNosabeNorespondeMujeres_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlfabetizacinNosabeNorespondeMujeres_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlfabetizacinNosabeNorespondeMujeres_8.addFeatures(features_AlfabetizacinNosabeNorespondeMujeres_8);
var lyr_AlfabetizacinNosabeNorespondeMujeres_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlfabetizacinNosabeNorespondeMujeres_8, 
                style: style_AlfabetizacinNosabeNorespondeMujeres_8,
                popuplayertitle: 'Alfabetización: No sabe / No responde - Mujeres',
                interactive: true,
    title: 'Alfabetización: No sabe / No responde - Mujeres<br />\
    <img src="styles/legend/AlfabetizacinNosabeNorespondeMujeres_8_0.png" /> 0 - 0<br />\
    <img src="styles/legend/AlfabetizacinNosabeNorespondeMujeres_8_1.png" /> 0 - 1<br />\
    <img src="styles/legend/AlfabetizacinNosabeNorespondeMujeres_8_2.png" /> 1 - 4<br />\
    <img src="styles/legend/AlfabetizacinNosabeNorespondeMujeres_8_3.png" /> 4 - 7<br />\
    <img src="styles/legend/AlfabetizacinNosabeNorespondeMujeres_8_4.png" /> 7 - 351<br />' });
var format_AlfabetizacinNosabeNorespondeHombres_9 = new ol.format.GeoJSON();
var features_AlfabetizacinNosabeNorespondeHombres_9 = format_AlfabetizacinNosabeNorespondeHombres_9.readFeatures(json_AlfabetizacinNosabeNorespondeHombres_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlfabetizacinNosabeNorespondeHombres_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlfabetizacinNosabeNorespondeHombres_9.addFeatures(features_AlfabetizacinNosabeNorespondeHombres_9);
var lyr_AlfabetizacinNosabeNorespondeHombres_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlfabetizacinNosabeNorespondeHombres_9, 
                style: style_AlfabetizacinNosabeNorespondeHombres_9,
                popuplayertitle: 'Alfabetización: No sabe / No responde - Hombres',
                interactive: true,
    title: 'Alfabetización: No sabe / No responde - Hombres<br />\
    <img src="styles/legend/AlfabetizacinNosabeNorespondeHombres_9_0.png" /> 0 - 0<br />\
    <img src="styles/legend/AlfabetizacinNosabeNorespondeHombres_9_1.png" /> 0 - 1<br />\
    <img src="styles/legend/AlfabetizacinNosabeNorespondeHombres_9_2.png" /> 1 - 3<br />\
    <img src="styles/legend/AlfabetizacinNosabeNorespondeHombres_9_3.png" /> 3 - 8.8<br />\
    <img src="styles/legend/AlfabetizacinNosabeNorespondeHombres_9_4.png" /> 8.8 - 575<br />' });
var format_AlfabetizacinNosabeleeroescribirMujeres_10 = new ol.format.GeoJSON();
var features_AlfabetizacinNosabeleeroescribirMujeres_10 = format_AlfabetizacinNosabeleeroescribirMujeres_10.readFeatures(json_AlfabetizacinNosabeleeroescribirMujeres_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlfabetizacinNosabeleeroescribirMujeres_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlfabetizacinNosabeleeroescribirMujeres_10.addFeatures(features_AlfabetizacinNosabeleeroescribirMujeres_10);
var lyr_AlfabetizacinNosabeleeroescribirMujeres_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlfabetizacinNosabeleeroescribirMujeres_10, 
                style: style_AlfabetizacinNosabeleeroescribirMujeres_10,
                popuplayertitle: 'Alfabetización: No sabe leer o escribir - Mujeres',
                interactive: true,
    title: 'Alfabetización: No sabe leer o escribir - Mujeres<br />\
    <img src="styles/legend/AlfabetizacinNosabeleeroescribirMujeres_10_0.png" /> 0 - 426<br />\
    <img src="styles/legend/AlfabetizacinNosabeleeroescribirMujeres_10_1.png" /> 426 - 766<br />\
    <img src="styles/legend/AlfabetizacinNosabeleeroescribirMujeres_10_2.png" /> 766 - 1386<br />\
    <img src="styles/legend/AlfabetizacinNosabeleeroescribirMujeres_10_3.png" /> 1386 - 2562<br />\
    <img src="styles/legend/AlfabetizacinNosabeleeroescribirMujeres_10_4.png" /> 2562 - 17784<br />' });
var format_AlfabetizacinNosabeleeroescribirHombres_11 = new ol.format.GeoJSON();
var features_AlfabetizacinNosabeleeroescribirHombres_11 = format_AlfabetizacinNosabeleeroescribirHombres_11.readFeatures(json_AlfabetizacinNosabeleeroescribirHombres_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlfabetizacinNosabeleeroescribirHombres_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlfabetizacinNosabeleeroescribirHombres_11.addFeatures(features_AlfabetizacinNosabeleeroescribirHombres_11);
var lyr_AlfabetizacinNosabeleeroescribirHombres_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlfabetizacinNosabeleeroescribirHombres_11, 
                style: style_AlfabetizacinNosabeleeroescribirHombres_11,
                popuplayertitle: 'Alfabetización: No sabe leer o escribir - Hombres',
                interactive: true,
    title: 'Alfabetización: No sabe leer o escribir - Hombres<br />\
    <img src="styles/legend/AlfabetizacinNosabeleeroescribirHombres_11_0.png" /> 0 - 343<br />\
    <img src="styles/legend/AlfabetizacinNosabeleeroescribirHombres_11_1.png" /> 343 - 605<br />\
    <img src="styles/legend/AlfabetizacinNosabeleeroescribirHombres_11_2.png" /> 605 - 1052<br />\
    <img src="styles/legend/AlfabetizacinNosabeleeroescribirHombres_11_3.png" /> 1052 - 2011<br />\
    <img src="styles/legend/AlfabetizacinNosabeleeroescribirHombres_11_4.png" /> 2011 - 13591<br />' });
var format_AlfabetizacinSabeleeroescribirMujeres_12 = new ol.format.GeoJSON();
var features_AlfabetizacinSabeleeroescribirMujeres_12 = format_AlfabetizacinSabeleeroescribirMujeres_12.readFeatures(json_AlfabetizacinSabeleeroescribirMujeres_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlfabetizacinSabeleeroescribirMujeres_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlfabetizacinSabeleeroescribirMujeres_12.addFeatures(features_AlfabetizacinSabeleeroescribirMujeres_12);
var lyr_AlfabetizacinSabeleeroescribirMujeres_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlfabetizacinSabeleeroescribirMujeres_12, 
                style: style_AlfabetizacinSabeleeroescribirMujeres_12,
                popuplayertitle: 'Alfabetización: Sabe leer o escribir - Mujeres',
                interactive: true,
    title: 'Alfabetización: Sabe leer o escribir - Mujeres<br />\
    <img src="styles/legend/AlfabetizacinSabeleeroescribirMujeres_12_0.png" /> 0 - 1627<br />\
    <img src="styles/legend/AlfabetizacinSabeleeroescribirMujeres_12_1.png" /> 1627 - 2920<br />\
    <img src="styles/legend/AlfabetizacinSabeleeroescribirMujeres_12_2.png" /> 2920 - 5119<br />\
    <img src="styles/legend/AlfabetizacinSabeleeroescribirMujeres_12_3.png" /> 5119 - 11591<br />\
    <img src="styles/legend/AlfabetizacinSabeleeroescribirMujeres_12_4.png" /> 11591 - 160059<br />' });
var format_AlfabetizacinSabeleeroescribirHombres_13 = new ol.format.GeoJSON();
var features_AlfabetizacinSabeleeroescribirHombres_13 = format_AlfabetizacinSabeleeroescribirHombres_13.readFeatures(json_AlfabetizacinSabeleeroescribirHombres_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlfabetizacinSabeleeroescribirHombres_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlfabetizacinSabeleeroescribirHombres_13.addFeatures(features_AlfabetizacinSabeleeroescribirHombres_13);
var lyr_AlfabetizacinSabeleeroescribirHombres_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlfabetizacinSabeleeroescribirHombres_13, 
                style: style_AlfabetizacinSabeleeroescribirHombres_13,
                popuplayertitle: 'Alfabetización: Sabe leer o escribir - Hombres',
                interactive: true,
    title: 'Alfabetización: Sabe leer o escribir - Hombres<br />\
    <img src="styles/legend/AlfabetizacinSabeleeroescribirHombres_13_0.png" /> 0 - 1446<br />\
    <img src="styles/legend/AlfabetizacinSabeleeroescribirHombres_13_1.png" /> 1446 - 2610<br />\
    <img src="styles/legend/AlfabetizacinSabeleeroescribirHombres_13_2.png" /> 2610 - 4707<br />\
    <img src="styles/legend/AlfabetizacinSabeleeroescribirHombres_13_3.png" /> 4707 - 10302<br />\
    <img src="styles/legend/AlfabetizacinSabeleeroescribirHombres_13_4.png" /> 10302 - 135883<br />' });
var format_centroide_distritos_14 = new ol.format.GeoJSON();
var features_centroide_distritos_14 = format_centroide_distritos_14.readFeatures(json_centroide_distritos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centroide_distritos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centroide_distritos_14.addFeatures(features_centroide_distritos_14);
var lyr_centroide_distritos_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_centroide_distritos_14, 
                style: style_centroide_distritos_14,
                popuplayertitle: 'centroide_distritos',
                interactive: true,
                title: '<img src="styles/legend/centroide_distritos_14.png" /> centroide_distritos'
            });
var group_AlfabetizacinyEducacin = new ol.layer.Group({
                                layers: [lyr_EducacinNosabeMujeres_2,lyr_EducacinNosabeHombres_3,lyr_EducacinNuncaasistiacentroeducativoformalMujeres_4,lyr_EducacinNuncaasistiacentroeducativoformalHombres_5,lyr_EducacinAsistiacentroeducativoformalMujeres_6,lyr_EducacinAsistiacentroeducativoformalHombres_7,lyr_AlfabetizacinNosabeNorespondeMujeres_8,lyr_AlfabetizacinNosabeNorespondeHombres_9,lyr_AlfabetizacinNosabeleeroescribirMujeres_10,lyr_AlfabetizacinNosabeleeroescribirHombres_11,lyr_AlfabetizacinSabeleeroescribirMujeres_12,lyr_AlfabetizacinSabeleeroescribirHombres_13,],
                                fold: 'close',
                                title: 'Alfabetización y Educación'});
var group_DivisinSV = new ol.layer.Group({
                                layers: [lyr_Distritos_1,],
                                fold: 'close',
                                title: 'División SV'});
var group_Googlemaps = new ol.layer.Group({
                                layers: [lyr_GoogleRoad_0,],
                                fold: 'close',
                                title: 'Google maps'});

lyr_GoogleRoad_0.setVisible(true);lyr_Distritos_1.setVisible(true);lyr_EducacinNosabeMujeres_2.setVisible(false);lyr_EducacinNosabeHombres_3.setVisible(false);lyr_EducacinNuncaasistiacentroeducativoformalMujeres_4.setVisible(false);lyr_EducacinNuncaasistiacentroeducativoformalHombres_5.setVisible(false);lyr_EducacinAsistiacentroeducativoformalMujeres_6.setVisible(false);lyr_EducacinAsistiacentroeducativoformalHombres_7.setVisible(false);lyr_AlfabetizacinNosabeNorespondeMujeres_8.setVisible(false);lyr_AlfabetizacinNosabeNorespondeHombres_9.setVisible(false);lyr_AlfabetizacinNosabeleeroescribirMujeres_10.setVisible(false);lyr_AlfabetizacinNosabeleeroescribirHombres_11.setVisible(false);lyr_AlfabetizacinSabeleeroescribirMujeres_12.setVisible(false);lyr_AlfabetizacinSabeleeroescribirHombres_13.setVisible(true);lyr_centroide_distritos_14.setVisible(true);
var layersList = [group_Googlemaps,group_DivisinSV,group_AlfabetizacinyEducacin,lyr_centroide_distritos_14];
lyr_Distritos_1.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', });
lyr_EducacinNosabeMujeres_2.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', 'Departamen': 'Departamen', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Asistencia': 'Asistencia', 'Asistenc_1': 'Asistenc_1', 'Nunca ha a': 'Nunca ha a', 'Nunca ha_1': 'Nunca ha_1', 'No sabe -': 'No sabe -', 'No sabe _1': 'No sabe _1', });
lyr_EducacinNosabeHombres_3.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', 'Departamen': 'Departamen', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Asistencia': 'Asistencia', 'Asistenc_1': 'Asistenc_1', 'Nunca ha a': 'Nunca ha a', 'Nunca ha_1': 'Nunca ha_1', 'No sabe -': 'No sabe -', 'No sabe _1': 'No sabe _1', });
lyr_EducacinNuncaasistiacentroeducativoformalMujeres_4.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', 'Departamen': 'Departamen', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Asistencia': 'Asistencia', 'Asistenc_1': 'Asistenc_1', 'Nunca ha a': 'Nunca ha a', 'Nunca ha_1': 'Nunca ha_1', 'No sabe -': 'No sabe -', 'No sabe _1': 'No sabe _1', });
lyr_EducacinNuncaasistiacentroeducativoformalHombres_5.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', 'Departamen': 'Departamen', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Asistencia': 'Asistencia', 'Asistenc_1': 'Asistenc_1', 'Nunca ha a': 'Nunca ha a', 'Nunca ha_1': 'Nunca ha_1', 'No sabe -': 'No sabe -', 'No sabe _1': 'No sabe _1', });
lyr_EducacinAsistiacentroeducativoformalMujeres_6.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', 'Departamen': 'Departamen', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Asistencia': 'Asistencia', 'Asistenc_1': 'Asistenc_1', 'Nunca ha a': 'Nunca ha a', 'Nunca ha_1': 'Nunca ha_1', 'No sabe -': 'No sabe -', 'No sabe _1': 'No sabe _1', });
lyr_EducacinAsistiacentroeducativoformalHombres_7.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', 'Departamen': 'Departamen', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Asistencia': 'Asistencia', 'Asistenc_1': 'Asistenc_1', 'Nunca ha a': 'Nunca ha a', 'Nunca ha_1': 'Nunca ha_1', 'No sabe -': 'No sabe -', 'No sabe _1': 'No sabe _1', });
lyr_AlfabetizacinNosabeNorespondeMujeres_8.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', 'Departamen': 'Departamen', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Sabe leer': 'Sabe leer', 'Sabe lee_1': 'Sabe lee_1', 'No sabe le': 'No sabe le', 'No sabe _1': 'No sabe _1', 'No sabe/No': 'No sabe/No', 'No sabe/_1': 'No sabe/_1', });
lyr_AlfabetizacinNosabeNorespondeHombres_9.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', 'Departamen': 'Departamen', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Sabe leer': 'Sabe leer', 'Sabe lee_1': 'Sabe lee_1', 'No sabe le': 'No sabe le', 'No sabe _1': 'No sabe _1', 'No sabe/No': 'No sabe/No', 'No sabe/_1': 'No sabe/_1', });
lyr_AlfabetizacinNosabeleeroescribirMujeres_10.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', 'Departamen': 'Departamen', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Sabe leer': 'Sabe leer', 'Sabe lee_1': 'Sabe lee_1', 'No sabe le': 'No sabe le', 'No sabe _1': 'No sabe _1', 'No sabe/No': 'No sabe/No', 'No sabe/_1': 'No sabe/_1', });
lyr_AlfabetizacinNosabeleeroescribirHombres_11.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', 'Departamen': 'Departamen', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Sabe leer': 'Sabe leer', 'Sabe lee_1': 'Sabe lee_1', 'No sabe le': 'No sabe le', 'No sabe _1': 'No sabe _1', 'No sabe/No': 'No sabe/No', 'No sabe/_1': 'No sabe/_1', });
lyr_AlfabetizacinSabeleeroescribirMujeres_12.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', 'Departamen': 'Departamen', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Sabe leer': 'Sabe leer', 'Sabe lee_1': 'Sabe lee_1', 'No sabe le': 'No sabe le', 'No sabe _1': 'No sabe _1', 'No sabe/No': 'No sabe/No', 'No sabe/_1': 'No sabe/_1', });
lyr_AlfabetizacinSabeleeroescribirHombres_13.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', 'Departamen': 'Departamen', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Sabe leer': 'Sabe leer', 'Sabe lee_1': 'Sabe lee_1', 'No sabe le': 'No sabe le', 'No sabe _1': 'No sabe _1', 'No sabe/No': 'No sabe/No', 'No sabe/_1': 'No sabe/_1', });
lyr_centroide_distritos_14.set('fieldAliases', {'id': 'id', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO': 'DEPTO', 'POBLA': 'POBLA', 'CDPTO': 'CDPTO', 'CMUNI': 'CMUNI', 'CDIS': 'CDIS', });
lyr_Distritos_1.set('fieldImages', {'id': '', 'DISTRITO': '', 'MUNICIPIO': '', 'DEPTO': '', 'POBLA': '', 'CDPTO': '', 'CMUNI': '', 'CDIS': '', });
lyr_EducacinNosabeMujeres_2.set('fieldImages', {'id': 'TextEdit', 'DISTRITO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'POBLA': 'TextEdit', 'CDPTO': 'TextEdit', 'CMUNI': 'TextEdit', 'CDIS': 'TextEdit', 'Departamen': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Asistencia': 'TextEdit', 'Asistenc_1': 'TextEdit', 'Nunca ha a': 'TextEdit', 'Nunca ha_1': 'TextEdit', 'No sabe -': 'TextEdit', 'No sabe _1': 'TextEdit', });
lyr_EducacinNosabeHombres_3.set('fieldImages', {'id': 'TextEdit', 'DISTRITO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'POBLA': 'TextEdit', 'CDPTO': 'TextEdit', 'CMUNI': 'TextEdit', 'CDIS': 'TextEdit', 'Departamen': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Asistencia': 'TextEdit', 'Asistenc_1': 'TextEdit', 'Nunca ha a': 'TextEdit', 'Nunca ha_1': 'TextEdit', 'No sabe -': 'TextEdit', 'No sabe _1': 'TextEdit', });
lyr_EducacinNuncaasistiacentroeducativoformalMujeres_4.set('fieldImages', {'id': 'TextEdit', 'DISTRITO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'POBLA': 'TextEdit', 'CDPTO': 'TextEdit', 'CMUNI': 'TextEdit', 'CDIS': 'TextEdit', 'Departamen': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Asistencia': 'TextEdit', 'Asistenc_1': 'TextEdit', 'Nunca ha a': 'TextEdit', 'Nunca ha_1': 'TextEdit', 'No sabe -': 'TextEdit', 'No sabe _1': 'TextEdit', });
lyr_EducacinNuncaasistiacentroeducativoformalHombres_5.set('fieldImages', {'id': 'TextEdit', 'DISTRITO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'POBLA': 'TextEdit', 'CDPTO': 'TextEdit', 'CMUNI': 'TextEdit', 'CDIS': 'TextEdit', 'Departamen': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Asistencia': 'TextEdit', 'Asistenc_1': 'TextEdit', 'Nunca ha a': 'TextEdit', 'Nunca ha_1': 'TextEdit', 'No sabe -': 'TextEdit', 'No sabe _1': 'TextEdit', });
lyr_EducacinAsistiacentroeducativoformalMujeres_6.set('fieldImages', {'id': 'TextEdit', 'DISTRITO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'POBLA': 'TextEdit', 'CDPTO': 'TextEdit', 'CMUNI': 'TextEdit', 'CDIS': 'TextEdit', 'Departamen': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Asistencia': 'TextEdit', 'Asistenc_1': 'TextEdit', 'Nunca ha a': 'TextEdit', 'Nunca ha_1': 'TextEdit', 'No sabe -': 'TextEdit', 'No sabe _1': 'TextEdit', });
lyr_EducacinAsistiacentroeducativoformalHombres_7.set('fieldImages', {'id': 'TextEdit', 'DISTRITO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'POBLA': 'TextEdit', 'CDPTO': 'TextEdit', 'CMUNI': 'TextEdit', 'CDIS': 'TextEdit', 'Departamen': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Asistencia': 'TextEdit', 'Asistenc_1': 'TextEdit', 'Nunca ha a': 'TextEdit', 'Nunca ha_1': 'TextEdit', 'No sabe -': 'TextEdit', 'No sabe _1': 'TextEdit', });
lyr_AlfabetizacinNosabeNorespondeMujeres_8.set('fieldImages', {'id': 'TextEdit', 'DISTRITO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'POBLA': 'TextEdit', 'CDPTO': 'TextEdit', 'CMUNI': 'TextEdit', 'CDIS': 'TextEdit', 'Departamen': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Sabe leer': 'TextEdit', 'Sabe lee_1': 'TextEdit', 'No sabe le': 'TextEdit', 'No sabe _1': 'TextEdit', 'No sabe/No': 'TextEdit', 'No sabe/_1': 'TextEdit', });
lyr_AlfabetizacinNosabeNorespondeHombres_9.set('fieldImages', {'id': 'TextEdit', 'DISTRITO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'POBLA': 'TextEdit', 'CDPTO': 'TextEdit', 'CMUNI': 'TextEdit', 'CDIS': 'TextEdit', 'Departamen': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Sabe leer': 'TextEdit', 'Sabe lee_1': 'TextEdit', 'No sabe le': 'TextEdit', 'No sabe _1': 'TextEdit', 'No sabe/No': 'TextEdit', 'No sabe/_1': 'TextEdit', });
lyr_AlfabetizacinNosabeleeroescribirMujeres_10.set('fieldImages', {'id': 'TextEdit', 'DISTRITO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'POBLA': 'TextEdit', 'CDPTO': 'TextEdit', 'CMUNI': 'TextEdit', 'CDIS': 'TextEdit', 'Departamen': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Sabe leer': 'TextEdit', 'Sabe lee_1': 'TextEdit', 'No sabe le': 'TextEdit', 'No sabe _1': 'TextEdit', 'No sabe/No': 'TextEdit', 'No sabe/_1': 'TextEdit', });
lyr_AlfabetizacinNosabeleeroescribirHombres_11.set('fieldImages', {'id': 'TextEdit', 'DISTRITO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'POBLA': 'TextEdit', 'CDPTO': 'TextEdit', 'CMUNI': 'TextEdit', 'CDIS': 'TextEdit', 'Departamen': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Sabe leer': 'TextEdit', 'Sabe lee_1': 'TextEdit', 'No sabe le': 'TextEdit', 'No sabe _1': 'TextEdit', 'No sabe/No': 'TextEdit', 'No sabe/_1': 'TextEdit', });
lyr_AlfabetizacinSabeleeroescribirMujeres_12.set('fieldImages', {'id': 'TextEdit', 'DISTRITO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'POBLA': 'TextEdit', 'CDPTO': 'TextEdit', 'CMUNI': 'TextEdit', 'CDIS': 'TextEdit', 'Departamen': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Sabe leer': 'TextEdit', 'Sabe lee_1': 'TextEdit', 'No sabe le': 'TextEdit', 'No sabe _1': 'TextEdit', 'No sabe/No': 'TextEdit', 'No sabe/_1': 'TextEdit', });
lyr_AlfabetizacinSabeleeroescribirHombres_13.set('fieldImages', {'id': 'TextEdit', 'DISTRITO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'POBLA': 'TextEdit', 'CDPTO': 'TextEdit', 'CMUNI': 'TextEdit', 'CDIS': 'TextEdit', 'Departamen': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Sabe leer': 'TextEdit', 'Sabe lee_1': 'TextEdit', 'No sabe le': 'TextEdit', 'No sabe _1': 'TextEdit', 'No sabe/No': 'TextEdit', 'No sabe/_1': 'TextEdit', });
lyr_centroide_distritos_14.set('fieldImages', {'id': 'TextEdit', 'DISTRITO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO': 'TextEdit', 'POBLA': 'TextEdit', 'CDPTO': 'TextEdit', 'CMUNI': 'TextEdit', 'CDIS': 'TextEdit', });
lyr_Distritos_1.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'DEPTO': 'inline label - visible with data', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', });
lyr_EducacinNosabeMujeres_2.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'DEPTO': 'inline label - visible with data', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', 'Departamen': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Asistencia': 'hidden field', 'Asistenc_1': 'hidden field', 'Nunca ha a': 'hidden field', 'Nunca ha_1': 'hidden field', 'No sabe -': 'hidden field', 'No sabe _1': 'inline label - visible with data', });
lyr_EducacinNosabeHombres_3.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'DEPTO': 'inline label - visible with data', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', 'Departamen': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Asistencia': 'hidden field', 'Asistenc_1': 'hidden field', 'Nunca ha a': 'hidden field', 'Nunca ha_1': 'hidden field', 'No sabe -': 'inline label - visible with data', 'No sabe _1': 'hidden field', });
lyr_EducacinNuncaasistiacentroeducativoformalMujeres_4.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'DEPTO': 'inline label - visible with data', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', 'Departamen': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Asistencia': 'hidden field', 'Asistenc_1': 'hidden field', 'Nunca ha a': 'hidden field', 'Nunca ha_1': 'inline label - visible with data', 'No sabe -': 'hidden field', 'No sabe _1': 'hidden field', });
lyr_EducacinNuncaasistiacentroeducativoformalHombres_5.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'DEPTO': 'inline label - visible with data', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', 'Departamen': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Asistencia': 'hidden field', 'Asistenc_1': 'hidden field', 'Nunca ha a': 'inline label - visible with data', 'Nunca ha_1': 'hidden field', 'No sabe -': 'hidden field', 'No sabe _1': 'hidden field', });
lyr_EducacinAsistiacentroeducativoformalMujeres_6.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'DEPTO': 'inline label - visible with data', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', 'Departamen': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Asistencia': 'hidden field', 'Asistenc_1': 'inline label - visible with data', 'Nunca ha a': 'hidden field', 'Nunca ha_1': 'hidden field', 'No sabe -': 'hidden field', 'No sabe _1': 'hidden field', });
lyr_EducacinAsistiacentroeducativoformalHombres_7.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'DEPTO': 'inline label - visible with data', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', 'Departamen': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Asistencia': 'inline label - visible with data', 'Asistenc_1': 'hidden field', 'Nunca ha a': 'hidden field', 'Nunca ha_1': 'hidden field', 'No sabe -': 'hidden field', 'No sabe _1': 'hidden field', });
lyr_AlfabetizacinNosabeNorespondeMujeres_8.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'DEPTO': 'inline label - visible with data', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', 'Departamen': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Sabe leer': 'hidden field', 'Sabe lee_1': 'hidden field', 'No sabe le': 'hidden field', 'No sabe _1': 'hidden field', 'No sabe/No': 'hidden field', 'No sabe/_1': 'inline label - visible with data', });
lyr_AlfabetizacinNosabeNorespondeHombres_9.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'DEPTO': 'inline label - visible with data', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', 'Departamen': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Sabe leer': 'hidden field', 'Sabe lee_1': 'hidden field', 'No sabe le': 'hidden field', 'No sabe _1': 'hidden field', 'No sabe/No': 'inline label - visible with data', 'No sabe/_1': 'hidden field', });
lyr_AlfabetizacinNosabeleeroescribirMujeres_10.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'DEPTO': 'inline label - visible with data', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', 'Departamen': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Sabe leer': 'hidden field', 'Sabe lee_1': 'hidden field', 'No sabe le': 'hidden field', 'No sabe _1': 'inline label - visible with data', 'No sabe/No': 'hidden field', 'No sabe/_1': 'hidden field', });
lyr_AlfabetizacinNosabeleeroescribirHombres_11.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'DEPTO': 'inline label - visible with data', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', 'Departamen': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Sabe leer': 'hidden field', 'Sabe lee_1': 'hidden field', 'No sabe le': 'inline label - visible with data', 'No sabe _1': 'hidden field', 'No sabe/No': 'hidden field', 'No sabe/_1': 'hidden field', });
lyr_AlfabetizacinSabeleeroescribirMujeres_12.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'DEPTO': 'inline label - visible with data', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', 'Departamen': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Sabe leer': 'hidden field', 'Sabe lee_1': 'inline label - visible with data', 'No sabe le': 'hidden field', 'No sabe _1': 'hidden field', 'No sabe/No': 'hidden field', 'No sabe/_1': 'hidden field', });
lyr_AlfabetizacinSabeleeroescribirHombres_13.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'DEPTO': 'inline label - visible with data', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', 'Departamen': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Sabe leer': 'inline label - visible with data', 'Sabe lee_1': 'hidden field', 'No sabe le': 'hidden field', 'No sabe _1': 'hidden field', 'No sabe/No': 'hidden field', 'No sabe/_1': 'hidden field', });
lyr_centroide_distritos_14.set('fieldLabels', {'id': 'hidden field', 'DISTRITO': 'inline label - visible with data', 'MUNICIPIO': 'hidden field', 'DEPTO': 'hidden field', 'POBLA': 'hidden field', 'CDPTO': 'hidden field', 'CMUNI': 'hidden field', 'CDIS': 'hidden field', });
lyr_centroide_distritos_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});