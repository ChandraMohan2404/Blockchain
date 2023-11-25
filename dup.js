function removedup(s,n){
    var exists =new Map();

    var st="";
    for (var i=0; i<n; i++){
        if (!exists.has(s[i])){
            st += s[i];
            exists.set(s[i],1);
        }
    }
    return st;
}

    var s = "Blockckckuih";
    var n = s.length;
    console.log(removedup(s,n));