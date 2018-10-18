
# Task
* Given the following code, that creates an express node server with CRUD to mongo:
```javascript
// Requires:
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Create express app:
var app = express();

// Use middlewares:
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to MongoDB: 
mongoose.connect("mongodb://localhost:27017/JohnBryceDB", (err) => {
    //check if connection works ok
    if (!err)
        console.log("We're connected to MongoDB.");
})


// Create Model (each collection in the DB will have a new `mongoose.model`): 
var ProductCollection = mongoose.model("Product", {
    name: String,
    price: Number
});


// ---------- CRUD ----------

// Add product: 
app.post("/api/products",  (request, response)=> {
    var product = new ProductCollection(request.body);
    product.save();
    response.status(201); // Created.
    response.send(product);
});

// Get all products:
app.get("/api/products", (request, response) => {
    ProductCollection.find({})
    .then(products => response.status(200).send(products))
    .catch(err => response.status(400).send(err));
});

// Update full product: 
app.put("/api/products", (request, response) =>{

    ProductCollection.findOne({_id: request.query.id})
    .then(product => {
        product.name = request.body.name;
        product.price = request.body.price;
        product.save();
        response.status(200).send(product);
    })
    .catch(err => response.status(400).send(err));

});

// Delete product: 
app.delete("/api/products", (request, response) => {
    ProductCollection.remove({_id: request.query.id})
    .then(() => response.status(204).send())
    .catch(err => response.status(400).send(err));
});



// Run server: 
app.listen(3000,  () => {
    console.log("Listening on http://localhost:3000");
});
```

* Change the code from the prev step, to work with a different model - instead `product` create a `bike` collection. that works with this requests:
```
curl -v -X POST -H "Content-type: application/json" -d  "{\"frame_colors\": [\"Silver, gray or bare metal\"],\"thumb\": \"https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg\",\"id\": 120343,\"title\": \"2004 Trek 7300 FX\",\"serial\": \"tbi0407c25dl064\",\"manufacturer_name\": \"Trek\",\"frame_model\": \"7300 FX\",\"year\":2016}" localhost:4500/api/bike
curl -X GET -v localhost:4500/api/bike
curl -v -X PUT -H "Content-type: application/json" -d "{\"title\": \"2018 Trek 7300 FX\",\"year\":2018}" localhost:4500/api/bike?id=13
curl -v -X DELETE localhost:4500/api/bike?id=13
```

