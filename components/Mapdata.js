const Mapdata = [
    { latitude: 33.77023, longitude: -84.38815, location: "590 W Peachtree St. NW", occurTime: "7:00 PM", ucrLiteral: "Larceny - From Vehicle", date: "10-11-2023"},
    { latitude: 33.78663, longitude: -84.38139, location: "188 14-Th Street", occurTime: "5:00 PM", ucrLiteral: "Larceny - From Vehicle", date: "2-9-2023"},
    { latitude: 33.77754, longitude: -84.3873, location: "6-Th St. NE - W Peachtree St. NE", occurTime: "12:00 PM", ucrLiteral: "Larceny - From Vehicle", date: "8-14-2023"},
    { latitude: 33.78595, longitude: -84.3837, location: "1150 Peachtree St.", occurTime: "12:30 AM", ucrLiteral: "Larceny - Non Vehicle", date: "7-10-2023"},
    { latitude: 33.77013, longitude: -84.40695, location: "595 North Ave. NW", occurTime: "4:00 AM", ucrLiteral: "Burglary - Non Residence", date: "1-4-2023"},
    { latitude: 33.7812, longitude: -84.40995, location: "691 Image Ave. NW", occurTime: "4:00 PM", ucrLiteral: "Burglary - Non Residence", date: "1-10-2023"},
    { latitude: 33.7817, longitude: -84.38894, location: "989 Spring St. NW", occurTime: "12:05 AM", ucrLiteral: "Aggravated Assault", date: "1-6-2023"},
    { latitude: 33.77762, longitude: -84.38059, location: "835 Piedmont Ave. NE", occurTime: "10:00 PM", ucrLiteral: "Auto-Theft", date: "1-13-2023"},
    { latitude: 33.78155, longitude: -84.38604, location: "44 10-Th St. NE", occurTime: "10:00 AM", ucrLiteral: "Larceny - Non Vehicle", date: "10-2-2023"},
    { latitude: 33.77013, longitude: -84.40735, location: "611 North Ave. NW", occurTime: "12:30 AM", ucrLiteral: "Larceny - From Vehicle", date: "10-12-2023"},
    { latitude: 33.77487, longitude: -84.38975, location: "76 4-Th St. NW", occurTime: "8:00 PM", ucrLiteral: "Larceny - From Vehicle", date: "2-1-2023"},
    { latitude: 33.77894, longitude: -84.38768, location: "880 West Peachtree Street", occurTime: "10:00 PM", ucrLiteral: "Larceny - From Vehicle", date: "7-10-2023"},
    { latitude: 33.77524, longitude: -84.38742, location: "754 W Peachtree St. NW", occurTime: "9:00 AM", ucrLiteral: "Larceny - From Vehicle", date: "1-9-2023"},
    { latitude: 33.78461, longitude: -84.38058, location: "208 12-Th St. NE", occurTime: "8:30 PM", ucrLiteral: "Larceny - From Vehicle", date: "10-5-2023"},
    { latitude: 33.77381, longitude: -84.40575, location: "800 Marietta St. NW", occurTime: "10:30 PM", ucrLiteral: "Larceny - From Vehicle", date: "10-14-2023"},
    { latitude: 33.77346, longitude: -84.38169, location: "3Rd St. NE - Piedmont Ave. NE", occurTime: "10:00 PM", ucrLiteral: "Larceny - From Vehicle", date: "6-6-2023"},
    { latitude: 33.78113, longitude: -84.38095, location: "970 Piedmont Ave. NE", occurTime: "6:45 PM", ucrLiteral: "Larceny - From Vehicle", date: "7-3-2023"},
    { latitude: 33.77381, longitude: -84.40575, location: "800 Marietta St. NW", occurTime: "11:00 PM", ucrLiteral: "Larceny - Non Vehicle", date: "1-3-2023"},
    { latitude: 33.77773, longitude: -84.38718, location: "855 W Peachtree St.", occurTime: "9:15 PM", ucrLiteral: "Auto-Theft", date: "3-14-2023"},
    { latitude: 33.78553, longitude: -84.38569, location: "57 13-Th St. NE", occurTime: "3:00 AM", ucrLiteral: "Aggravated Assault", date: "6-4-2023"},
    { latitude: 33.77267, longitude: -84.38008, location: "216 Ponce De Leon Ave.", occurTime: "9:10 AM", ucrLiteral: "Burglary - Non Residence", date: "7-7-2023"},
    { latitude: 33.78572, longitude: -84.38782, location: "West Peachtree @13-Th", occurTime: "12:15 AM", ucrLiteral: "Larceny - From Vehicle", date: "2-2-2023"},
    { latitude: 33.77451, longitude: -84.40731, location: "600 Means St. NW", occurTime: "10:10 AM", ucrLiteral: "Larceny - From Vehicle", date: "3-13-2023"},
    { latitude: 33.7892, longitude: -84.38789, location: "1270 W Peachtree St. NW", occurTime: "6:30 PM", ucrLiteral: "Larceny - From Vehicle", date: "4-7-2023"},
    { latitude: 33.77248, longitude: -84.38382, location: "116 Ponce De Leon Ave. NE", occurTime: "12:00 PM", ucrLiteral: "Larceny - From Vehicle", date: "8-10-2023"},
    { latitude: 33.77229, longitude: -84.38735, location: "W Peachtree St. NE - Ponce De Leon Ave. NE", occurTime: "5:00 PM", ucrLiteral: "Larceny - From Vehicle", date: "10-5-2023"},
    { latitude: 33.77067, longitude: -84.38023, location: "595 Piedmont Ave. NE", occurTime: "12:50 PM", ucrLiteral: "Larceny - Non Vehicle", date: "9-5-2023"},
    { latitude: 33.77831, longitude: -84.38533, location: "860 Peachtree St. NE", occurTime: "7:30 PM", ucrLiteral: "Larceny - From Vehicle", date: "5-14-2023"},
    { latitude: 33.77119, longitude: -84.38476, location: "662 W Peachtree St.", occurTime: "1:16 PM", ucrLiteral: "Larceny - From Vehicle", date: "9-9-2023"},
    { latitude: 33.79, longitude: -84.39764, location: "16-Th St. @ Atlantic", occurTime: "8:30 AM", ucrLiteral: "Larceny - From Vehicle", date: "1-3-2023"},
    { latitude: 33.78306, longitude: -84.39889, location: "1041 State St. NW", occurTime: "4:00 PM", ucrLiteral: "Auto-Theft", date: "4-5-2023"},
    { latitude: 33.77093, longitude: -84.38492, location: "607 Peachtree St. NE", occurTime: "6:30 AM", ucrLiteral: "Robbery - Pedestrian", date: "5-14-2023"},
    { latitude: 33.78099, longitude: -84.38298, location: "199 12-Th St.", occurTime: "6:00 PM", ucrLiteral: "Larceny - Non Vehicle", date: "4-9-2023"},
    { latitude: 33.774, longitude: -84.38412, location: "715 Peachtree St. NE", occurTime: "2:00 PM", ucrLiteral: "Larceny - Non Vehicle", date: "8-13-2023"},
    { latitude: 33.78626, longitude: -84.39315, location: "188 14St", occurTime: "8:58 PM", ucrLiteral: "Larceny - Non Vehicle", date: "4-1-2023"},
    { latitude: 33.77689, longitude: -84.40807, location: "950 Marietta St. NW", occurTime: "9:51 AM", ucrLiteral: "Larceny - From Vehicle", date: "6-13-2023"},
    { latitude: 33.77923, longitude: -84.38221, location: "905 Juniper St. NE", occurTime: "1:45 PM", ucrLiteral: "Larceny - From Vehicle", date: "8-6-2023"},
    { latitude: 33.77305, longitude: -84.39918, location: "State St. NW - Tech Pkwy NW", occurTime: "6:30 AM", ucrLiteral: "Larceny - From Vehicle", date: "7-5-2023"},
    { latitude: 33.78464, longitude: -84.38494, location: "84 12-Th St. NE", occurTime: "11:30 PM", ucrLiteral: "Larceny - From Vehicle", date: "2-3-2023"},
    { latitude: 33.78171, longitude: -84.38401, location: "10-Th St. NE - Peachtree St. NE", occurTime: "12:00 PM", ucrLiteral: "Larceny - Non Vehicle", date: "7-4-2023"},
];

export default Mapdata;