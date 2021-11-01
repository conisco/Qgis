var wms_layers = [];


        var lyr_World_Light_Gray_0 = new ol.layer.Tile({
            'title': 'World_Light_Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_gadm36_DZA_0_1 = new ol.format.GeoJSON();
var features_gadm36_DZA_0_1 = format_gadm36_DZA_0_1.readFeatures(json_gadm36_DZA_0_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_DZA_0_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_DZA_0_1.addFeatures(features_gadm36_DZA_0_1);
var lyr_gadm36_DZA_0_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_DZA_0_1, 
                style: style_gadm36_DZA_0_1,
                interactive: true,
                title: '<img src="styles/legend/gadm36_DZA_0_1.png" /> gadm36_DZA_0'
            });
var format_gadm36_MAR_0_2 = new ol.format.GeoJSON();
var features_gadm36_MAR_0_2 = format_gadm36_MAR_0_2.readFeatures(json_gadm36_MAR_0_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_MAR_0_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_MAR_0_2.addFeatures(features_gadm36_MAR_0_2);
var lyr_gadm36_MAR_0_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_MAR_0_2, 
                style: style_gadm36_MAR_0_2,
                interactive: true,
                title: '<img src="styles/legend/gadm36_MAR_0_2.png" /> gadm36_MAR_0'
            });
var format_gadm36_ESH_0_3 = new ol.format.GeoJSON();
var features_gadm36_ESH_0_3 = format_gadm36_ESH_0_3.readFeatures(json_gadm36_ESH_0_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_ESH_0_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_ESH_0_3.addFeatures(features_gadm36_ESH_0_3);
var lyr_gadm36_ESH_0_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_ESH_0_3, 
                style: style_gadm36_ESH_0_3,
                interactive: true,
                title: '<img src="styles/legend/gadm36_ESH_0_3.png" /> gadm36_ESH_0'
            });
var format_gadm36_DEU_0_4 = new ol.format.GeoJSON();
var features_gadm36_DEU_0_4 = format_gadm36_DEU_0_4.readFeatures(json_gadm36_DEU_0_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_DEU_0_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_DEU_0_4.addFeatures(features_gadm36_DEU_0_4);
var lyr_gadm36_DEU_0_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_DEU_0_4, 
                style: style_gadm36_DEU_0_4,
                interactive: true,
                title: '<img src="styles/legend/gadm36_DEU_0_4.png" /> gadm36_DEU_0'
            });
var format_gadm36_ESP_0_5 = new ol.format.GeoJSON();
var features_gadm36_ESP_0_5 = format_gadm36_ESP_0_5.readFeatures(json_gadm36_ESP_0_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_ESP_0_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_ESP_0_5.addFeatures(features_gadm36_ESP_0_5);
var lyr_gadm36_ESP_0_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_ESP_0_5, 
                style: style_gadm36_ESP_0_5,
                interactive: true,
                title: '<img src="styles/legend/gadm36_ESP_0_5.png" /> gadm36_ESP_0'
            });
var format_lineas_de_gas_6 = new ol.format.GeoJSON();
var features_lineas_de_gas_6 = format_lineas_de_gas_6.readFeatures(json_lineas_de_gas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lineas_de_gas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lineas_de_gas_6.addFeatures(features_lineas_de_gas_6);
var lyr_lineas_de_gas_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lineas_de_gas_6, 
                style: style_lineas_de_gas_6,
                interactive: true,
                title: '<img src="styles/legend/lineas_de_gas_6.png" /> lineas_de_gas'
            });
var format_lineas_de_gas_ok_7 = new ol.format.GeoJSON();
var features_lineas_de_gas_ok_7 = format_lineas_de_gas_ok_7.readFeatures(json_lineas_de_gas_ok_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lineas_de_gas_ok_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lineas_de_gas_ok_7.addFeatures(features_lineas_de_gas_ok_7);
var lyr_lineas_de_gas_ok_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lineas_de_gas_ok_7, 
                style: style_lineas_de_gas_ok_7,
                interactive: true,
                title: '<img src="styles/legend/lineas_de_gas_ok_7.png" /> lineas_de_gas_ok'
            });
var format_gadm36_RUS_0_8 = new ol.format.GeoJSON();
var features_gadm36_RUS_0_8 = format_gadm36_RUS_0_8.readFeatures(json_gadm36_RUS_0_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_RUS_0_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_RUS_0_8.addFeatures(features_gadm36_RUS_0_8);
var lyr_gadm36_RUS_0_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_RUS_0_8, 
                style: style_gadm36_RUS_0_8,
                interactive: true,
                title: '<img src="styles/legend/gadm36_RUS_0_8.png" /> gadm36_RUS_0'
            });
var format_gadm36_TUR_0_9 = new ol.format.GeoJSON();
var features_gadm36_TUR_0_9 = format_gadm36_TUR_0_9.readFeatures(json_gadm36_TUR_0_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_TUR_0_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_TUR_0_9.addFeatures(features_gadm36_TUR_0_9);
var lyr_gadm36_TUR_0_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_TUR_0_9, 
                style: style_gadm36_TUR_0_9,
                interactive: true,
                title: '<img src="styles/legend/gadm36_TUR_0_9.png" /> gadm36_TUR_0'
            });
var format_gadm36_XNC_0_10 = new ol.format.GeoJSON();
var features_gadm36_XNC_0_10 = format_gadm36_XNC_0_10.readFeatures(json_gadm36_XNC_0_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_XNC_0_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_XNC_0_10.addFeatures(features_gadm36_XNC_0_10);
var lyr_gadm36_XNC_0_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_XNC_0_10, 
                style: style_gadm36_XNC_0_10,
                interactive: true,
                title: '<img src="styles/legend/gadm36_XNC_0_10.png" /> gadm36_XNC_0'
            });