* *NOTE:* use this json data to define the bike model:
```
[
    {
    "frame_colors": ["Blue"],
    "thumb": "https://bikebook.s3.amazonaws.com/uploads/Fr/615/small_18751",
    "id": 357089,
    "title": "2012 Trek Lexa SL (Compact)",
    "serial": "wtu194c0974h",
    "manufacturer_name": "Trek",
    "frame_model": "Lexa SL (Compact)",
    "year": 2012
}, {
    "frame_colors": ["Silver, gray or bare metal"],
    "thumb": "https://bikebook.s3.amazonaws.com/uploads/Fr/2737/small_7300fx.jpg",
    "id": 120343,
    "title": "2004 Trek 7300 FX",
    "serial": "tbi0407c25dl064",
    "manufacturer_name": "Trek",
    "frame_model": "7300 FX",
    "year": 2004
}, {
    "frame_colors": ["White", "Blue"],
    "thumb": "https://bikebook.s3.amazonaws.com/uploads/Fr/6476/small_gran-fondo-13-c-main-photo-large.jpg",
    "id": 392894,
    "title": "2013 Fuji Gran Fondo 1.3 C",
    "serial": "FJ151CJ00265",
    "manufacturer_name": "Fuji",
    "frame_model": "Gran Fondo 1.3 C",
    "year": 2013
}, {
    "frame_colors": ["Black", "Red"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/136993/small_20180424_175944.jpg",
    "id": 433300,
    "title": "2013 Felt Nine 60",
    "serial": "FTA9C180+2",
    "manufacturer_name": "Felt",
    "frame_model": "Nine 60",
    "year": 2013
}, {
    "frame_colors": ["Black"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/136936/small_specialized-crosstrail-2014-hybrid-bike-EV175539-9999-1.jpg",
    "id": 433020,
    "title": "2014 Specialized Crosstrail",
    "serial": "WSBC6020370101",
    "manufacturer_name": "Specialized",
    "frame_model": "Crosstrail",
    "year": 2014
}, {
    "frame_colors": ["Teal"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/137287/small_078366D5-DAAF-466A-BA6C-882A8B9A14C8.jpeg",
    "id": 430815,
    "title": "2015 Surly Straggler",
    "serial": "m15062050",
    "manufacturer_name": "Surly",
    "frame_model": "Straggler ",
    "year": 2015
}, {
    "frame_colors": ["Blue"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/136553/small_16836549_10101040129565015_2755909281456211666_o.jpg",
    "id": 429778,
    "title": "2015 Surly Crosscheck",
    "serial": "absent",
    "manufacturer_name": "Surly",
    "frame_model": "Crosscheck",
    "year": 2015
}, {
    "frame_colors": ["Blue", "White"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/136451/small_0-1.jpeg",
    "id": 428893,
    "title": "2000 Cannondale Jekyll",
    "serial": "absent",
    "manufacturer_name": "Cannondale",
    "frame_model": "Jekyll",
    "year": 2000
}, {
    "frame_colors": ["Silver, gray or bare metal"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/135122/small_20180912_080951.jpg",
    "id": 392936,
    "title": "2006 Subrosa 26\" bmx",
    "serial": "rs171101801",
    "manufacturer_name": "Subrosa",
    "frame_model": "26\" bmx",
    "year": 2006
}, {
    "frame_colors": ["Black", "Green", "White"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/135978/small_DSC_1605_dad_s_face_cropped_out.jpg",
    "id": 425244,
    "title": "2013 Trek 19\"",
    "serial": "34T20087148",
    "manufacturer_name": "Trek",
    "frame_model": "19\"",
    "year": 2013
}, {
    "frame_colors": ["Silver, gray or bare metal"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/135099/small_Bike.jpg",
    "id": 418994,
    "title": "2019 Specialized Sirrus",
    "serial": "wsbc920210939n",
    "manufacturer_name": "Specialized",
    "frame_model": "Sirrus",
    "year": 2019
}, {
    "frame_colors": ["Black"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/135011/small_bicicleta-de-montana-raleigh-tekoa-r-29-frenos-hidraulicos-D_NQ_NP_699894-MLM27800624485_072018-F.jpg",
    "id": 418189,
    "title": "2017 Raleigh Tekoa",
    "serial": "U15XK11107",
    "manufacturer_name": "Raleigh",
    "frame_model": "Tekoa",
    "year": 2017
}, {
    "frame_colors": ["Black", "White"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/85473/small_20170507_165400.jpg",
    "id": 120773,
    "title": "2014 Specialized B4E0-7111",
    "serial": "WSBC711134545H",
    "manufacturer_name": "Specialized",
    "frame_model": "B4E0-7111",
    "year": 2014
}, {
    "frame_colors": ["Yellow or Gold"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/134969/small_cove_bike.png",
    "id": 417935,
    "title": "1965 Cove Friendship",
    "serial": "315827",
    "manufacturer_name": "Cove",
    "frame_model": "Friendship",
    "year": 1965
}, {
    "frame_colors": ["Black"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/134769/small_pedego-latch-11.jpg",
    "id": 416558,
    "title": "2018 Pedego Latch",
    "serial": "Y161007453",
    "manufacturer_name": "Pedego",
    "frame_model": "Latch",
    "year": 2018
}, {
    "frame_colors": ["Blue"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/134600/small_bike.jpg",
    "id": 415353,
    "title": "2009 PUBLIC bikes public r16",
    "serial": "absent",
    "manufacturer_name": "PUBLIC bikes",
    "frame_model": "public r16",
    "year": 2009
}, {
    "frame_colors": ["Black", "Green", "White"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/134788/small_Screen_Shot_2018-09-11_at_8.30.36_PM.png",
    "id": 416637,
    "title": "2012 Trek 3500",
    "serial": "absent",
    "manufacturer_name": "Trek",
    "frame_model": "3500",
    "year": 2012
}, {
    "frame_colors": ["White"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/134420/small_IMG_0231.JPG",
    "id": 414485,
    "title": "2016 MEC Silhouette",
    "serial": "F414202754",
    "manufacturer_name": "MEC",
    "frame_model": "Silhouette",
    "year": 2016
}, {
    "frame_colors": ["Pink"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/134076/small_65241_863834381838_6515221_n_3.jpg",
    "id": 412609,
    "title": "2007 Trek 2200",
    "serial": "absent",
    "manufacturer_name": "Trek",
    "frame_model": "2200",
    "year": 2007
}, {
    "frame_colors": ["Brown"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/133183/small_IMG_1683.JPG",
    "id": 411723,
    "title": "2011 Haro Mary XC 29er",
    "serial": "C80913293",
    "manufacturer_name": "Haro",
    "frame_model": "Mary XC 29er",
    "year": 2011
}, {
    "frame_colors": ["Black"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/133180/small_0659030110115-1-subcat.png",
    "id": 411716,
    "title": "2018 Norco Bikes Fluid FS1",
    "serial": "4707400448",
    "manufacturer_name": "Norco Bikes",
    "frame_model": "Fluid FS1",
    "year": 2018
}, {
    "frame_colors": ["Blue"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/133408/small_Torker.png",
    "id": 411898,
    "title": "2012 Torker Interurban",
    "serial": "absent",
    "manufacturer_name": "Torker",
    "frame_model": "Interurban",
    "year": 2012
}, {
    "frame_colors": ["Red"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/132778/small_IMG_3533_767_.JPG",
    "id": 411365,
    "title": "2018 Rocky Mountain Bicycles Whistler 50",
    "serial": "SPRAJ1720558",
    "manufacturer_name": "Rocky Mountain Bicycles",
    "frame_model": "Whistler 50",
    "year": 2018
}, {
    "frame_colors": ["White"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/132772/small_IMG_7724.JPG",
    "id": 411341,
    "title": "2017 Specialized Sirrus Comp Carbon",
    "serial": "WSBC604101442M",
    "manufacturer_name": "Specialized",
    "frame_model": "Sirrus Comp Carbon",
    "year": 2017
}, {
    "frame_colors": ["Silver, gray or bare metal"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/132638/small_73fx_titaniteblack.jpg",
    "id": 411071,
    "title": "2010 Trek 7.3 FX",
    "serial": "WTU159C211E",
    "manufacturer_name": "Trek",
    "frame_model": "7.3 FX",
    "year": 2010
}, {
    "frame_colors": ["Blue", "White"],
    "thumb": "https://bikebook.s3.amazonaws.com/uploads/Fr/1492/small_Tassajara.jpg",
    "id": 411171,
    "title": "2010 Gary Fisher Tassajara",
    "serial": "WTU357C2785E",
    "manufacturer_name": "Gary Fisher",
    "frame_model": "Tassajara",
    "year": 2010
}, {
    "frame_colors": ["Silver, gray or bare metal"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/132304/small_f400_01.jpg",
    "id": 410644,
    "title": "2001 Cannondale F-400",
    "serial": "MA053917",
    "manufacturer_name": "Cannondale",
    "frame_model": "F-400",
    "year": 2001
}, {
    "frame_colors": ["Blue"],
    "thumb": "https://bikebook.s3.amazonaws.com/uploads/Fr/7516/small_Talon_29er_1_v1.jpg",
    "id": 410469,
    "title": "2013 Giant Talon 29er 1",
    "serial": "GF282026",
    "manufacturer_name": "Giant",
    "frame_model": "Talon 29er 1",
    "year": 2013
}, {
    "frame_colors": ["Blue", "Pink", "White"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/131415/small_IMG_6985.jpg",
    "id": 409398,
    "title": "2016 Giant Brava SLR",
    "serial": "GN612470",
    "manufacturer_name": "Giant",
    "frame_model": "Brava SLR",
    "year": 2016
}, {
    "frame_colors": ["Blue"],
    "thumb": "https://bikebook.s3.amazonaws.com/uploads/Fr/696/small_23270",
    "id": 409478,
    "title": "2012 Trek Neko",
    "serial": "SWTU160C6492G",
    "manufacturer_name": "Trek",
    "frame_model": "Neko",
    "year": 2012
}, {
    "frame_colors": ["Red"],
    "thumb": "https://bikebook.s3.amazonaws.com/uploads/Fr/13129/small_csm_CAMALEONTE_DUE_DISC_cadbed3320.jpg",
    "id": 409003,
    "title": "2014 Bianchi Camaleonte Due Disc",
    "serial": "absent",
    "manufacturer_name": "Bianchi",
    "frame_model": "Camaleonte Due Disc",
    "year": 2014
}, {
    "frame_colors": ["Black"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/131057/small_WhatsApp_Image_2018-08-18_at_1.09.22_PM.jpeg",
    "id": 408728,
    "title": "2015 Jamis Quest Sport",
    "serial": "u152u04178",
    "manufacturer_name": "Jamis",
    "frame_model": "Quest Sport",
    "year": 2015
}, {
    "frame_colors": ["Black", "Silver, gray or bare metal", "Red"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/131025/small_Y7c6pMK8lGo.jpg",
    "id": 408860,
    "title": "2019 Trek FX 3 20 Matte Trek Black",
    "serial": "WTU012C3460N",
    "manufacturer_name": "Trek",
    "frame_model": "FX 3 20 Matte Trek Black",
    "year": 2019
}, {
    "frame_colors": ["Black"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/130939/small_IMG_5437.jpg",
    "id": 408682,
    "title": "2017 ELBY 9 Speed",
    "serial": "E011600819",
    "manufacturer_name": "ELBY",
    "frame_model": "9 Speed",
    "year": 2017
}, {
    "frame_colors": ["Blue"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/131232/small_2007-GT-Series-4.jpg",
    "id": 408890,
    "title": "2007 GT Bicycles Series 4",
    "serial": "F05085555",
    "manufacturer_name": "GT Bicycles",
    "frame_model": "Series 4",
    "year": 2007
}, {
    "frame_colors": ["Teal"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/131282/small_Screenshot_2018-08-18-11-26-51.png",
    "id": 409215,
    "title": "2014 Schwinn Gateway",
    "serial": "absent",
    "manufacturer_name": "Schwinn",
    "frame_model": "Gateway",
    "year": 2014
}, {
    "frame_colors": ["Black"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/130796/small_IMG_5227.JPG",
    "id": 408495,
    "title": "2013 Linus Mixtie",
    "serial": "L2E0509598",
    "manufacturer_name": "Linus",
    "frame_model": "Mixtie",
    "year": 2013
}, {
    "frame_colors": ["Red"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/130433/small_CargoBike.JPG",
    "id": 407998,
    "title": "2014 Larry Vs Harry Bullitt cargo bike (front storage)",
    "serial": "WLH3411G",
    "manufacturer_name": "Larry Vs Harry",
    "frame_model": "Bullitt",
    "year": 2014
}, {
    "frame_colors": ["Yellow or Gold"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/130476/small_Resized_20180803_123502_7358.jpeg",
    "id": 408086,
    "title": "2018 Opus Citato 3",
    "serial": "IC0G17IO301",
    "manufacturer_name": "Opus",
    "frame_model": "Citato 3",
    "year": 2018
}, {
    "frame_colors": ["Blue"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/131403/small_Trek_7.4_FX_WSD_Size_13_Color-_Nocturn_S_N_WTU246C7105H.jpg",
    "id": 409377,
    "title": "2015 Trek 7.4 FX WSD",
    "serial": "WTU246C7105H",
    "manufacturer_name": "Trek",
    "frame_model": "7.4 FX WSD",
    "year": 2015
}, {
    "frame_colors": ["Green"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/130264/small_39042009_10216374510572825_582711798029877248_n.jpg",
    "id": 407698,
    "title": "2017 Specialized Rockhopper",
    "serial": "WSBC60278318J",
    "manufacturer_name": "Specialized",
    "frame_model": "Rockhopper",
    "year": 2017
}, {
    "frame_colors": ["Black", "Orange"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/129811/small_Image_from_iOS.jpg",
    "id": 407151,
    "title": "2018 Haro Flightline 24 Plus",
    "serial": "K17FTJ02980K17FTJ02980",
    "manufacturer_name": "Haro",
    "frame_model": "Flightline 24 Plus",
    "year": 2018
}, {
    "frame_colors": ["Black"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/26081/small_2015-06-03_11.02.26.jpg",
    "id": 47185,
    "title": "2014 Specialized Sirrus Sport Disc",
    "serial": "WSBC602041964J",
    "manufacturer_name": "Specialized",
    "frame_model": "Sirrus Sport Disc",
    "year": 2014
}, {
    "frame_colors": ["Red", "Black", "White"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/129359/small_AD45E005-0306-40B9-BC99-23AC4DB7BE5A.jpeg",
    "id": 406540,
    "title": "2011 Specialized Secteur Sport Compact",
    "serial": "WSBC602350150F",
    "manufacturer_name": "Specialized",
    "frame_model": "Secteur Sport Compact",
    "year": 2011
}, {
    "frame_colors": ["Black", "Orange"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/129425/small_IMG_8216.JPG",
    "id": 406617,
    "title": "2014 Norco Bikes Charger 9.2 Forma",
    "serial": "00073480",
    "manufacturer_name": "Norco Bikes",
    "frame_model": "Charger 9.2 Forma",
    "year": 2014
}, {
    "frame_colors": ["Silver, gray or bare metal", "Green"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/129153/small_ToughRoad-SLR-1_Color-A_Gray.jpg",
    "id": 406320,
    "title": "2018 Giant Toughroad",
    "serial": "GW17G2513",
    "manufacturer_name": "Giant",
    "frame_model": "Toughroad",
    "year": 2018
}, {
    "frame_colors": ["Black", "Purple"],
    "thumb": "https://files.bikeindex.org/uploads/Pu/129065/small_Screen_Shot_2018-08-05_at_10.20.38_AM.png",
    "id": 406241,
    "title": "2017 Giant Liv Tempt 2",
    "serial": "C6BF7153",
    "manufacturer_name": "Giant",
    "frame_model": "Liv Tempt 2",
    "year": 2017
}]
```
