for (let i = 0; i < 100; i++){
    console.log(i);
}

const getTriangle = (base, height) =>{
    return base * height /2;
};

console.log('三角形の面積は' + getTriangle(80,2));