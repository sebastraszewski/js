let _ = {
    clamp(num,lower,upper){
        let lowerClampedValue = Math.max(num,lower)
        let clampedValue = Math.min(lowerClampedValue,upper)
        return clampedValue
    },
    inRange(number,start,end){      
        if (end==undefined){
            end= start;
            start = 0
        }
        if (start>end){
            const temp = end
            end = start
            start = temp
        }       
        const isInRange = (number<end && number>=start) ? true : false;
        return isInRange;
    },
    words(str){
        const strArr = str.split(' ')
        return strArr;
    },
    pad(str, len){
        if (str.length >=len){
            return str;
        }
        const startPaddingLength = Math.floor((len-str.length)/2)
        const endPaddingLength = len - str.length - startPaddingLength
        const paddedString = `${' '.repeat(startPaddingLength)}${str}${' '.repeat(endPaddingLength)}`
        return paddedString
    },
    has(obj,key){
        let hasValue=obj.hasOwnProperty(key);
        return hasValue
    },
    invert(obj){
        const invertedObject = {}
        for (let key in obj){
            if(obj.hasOwnProperty(key)){
                let orginalValue = obj[key]
                invertedObject[orginalValue] = key
            }
        }
        return invertedObject
    },
    findKey(obj,predicate){
        for (let key in obj){
            if(obj.hasOwnProperty(key)){
                let value = obj[key]
                predicateReturnValue = predicate(value)
                if (predicateReturnValue){
                    return key
                }
            }
        }
        return undefined
    },
    drop(array,number){
        if (number == undefined){
            number = 1
        }
        const newArr = array.slice(number,array.length)
        return newArr
    },
    dropWhile(array,predicate){
        const indexIsSmallerThanElement = (element, index) => index < element;
        let cb = (element,index) => {
            let ew = !indexIsSmallerThanElement(element,index,array)
            return ew
        }
        let numIndex = array.findIndex(cb)
        let newArr = this.drop(array,numIndex)
        return newArr
    },
    chunk(array,size){
        if (size==undefined){
            size = 0
        } else {
            size--
        }
        
        let chunkArray = []
        const resultedArray = []
        for(let i = 0, j = 0;i<array.length;i++,j++){
            chunkArray.push(array[i])
            if (j==size ){
                resultedArray.push(chunkArray)
                j=-1
                chunkArray=[]
            } else if (array.length-1==i){
                resultedArray.push(chunkArray)
            }
        }
        return resultedArray
    }
};
let oo = _
oo.inRange(3,1,3)
oo.pad('hi',9)
obj = {'key': 'val'}
oo.invert(obj)
oo.drop(['key','hey','do'])
oo.dropWhile([1,2,0,4])
oo.chunk([1,2,3,4,5,6,7,8],3)





// Do not write or modify code below this line.
module.exports = _;
