// define a view 

var view = new ol.View ({
    // projection: 'EPSG:4326',
    center : ol.proj.fromLonLat([78.182831, 26.218287]) ,
    
    zoom : 12
});

// define basemap

// var OSMBaseMap =  new ol.layer.Tile({
//   title: 'satellite',
//   visible: true,
//     source: new ol.source.OSM()

// });

//for new vector layer



// define array 
// var layerArray = [OSMBaseMap] 

// define our map
var map = new ol.Map({
    target: 'map' ,
    // layers : layerArray,
    view : view
});

var nonTile = new ol.layer.Tile({
  title: 'none',
  type: 'base',
  visible: 'false'
});

var osmTile = new ol.layer.Tile ({
  title: 'Topographic',
  visible: true,
  source: new ol.source.OSM() 
});

// map.addLayer(osmTile);

var baseGroup = new ol.layer.Group({
  title: 'Basemap',
  layers: [osmTile, nonTile]
});

map.addLayer(baseGroup);

var LULCTile = new ol.layer.Tile({
  title: "LULC",
  source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/Gwalior/wms', 
    
    params: {'LAYERS':'Gwalior:Land Use Land Cover', 'TILED': true},
    serverType: 'geoserver',
    visible: true,
    
  })
});

  map.addLayer(LULCTile);

var GwaliorTile = new ol.layer.Tile({
  title: "Gwalior Boundary",
  source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/Gwalior/wms',
    params: {'LAYERS':'Gwalior:Gwalior', 'TILED': true},
    serverType: 'geoserver',
    visible: true
  })
});

  map.addLayer(GwaliorTile);

// var RoadsTile = new ol.layer.Tile({
//     title: "Roads",
//     source: new ol.source.TileWMS({
//       url: 'http://localhost:8080/geoserver/Gwalior/wms',
//       params: {'LAYERS':'Gwalior:Roads', 'TILED': true},
//       serverType: 'geoserver',
//       visible: true
//     })
// });

//     map.addLayer(RoadsTile);



   


      var BuildingsTile = new ol.layer.Tile({
        title: "Buildings",
        source: new ol.source.TileWMS({
          url: 'http://localhost:8080/geoserver/Gwalior/wms',
          params: {'LAYERS':'Gwalior:Buildings', 'TILED': true},
          serverType: 'geoserver',
          visible: true
        })
    });
    map.addLayer(BuildingsTile);

    


        var DrainageTile = new ol.layer.Tile({
          title: "Drainage",
          source: new ol.source.TileWMS({
          url: 'http://localhost:8080/geoserver/Gwalior/wms',
          params: {'LAYERS':'Gwalior:Drainage', 'TILED': true},
          serverType: 'geoserver',
         visible: true
            })
          });
                
         map.addLayer(DrainageTile);

         var RailwaytrackTile = new ol.layer.Tile({
          title: "Railway Track",
          source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/Gwalior/wms',
            params: {'LAYERS':'Gwalior:Railway_lines', 'TILED': true},
            serverType: 'geoserver',
            visible: true
          })
      });
      
          map.addLayer(RailwaytrackTile);

        

        // ROADS

        var PrimaryTile = new ol.layer.Tile({
          title: "Primary Roads",
          source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/Gwalior/wms',
            params: {'LAYERS':'Gwalior:Primary', 'TILED': true},
            serverType: 'geoserver',
            visible: true
          })
      });
      // map.addLayer(PrimaryTile);
    
      var SecondaryTile = new ol.layer.Tile({
        title: "Secondary Roads",
        source: new ol.source.TileWMS({
          url: 'http://localhost:8080/geoserver/Gwalior/wms',
          params: {'LAYERS':'Gwalior:secondary', 'TILED': true},
          serverType: 'geoserver',
          visible: true
        })
    }); 
    // map.addLayer(SecondaryTile);
    
    var TertiaryTile = new ol.layer.Tile({
      title: "Tertiary Roads",
      source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/Gwalior/wms',
        params: {'LAYERS':'Gwalior:Tertiary', 'TILED': true},
        serverType: 'geoserver',
        visible: true
      })
    });
    
    var NH44Tile = new ol.layer.Tile({
      title: "NH 44",
      source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/Gwalior/wms',
        params: {'LAYERS':'Gwalior:NH44', 'TILED': true},
        serverType: 'geoserver',
        visible: true
      })
    });
    
    var NH46Tile = new ol.layer.Tile({
      title: "NH 46",
      source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/Gwalior/wms',
        params: {'LAYERS':'Gwalior:NH46', 'TILED': true},
        serverType: 'geoserver',
        visible: true
      })
    });
      
          
    
          var overlayGroup = new ol.layer.Group({
            title: 'Roads',
            layers: [PrimaryTile, SecondaryTile, TertiaryTile, NH44Tile, NH46Tile]
          });
    
          map.addLayer(overlayGroup);

          

  

