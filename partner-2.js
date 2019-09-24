//Name: Daniel




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
// Geometry functions done


const inchtoCent = (length) => {
    return 2.54 * length;
}


const centtoInch = (length) => {
    return length / 2.54;
}
