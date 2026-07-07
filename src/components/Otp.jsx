import { useState, useRef, useEffect} from "react";

export default function Otp({number}){
    const style = {
        height: "50px",
        width: "40px",
        marginLeft: "5px",
        fontSize: "30px",
        textAlign: "center",
    };
    const [valueArr, SetvalueArr] = useState(new Array(number).fill(""));
    const refArr = useRef([]);
    useEffect(()=> {
        refArr.current[0]?.focus();
    },[])

    function inputCheck(value, index){
        if(isNaN(value)) return
            let newArr = [...valueArr];
            let newVal = value.trim();
            console.log(newVal);
            newArr[index] = newVal.slice(-1);
            SetvalueArr(newArr);
            newVal && refArr.current[index + 1]?.focus();
    }
    const focusAtEnd1 = (index) => {
        const input = refArr.current[index+1];

        requestAnimationFrame(() => {
        input.focus();
        input.setSelectionRange(1, 1);
        });
    };
    const focusAtEnd2 = (index) => {
        const input = refArr.current[index-1];
        requestAnimationFrame(() => {
        input.focus();
        input.setSelectionRange(1, 1);
        });
    };

    function cleanValue(e, index){
        if(e.key == "Backspace"){
            {!e.target.value && refArr.current[index-1]?.focus();}
        }
        if(e.key == "ArrowRight"){
           focusAtEnd1(index);
        }
        if(e.key == "ArrowLeft"){
           focusAtEnd2(index);
        }
       

    }


    return (
        <div >
             {valueArr.map((a, index) =>
                 <input style={style}
                  key={index} 
                  type="text" 
                  ref={a => refArr.current[index] = a}
                  value={valueArr[index]} 
                  onChange={(e)=> inputCheck(e.target.value, index)}
                  onKeyDown={(e) => cleanValue(e, index)}
                  />)}
        </div>  
    )
}