// PUBLIC UTILITIES

        var RestaurantsTile = new ol.layer.Tile({
          title: "Restaurants",
          source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/Gwalior/wms',
            params: {'LAYERS':'Gwalior:Restaurants', 'TILED': true},
            serverType: 'geoserver',
            visible: true
          })
      });
      
          // map.addLayer(RestaurantsTile);

          var hospitalsTile = new ol.layer.Tile({
            title: "hospitals",
            source: new ol.source.TileWMS({
              url: 'http://localhost:8080/geoserver/Gwalior/wms',
              params: {'LAYERS':'Gwalior:hospitals', 'TILED': true},
              serverType: 'geoserver',
              visible: true
            })
        });
        
            // map.addLayer(hospitalsTile);

            var ToiletsTile = new ol.layer.Tile({
            title: "Toilets",
            source: new ol.source.TileWMS({
              url: 'http://localhost:8080/geoserver/Gwalior/wms',
              params: {'LAYERS':'Gwalior:Toilets', 'TILED': true},
              serverType: 'geoserver',
              visible: true
            })
        });
        
            // map.addLayer(ToiletsTile);

            var hotelsTile = new ol.layer.Tile({
                    title: "hotels",
                    source: new ol.source.TileWMS({
                      url: 'http://localhost:8080/geoserver/Gwalior/wms',
                      params: {'LAYERS':'Gwalior:hotels', 'TILED': true},
                      serverType: 'geoserver',
                      visible: true
                    })
                });
                
                    // map.addLayer(hotelsTile);

                    var overlayGroup = new ol.layer.Group({
                      title: 'Public Utilities',
                      layers: [hotelsTile, ToiletsTile, hospitalsTile, RestaurantsTile]
                    });

                    map.addLayer(overlayGroup);

                    


                    

      // var placesTile = new ol.layer.Tile({
      //       title: "places",
      //       source: new ol.source.TileWMS({
      //         url: 'http://localhost:8080/geoserver/Gwalior/wms',
      //         params: {'LAYERS':'Gwalior:Places_of_interest', 'TILED': true},
      //         serverType: 'geoserver',
      //         visible: true
      //       })
      //   });
        
      //       map.addLayer(placesTile);

          var NaturalTile = new ol.layer.Tile({
            title: "Natural",
            source: new ol.source.TileWMS({
              url: 'http://localhost:8080/geoserver/Gwalior/wms',
              params: {'LAYERS':'Gwalior:Landuse', 'TILED': true},
              serverType: 'geoserver',
              visible: true,
              
            })
        });
        
            map.addLayer(NaturalTile);


// for swipe tool



      

// for checkbox

const parentCheckboxes = document.querySelectorAll('.parent');

parentCheckboxes.forEach((parent) => {
  parent.addEventListener('change', function () {
    const isChecked = this.checked;
    const childCheckboxes = this.parentElement.querySelectorAll('.child');

    childCheckboxes.forEach((child) => {
      child.checked = isChecked;
    });
  });
});

const childCheckboxes = document.querySelectorAll('.child');

// for layer switcher 
  var layerswitcher = new ol.control.LayerSwitcher()
  map.addControl(layerswitcher)

  var mousePosition = new ol.control.MousePosition({
    className: 'mousePosition',
    projection: 'EPSG:4326',
    coordinateFormat: function(coordinate){return ol.coordinate.format(coordinate, '{y},{x}',4);}
  });
  map.addControl(mousePosition);

  var scaleControl = new ol.control.ScaleLine({
    bar: true,
    Text: true

  });

  map.addControl(scaleControl);

  //graticule

  // var graticule = new ol.Graticule({
  //   map:map,
  //   showLabels:true
  // });

  // add popup

// const container = document.getElementById('popup');
// const content = document.getElementById('popup-content');
// const closer = document.getElementById('popup-closer');

//   var popup = new ol.Overlay({
//     element: container,
//     autoPan: true,
//     autoPanAnimation: {
//       duration: 250,
//     },
//   });

//   map.addOverlay(popup);

//   closer.onclick = function(){
//     popup.setPosition(undefined);
//     closer.blur();
//     return false;
//   };

//   map.on('singleclick', function (evt){
//     content.innerHTML = '';
//     var resolution = mapView.getResolution();

//     var url = BuildingsTile.getSource().getFeatureInfoUrl(evt.coordinate, resolution, 'EPSG:3857', {
//       'INFO_FORMAT': 'application/json',
//       'propertyName': 'name, type'
//     });
    
//     if (url){
//       $.getJSON(url, function (data){
//         var feature = data.features[0];
//         var props = feature.properties;
//         content.innerHTML = "<h3> name: </h3> <p>" + props.name.toUpperCase() + "</p> <br> <h3> type : </h3> <p>"+
//         props.name.toUpperCase() + "</p>";
//         popup.setPosition(evt.coordinate);

//       })
//     } else {
//       popup.setPosition(undefined);

//     }
//   });


  // for table of content


//   activationMode : 'click',
//   startActive : false,
//   groupSelectStyle: 'children'
// });

