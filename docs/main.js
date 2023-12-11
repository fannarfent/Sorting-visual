n = 0
// geimir randomly generateuðu numerinn í array svo létt er að sækjast í þau
const array=[];
init();

let audioCtx=null;

function playNote(freq){
    if(audioCtx==null){
        audioCtx =new(
            AudioContext ||
            webkitAudioContext ||
            window.webkitAudioContext
        )();

    }
    const dur=0.1;
    const osc=audioCtx.createOscillator();
    osc.frequency.value=freq;
    osc.start();
    osc.stop(audioCtx.currentTime+dur);
    const node =audioCtx.createGain();
    node.gain.value=0.1;
    node.gain.linearRampToValueAtTime(
        0, audioCtx.currentTime+dur
    );
    osc.connect(node);
    node.connect(audioCtx.destination);

}
function updateNumIndices() {
    const selectElement = document.getElementById("numIndices");
    const selectedValue = selectElement.value;
    // Uppfærðu 'n' gildið í valda indicie
    n = parseInt(selectedValue);
    // Endurræstu arrayið og vizualizationið
    init();
}
function init(){
    // fæ random númer fra 0 up í 0.99999... og set það í arrayið 
    for(let i=0;i<n;i++){
        array[i]=Math.random();
    }
    showBars();
}
function play(){
    const copy =[...array];
    const moves = bubblesort(copy);
    animate(moves);
}
function animate(moves){
    if(moves.length==0){
        showBars();
        return;
    }
    const move= moves.shift();
    const [i,j]=move.indices;
    if(move.type=="swap"){
        [array[i],array[j]]=[array[j],array[i]];
    }
    //linear interpolation af nótunum sem spilast
    playNote(200+array[i]*500);
    playNote(200+array[j]*500);

    showBars(move);
    setTimeout(function(){
        animate(moves);
    },5);
}
function bubblesort(array){
    const moves =[];
    do{
        var swapped=false;
        // i startar á 1 og skoðar hvort i-1 sé stærri en i
        //ef i er stærri en i-1(i = næsta column í arrayinu)þá byrjar það að færa það í staðin
        // ef i-1 (sem er stæðsta númerið í arrayinu upp að þeim punkt sem það er komið)er stærra en i heldur það áfram að færa sig niður línuna
        // rauður litur i animationinu segir ef indices hafa swappað aka að það sem var á undan hefur fært sig áfram því það er stærra
        // blár þíðir að það sé að færa sig
        for(let i=1;i<array.length;i++){
            moves.push({indices:[i-1,i],type:"comp"});
            if(array[i-1]>array[i]){
                swapped=true;
                moves.push({indices:[i-1,i],type:"swap"});
                [array[i-1],array[i]]=[array[i],array[i-1]]
            }

        }
    }while(swapped);
    return moves
}
function showBars(move){
    container.innerHTML="";

//setur það í const bar sem er síðan appendað sem child af container div svo það sínist á síðuni
    for(let i=0;i<array.length;i++){
        const bar=document.createElement("div");
        bar.style.height=array[i]*100+"%";
        bar.classList.add("bar");
        if(move && move.indices.includes(i)){
            bar.style.backgroundColor=
            move.type=="swap"?"red":"blue";
        }
        container.appendChild(bar);
    }
}