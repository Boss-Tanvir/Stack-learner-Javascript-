
import Cricketer from './Cricketer'

class Person extends Cricketer {
    constructor(name,age,type,country){
        super(type,country)
        this.name = name
        this.age = age 
        this.math = function () {
            
        }      
    }
    name2 = "Tanvir"
    static play(){    
        console.log(this.name + ' is Playing')
    
    }
    eat(){
        console.log(this.name + ' is eating')
        
    }
    eat2(){
        // Method Overriting
        console.log("Playing with me")
        
    }
}

export default Person