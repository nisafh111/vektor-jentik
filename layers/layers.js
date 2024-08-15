var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Waypoints5Waypoints_1 = new ol.format.GeoJSON();
var features_Waypoints5Waypoints_1 = format_Waypoints5Waypoints_1.readFeatures(json_Waypoints5Waypoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waypoints5Waypoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints5Waypoints_1.addFeatures(features_Waypoints5Waypoints_1);
var lyr_Waypoints5Waypoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints5Waypoints_1, 
                style: style_Waypoints5Waypoints_1,
                popuplayertitle: "Waypoints (5) — Waypoints",
                interactive: true,
                title: '<img src="styles/legend/Waypoints5Waypoints_1.png" /> Waypoints (5) — Waypoints'
            });
var format_ADMINISTRASI_AR_25K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASI_AR_25K_2 = format_ADMINISTRASI_AR_25K_2.readFeatures(json_ADMINISTRASI_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_AR_25K_2.addFeatures(features_ADMINISTRASI_AR_25K_2);
var lyr_ADMINISTRASI_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_AR_25K_2, 
                style: style_ADMINISTRASI_AR_25K_2,
                popuplayertitle: "ADMINISTRASI_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_AR_25K_2.png" /> ADMINISTRASI_AR_25K'
            });
var format_ADMINISTRASI_AR_25K_3 = new ol.format.GeoJSON();
var features_ADMINISTRASI_AR_25K_3 = format_ADMINISTRASI_AR_25K_3.readFeatures(json_ADMINISTRASI_AR_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_AR_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_AR_25K_3.addFeatures(features_ADMINISTRASI_AR_25K_3);
var lyr_ADMINISTRASI_AR_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_AR_25K_3, 
                style: style_ADMINISTRASI_AR_25K_3,
                popuplayertitle: "ADMINISTRASI_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_AR_25K_3.png" /> ADMINISTRASI_AR_25K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Waypoints5Waypoints_1.setVisible(true);lyr_ADMINISTRASI_AR_25K_2.setVisible(true);lyr_ADMINISTRASI_AR_25K_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Waypoints5Waypoints_1,lyr_ADMINISTRASI_AR_25K_2,lyr_ADMINISTRASI_AR_25K_3];
lyr_Waypoints5Waypoints_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ADMINISTRASI_AR_25K_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_AR_25K_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Waypoints5Waypoints_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ADMINISTRASI_AR_25K_2.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ADMINISTRASI_AR_25K_3.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Waypoints5Waypoints_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'inline label - always visible', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'inline label - always visible', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ADMINISTRASI_AR_25K_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASI_AR_25K_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASI_AR_25K_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});