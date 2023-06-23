function listProcessor(input) {
    const finalList = [];

    const listCommands = {
        add: text => { finalList.push(text) },
        remove: text => { return finalList.splice(finalList.indexOf(text), 1) },
        print: () => { console.log(finalList.join(',')); }
    }

    input.forEach(ele => {
        let [command, text] = ele.split(' ');
        return listCommands[command](text);
    });
}