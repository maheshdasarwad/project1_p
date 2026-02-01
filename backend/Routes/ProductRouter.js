const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();



router.get('/',ensureAuthenticated, (req, res) => {
    console.log('---- logged in user details ----- ', req.user);
    res.status(200).json(
    [
        {
            "id": 1,
            "carName": "Land Rover Defender",
            "price": '₹1.13 – ₹1.25 Crore',
            "companyName": "Land Rover",
            "officialLink": "https://www.landrover.in/defender/defender/models-and-specifications.html",
            "shortDescription": "Land Rover Defender is a rugged luxury SUV known for its legendary off-road capability, bold design, and modern technology, built for both adventure and premium comfort.",
            "img1": "/public/carimages/defender1.jpg",
            "img2": "/public/carimages/defender2.jpg",
            "img3": "/public/carimages/defender3.jpg",
            "img4": "/public/carimages/defender4.jpg",
            "img5": "/public/carimages/defender5.jpg"
        },
        {
            "id": 2,
            "carName": "BMW X1",
            "price": '₹58.2 – ₹59.0 Lakh',
            "companyName": "BMW",
            "officialLink": "https://www.bmw.in/en/all-models/x-series/X1/bmw-x1-overview.html",
            "shortDescription": "BMW X1 is a premium compact SUV offering a refined cabin, sporty performance, and advanced tech, making it ideal for buyers entering the luxury segment in India.",
            "img1": "/public/carimages/bmwx11.jpg",
            "img2": "/public/carimages/bmwx12.jpg",
            "img3": "/public/carimages/bmwx13.jpg",
            "img4": "/public/carimages/bmwx14.jpg",
            "img5": "/public/carimages/bmwx15.jpg"
        },
        {
            "id": 3,
            "carName": "Mahindra BE 6e",
            "price": '₹18.90 - ₹27.65 Lakh',
            "companyName": "Mahindra & Mahindra Ltd.",
            "officialLink": "https://www.mahindraelectricsuv.com/esuv/be-6/MBE6.html",
            "shortDescription": "The BE 6e is a stylish electric coupe-SUV offering strong performance with up to ~680 km claimed range, modern tech, and a youthful design that stands out in the EV segment.",
            "img1": "/public/carimages/evb61.jpg",
            "img2": "/public/carimages/evb62.jpg",
            "img3": "/public/carimages/evb63.jpg",
            "img4": "/public/carimages/evb64.jpg",
            "img5": "/public/carimages/evb65.jpg"
        },
        {
            "id": 4,
            "carName": "Toyota Fortuner",
            "price": '₹40 – ₹60 Lakh',
            "companyName": "Toyota Kirloskar Motor",
            "officialLink": "https://www.toyotabharat.com/showroom/fortuner/index-fortuner.html",
            "shortDescription": "The Toyota Fortuner is a rugged full-size SUV known for its commanding road presence, strong performance, and dependable build quality. It offers versatile seating, off-road capability, and a comfortable cabin suited for both city and long-distance drives.",
            "img1": "/public/carimages/fortuner1.jpg",
            "img2": "/public/carimages/fortuner2.jpg",
            "img3": "/public/carimages/fortuner3.jpg",
            "img4": "/public/carimages/fortuner4.jpg",
            "img5": "/public/carimages/fortuner5.jpg"
        },
        {
            "id": 5,
            "carName": "Lamborghini Huracán",
            "price": '₹3.5 – ₹5.7 Crore',
            "companyName": "Automobili Lamborghini",
            "officialLink": "https://www.lamborghini.com/en-en/models/huracan#val-ht",
            "shortDescription": "The Lamborghini Huracán is a high-performance Italian supercar with a thrilling V10 engine and razor-sharp handling. It blends exotic design, blistering acceleration, and supreme driving dynamics on both road and track.",
            "img1": "/public/carimages/lamborginisvj1.jpg",
            "img2": "/public/carimages/lamborginisvj2.jpg",
            "img3": "/public/carimages/lamborginisvj3.jpg",
            "img4": "/public/carimages/lamborginisvj4.jpg",
            "img5": "/public/carimages/lamborginisvj5.jpg"
        },
        {
            "id": 6,
            "carName": "MG Hector",
            "price": '₹11.99 – ₹18.99 Lakh',
            "companyName": "MG Motor India",
            "officialLink": "https://www.mgmotor.co.in/vehicles/mghector",
            "shortDescription": "The MG Hector is a spacious mid-size SUV with bold styling, a large touchscreen infotainment system, and modern tech features, making it a strong value choice in its segment. It combines comfort, connected car technology, and a commanding road presence for everyday driving and family use.",
            "img1": "/public/carimages/mghectar1.jpg",
            "img2": "/public/carimages/mghectar2.jpg",
            "img3": "/public/carimages/mghectar3.jpg",
            "img4": "/public/carimages/mghectar4.jpg",
            "img5": "/public/carimages/mghectar5.jpg"
        },
        {
            "id": 7,
            "carName": "Audi Q5",
            "price": '₹75 Lakh - ₹82 Lakh+',
            "companyName": "Audi",
            "officialLink": "https://www.audi.in/en/models/q5/q5/",
            "shortDescription": "The Audi Q5 is a premium luxury mid-size SUV offering refined driving dynamics, high-end comfort, and advanced tech features. It blends sporty performance with a plush interior and strong build quality.",
            "img1": "/public/carimages/odi1.jpg",
            "img2": "/public/carimages/odi2.jpg",
            "img3": "/public/carimages/odi3.jpg",
            "img4": "/public/carimages/odi4.jpg",
            "img5": "/public/carimages/odi5.jpg"
        },
        {
            "id": 8,
            "carName": "Rolls-Royce Phantom",
            "price": '₹10.3 Crore',
            "companyName": "Rolls-Royce Motor Cars",
            "officialLink": "https://www.rolls-roycemotorcars.com/en_US/showroom/phantom.html",
            "shortDescription": "The Rolls-Royce Phantom is the flagship full-size luxury sedan offering supreme craftsmanship, a whisper-quiet cabin, and unmatched comfort with bespoke features. It combines timeless elegance with cutting-edge technology and a refined V12 engine.",
            "img1": "/public/carimages/rr1.jpg",
            "img2": "/public/carimages/rr2.jpg",
            "img3": "/public/carimages/rr3.jpg",
            "img4": "/public/carimages/rr4.jpg",
            "img5": "/public/carimages/rr5.jpg"
        },
        {
            "id": 9,
            "carName": "Mahindra Scorpio",
            "price": '₹15 – ₹20 Lakh',
            "companyName": "Mahindra & Mahindra Ltd.",
            "officialLink": "https://auto.mahindra.com/suv/scorpio-n/SCN.html",
            "shortDescription": "The Mahindra Scorpio is a rugged mid-size SUV known for its strong build, powerful performance, and commanding road presence. It offers spacious seating and capable off-road ability, making it popular for both city and adventure driving.",
            "img1": "/public/carimages/scarpio1.jpg",
            "img2": "/public/carimages/scarpio2.jpg",
            "img3": "/public/carimages/scarpio3.jpg",
            "img4": "/public/carimages/scarpio4.jpg",
            "img5": "/public/carimages/scarpio5.jpg"
        },
        {
            "id": 10,
            "carName": "Tata Sierra",
            "price": '₹11.49 - ₹21.29 Lakh',
            "companyName": "Tata Motors Ltd.",
            "officialLink": "https://cars.tatamotors.com/sierra/ice.html",
            "shortDescription": "The Tata Sierra is a modern mid-size SUV that revives the iconic Sierra name with bold styling, advanced tech, and multiple powertrain options. It offers a spacious interior, panoramic sunroof, ADAS features, and a feature-packed cabin suited for daily and family use.",
            "img1": "/public/carimages/sierra1.jpg",
            "img2": "/public/carimages/sierra2.jpg",
            "img3": "/public/carimages/sierra3.jpg",
            "img4": "/public/carimages/sierra4.jpg",
            "img5": "/public/carimages/sierra5.jpg"
        },
        {
            "id": 11,
            "carName": "Mahindra Thar",
            "price": '₹11.5 – ₹20.5 Lakh',
            "companyName": "Mahindra & Mahindra Ltd.",
            "officialLink": "https://auto.mahindra.com/suv/thar/THRN.html",
            "shortDescription": "The Mahindra Thar is a rugged lifestyle SUV with commanding road presence, strong off-road capability, and modern features for both adventure and city use. It blends classic design cues with contemporary tech and comfort.",
            "img1": "/public/carimages/thar1.jpg",
            "img2": "/public/carimages/thar2.jpg",
            "img3": "/public/carimages/thar3.jpg",
            "img4": "/public/carimages/thar4.jpg",
            "img5": "/public/carimages/thar5.jpg"
        },

    ])

})

module.exports = router;