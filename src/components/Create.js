import '../index.css'

export function Create(){
    let name ="Kondi Rahul"
    return(
    <div>
        {sun(2,10)}
        <br/>
        {name}
        <br/>
        {"JSX Expresion {} in we can write javascript Notatiion Like {} code"}
        <br/>
        <input type='checkbox' id='sub' />
        {/* <label for='sub' >Subcribe : </label> error is coming for to htmlFor */}
        <label htmlFor='sub' >Subcribe : </label>
    </div>)
}
function sun(n1,n2){
    return n1+n2;
}