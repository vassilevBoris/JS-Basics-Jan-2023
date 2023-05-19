function vegetables (arg){
    let argData = arg[0];
        switch (argData) {
            case 'banana':
            case 'apple':
            case 'kiwi':
            case 'cherry':
            case 'lemon':
            case 'grapes': console.log('fruit');break;
            case 'tomato':
            case 'cucumber':
            case 'pepper':
            case 'carrot': console.log('vegetable');break;      
           default: console.log('Unknown');break;
        }
}
vegetables(["carrot"]);