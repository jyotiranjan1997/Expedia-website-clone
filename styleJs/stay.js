document.querySelector("#sign").addEventListener("click",changeButton)
function changeButton(){
    document.querySelector(".popup").style.display="flex";
}

document.querySelector("button").addEventListener("click",changePage);

function changePage(){
    window.location.href="signin.html";
}

document.querySelector("select").addEventListener("change",pageChanged);

function pageChanged(){
    let select=document.querySelector("select").value;
    if(select=="Stays"){
        window.location.href="stay.html";
    }else if(select=="Packages"){
        window.location.href="holiday.html";
    }
}

let arr=[{
    image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6360000/6356600/6356509/6b32cd1c_b.jpg",
    heading:"JW Marriott Hotel Bengaluru",
    area:"Bengaluru",
    h4:"Fully refundable",
    rating:"4.6/5 Wonderful(143 reviews)",
    price: 17500,
    actprice:"Rs20,650 total"

},
{
    image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
    heading:"Hilton Bangalore Embassy GolfLinks",
    area:"Bengaluru",
    h4:"",
    rating:"4.4/5 Wonderful(80 reviews)",
    price: 13500,
    actprice:"Rs16,727 total"

},
{
    image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/24000000/23090000/23088600/23088585/728838fe_b.jpg",
    heading:"Sheraton Grand Bengaluru Whitefield",
    area:"Bengaluru",
    h4:"Fully refundable",
    rating:"4.7/5 Wonderful(35 reviews)",
    price: 12750,
    actprice:"Rs15,045 total"

},
{
    image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
    heading:"Fairfield By Marriott Bengaluru Rajajinagar",
    area:"Bengaluru",
    h4:"Fully refundable",
    rating:"4.0/5 Very Good(184 reviews)",
    price: 6999,
    actprice:"Rs7,839 total"

},
{
    image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6470000/6468000/6467933/123bcc06_b.jpg",
    heading:"The Ritz-Carlton,Bangalore",
    area:"Bengaluru",
    h4:"Fully refundable",
    rating:"4.7/5 Exceptional(143 reviews)",
    price: 17600,
    actprice:"Rs20,768 total"

},
{
    image:"https://images.trvl-media.com/hotels/1000000/860000/851500/851448/360577d2.jpg?impolicy=resizecrop&rw=455&ra=fit",
    heading:"The Leela Palace Bengaluru",
    area:"Bengaluru",
    h4:"Fully refundable",
    rating:"4.6/5 Wonderful(248 reviews)",
    price: 27375,
    actprice:"Rs32,303 total"

},
{
    image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
    heading:"ITC Gardenia,a Luxury Collection Hotel",
    area:"Bengaluru",
    h4:"Fully refundable",
    rating:"4.6/5 Wonderful(293 reviews)",
    price: 15500,
    actprice:"Rs18,290 total"

},
{
    image:"https://images.trvl-media.com/hotels/1000000/30000/21700/21672/3b47de32.jpg?impolicy=resizecrop&rw=455&ra=fit",
    heading:"The Oberoi, Bengaluru",
    area:"Bengaluru",
    h4:"Fully refundable",
    rating:"4.8/5 Exceptional(353 reviews)",
    price: 14212,
    actprice:"Rs16,770 total"

},
{
    image:"https://images.trvl-media.com/hotels/7000000/6360000/6356600/6356509/6b32cd1c.jpg?impolicy=resizecrop&rw=455&ra=fit",
    heading:"JW Marriott Hotel Bengaluru",
    area:"Bengaluru",
    h4:"Fully refundable",
    rating:"4.6/5 Wonderful(143 reviews)",
    price: 17500,
    actprice:"Rs20,650 total"

},
{
    image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
    heading:"Hilton Bangalore Embassy GolfLinks",
    area:"Bengaluru",
    h4:"",
    rating:"4.4/5 Wonderful(80 reviews)",
    price: 13500,
    actprice:"Rs16,727 total"

},
{
    image:"https://images.trvl-media.com/hotels/13000000/13000000/12997400/12997353/1b6e9e76.jpg?impolicy=resizecrop&rw=455&ra=fit",
    heading:"Taj Bangalore",
    area:"Bengaluru",
    h4:"Fully refundable",
    rating:"4.7/5 Exceptional(473 reviews)",
    price: 14750,
    actprice:"Rs17,405 total"

},
{
    image:"https://images.trvl-media.com/hotels/1000000/850000/848900/848856/1f45b83d.jpg?impolicy=resizecrop&rw=455&ra=fit",
    heading:"Radisson Blu Atria Bengaluru",
    area:"Bengaluru",
    h4:"",
    rating:"4.2/5 Very good(155 reviews)",
    price: 7920,
    actprice:"Rs9,405 total"

},
{
    image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
    heading:"Hyatt Centric MG Road Bangalore",
    area:"Bengaluru",
    h4:"Fully refundable",
    rating:"4.1/5 Very good(223 reviews)",
    price: 8500,
    actprice:"Rs10,405 total"
},
{
    image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/6000000/5100000/5098500/5098424/615f7c84_b.jpg",
    heading:"Park Hyatt Chennai",
    area:"Chennai",
    h4:"",
    rating:"4.6/5 Wonderful(306 reviews)",
    price: 7268,
    actprice:"Rs8,140 total"
},
{
    image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
    "name":"Park Hyatt Chennai",
    "area":"Chennai",
    "rating":"4.6/5",
    "price":7268,
    "actprice":"Rs8,140 total"
    },
    {
        image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
    "name":"Hilton Chennai",
    "area":"Chennai",
    "rating":"4.4/5",
    "price":9500,
    "actprice":"Rs11,210 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/25000000/24300000/24290700/24290609/91a43d87_b.jpg",
    "name":"Courtyard by Marriott Chennai",
    "area":"Chennai",
    "rating":"4.1/5",
    "price":6000,
    "actprice":"Rs6,720 total"
    },
    {
        image:"https://images.trvl-media.com/hotels/2000000/1490000/1489700/1489627/8a0c1600.jpg?impolicy=resizecrop&rw=455&ra=fit",
    "name":"ITC Grand Chola, a Luxury Collection Hotel, Chennai",
    "area":"Chennai",
    "rating":"4.4/5",
    "price":11500,
    "actprice":"Rs13,570 total"
    },
    {
        image:"https://images.trvl-media.com/hotels/4000000/3020000/3010700/3010664/b8e73445.jpg?impolicy=resizecrop&rw=455&ra=fit",
    "name":"Crowne Plaza Chennai Adyar Park, an IHG Hotel",
    "area":"Chennai",
    "rating":"4.2/5",
    "price":"Rs7,078",
    "actprice":"Rs8,941 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/25000000/24300000/24290700/24290609/91a43d87_b.jpg",
    "name":"Taj Club House",
    "area":"Chennai",
    "rating":"4.4/5",
    "price":"Rs5,600",
    "actprice":"Rs6,272 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
    "name":"Taj Connemara",
    "area":"Chennai",
    "rating":"4.4/5",
    "price":"Rs9,250",
    "actprice":"Rs10,915 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
    "name":"Radisson Blu Hotel Chennai City Centre",
    "area":"Chennai",
    "rating":"4.3/5",
    "price":"Rs6,333",
    "actprice":"Rs7,092 total"
    },
    {
        image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
    "name":"Taj Coromandel",
    "area":"Chennai",
    "rating":"4.6/5",
    "price":"Rs10,200",
    "actprice":"Rs12,036 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/25000000/24300000/24290700/24290609/91a43d87_b.jpg",
    "name":"The Leela Palace Chennai",
    "area":"Chennai",
    "rating":"4.6/5",
    "price":"Rs16,000",
    "actprice":"Rs18,880 total"
    },
    {
        image:"https://images.trvl-media.com/hotels/5000000/4900000/4896100/4896027/00a73251.jpg?impolicy=resizecrop&rw=455&ra=fit",
    "name":"Holiday Inn Chennai OMR IT Expressway, an IHG Hotel",
    "area":"Chennai",
    "rating":"4.1/5",
    "price":"Rs7,200",
    "actprice":"Rs8,288 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
    "name":"JS Grand Residency",
    "area":"Chennai",
    "price":"Rs2,499",
    "actprice":"Rs2,799 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
    "name":"Crowne Plaza Chennai Adyar Park, an IHG Hotel",
    "area":"Chennai",
    "rating":"4.2/5",
    "price":"Rs7,078",
    "actprice":"Rs8,941 total"
    },
    {
        image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
    "name":"Ramada by Wyndham Chennai Egmore",
    "area":"Chennai",
    "rating":"3.8/5",
    "price":"Rs4,399",
    "actprice":"Rs4,927 total"
    },
    {
        image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
    "name":"Park Hyatt Chennai",
    "area":"Chennai",
    "rating":"4.6/5",
    "price":"Rs7,268",
    "actprice":"Rs8,140 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/25000000/24300000/24290700/24290609/91a43d87_b.jpg",
    "name":"Hyatt Regency Chennai",
    "area":"Chennai",
    "rating":"4.1/5",
    "price":"Rs7,469",
    "actprice":"Rs8,365 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
    "name":"Courtyard by Marriott Chennai",
    "area":"Chennai",
    "rating":"4.1/5",
    "price":"Rs6,000",
    "actprice":"Rs6,720 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
    "name":"Welcomhotel by ITC Hotels, Cathedral Road, Chennai",
    "area":"Chennai",
    "rating":"4.3/5",
    "price":"Rs7,950",
    "actprice":"Rs9,381 total"
    },
    {
        image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
    "name":"Trident, Chennai",
    "area":"Chennai",
    "rating":"4.5/5",
    "price":"Rs9,250",
    "actprice":"Rs10,915 total"
    },
    {
        image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
    "name":"The Accord Metropolitan",
    "area":"Chennai",
    "rating":"4.1/5",
    "price":"Rs6,750",
    "actprice":"Rs7,898 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
    "name":"Somerset Greenways Chennai",
    "area":"Chennai",
    "rating":"4.4/5",
    "price":"Rs7,844",
    "actprice":"Rs9,256 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
    "name":"The Raintree, St. Mary's Road",
    "area":"Chennai",
    "rating":"4.6/5",
    "price":"Rs6,999",
    "actprice":"Rs7,839 total"
    },
    {
        image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
    "name":"ITC Grand Chola, a Luxury Collection Hotel, Chennai",
    "area":"Chennai",
    "rating":"4.4/5",
    "price":"Rs11,500",
    "actprice":"Rs13,570 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/25000000/24300000/24290700/24290609/91a43d87_b.jpg",
    "name":"Hotel Savera",
    "area":"Chennai",
    "rating":"3.7/5",
    "price":"Rs5,350",
    "actprice":"Rs5,992 total"
    },
    {
        image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
    "name":"Raj Park Chennai",
    "area":"Chennai",
    "rating":"3.5/5",
    "price":"Rs3,432",
    "actprice":"Rs3,844 total"
    },
    {
        image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Hyatt Hyderabad Gachibowli",
        "area":"Hyderabad",
        "rating":"4.3/5",
        "price":"Rs6,390",
        "actprice":"Rs7,157 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Le Meridien Hyderabad",
        "area":"Hyderabad",
        "rating":"4.3/5",
        "price":"Rs5,850",
        "actprice":"Rs7,731 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
        "name":"Park Hyatt Hyderabad",
        "area":"Hyderabad",
        "rating":"4.3/5",
        "price":"Rs13,079",
        "actprice":"Rs15,433 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/25000000/24300000/24290700/24290609/91a43d87_b.jpg",
        "name":"ITC Kohenur, a Luxury Collection Hotel, Hyderabad",
        "area":"Hyderabad",
        "rating":"4.2/5",
        "price":"Rs10,500",
        "actprice":"Rs12,390 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
        "name":"ITC Kakatiya, a Luxury Collection Hotel, Hyderabad",
        "area":"Hyderabad",
        "rating":"4.2/5",
        "price":"Rs7,075",
        "actprice":"Rs7,924 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Taj Krishna",
        "area":"Hyderabad",
        "rating":"4.2/5",
        "price":"Rs8,750",
        "actprice":"Rs10,325 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
        "name":"Taj Banjara",
        "area":"Hyderabad",
        "rating":"3.5/5",
        "price":"Rs4,500",
        "actprice":"Rs5,040 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Hyderabad Marriott Hotel & Convention Centre",
        "area":"Hyderabad",
        "rating":"4.1/5",
        "price":"Rs7,065",
        "actprice":"Rs8,337 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/25000000/24300000/24290700/24290609/91a43d87_b.jpg",
        "name":"Treebo Trip Hotel Aflah",
        "area":"Hyderabad",
        "price":"Rs1,463",
        "actprice":"Rs1,638 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
        "name":"Treebo Trend Hotel Arastu Grand",
        "area":"Hyderabad",
        "price":"Rs2,183",
        "actprice":"Rs2,445 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Hyderabad Marriott Hotel & Convention Centre",
        "area":"Hyderabad",
        "rating":"4.1/5",
        "price":"Rs7,065",
        "actprice":"Rs8,337 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Treebo Trend Syn Elite Residency",
        "area":"Hyderabad",
        "price":"Rs1,918",
        "actprice":"Rs2,148 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
        "name":"Courtyard by Marriott Hyderabad",
        "area":"Hyderabad",
        "rating":"4.4/5",
        "price":"Rs4,888",
        "actprice":"Rs5,767 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"The Park Hyderabad",
        "area":"Hyderabad",
        "rating":"3.5/5",
        "price":"Rs6,435",
        "actprice":"Rs7,207 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"ITC Kakatiya, a Luxury Collection Hotel, Hyderabad",
        "area":"Hyderabad",
        "rating":"4.2/5",
        "price":"Rs7,075",
        "actprice":"Rs7,924 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
        "name":"The Golkonda Hyderabad",
        "area":"Hyderabad",
        "rating":"3.8/5",
        "price":"Rs4,590",
        "actprice":"Rs5,141 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Taj Deccan",
        "area":"Hyderabad",
        "rating":"4.3/5",
        "price":"Rs8,750",
        "actprice":"Rs10,325 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
        "name":"Park Hyatt Hyderabad",
        "area":"Hyderabad",
        "rating":"4.3/5",
        "price":"Rs13,079",
        "actprice":"Rs15,433 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Radisson Blu Plaza Hotel Hyderabad Banjara Hills",
        "area":"Hyderabad",
        "rating":"3.8/5",
        "price":"Rs7,500",
        "actprice":"Rs8,400 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
        "name":"Mercure Hyderabad KCP Hotel",
        "area":"Hyderabad",
        "rating":"4.3/5",
        "price":"Rs5,525",
        "actprice":"Rs6,188 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Vivanta Hyderabad, Begumpet",
        "area":"Hyderabad",
        "rating":"4.2/5",
        "price":"Rs8,000",
        "actprice":"Rs9,440 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
        "name":"Hyatt Place Hyderabad Banjara Hills",
        "area":"Hyderabad",
        "rating":"3.9/5",
        "price":"Rs8,400",
        "actprice":"Rs9,912 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Taj Falaknuma Palace",
        "area":"Hyderabad",
        "rating":"5.0/5",
        "price":"Rs28,000",
        "actprice":"Rs33,040 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Hotel Green Park",
        "area":"Hyderabad",
        "rating":"4.0/5",
        "price":"Rs5,130",
        "actprice":"Rs5,746 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Best Western Ashoka",
        "area":"Hyderabad",
        "rating":"3.7/5",
        "price":"Rs4,692",
        "actprice":"Rs5,255 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"The Westin Hyderabad Mindspace",
        "area":"Hyderabad",
        "rating":"4.4/5",
        "price":"Rs7,395",
        "actprice":"Rs8,726 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
        "name":"Lemon Tree Hotel Banjara Hills",
        "area":"Hyderabad",
        "rating":"4.4/5",
        "price":"Rs8,279",
        "actprice":"Rs10,746 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"ITC Kohenur, a Luxury Collection Hotel, Hyderabad",
        "area":"Hyderabad",
        "rating":"4.2/5",
        "price":"Rs10,500",
        "actprice":"Rs12,390 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
        "name":"Treebo Trend Hotel Arastu",
        "area":"Hyderabad",
        "price":"Rs1,829",
        "actprice":"Rs2,049 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"OYO 2840 Kanha Grand",
        "area":"Hyderabad",
        "price":"Rs1,354",
        "actprice":"Rs1,516 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Hotel Siri Inn",
        "area":"Hyderabad",
        "price":"Rs2,500",
        "actprice":"Rs2,800 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
        "name":"Courtyard by Marriott Hyderabad",
        "area":"Hyderabad",
        "rating":"4.4/5",
        "price":"Rs4,888",
        "actprice":"Rs5,767 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"The Westin Hyderabad Mindspace",
        "area":"Hyderabad",
        "rating":"4.4/5",
        "price":"Rs7,395",
        "actprice":"Rs8,726 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Marigold by Greenpark",
        "area":"Hyderabad",
        "rating":"4.2/5",
        "price":"Rs5,596",
        "actprice":"Rs6,267 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
        "name":"Holiday Inn Express Hyderabad Banjara Hills, an IHG Hotel",
        "area":"Hyderabad",
        "rating":"3.7/5",
        "price":"Rs3,600",
        "actprice":"Rs4,592 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Trident Hyderabad",
        "area":"Hyderabad",
        "rating":"4.6/5",
        "price":"Rs8,750",
        "actprice":"Rs10,325 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Hyatt Hyderabad Gachibowli",
        "area":"Hyderabad",
        "rating":"4.3/5",
        "price":"Rs6,390",
        "actprice":"Rs7,157 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
        "name":"Hotel SM Deccan Park",
        "area":"Hyderabad",
        "rating":"5.0/5",
        "price":"Rs2,000",
        "actprice":"Rs2,800 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
        "name":"Hampshire Plaza Hyderabad",
        "area":"Hyderabad",
        "rating":"3.8/5",
        "price":"Rs4,500",
        "actprice":"Rs5,040 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Alekhya Residency",
        "area":"Hyderabad",
        "price":"Rs1,624",
        "actprice":"Rs1,819 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"OYO 73851 Hotel Hyderabad Comfort Lakdikapul",
        "area":"Hyderabad",
        "price":"Rs991",
        "actprice":"Rs1,064 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
        "name":"OYO 63021 Hotel Hill 9",
        "area":"Hyderabad",
        "rating":"5.0/5",
        "price":"Rs1,062",
        "actprice":"Rs1,189 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
        "name":"Capital O 46248 Marjan International",
        "area":"Hyderabad",
        "rating":"4.0/5",
        "price":"Rs2,584",
        "actprice":"Rs2,894 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Suprabath Residency",
        "area":"Hyderabad",
        "price":"Rs1,850",
        "actprice":"Rs2,072 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Novotel Hyderabad Airport Hotel",
        "area":"Hyderabad",
        "rating":"4.0/5",
        "price":"Rs8,175",
        "actprice":"Rs9,646 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/25000000/24300000/24290700/24290609/91a43d87_b.jpg",
        "name":"Capital O 23543 Hotel Vaishnavi",
        "area":"Hyderabad",
        "price":"Rs1,147",
        "actprice":"Rs1,285 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/2000000/1540000/1531600/1531574/dbb2d077.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Welkin Hotel",
        "area":"Hyderabad",
        "rating":"4.0/5",
        "price":"Rs3,000",
        "actprice":"Rs3,360 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6500000/6493900/6493895/27a0c3a7_b.jpg",
        "name":"Sheraton Hyderabad Hotel",
        "area":"Hyderabad",
        "rating":"4.4/5",
        "price":"Rs7,875",
        "actprice":"Rs9,293 total"
        },
        {
            image:"https://images.trvl-media.com/hotels/4000000/3120000/3114400/3114317/f0784799.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "name":"Fairfield by Marriott Hyderabad Gachibowli",
        "area":"Hyderabad",
        "rating":"3.8/5",
        "price":"Rs6,204",
        "actprice":"Rs6,949 total"
        },
        {
            image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
        "name":"Holiday Inn Express Hyderabad Hitec City, an IHG Hotel",
        "area":"Hyderabad",
        "rating":"3.2/5",
        "price":"Rs3,995",
        "actprice":"Rs4,811 total"
        }

]
