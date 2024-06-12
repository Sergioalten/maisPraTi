/*
Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do 
navegador e manter um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, 
apenas funcionalidade lógica.
1. Estrutura de Dados:
    Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis.
    Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente.
2. Funcionalidades:
    Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
    Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.
    Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
    Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
    Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.
3. Regras de Negócio:
    Um hotel só pode aceitar reservas se houver quartos disponíveis.
    As reservas devem ser identificadas por um ID único e associadas a um único hotel.
4. Desafios Adicionais (Opcionais):
    Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.
    Gerar relatórios de ocupação para um hotel.
    Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel.
*/

const prompt = require('prompt-sync')();

function exercicio50(){
    console.clear();
    console.log("EXERCÍCIO 50:");
    console.log("-------------");

    let hotel = [
    {
        id: 1,
        nome: 'Hotel Ibis',
        cidade: 'São Paulo',
        quartosTotais: 80,
        quartosDisponiveis: 80,
    },
    {
        id: 2,
        nome: 'Hotel Ouro Minas',
        cidade: 'Belo Horizonte',
        quartosTotais: 50,
        quartosDisponiveis: 30,
    },
    {
        id: 3,
        nome: 'Hotel Gran Marquise',
        cidade: 'Fortaleza',
        quartosTotais: 90,
        quartosDisponiveis: 15,
    },
    {
        id: 4,
        nome: 'Wish Serrano Resort',
        cidade: 'Gramado',
        quartosTotais: 70,
        quartosDisponiveis: 70,
    },
    {
        id: 5,
        nome: 'Hotel Deville',
        cidade: 'Porto Alegre',
        quartosTotais: 50,
        quartosDisponiveis: 30,
    },
    {
        id: 6,
        nome: 'Ibis Florianopolis',
        cidade: 'Florianopolis',
        quartosTotais: 100,
        quartosDisponiveis: 100,
    },
    {
        id: 7,
        nome: 'Pousada Vista da Barra',
        cidade: 'Cassino Beach',
        quartosTotais: 10,
        quartosDisponiveis: 5,
    },
    ];

    let reserva = [];

    let sair = true;
    let nome;
    let cidade;
    let quartosTotais;
    let quartosDisponiveis;

    function normalizarPalavra(letra) {
        return letra
        .toLowerCase()
        .split(' ')
        .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ');
    }

    function adicionarHotel(nome, cidade, quartosTotais, quartosDisponiveis) {
        const novoHotel = {
        id: hotel.length + 1,
        nome: normalizarPalavra(nome),
        cidade: normalizarPalavra(cidade),
        quartosTotais: Number(quartosTotais),
        quartosDisponiveis: Number(quartosDisponiveis),
        };

        hotel.push(novoHotel);

        console.log("---------------------------------------------");
        console.log('✅ Hotel adicionado!');
        console.log("---------------------------------------------");
        console.log("");

        return hotel;
    }

    function buscarHoteisPorCidade(cidade) {
        const hoteisEncontrados = hotel.filter((hotel) => {
        return hotel.cidade === cidade;
        });

        if (hoteisEncontrados.length > 0) {
            console.log("---------------------------------------------");
            console.log(`Hotéis encontrados na cidade ${cidade}:`);
            console.log("---------------------------------------------");

            hoteisEncontrados.forEach((hotel) => {
            console.log("");
            console.log(`Id: ${hotel.id}`);
            console.log(`Nome: ${hotel.nome}`);
            console.log(`Quartos disponíveis: ${hotel.quartosDisponiveis}`);
            console.log("---------------------------------------------");
            });
        } else {
            console.log("---------------------------------------------");
            console.log(`Nenhum hotel encontrado na cidade ${cidade}`);
            console.log("---------------------------------------------");
        }
    }

    function fazerReserva(idHotel, nomeCliente) {
        const hotelReserva = hotel.find((hotel) => hotel.id === idHotel);

        if (!hotelReserva) {
            console.log("---------------------------------------------");
            return "Hotel não encontrado";
        }

        if (hotelReserva.quartosDisponiveis > 0) {
            const idReserva = reserva.length + 1;
            reserva.push({
            idReserva: idReserva,
            idHotel: idHotel,
            nomeCliente: normalizarPalavra(nomeCliente),
            });

            hotelReserva.quartosDisponiveis--;

            return "✅ Reserva realizada!";
        } else {
            return "❌ Não há quartos disponíveis neste hotel...";
        }
    }

    function cancelarReserva(idReserva) {
        const reservaHotelCliente = reserva.findIndex(
            (res) => res.idReserva == idReserva
        );

        if (reservaHotelCliente > -1) {
            const hotelReserva = hotel.find(
            (h) => h.id === reserva[reservaHotelCliente].idHotel
            );
            hotelReserva.quartosDisponiveis++;
            reserva.splice(reservaHotelCliente, 1);
            console.log("---------------------------------------------");
            console.log("✅ Reserva cancelada!");
            console.log("---------------------------------------------");
            console.log("");
        } else {
            console.log("---------------------------------------------");
            console.log('Reserva não encontrada...');
            console.log("---------------------------------------------");
            console.log("");
        }
    }

    function listarReservas() {
        if (reserva.length > 0) {
            reserva.forEach((reservaHotel) => {const hotelReservado = hotel.find((hotel) => hotel.id === reservaHotel.idHotel);

            if (hotelReservado) {
                console.log("---------------------------------------------");
                console.log(`Reserva ID: ${reservaHotel.idReserva}`);
                console.log(`Hotel: ${hotelReservado.nome}`);
                console.log(`Cliente: ${reservaHotel.nomeCliente}`);
                console.log("---------------------------------------------");
                console.log("");
            } else {
                console.log("❌ Não existem reservas...");
                console.log("---------------------------------------------");
                console.log("");
            }
            });
        } else {
            console.log("❌ Nenhuma reserva encontrada...");
            console.log("---------------------------------------------");
            console.log("");
        }
    }

    function sistemaPrincipal() {
        let opcao;

        console.log('🏨 Sistema de reserva de Hotéis');
        console.log('1 - Cadastrar hotel');
        console.log('2 - Buscar hotel por cidade');
        console.log('3 - Fazer reserva');
        console.log('4 - Cancelar reserva');
        console.log('5 - Listar reservas');
        console.log('6 - Sair');
        opcao = parseInt(prompt('Digite o número da opção: '));

        switch (opcao) {
            case 1:
                nome = prompt('Digite o nome do hotel: ');
                cidade = prompt('Digite o nome da cidade: ');
                quartosTotais = parseInt(prompt('Digite a quantidade de quartos: '));
                quartosDisponiveis = parseInt(prompt('Digite a quantidade de quartos disponíveis: '));
                adicionarHotel(nome, cidade, quartosTotais, quartosDisponiveis);
                break;
            case 2:
                cidade = prompt('Digite o nome da cidade: ');
                buscarHoteisPorCidade(normalizarPalavra(cidade));
                break;
            case 3:
                const idHotelReserva = parseInt(prompt('Digite o ID do hotel: '));
                const nomeClienteReserva = prompt('Digite o nome do cliente: ');
                fazerReserva(idHotelReserva, normalizarPalavra(nomeClienteReserva));
                break;
            case 4:
                id = prompt('Digite o ID da reserva: ');
                cancelarReserva(id);
                break;
            case 5:
                listarReservas();
                break;
            case 6:
                sair = false;
                break
            default:
                console.clear();
                console.log('❌ Opção inválida!');
                console.log("");
        }
    }

    while (sair) {
        sistemaPrincipal();
    }

    console.log("");
    console.log("------------------------");
    console.log("Programa finalizado! 👋");
    console.log("------------------------");
    
}

// exercicio50();

module.exports = { exercicio50 };