window.basemapConfig = [
  // Esri 底图
  {
    name: "Esri Streets",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    options: {
      maxZoom: 23,
      maxNativeZoom: 19,
      attribution: "Esri",
    },
  },
  {
    name: "Esri Topographic",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    options: {
      maxZoom: 23,
      maxNativeZoom: 19,
      attribution: "Esri",
    },
  },
  {
    name: "Esri Imagery",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    options: {
      maxZoom: 23,
      maxNativeZoom: 19,
      attribution: "Esri",
    },
  },
  // 百度地图
  {
    name: "Baidu Maps",
    url: "http://api.map.baidu.com/tile/v2/{mapType}/{z}/{x}/{y}.png?ak=YOUR_BAIDU_API_KEY",
    options: {
      maxZoom: 19,
      minZoom: 0,
      subdomains: ["0", "1", "2"],
      attribution: "Baidu Maps",
      mapType: "normal",
    },
  },
  // 高德地图
  {
    name: "AMap Roads",
    url: "https://wprd{0-5}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
    options: {
      maxZoom: 19,
      minZoom: 0,
      subdomains: ["0", "1", "2", "3", "4", "5"],
      attribution: "高德地图",
    },
  },
  {
    name: "AMap Satellite",
    url: "https://t0.amap.com/v4/{z}/{x}/{y}.jpg?key=YOUR_AMAP_API_KEY",
    options: {
      maxZoom: 19,
      minZoom: 0,
      attribution: "高德地图",
    },
  },
  // 天地图
  {
    name: "Tianditu Maps",
    url: "http://t0.tianditu.gov.cn/{type}/wmts?service=WMTS&request=GetTile&version=1.0.0&layer={type}&style=default&tilematrixset=c&Format=image/jpeg&TileMatrix={z}&TileCol={x}&TileRow={y}",
    options: {
      type: "img_w",
      maxZoom: 20,
      minZoom: 0,
      attribution: "天地图",
      tileMatrixSetID: "c",
    },
  },
  // 谷歌地图
  {
    name: "Google Maps",
    url: "https://{s}.google.com/vt/lyrs=m@219000000&hl=en&x={x}&y={y}&z={z}",
    options: {
      maxZoom: 20,
      minZoom: 0,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      attribution: "谷歌地图",
      noWrap: true,
    },
  },

  // 微软必应地图
  {
    name: "Bing Maps",
    url: "https://ecn.t{subdomain}.tiles.virtualearth.net/tiles/a{quadkey}.jpeg?g=965",
    options: {
      maxZoom: 19,
      minZoom: 0,
      subdomains: ["0", "1", "2", "3"],
      attribution: "微软必应地图",
      quadkey: function (coords) {
        var quadkey = "";
        for (var i = 1; i <= 21; i++) {
          quadkey += coords[i - 1] > 0 ? "1" : "0";
        }
        return quadkey;
      },
    },
  },

  // OpenStreetMap
  {
    name: "OpenStreetMap",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    options: {
      maxZoom: 19,
      minZoom: 0,
      subdomains: ["a", "b", "c"],
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  },
];