// map.addControl(layerSwitcher);

// function toogleLayer(eve){
//   var lyrname = eve.target.value;
//   var checkedStatus = eve.target.checked;
//   var lyrList = map.getLayers();

//   lyrList.forEach(function(element){
//     if (lyrname == element.get('title')){
//       element.setVisible(checkedStatus);
//     }
   
//   });
// }


// starting of attribute querry 

// var geojson;
// var featureOverlay;

// var qryButton = document.createElement('button');

// qryButton.innerHTML = '<img src=" .. / .. /resources/images/query.svg" alt-"" style="width: 17px;height: 17px;filter:brightness(0)'
// qryButton.className = 'myButton';
// qryButton.id = 'qryButton';

// var qryControl = new ol.control.Control({
//   element: qryElement
//   })
  
//   var qryFlag = false;
//   qryButton.addEventListener("click", () => {
//   // disableOtherInteraction('lengthButton');
//   qryButton.classList.toggle('clicked');
//   qryFlag = !qryFlag;
//   document.getElementById("map").style.cursor = "default";
//   if (qryFlag) {
//   if (geojson) {
//   geojson.getSource().clear();
//   map. removeLayer(geojson);
//   }
//   if (featureOverlay) {
//   featureOverlay.getSource().clear();
//   map.removeLayer(featureOverlay);
//   document.getElementById("map").style.cursor = "default";
//   document.getElementById("attQueryDiv").style.display = "block";

//   bolIdentify = false;
// addMapLayerList();
// } else {
 
// document.getElementById("attQueryDiv").style.display = "none";
// document.getElementById("attListDiv").style.display = "none";
// if (geojson) {
// geojson.getSource().clear();
// map.removeLayer(geojson);
// if (featureOverlay) {
// featureOverlay.getSource().clear();
// map.removeLayer(featureOverlay);

// }
// }
// })

// map.addControl(qryControl);


// // for attribute query

// function addMapLayerList() {
//   $(document).ready(function(){
//     $.ajax({
//       type: "GET",
//       url: "http://localhost:8080/geoserver/Gwalior/wfs?request=getCapabilities",
//       dataType: "xml",
//       sucess: function (xml){
//         var select = $('selectLayer');
//         select.append("<option class='ddindent' value=''></option>");
//         $(xml).find('FeatureType').each(function () {
//           $(this).find('Name').each(function(){
//             var value = $(this).text();
//             select.append("<option class = 'ddindent' value= '"+value+"'>"+value+"</option>");
//           }) ;
//         });
//       }

//     });
//   });
// };

// $(function () {
//   document.getElementById("selectLayer").onchange = function () {}
//   var select = document.getElementById("selectAttribute");
//   while (select.options.length > 0) {
//   select.remove(0);
//   }
//   var value_layer = $(this).val();
//   $(document).ready(function () {
//   $.ajax({
//   type: "GET",
//   url: "http://localhost:8080/geoserver/wfs?service-WFS&request-DescribeFeatureType&version-1.1.0&typeName=" + value_layer,
//   dataType: "xml",
//   success: function (xml) {
//   var select = $('#selectAttribute');
//   //var title = $(xml).find('xsd\\:complexType').attr('name');
//   // alert(title);
//   select.append("<option class='ddindent' value=''></option>");
//   $(xml).find('xsd\\: sequence').each(function () {
//   $(this).find('xsd\\:element').each(function () {
//   var value = $(this).attr('name');
//   //alert(value);
//   var type = $(this).attr('type');
//   //alert(type);
//   if (value != 'geom' && value != 'the_geom') {
//     select.append("<option class='ddindent' value='" + type + "'>" + value + "</option>");
//   }
//   });
//   });
//   }
//   });
// });
// }

//   document.getElementById("selectAttribute").onchange = function.().{
//   var operator = document.getElementById("selectOperator");
//   while (operator.options.length > 0) {
//   operator.remove(0);
//   }
//   var value_type = $(this).val();
//   // alert(value_type);
//   var value_attribute = $('#selectAttribute option:selected').text();
//   operator.options[0] = new Option('Select operator', "");
//   if (value_type == 'xsd:short' || value_type == 'xsd:int' || value_type == 'xsd:double') {
//     var operator1 = document.getElementById("selectOperator");
// operator1.options[1] = new Option('Greater than', '>');
// operator1.options[2] = new Option('Less than', '<');
// operator1.options[3] = new Option('Equal to', '=');
//   }
// else if (value_type == 'xsd:string') {
// var operator1 = document.getElementById("selectOperator");
// operator1.options[1] = new Option('Like', 'Like');
// operator1.options[2] = new Option('Equal to', '=');
// }
// }

// document.getElementById('attQryRun').onclick = function () {
// map.set("isLoading", 'YES');
// if (featureOverlay) {
// featureOverlay.getSource().clear();
// map.removeLayer(featureOverlay);
// var layer = document.getElementById("selectLayer");
