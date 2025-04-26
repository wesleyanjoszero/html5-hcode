let tab = document.querySelector('#tab tbody')
let valueA = 5
tab.innerHTML = ''

for (let valueB = 0; valueB <= 10; valueB++) {
    let r = valueA * valueB
    
    let tpl = `
                <tr>
                    <td>${valueA}</td>
                    <td>X</td>
                    <td>${valueB}</td>
                    <td>=</td>
                    <td>${r}</td>
                </tr>
            `
    
    let tr = document.createElement('tr')
    tr.innerHTML = tpl
    tab.append(tr)
}