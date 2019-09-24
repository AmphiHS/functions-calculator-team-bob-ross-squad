//Name: Daniel



// Geometry functions
const circumCircle = (radius) => {
    return 2 * 355/115 * radius;
}



const areaTriangle = (base, height) => {
    return 0.5 * base * height;
}



const areaRegPolygon = (numsides, apothem, sidelength) => {
    return numsides * (0.5 * apothem * sidelength);
}

const volCylinder = (radius, height) => {
    return 355/115 * radius * radius * height;
}


const pythagTheorem = (a,b) => {
   return a * a + b * b;
}


const circArea = (radius) => {
    return (355/113) * (radius * radius);
}


const trapezoidArea = (height, base1, base2) => {
    return  1/2 * height * (base1 + base2);
};


const arcLength = (radius, arc) => {
    return  2*(355/113)*radius*(arc/360);
};


const sectorArea = (radius, angleOfArc) => {
    return  (355/113)*(radius*radius)*(angleOfArc/360);
};

const sphereVolume = (radius) => {
    return  (4/3)*(355/113)*(radius*radius*radius);
};


const coneVolume = (radius, height) => {
    return  (1/3)*(355/113)*(radius*radius)*height;
};



//Unit Conversion 
const inchtoCent = (length) => {
    return 2.54 * length;
}


const centtoInch = (length) => {
    return length / 2.54;
}



const feetMeters = (feet) => {
    return .305*feet;
};


const gallonsLiters = (gallons) => {
    return 3.78*gallons;
};


const cToF = (Celcius) => {
    return 1.8*Celcius+32;
};


const miletokilom = (miles) => {
    return 1.609 * miles;
}

//Coordinate fucntions
const Slope = (x1,y1,x2,y2) => {
    return (y2-y1)/(x2-x1);
};


const distance = (x1,y1,x2,y2) => {
    return ((y2-y1)(y2-y1))+((x2-x1)(x2-x1));
};