var format_gadm36_ISR_0_11 = new ol.format.GeoJSON();
var features_gadm36_ISR_0_11 = format_gadm36_ISR_0_11.readFeatures(json_gadm36_ISR_0_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_ISR_0_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_ISR_0_11.addFeatures(features_gadm36_ISR_0_11);
var lyr_gadm36_ISR_0_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_ISR_0_11, 
                style: style_gadm36_ISR_0_11,
                interactive: true,
                title: '<img src="styles/legend/gadm36_ISR_0_11.png" /> gadm36_ISR_0'
            });
var format_gadm36_CYP_0_12 = new ol.format.GeoJSON();
var features_gadm36_CYP_0_12 = format_gadm36_CYP_0_12.readFeatures(json_gadm36_CYP_0_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_CYP_0_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_CYP_0_12.addFeatures(features_gadm36_CYP_0_12);
var lyr_gadm36_CYP_0_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_CYP_0_12, 
                style: style_gadm36_CYP_0_12,
                interactive: true,
                title: '<img src="styles/legend/gadm36_CYP_0_12.png" /> gadm36_CYP_0'
            });
var format_gadm36_GRC_0_13 = new ol.format.GeoJSON();
var features_gadm36_GRC_0_13 = format_gadm36_GRC_0_13.readFeatures(json_gadm36_GRC_0_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_GRC_0_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_GRC_0_13.addFeatures(features_gadm36_GRC_0_13);
var lyr_gadm36_GRC_0_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_GRC_0_13, 
                style: style_gadm36_GRC_0_13,
                interactive: true,
                title: '<img src="styles/legend/gadm36_GRC_0_13.png" /> gadm36_GRC_0'
            });

lyr_World_Light_Gray_0.setVisible(true);lyr_gadm36_DZA_0_1.setVisible(true);lyr_gadm36_MAR_0_2.setVisible(true);lyr_gadm36_ESH_0_3.setVisible(true);lyr_gadm36_DEU_0_4.setVisible(true);lyr_gadm36_ESP_0_5.setVisible(true);lyr_lineas_de_gas_6.setVisible(true);lyr_lineas_de_gas_ok_7.setVisible(true);lyr_gadm36_RUS_0_8.setVisible(true);lyr_gadm36_TUR_0_9.setVisible(true);lyr_gadm36_XNC_0_10.setVisible(true);lyr_gadm36_ISR_0_11.setVisible(true);lyr_gadm36_CYP_0_12.setVisible(true);lyr_gadm36_GRC_0_13.setVisible(true);
var layersList = [lyr_World_Light_Gray_0,lyr_gadm36_DZA_0_1,lyr_gadm36_MAR_0_2,lyr_gadm36_ESH_0_3,lyr_gadm36_DEU_0_4,lyr_gadm36_ESP_0_5,lyr_lineas_de_gas_6,lyr_lineas_de_gas_ok_7,lyr_gadm36_RUS_0_8,lyr_gadm36_TUR_0_9,lyr_gadm36_XNC_0_10,lyr_gadm36_ISR_0_11,lyr_gadm36_CYP_0_12,lyr_gadm36_GRC_0_13];
lyr_gadm36_DZA_0_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gadm36_MAR_0_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gadm36_ESH_0_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gadm36_DEU_0_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gadm36_ESP_0_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_lineas_de_gas_6.set('fieldAliases', {'name': 'name', 'id': 'id', 'country_code': 'country_code', 'tags': 'tags', 'param': 'param', 'uncertainty': 'uncertainty', 'method': 'method', });
lyr_lineas_de_gas_ok_7.set('fieldAliases', {'name': 'name', 'id': 'id', 'country_code': 'country_code', 'tags': 'tags', 'param': 'param', 'uncertainty': 'uncertainty', 'method': 'method', });
lyr_gadm36_RUS_0_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gadm36_TUR_0_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gadm36_XNC_0_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gadm36_ISR_0_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gadm36_CYP_0_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gadm36_GRC_0_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gadm36_DZA_0_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gadm36_MAR_0_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gadm36_ESH_0_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gadm36_DEU_0_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gadm36_ESP_0_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_lineas_de_gas_6.set('fieldImages', {'name': 'TextEdit', 'id': 'TextEdit', 'country_code': 'List', 'tags': 'TextEdit', 'param': 'TextEdit', 'uncertainty': 'TextEdit', 'method': 'TextEdit', });
lyr_lineas_de_gas_ok_7.set('fieldImages', {'name': 'TextEdit', 'id': 'TextEdit', 'country_code': 'List', 'tags': 'TextEdit', 'param': 'TextEdit', 'uncertainty': 'TextEdit', 'method': 'TextEdit', });
lyr_gadm36_RUS_0_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gadm36_TUR_0_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gadm36_XNC_0_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gadm36_ISR_0_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gadm36_CYP_0_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gadm36_GRC_0_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gadm36_DZA_0_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gadm36_MAR_0_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gadm36_ESH_0_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gadm36_DEU_0_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gadm36_ESP_0_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_lineas_de_gas_6.set('fieldLabels', {'name': 'no label', 'id': 'no label', 'country_code': 'no label', 'tags': 'no label', 'param': 'no label', 'uncertainty': 'no label', 'method': 'no label', });
lyr_lineas_de_gas_ok_7.set('fieldLabels', {'name': 'no label', 'id': 'no label', 'country_code': 'no label', 'tags': 'no label', 'param': 'no label', 'uncertainty': 'no label', 'method': 'no label', });
lyr_gadm36_RUS_0_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gadm36_TUR_0_9.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gadm36_XNC_0_10.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gadm36_ISR_0_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gadm36_CYP_0_12.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gadm36_GRC_0_13.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gadm36_GRC_0_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});