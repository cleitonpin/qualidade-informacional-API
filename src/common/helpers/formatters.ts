export const summedValues = (data: any) => {
  const resultado: { [key: string]: any } = {};
  let totalGeral = 0;

  for (const categoria in data) {
    if (data.hasOwnProperty(categoria)) {
      let totalCategoria = 0;
      const categoriaObj = data[categoria];

      for (const subCategoria in categoriaObj) {
        if (categoriaObj.hasOwnProperty(subCategoria)) {
          const subCategoriaObj = categoriaObj[subCategoria];

          for (const item in subCategoriaObj) {
            if (subCategoriaObj.hasOwnProperty(item)) {
              const itemObj = subCategoriaObj[item];

              if (itemObj.hasOwnProperty('value')) {
                totalCategoria += itemObj['value'];
              }
            }
          }
        }
      }

      resultado[categoria] = {
        total: +totalCategoria.toFixed(2),
        observation: categoriaObj['observation'] || '',
      };
      totalGeral += totalCategoria;
    }
  }

  resultado.totalCategories = +totalGeral.toFixed(2);
  return resultado;
};

export function transformObjectToArray(obj: any) {
  const result = [];
  for (const key in obj) {
    if (key !== 'totalCategories') {
      const newObj = { category: key, ...obj[key] };
      result.push(newObj);
    }
  }
  result.push({ category: 'totalCategories', total: obj.totalCategories });
  return result;
}

export const formatCategory: Record<string, string> = {
  institutional: 'Institucional',
  actions_softwares: 'Ações e Programas',
  students: 'Estudantes',
  humanResources: 'Recursos Humanos',
  economicInformation: 'Informações Econômicas',
};

export const getMessageForTotalSum = (totalSum: number) => {
  if (totalSum === 0) {
    return 'Portal sem qualidade informacional';
  } else if (totalSum > 0.1 && totalSum <= 4.5) {
    return 'Portal com baixa qualidade informacional';
  } else if (totalSum > 4.6 && totalSum <= 9) {
    return 'Portal com razoável qualidade informacional';
  } else if (totalSum > 9.1 && totalSum <= 13.5) {
    return 'Portal com boa qualidade informacional';
  } else if (totalSum > 13.6 && totalSum <= 18) {
    return 'Portal com ótima qualidade informacional';
  }

  return 'Portal com qualidade informacional';
};

export const jsonToCSV = (json) => {
  const rows = [];
  const headers = ['Section', 'Criteria', 'Score', 'Observation', 'Link'];
  rows.push(headers.join(','));

  json.forEach((item) => {
    const section = item.section;
    item.criteria.forEach((criterion) => {
      const row = [
        section,
        criterion.name,
        criterion.score,
        criterion.observation,
        criterion.link,
      ];
      rows.push(row.join(','));
    });
  });

  return rows.join('\n');
};
