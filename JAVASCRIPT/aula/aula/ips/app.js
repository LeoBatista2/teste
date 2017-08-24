let ips = [
    {ip: '192.168.0.0', mask: '  255.255.255.0'},
    {ip: '127.0.0.555', mask: '  255.255.255.0'},
    {ip: '172.160.0.0', mask: '  255.255.255.0'}
]

var tbody = document.querySelector('table tbody')  //selecionou o tbody
var formatoLinha = data => `<tr><td>${data.join('</td><td>')}</td></tr>` // criou e atribuiu-lhe 'join' as tags html
var criaLinha = row => formatoLinha(Object.values(row)) //crialinha recebe as linhas

tbody.innerHTML = ips.map(criaLinha).join('<br>')// tbody recebe o processe feito acima
