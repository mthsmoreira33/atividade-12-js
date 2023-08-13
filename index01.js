const prompt = require('prompt-sync')();
const cars = [];
let option = 0;
let id = 1;

while (option !== 6) {
    option = Number(
      prompt(
        `Bem-vindo ao sistema de CRUD de veículos:\n No momento, o sistema tem ${cars.length} carros cadastrados \n Escolha uma das opções para interagir com o sistema: \n 1 - Cadastrar Veículo \n 2 - Listar todos os veículos \n 3 - Filtrar Veículos por Marca \n 4 - Atualizar Veículo \n 5 - Remover Veículo \n 6 - Sair do Sistema \n`
      )
    );
    switch (option) {
      case 1:
        const car = {
          id: id,
          model: prompt('Digite o modelo do carro: '),
          brand: prompt('Digite a marca do carro: '),
          year: Number(prompt('Digite o ano do carro: ')),
          price: Number(prompt('Digite o preço do carro: ')),
          color: prompt('Digite a cor do carro: ')
        }

        cars.push(car);
        id++;
        cars.sort((a, b) => b.price - a.price);
        break;
      case 2:
        cars.forEach(vehicle =>
          console.log(`ID: ${vehicle.id} | Modelo: ${vehicle.model}| Marca: ${vehicle.brand}| Ano: ${vehicle.year} | Cor: ${vehicle.color} |
Preço: R$${vehicle.price}`));
        break;
      case 3:
        const whichBrand = prompt('Digite a marca desejada: ');
        const filteredCars = cars.filter(vehicle => whichBrand === vehicle.brand);
        filteredCars.forEach(vehicle => console.log(`ID ${vehicle.id}| Modelo: ${vehicle.model} | Cor: ${vehicle.color} | Preço: R$${vehicle.price}`));
        break;
      case 4:
        const updateId = Number(prompt('Digite o ID do carro que deseja atualizar: '));
        const carUpdate = cars.find(vehicle => vehicle.id === updateId);

        if (!carUpdate) {
          console.log("Carro não encontrado!");
        } else {
          const newColor = prompt('Digite a nova cor do veículo: ');
          const newPrice = prompt('Digite o novo preço do veículo: ');

          carUpdate.color = newColor;
          carUpdate.price = newPrice;
          cars.sort((a, b) => b.price - a.price);

          console.log(cars);
        }
        break;
        case 5:
          const removeId = Number(
            prompt("Digite o ID do carro que deseja remover: ")
          );
          const carIndex = cars.findIndex((car) => car.id === removeId);

          if (carIndex === -1) {
            console.log("Veículo não encontrado.");
          } else {
            cars.splice(carIndex, 1);
            console.log(cars);
            console.log("Veículo removido com sucesso!");
          }
          break;
        case 6:
          console.log('Obrigado, volte sempre!');
          break;
      default:
        console.log('Opção inválida!');
        break;
    }
}
