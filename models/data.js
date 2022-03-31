const datas = [
    {id: 45671, Car: 'Mustang', Muscle: true},
    {id: 45672,Car: 'Camaro', Muscle: true},
    {id: 45673,Car: 'Corvette', Muscle: true},
    {id: 45674,Car: 'Challenger', Muscle: true},
    {id: 45675,Car: 'Charger', Muscle: true},
    {id: 45676,Car: 'GTO', Muscle: true},
    {id: 45677,Car: 'Rx-7', JDM: true},
    {id: 45678,Car: 'R-34', JDM: true},
    {id: 45679,Car: 'WRX', JDM: true},
    {id: 45680,Car: 'GTR', JDM: true},
    {id: 45681,Car: 'Supra', JDM: true},
    {id: 45682,Car: 'NSX', JDM: true},
  ];

  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
    
    
  };

  function update(id, Car) {
    datas[id] = datas;
  }

// function deleteOne(id) {
//     datas.splice(datas.indexOf(datas[id]), 1);
//     // let datas = datas.find((datas) => datas.id === parseInt(id));
//     console.log(id + 'this is the car')
// }

function deleteOne(id) {
  // Find the index based on the id of the todo object
  const idx = datas.findIndex(data => data.id === parseInt(id));
  datas.splice(idx, 1);
}

function getAll(){
    return datas
}


  function getOne(id){
    return datas.find(data => data.id === parseInt(id))
  }

  function create(data) {
    // Add the id
    data.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    data.Muscle = false;
    datas.push(data);
  }