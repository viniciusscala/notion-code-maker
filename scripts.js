document.querySelector('button').addEventListener('click', () => {
  const rawValue = document.querySelector('textarea').value;
  const finalResult = createNotionCode(rawValue);
  document.querySelector('p').innerHTML = finalResult;
});

const createNotionCode = (value) => {
  const arrayOfSkills = value.split('\n');

  arrayOfSkills.forEach((element, index) => {
    arrayOfSkills[index] = `prop("${element}")`;
  });

  const arrayOfSkillsLevels = [[],[],[]];

  arrayOfSkills.forEach(element => {
    if(element.includes('(1)')) {
      arrayOfSkillsLevels[0].push(element);
    } else if(element.includes('(2)')) {
      arrayOfSkillsLevels[1].push(element);
    } else if(element.includes('(3)')) {
      arrayOfSkillsLevels[2].push(element);
    }
  });

  console.log(arrayOfSkillsLevels);

  const arrayOfSkillsString = [];

  arrayOfSkillsLevels.forEach((elements) => {
    arrayOfSkillsString.push(elements.join(' and '));
  });

  // console.log('arrayOfSkillsString', arrayOfSkillsString);

  const finalResult = `${arrayOfSkillsString[0]} ? ( (${arrayOfSkillsString[1]} ? ( ${arrayOfSkillsString[2]} ? (2 : 3) : 1)) : 0)`;
  console.log('finalResult', finalResult);
  return finalResult;
};



// (prop("HTML(1): div") and prop("HTML(1): section") and prop("HTML(1): h1...h5") and prop("HTML(1): img")) ?  
//   ((prop("HTML(2): form") and prop("HTML(2): table") and prop("HTML(2): video") and prop("HTML(2): Atributos personalizados")) ? 
//     (prop("HTML(3): SEO") and prop("HTML(3): SEO") and prop("HTML(3): SEO") ? 
//       3 : 
//     2) : 
//   1) : 
// 0


// skills1 ? (skills2 ? (skills3 ? 3 : 2)  : 1) : 0



// Habilidadex(1): skill y and Habilidadex(1): skill y and Habilidadex(1): skill y and Habilidadex(1): skill y and Habilidadex(1): skill y ?
//   ( (Habilidadex(2): skill y and Habilidadex(2): skill y and Habilidadex(2): skill y and Habilidadex(2): skill y and Habilidadex(2): skill y and Habilidadex(2): skill y and Habilidadex(2): skill y and Habilidadex(2): skill y and Habilidadex(2): skill y and Habilidadex(2): skill y and Habilidadex(2): skill y ?
//     ( Habilidadex(3): skill y and Habilidadex(3): skill y and Habilidadex(3): skill y and Habilidadex(3): skill y and Habilidadex(3): skill y and Habilidadex(3): skill y and Habilidadex(3): skill y and Habilidadex(3): skill y ? (2 : 3) : 1)) : 0)

// (1) and (1) ? (
//   ((2) and (2) ? (
//      (3) and (3) ? (2 : 3) : 1
//   )) : 0
// )