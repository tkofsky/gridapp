var app = angular.module('main', ['ngTable']).
controller('DemoCtrl', function($scope, $filter, ngTableParams) {
    var data = [
  {
    "id":1,
    "Corresp":"BUTY-WAVE PRODUCTS CO. INC",
    "OwnerCited":"1992 SIMON FAMILY TRUST",
    "TmCited":"RESTOR PLUS",
    "TmRefused":"RESTORE",
    "OwnerRefused":"The Treatment Center of the Palm Beaches, LLC",
    "SnCited":74170251,
    "SnRefused":86021282
  },
  {
    "id":2,
    "Corresp":"BUTY-WAVE PRODUCTS CO., INC.",
    "OwnerCited":"1992 SIMON FAMILY TRUST",
    "TmCited":"RESTOR",
    "TmRefused":"RESTORE",
    "OwnerRefused":"The Treatment Center of the Palm Beaches, LLC",
    "SnCited":72136733,
    "SnRefused":86021282
  },
  {
    "id":3,
    "Corresp":"20/10 CONSULTING LLC",
    "OwnerCited":"20/10 Consulting, LLC",
    "TmCited":"20/10 CONSULTING",
    "TmRefused":"TWENTY-TEN",
    "OwnerRefused":"Twenty-Ten, Inc.",
    "SnCited":77425842,
    "SnRefused":86080338
  },
  {
    "id":4,
    "Corresp":"SMUGLERS LLP",
    "OwnerCited":"2040830 Ontario Inc.",
    "TmCited":"ARAGON MARKETING GROUP",
    "TmRefused":"ENGANCHES ARAGON",
    "OwnerRefused":"ENGANCHES Y REMOLQUES ARAGÓN, S.L.",
    "SnCited":77783742,
    "SnRefused":79145227
  },
  {
    "id":5,
    "Corresp":"FUNKHOUSER VEGOSEN LIEBMAN & DUNN LTD.",
    "OwnerCited":"2323 N. Milwaukee LLC",
    "TmCited":"ROSA",
    "TmRefused":"ROSABI",
    "OwnerRefused":"Dogfish Head Marketing, LLC",
    "SnCited":85717847,
    "SnRefused":86259003
  },
  {
    "id":6,
    "Corresp":"IP Legal Advisors, P.C.",
    "OwnerCited":"Abel Creations, Inc.",
    "TmCited":"[Design Mark]",
    "TmRefused":"[Design Mark]",
    "OwnerRefused":"AEB Enterprises Inc",
    "SnCited":85174033,
    "SnRefused":86216808
  },
  {
    "id":7,
    "Corresp":"ARTHUR C LINDERMAN ESQ",
    "OwnerCited":"Abet, Inc.",
    "TmCited":"MEG",
    "TmRefused":"MEG SHOP",
    "OwnerRefused":"KINNEY, MEGHAN",
    "SnCited":76448697,
    "SnRefused":85673109
  },
  {
    "id":8,
    "Corresp":"FLASTER/GREENBERG P.C.",
    "OwnerCited":"About, Inc.",
    "TmCited":"LIFEWIRE",
    "TmRefused":"LIFE WIRELESS",
    "OwnerRefused":"Telrite Corporation",
    "SnCited":77177894,
    "SnRefused":85870808
  },
  {
    "id":9,
    "Corresp":"ACARIA, INC",
    "OwnerCited":"Acaria, Inc",
    "TmCited":"ACARIA HOMECARE",
    "TmRefused":"ACARIACONNECT",
    "OwnerRefused":"AcariaHealth, Inc.",
    "SnCited":86043399,
    "SnRefused":86221519
  },
  {
    "id":10,
    "Corresp":"Sideman & Bancroft LLP",
    "OwnerCited":"ACCENTURE GLOBAL SERVICES LIMITED",
    "TmCited":"EXAMPLE",
    "TmRefused":"E EXAMPLE",
    "OwnerRefused":"Elliot Gleave t/a Example",
    "SnCited":76260649,
    "SnRefused":79141583
  },
  {
    "id":11,
    "Corresp":"ALIX, YALE, & RISTAS LLP",
    "OwnerCited":"ACME UNITED CORPORATION",
    "TmCited":"A",
    "TmRefused":"LAUNER",
    "OwnerRefused":"Launer London Limited",
    "SnCited":72445278,
    "SnRefused":85558211
  },
  {
    "id":12,
    "Corresp":"DAVIS BROWN KOEHN SHORS & ROBERTS PC",
    "OwnerCited":"Acousticon Woodard Company",
    "TmCited":"WOODARD",
    "TmRefused":"WOODARD",
    "OwnerRefused":"Maas-Kautzky, Inc.",
    "SnCited":74433339,
    "SnRefused":86240919
  },
  {
    "id":13,
    "Corresp":"FISHNET SECURITY INC",
    "OwnerCited":"Acuity Solutions",
    "TmCited":"ACUITY SOLUTIONS SECURING THE CONNECTED WORLD",
    "TmRefused":"ACUITY INSIGHTFUL SOLUTIONS",
    "OwnerRefused":"SRA International, Inc.",
    "SnCited":77477933,
    "SnRefused":86085294
  },
  {
    "id":14,
    "Corresp":"Matchmark B.V.",
    "OwnerCited":"Adconion Acquisition, LLC",
    "TmCited":"JOOST",
    "TmRefused":"JOOS'D",
    "OwnerRefused":"3KINETIC, LLC",
    "SnCited":79036656,
    "SnRefused":86324308
  },
  {
    "id":15,
    "Corresp":"Notaro, Michalos & Zaccaria P.C.",
    "OwnerCited":"adidas AG",
    "TmCited":"PUREMOTION",
    "TmRefused":"PURMOTION",
    "OwnerRefused":"PURMOTION, INC.",
    "SnCited":77855039,
    "SnRefused":85923284
  },
  {
    "id":16,
    "Corresp":"Meunier Carlin & Curfman LLC",
    "OwnerCited":"Adknowledge, Inc.",
    "TmCited":"ADPARLOR",
    "TmRefused":"PARLORE",
    "OwnerRefused":"Parlore Inc.",
    "SnCited":85625743,
    "SnRefused":86228458
  },
  {
    "id":17,
    "Corresp":"EDWARDS WILDMAN PALMER LLP",
    "OwnerCited":"Advanced HealthCare Distributors, LLC",
    "TmCited":"FUEL",
    "TmRefused":"FUEL YOUR 10K HOURS",
    "OwnerRefused":"FSM LLP",
    "SnCited":77408521,
    "SnRefused":79128978
  },
  {
    "id":18,
    "Corresp":"ADYAPPER, INC.",
    "OwnerCited":"AdYapper, Inc.",
    "TmCited":"VFREQUENCY",
    "TmRefused":"FREQUENCE",
    "OwnerRefused":"FREQUENCE",
    "SnCited":86087077,
    "SnRefused":86321577
  },
  {
    "id":19,
    "Corresp":"AEGIS ENVIRONMENTAL, INC.",
    "OwnerCited":"Aegis Environmental, Inc.",
    "TmCited":"SHIELD",
    "TmRefused":"C-SHIELD",
    "OwnerRefused":"ConcernTrak, Inc.",
    "SnCited":77648836,
    "SnRefused":86390693
  }
];
    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        filter: {
            Corresp: ''       // initial filter
        },
        sorting: {
            TmCited: 'asc'     // initial sorting
        }
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var filteredData = params.filter() ?
                    $filter('filter')(data, params.filter()) :
                    data;
            var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    data;

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });





});