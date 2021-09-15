const estados = new Array (
'Acre',
'Alagoas',
'Amapá',
'Amazonas',
'Bahia',
'Ceará',
'Distrito Federal',
'Espirito Santo',
'Goiás',
'Maranhão',
'Mato Grosso do Sul',
'Mato Grosso',
'Minas Gerais',
'Pará',
'Paraíba',
'Paraná',
'Pernambuco',
'Piauí',
'Rio de Janeiro',
'Rio Grande do Norte',
'Rio Grande do Sul',
'Rondônia',
'Roraima',
'Santa Catarina',
'São Paulo',
'Sergipe',
'Tocantins',
);

const siglas = new Array (
'AC',
'AL',
'AP',
'AM',
'BA',
'CE',
'DF',
'ES',
'GO',
'MA',
'MS',
'MT',
'MG',
'PA',
'PB',
'PR',
'PE',
'PI',
'RJ',
'RN',
'RS',
'RO',
'RR',
'SC',
'SP',
'SE',
'TO',
);

const select = document.getElementById('estados');
const data = document.getElementById('date');
const button = document.getElementById('button');

for (let x = 0; x < estados.length; x += 1) {
  select.appendChild(document.createElement('option')).setAttribute('value', siglas[x])
  select.lastChild.innerText = estados[x];
}

function inputResult(inputs, textarea, select, span) {
  const result = document.getElementById('result');
  for (let x = 0; x < inputs.length + 2; x += 1) {

    if (x === 6) {
      result.appendChild(document.createElement('p')).innerText = `Moradia: ${select.value}`;
    }

    if (x === 8) {
      result.appendChild(document.createElement('p')).innerText = `Resumo do curriculo: ${textarea.value}`;
    }
    result.appendChild(document.createElement('p')).innerText = `${span[x].innerText}  ${inputs[x].value}`;
  }
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  let dataSplited = data.value.split('/');

  if(dataSplited[0] <= 0 || dataSplited[0] > 31) {
    alert('insira uma data valida');
  } else if(dataSplited[1] <= 0 || dataSplited[1] > 12) {
    alert('insira uma data valida');
  } else if (dataSplited[2] < 0) {
    alert('insira uma data valida');
  }

  const inputs = document.getElementsByTagName('input');
  const textarea = document.getElementsByTagName('textarea')[0];
  const select = document.getElementsByTagName('select')[0];
  const span = document.getElementsByTagName('span');
  inputResult(inputs, textarea, select, span);
});

