const companies = [
    'Airconix', 'Qualcore', 'Hivemind', 'Thermolock', 'Sunopia'
  ];
  const firstNames = [
    'Raymond', 'Vernon', 'Dori', 'Jason', 'Rico'
  ];
  const lastNames = [
    'Neal', 'Dunham', 'Seabury', 'Pettey', 'Muldoon'
  ];
  const random = (array) => array[ Math.floor(Math.random() * array.length) ];
  const dataSync = ({ num = 50, startRow = 0, total = 50000 } = {}) => {
    const data = [];
    for (let i = 0; i < num; i++) {
      const company = random(companies);
      const first = random(firstNames);
      const last = random(lastNames);
      data.push({
        id: i + startRow,
        name: `${first} ${last}`,
        company,
        email: `${first.toLowerCase()}.${last.toLowerCase()}@${company.toLowerCase()}.com`
      });
    }
    return { data, total };
  };
  const dataAsync = async ({ delay = 500, num, startRow, total } = {}) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataSync({ num, startRow, total }));
      }, delay);
    });
  };
  export default dataSync;
  export { dataAsync };
  
  