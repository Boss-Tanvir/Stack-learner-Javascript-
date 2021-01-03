var obj = {}
obj.x = 20
obj.y = 30
obj.z = 40
//console.log('x' in obj)

for(let i in obj){
    //console.log(i)
    console.log(i + " : " + obj[i])
}