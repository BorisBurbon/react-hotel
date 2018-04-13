import { GET_HOTEL, GET_SEARCH_HOTEL } from '../constants';

const hotelList = [];

const hotelListOffline = [{
    "property_code": "WYBO",
    "property_name": "Wyndham ",
    "location": {
      "latitude": 42.39795,
      "longitude": -71.03977
    },
    "address": {
      "line1": "201 Everett Avenue",
      "city": "Chelsea",
      "region": "MA",
      "postal_code": "02150-1816",
      "country": "US"
    },
    "total_price": {
      "amount": "23.30",
      "currency": "USD"
    },
    "min_daily_rate": {
      "amount": "71.82",
      "currency": "USD"
    },
    "contacts": [{
      "type": "PHONE",
      "detail": "1-617-8842900"
    }, {
      "type": "FAX",
      "detail": "1-617-8847888"
    }],
    "amenities": [{
      "amenity": "ICE_MACHINE",
      "ota_code": 52,
      "description": "Ice machine"
    }, {
      "amenity": "RESTAURANT",
      "ota_code": 76,
      "description": "Restaurant"
    }, {
      "amenity": "BABY_SITTING",
      "ota_code": 8,
      "description": "Baby sitting"
    }, {
      "amenity": "BEAUTY_SALON",
      "ota_code": 107,
      "description": "Beauty shop/salon"
    }, {
      "amenity": "ELEVATORS",
      "ota_code": 33,
      "description": "Elevators"
    }, {
      "amenity": "INTERNET_PUBLIC_AREAS",
      "ota_code": 178,
      "description": "Internet access in public areas"
    }, {
      "amenity": "JACUZZI",
      "ota_code": 55,
      "description": "Jacuzzi"
    }, {
      "amenity": "LAUNDRY_SERVICE",
      "ota_code": 58,
      "description": "Laundry/Valet service"
    }, {
      "amenity": "PARKING",
      "ota_code": 68,
      "description": "Parking"
    }, {
      "amenity": "LOUNGE_BARS",
      "ota_code": 165,
      "description": "Lounges/bars"
    }, {
      "amenity": "POOL",
      "ota_code": 71,
      "description": "Pool"
    }, {
      "amenity": "OUTDOOR_POOL",
      "ota_code": 66,
      "description": "Outdoor pool"
    }],
    "awards": [{
      "provider": "Local Star Rating",
      "rating": "3"
    }, {
      "provider": "AAA",
      "rating": "3"
    }],
    "images": [{
      "category": "MAIN_IMAGE",
      "width": 70,
      "height": 70,
      "url": "http://www.bigyalta.net/wa-data/public/shop/products/54/05/554/images/3319/3319.970.jpg"
    }, {
      "category": "MAIN_IMAGE",
      "width": 480,
      "height": 260,
      "url": "http://www.bigyalta.net/wa-data/public/shop/products/54/05/554/images/3319/3319.970.jpg"
    }],
    "rooms": [{
      "booking_code": "N2DA01",
      "room_type_code": "N2D",
      "rate_plan_code": "A01",
      "total_amount": {
        "amount": "287.30",
        "currency": "USD"
      },
      "rates": [{
        "start_date": "2016-03-14",
        "end_date": "2016-03-16",
        "currency_code": "USD",
        "price": 143.65
      }],
      "descriptions": ["PAY NOW GET 200 BONUS POINTS", "2 DOUBLE BED ROOM, WIFI, 32 INCH FLAT SCREEN", "TV."],
      "room_type_info": {
        "room_type": "Non-smoking",
        "bed_type": "Double",
        "number_of_beds": "2"
      },
      "rate_type_code": "A01"
    }],
    "_links": {
      "more_rooms_at_this_hotel": {
        "href": "http://api.sandbox.amadeus.com/v1.2/hotels/WYBOSCHH?apikey=zO8hvuhC5ejQBwJgMcGzS19fGpExrRuQ&check_in=2016-03-14&check_out=2016-03-16"
      }
    }
  }, {
  "property_code": "HYBOSHHS",
  "property_name": "Hyatt Regency Boston Harbor",
  "location": {
    "latitude": 42.35914,
    "longitude": -71.02742
  },
  "address": {
    "line1": "101 Harborside Dr",
    "city": "Boston",
    "region": "MA",
    "postal_code": "02128",
    "country": "US"
  },
  "total_price": {
    "amount": "297.44",
    "currency": "USD"
  },
  "min_daily_rate": {
    "amount": "139.92",
    "currency": "USD"
  },
  "contacts": [{
    "type": "PHONE",
    "detail": "1-617-568-1234"
  }, {
    "type": "FAX",
    "detail": "1-617-567-8856"
  }],
  "amenities": [{
    "amenity": "COFFEE_SHOP",
    "ota_code": 20,
    "description": "Coffee shop"
  }, {
    "amenity": "RESTAURANT",
    "ota_code": 76,
    "description": "Restaurant"
  }, {
    "amenity": "ACCESSIBLE_FACILITIES",
    "ota_code": 47,
    "description": "Accessible facilities"
  }, {
    "amenity": "BABY_SITTING",
    "ota_code": 8,
    "description": "Baby sitting"
  }, {
    "amenity": "CAR_RENTAL",
    "ota_code": 15,
    "description": "Car rental desk"
  }, {
    "amenity": "CHILDREN_WELCOME",
    "ota_code": 218,
    "description": "Children welcome"
  }, {
    "amenity": "ELEVATORS",
    "ota_code": 33,
    "description": "Elevators"
  }, {
    "amenity": "CURRENCY_EXCHANGE",
    "ota_code": 26,
    "description": "Currency exchange"
  }, {
    "amenity": "GIFT_SHOP",
    "ota_code": 45,
    "description": "Gift/News stand"
  }, {
    "amenity": "FREE_HIGH_SPEED_INTERNET",
    "ota_code": 222,
    "description": "Free high speed internet connection"
  }, {
    "amenity": "INTERNET_PUBLIC_AREAS",
    "ota_code": 178,
    "description": "Internet access in public areas"
  }, {
    "amenity": "PARKING",
    "ota_code": 68,
    "description": "Parking"
  }, {
    "amenity": "PETS_ALLOWED",
    "ota_code": 224,
    "description": "Pets allowed"
  }, {
    "amenity": "VALET_PARKING",
    "ota_code": 97,
    "description": "Valet parking "
  }, {
    "amenity": "LOUNGE_BARS",
    "ota_code": 165,
    "description": "Lounges/bars"
  }, {
    "amenity": "LOUNGE_BARS",
    "ota_code": 165,
    "description": "Lounges/bars"
  }, {
    "amenity": "ROOM_SERVICE",
    "ota_code": 77,
    "description": "Room service"
  }, {
    "amenity": "SAFE_DEPOSIT_BOX",
    "ota_code": 78,
    "description": "Safe deposit box"
  }, {
    "amenity": "BALLROOM",
    "ota_code": 191,
    "description": "Ballroom"
  }],
  "awards": [],
  "images": [{
    "category": "MAIN_IMAGE",
    "width": 70,
    "height": 70,
    "url": "http://www.litorehotel.com/web/ru/images/placeholders/konaklama/ek02.jpg"
  }, {
    "category": "MAIN_IMAGE",
    "width": 320,
    "height": 480,
    "url": "http://www.litorehotel.com/web/ru/images/placeholders/konaklama/ek02.jpg"
  }],
  "rooms": [{
    "booking_code": "KNGADPR",
    "room_type_code": "A1K",
    "rate_plan_code": "***",
    "total_amount": {
      "amount": "297.44",
      "currency": "USD"
    },
    "rates": [{
      "start_date": "2016-03-14",
      "end_date": "2016-03-15",
      "currency_code": "USD",
      "price": 139.92
    }, {
      "start_date": "2016-03-15",
      "end_date": "2016-03-16",
      "currency_code": "USD",
      "price": 157.52
    }],
    "descriptions": ["ADV PURCHASE* AVIATION KING", "1 KING BED: COFFEE MAKER:DATAPORT:"],
    "room_type_info": {
      "room_type": "Room with bath - Superior",
      "bed_type": "King",
      "number_of_beds": "1"
    },
    "rate_type_code": "***"
  }],
  "_links": {
    "more_rooms_at_this_hotel": {
      "href": "http://api.sandbox.amadeus.com/v1.2/hotels/HYBOSHHS?apikey=zO8hvuhC5ejQBwJgMcGzS19fGpExrRuQ&check_in=2016-03-14&check_out=2016-03-16"
    }
  },
  "property_code": "WYBOSCHH",
  "property_name": "Wyndham Boston Chelsea",
  "location": {
    "latitude": 42.39795,
    "longitude": -71.03977
  },
  "address": {
    "line1": "201 Everett Avenue",
    "city": "Chelsea",
    "region": "MA",
    "postal_code": "02150-1816",
    "country": "US"
  },
  "total_price": {
    "amount": "287.30",
    "currency": "USD"
  },
  "min_daily_rate": {
    "amount": "71.82",
    "currency": "USD"
  },
  "contacts": [{
    "type": "PHONE",
    "detail": "1-617-8842900"
  }, {
    "type": "FAX",
    "detail": "1-617-8847888"
  }],
  "amenities": [{
    "amenity": "ICE_MACHINE",
    "ota_code": 52,
    "description": "Ice machine"
  }, {
    "amenity": "RESTAURANT",
    "ota_code": 76,
    "description": "Restaurant"
  }, {
    "amenity": "BABY_SITTING",
    "ota_code": 8,
    "description": "Baby sitting"
  }, {
    "amenity": "BEAUTY_SALON",
    "ota_code": 107,
    "description": "Beauty shop/salon"
  }, {
    "amenity": "ELEVATORS",
    "ota_code": 33,
    "description": "Elevators"
  }, {
    "amenity": "INTERNET_PUBLIC_AREAS",
    "ota_code": 178,
    "description": "Internet access in public areas"
  }, {
    "amenity": "JACUZZI",
    "ota_code": 55,
    "description": "Jacuzzi"
  }, {
    "amenity": "LAUNDRY_SERVICE",
    "ota_code": 58,
    "description": "Laundry/Valet service"
  }, {
    "amenity": "PARKING",
    "ota_code": 68,
    "description": "Parking"
  }, {
    "amenity": "LOUNGE_BARS",
    "ota_code": 165,
    "description": "Lounges/bars"
  }, {
    "amenity": "POOL",
    "ota_code": 71,
    "description": "Pool"
  }, {
    "amenity": "OUTDOOR_POOL",
    "ota_code": 66,
    "description": "Outdoor pool"
  }],
  "awards": [{
    "provider": "Local Star Rating",
    "rating": "3"
  }, {
    "provider": "AAA",
    "rating": "3"
  }],
  "images": [{
    "category": "MAIN_IMAGE",
    "width": 70,
    "height": 70,
    "url": "http://www.litorehotel.com/web/ru/images/placeholders/konaklama/ek01.jpg"
  }, {
    "category": "MAIN_IMAGE",
    "width": 480,
    "height": 260,
    "url": "http://www.litorehotel.com/web/ru/images/placeholders/konaklama/ek01.jpg"
  }],
  "rooms": [{
    "booking_code": "N2DA01",
    "room_type_code": "N2D",
    "rate_plan_code": "A01",
    "total_amount": {
      "amount": "287.30",
      "currency": "USD"
    },
    "rates": [{
      "start_date": "2016-03-14",
      "end_date": "2016-03-16",
      "currency_code": "USD",
      "price": 143.65
    }],
    "descriptions": ["PAY NOW GET 200 BONUS POINTS", "2 DOUBLE BED ROOM, WIFI, 32 INCH FLAT SCREEN", "TV."],
    "room_type_info": {
      "room_type": "Non-smoking",
      "bed_type": "Double",
      "number_of_beds": "2"
    },
    "rate_type_code": "A01"
  }],
  "_links": {
    "more_rooms_at_this_hotel": {
      "href": "http://api.sandbox.amadeus.com/v1.2/hotels/WYBOSCHH?apikey=zO8hvuhC5ejQBwJgMcGzS19fGpExrRuQ&check_in=2016-03-14&check_out=2016-03-16"
    }
  }
}, {
  "property_code": "HYBOSHHS",
  "property_name": "Hyatt Regency Boston Harbor",
  "location": {
    "latitude": 42.35914,
    "longitude": -71.02742
  },
  "address": {
    "line1": "101 Harborside Dr",
    "city": "Boston",
    "region": "MA",
    "postal_code": "02128",
    "country": "US"
  },
  "total_price": {
    "amount": "297.44",
    "currency": "USD"
  },
  "min_daily_rate": {
    "amount": "139.92",
    "currency": "USD"
  },
  "contacts": [{
    "type": "PHONE",
    "detail": "1-617-568-1234"
  }, {
    "type": "FAX",
    "detail": "1-617-567-8856"
  }],
  "amenities": [{
    "amenity": "COFFEE_SHOP",
    "ota_code": 20,
    "description": "Coffee shop"
  }, {
    "amenity": "RESTAURANT",
    "ota_code": 76,
    "description": "Restaurant"
  }, {
    "amenity": "ACCESSIBLE_FACILITIES",
    "ota_code": 47,
    "description": "Accessible facilities"
  }, {
    "amenity": "BABY_SITTING",
    "ota_code": 8,
    "description": "Baby sitting"
  }, {
    "amenity": "CAR_RENTAL",
    "ota_code": 15,
    "description": "Car rental desk"
  }, {
    "amenity": "CHILDREN_WELCOME",
    "ota_code": 218,
    "description": "Children welcome"
  }, {
    "amenity": "ELEVATORS",
    "ota_code": 33,
    "description": "Elevators"
  }, {
    "amenity": "CURRENCY_EXCHANGE",
    "ota_code": 26,
    "description": "Currency exchange"
  }, {
    "amenity": "GIFT_SHOP",
    "ota_code": 45,
    "description": "Gift/News stand"
  }, {
    "amenity": "FREE_HIGH_SPEED_INTERNET",
    "ota_code": 222,
    "description": "Free high speed internet connection"
  }, {
    "amenity": "INTERNET_PUBLIC_AREAS",
    "ota_code": 178,
    "description": "Internet access in public areas"
  }, {
    "amenity": "PARKING",
    "ota_code": 68,
    "description": "Parking"
  }, {
    "amenity": "PETS_ALLOWED",
    "ota_code": 224,
    "description": "Pets allowed"
  }, {
    "amenity": "VALET_PARKING",
    "ota_code": 97,
    "description": "Valet parking "
  }, {
    "amenity": "LOUNGE_BARS",
    "ota_code": 165,
    "description": "Lounges/bars"
  }, {
    "amenity": "LOUNGE_BARS",
    "ota_code": 165,
    "description": "Lounges/bars"
  }, {
    "amenity": "ROOM_SERVICE",
    "ota_code": 77,
    "description": "Room service"
  }, {
    "amenity": "SAFE_DEPOSIT_BOX",
    "ota_code": 78,
    "description": "Safe deposit box"
  }, {
    "amenity": "BALLROOM",
    "ota_code": 191,
    "description": "Ballroom"
  }],
  "awards": [],
  "images": [{
    "category": "MAIN_IMAGE",
    "width": 70,
    "height": 70,
    "url": "http://www.litorehotel.com/web/ru/images/placeholders/konaklama/ek02.jpg"
  }, {
    "category": "MAIN_IMAGE",
    "width": 320,
    "height": 480,
    "url": "http://www.litorehotel.com/web/ru/images/placeholders/konaklama/ek02.jpg"
  }],
  "rooms": [{
    "booking_code": "KNGADPR",
    "room_type_code": "A1K",
    "rate_plan_code": "***",
    "total_amount": {
      "amount": "297.44",
      "currency": "USD"
    },
    "rates": [{
      "start_date": "2016-03-14",
      "end_date": "2016-03-15",
      "currency_code": "USD",
      "price": 139.92
    }, {
      "start_date": "2016-03-15",
      "end_date": "2016-03-16",
      "currency_code": "USD",
      "price": 157.52
    }],
    "descriptions": ["ADV PURCHASE* AVIATION KING", "1 KING BED: COFFEE MAKER:DATAPORT:"],
    "room_type_info": {
      "room_type": "Room with bath - Superior",
      "bed_type": "King",
      "number_of_beds": "1"
    },
    "rate_type_code": "***"
  }],
  "_links": {
    "more_rooms_at_this_hotel": {
      "href": "http://api.sandbox.amadeus.com/v1.2/hotels/HYBOSHHS?apikey=zO8hvuhC5ejQBwJgMcGzS19fGpExrRuQ&check_in=2016-03-14&check_out=2016-03-16"
    }
  },
  "property_code": "WYBOSCHH",
  "property_name": "Wyndham Boston Chelsea",
  "location": {
    "latitude": 42.39795,
    "longitude": -71.03977
  },
  "address": {
    "line1": "201 Everett Avenue",
    "city": "Chelsea",
    "region": "MA",
    "postal_code": "02150-1816",
    "country": "US"
  },
  "total_price": {
    "amount": "287.30",
    "currency": "USD"
  },
  "min_daily_rate": {
    "amount": "71.82",
    "currency": "USD"
  },
  "contacts": [{
    "type": "PHONE",
    "detail": "1-617-8842900"
  }, {
    "type": "FAX",
    "detail": "1-617-8847888"
  }],
  "amenities": [{
    "amenity": "ICE_MACHINE",
    "ota_code": 52,
    "description": "Ice machine"
  }, {
    "amenity": "RESTAURANT",
    "ota_code": 76,
    "description": "Restaurant"
  }, {
    "amenity": "BABY_SITTING",
    "ota_code": 8,
    "description": "Baby sitting"
  }, {
    "amenity": "BEAUTY_SALON",
    "ota_code": 107,
    "description": "Beauty shop/salon"
  }, {
    "amenity": "ELEVATORS",
    "ota_code": 33,
    "description": "Elevators"
  }, {
    "amenity": "INTERNET_PUBLIC_AREAS",
    "ota_code": 178,
    "description": "Internet access in public areas"
  }, {
    "amenity": "JACUZZI",
    "ota_code": 55,
    "description": "Jacuzzi"
  }, {
    "amenity": "LAUNDRY_SERVICE",
    "ota_code": 58,
    "description": "Laundry/Valet service"
  }, {
    "amenity": "PARKING",
    "ota_code": 68,
    "description": "Parking"
  }, {
    "amenity": "LOUNGE_BARS",
    "ota_code": 165,
    "description": "Lounges/bars"
  }, {
    "amenity": "POOL",
    "ota_code": 71,
    "description": "Pool"
  }, {
    "amenity": "OUTDOOR_POOL",
    "ota_code": 66,
    "description": "Outdoor pool"
  }],
  "awards": [{
    "provider": "Local Star Rating",
    "rating": "3"
  }, {
    "provider": "AAA",
    "rating": "3"
  }],
  "images": [{
    "category": "MAIN_IMAGE",
    "width": 70,
    "height": 70,
    "url": "http://www.litorehotel.com/web/ru/images/placeholders/konaklama/ek01.jpg"
  }, {
    "category": "MAIN_IMAGE",
    "width": 480,
    "height": 260,
    "url": "http://www.litorehotel.com/web/ru/images/placeholders/konaklama/ek01.jpg"
  }],
  "rooms": [{
    "booking_code": "N2DA01",
    "room_type_code": "N2D",
    "rate_plan_code": "A01",
    "total_amount": {
      "amount": "287.30",
      "currency": "USD"
    },
    "rates": [{
      "start_date": "2016-03-14",
      "end_date": "2016-03-16",
      "currency_code": "USD",
      "price": 143.65
    }],
    "descriptions": ["PAY NOW GET 200 BONUS POINTS", "2 DOUBLE BED ROOM, WIFI, 32 INCH FLAT SCREEN", "TV."],
    "room_type_info": {
      "room_type": "Non-smoking",
      "bed_type": "Double",
      "number_of_beds": "2"
    },
    "rate_type_code": "A01"
  }],
  "_links": {
    "more_rooms_at_this_hotel": {
      "href": "http://api.sandbox.amadeus.com/v1.2/hotels/WYBOSCHH?apikey=zO8hvuhC5ejQBwJgMcGzS19fGpExrRuQ&check_in=2016-03-14&check_out=2016-03-16"
    }
  }
}, {
  "property_code": "HYBOSHHS",
  "property_name": "Hyatt Regency Boston Harbor",
  "location": {
    "latitude": 42.35914,
    "longitude": -71.02742
  },
  "address": {
    "line1": "101 Harborside Dr",
    "city": "Boston",
    "region": "MA",
    "postal_code": "02128",
    "country": "US"
  },
  "total_price": {
    "amount": "297.44",
    "currency": "USD"
  },
  "min_daily_rate": {
    "amount": "139.92",
    "currency": "USD"
  },
  "contacts": [{
    "type": "PHONE",
    "detail": "1-617-568-1234"
  }, {
    "type": "FAX",
    "detail": "1-617-567-8856"
  }],
  "amenities": [{
    "amenity": "COFFEE_SHOP",
    "ota_code": 20,
    "description": "Coffee shop"
  }, {
    "amenity": "RESTAURANT",
    "ota_code": 76,
    "description": "Restaurant"
  }, {
    "amenity": "ACCESSIBLE_FACILITIES",
    "ota_code": 47,
    "description": "Accessible facilities"
  }, {
    "amenity": "BABY_SITTING",
    "ota_code": 8,
    "description": "Baby sitting"
  }, {
    "amenity": "CAR_RENTAL",
    "ota_code": 15,
    "description": "Car rental desk"
  }, {
    "amenity": "CHILDREN_WELCOME",
    "ota_code": 218,
    "description": "Children welcome"
  }, {
    "amenity": "ELEVATORS",
    "ota_code": 33,
    "description": "Elevators"
  }, {
    "amenity": "CURRENCY_EXCHANGE",
    "ota_code": 26,
    "description": "Currency exchange"
  }, {
    "amenity": "GIFT_SHOP",
    "ota_code": 45,
    "description": "Gift/News stand"
  }, {
    "amenity": "FREE_HIGH_SPEED_INTERNET",
    "ota_code": 222,
    "description": "Free high speed internet connection"
  }, {
    "amenity": "INTERNET_PUBLIC_AREAS",
    "ota_code": 178,
    "description": "Internet access in public areas"
  }, {
    "amenity": "PARKING",
    "ota_code": 68,
    "description": "Parking"
  }, {
    "amenity": "PETS_ALLOWED",
    "ota_code": 224,
    "description": "Pets allowed"
  }, {
    "amenity": "VALET_PARKING",
    "ota_code": 97,
    "description": "Valet parking "
  }, {
    "amenity": "LOUNGE_BARS",
    "ota_code": 165,
    "description": "Lounges/bars"
  }, {
    "amenity": "LOUNGE_BARS",
    "ota_code": 165,
    "description": "Lounges/bars"
  }, {
    "amenity": "ROOM_SERVICE",
    "ota_code": 77,
    "description": "Room service"
  }, {
    "amenity": "SAFE_DEPOSIT_BOX",
    "ota_code": 78,
    "description": "Safe deposit box"
  }, {
    "amenity": "BALLROOM",
    "ota_code": 191,
    "description": "Ballroom"
  }],
  "awards": [],
  "images": [{
    "category": "MAIN_IMAGE",
    "width": 70,
    "height": 70,
    "url": "http://www.litorehotel.com/web/ru/images/placeholders/konaklama/ek02.jpg"
  }, {
    "category": "MAIN_IMAGE",
    "width": 320,
    "height": 480,
    "url": "http://www.litorehotel.com/web/ru/images/placeholders/konaklama/ek02.jpg"
  }],
  "rooms": [{
    "booking_code": "KNGADPR",
    "room_type_code": "A1K",
    "rate_plan_code": "***",
    "total_amount": {
      "amount": "297.44",
      "currency": "USD"
    },
    "rates": [{
      "start_date": "2016-03-14",
      "end_date": "2016-03-15",
      "currency_code": "USD",
      "price": 139.92
    }, {
      "start_date": "2016-03-15",
      "end_date": "2016-03-16",
      "currency_code": "USD",
      "price": 157.52
    }],
    "descriptions": ["ADV PURCHASE* AVIATION KING", "1 KING BED: COFFEE MAKER:DATAPORT:"],
    "room_type_info": {
      "room_type": "Room with bath - Superior",
      "bed_type": "King",
      "number_of_beds": "1"
    },
    "rate_type_code": "***"
  }],
  "_links": {
    "more_rooms_at_this_hotel": {
      "href": "http://api.sandbox.amadeus.com/v1.2/hotels/HYBOSHHS?apikey=zO8hvuhC5ejQBwJgMcGzS19fGpExrRuQ&check_in=2016-03-14&check_out=2016-03-16"
    }
  }
}];



export default (state = hotelListOffline, {type, payload}) => {
  switch (type) {
    case GET_HOTEL:
      return Object.assign([], state, payload)
    case GET_SEARCH_HOTEL:
      return Object.assign([], payload)
    default:
      return state
  }
}