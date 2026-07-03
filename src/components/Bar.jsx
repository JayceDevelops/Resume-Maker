import '../styles/Bar.css';

export default function Bar({active}){

    let classStatus = '';
    if (active){
        classStatus = 'bar active';
    }
    else {
        classStatus = 'bar';
    }
    
    return (
        <div className={classStatus}></div>
    );
}