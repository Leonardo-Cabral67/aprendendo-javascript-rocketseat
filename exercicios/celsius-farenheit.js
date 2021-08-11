/* ### Celsius em faranheit 

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra 

    C = (F - 32) * 5/9

    F = C(9/5) + 32 

    */

    function transform(degree) {
        const celsiusExists = degree.toUpperCase().includes('C');
        const fahrenheitExists = degree.toUpperCase().includes('F');
     
        if(!celsiusExists && !fahrenheitExists) {
            throw new Error('Grau não identificado')
        }else if (fahrenheitExists) {
            let updatedDegreeF =Number(degree.toUpperCase().replace("F", ""))
            let formulaFC = (fahrenheit) => (fahrenheit - 32) * 5/9
            let degreeSignToC = 'C'
            
            console.log(formulaFC(updatedDegreeF) +'°'+ degreeSignToC)
        }else if (celsiusExists) {
            let updatedDegreeC =Number(degree.toUpperCase().replace("C", ""))
            let formulaCF = (celsius) => (celsius)*(9/5) + 32
            degreeSignToF = 'F'

            console.log(formulaCF(updatedDegreeC) +'°'+ degreeSignToF)            
        }

        
    
        // return formula(updatedDegree) +'°'+ degreeSign
    }


    try{
        transform('100C')
    } catch(Error) {
        console.log(Error)
    }

 


    // let string = '12F'
    // console.log(Number(string.replace('F', '')))