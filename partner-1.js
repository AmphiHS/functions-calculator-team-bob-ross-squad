//Name: JASIEL VILLARREAL
const circArea = (radius) => {
    return (355/113) * (radius * radius);
};
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