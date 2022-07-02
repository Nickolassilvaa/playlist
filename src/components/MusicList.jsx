import { ListItem } from "./ListItem";

import '../styles/list.scss'

export function MusicList() {
    const list = [
        {name: 'Quando bate aquela saudade', link: 'https://www.youtube.com/watch?v=lFxXFq2zWOo'},
        {name: 'Beautiful girls', link: 'https://www.youtube.com/watch?v=MrTz5xjmso4&list=RDMM&start_radio=1&rv=wieHguU2llQ'},
        {name: 'Hotel san diego', link: 'https://www.youtube.com/watch?v=O2Bd0EJg2Oc'},
        {name: 'Oceano', link: 'https://www.youtube.com/watch?v=-smnxqSTv4Y'},
        {name: 'No rancho fundo', link: 'https://www.youtube.com/watch?v=Mo6PtQxipr8'},
        {name: 'The joker and the queen', link: 'https://www.youtube.com/watch?v=2qzcHLyv3N0'},
        {name: 'Dive', link: 'https://www.youtube.com/watch?v=Wv2rLZmbPMA'},
        {name: 'Bem melhor', link: 'https://www.youtube.com/watch?v=5H5A2b9t5iY'},
        {name: 'Detesto despedidas', link: 'https://www.youtube.com/watch?v=-ArT83MwJ58'},
        {name: 'Proibida pra mim', link: 'https://www.youtube.com/watch?v=mgtVofuiPPQ'},
        {name: 'Rubi', link: 'https://www.youtube.com/watch?v=CZyCDQ0BMxM&list=RDMM&index=7'},
        {name: 'O destino não quis', link: 'https://www.youtube.com/watch?v=8g23lUx94fY'},
        {name: 'Pisando descalço', link: 'https://www.youtube.com/watch?v=75wzR1s4GE4'},
        {name: 'Meu lado da história', link: 'https://www.youtube.com/watch?v=GcFyj5lYen0'},
        {name: 'N.A.D.A.B.O.M pt. 2', link: 'https://www.youtube.com/watch?v=FSGuut6e2J4'},
        {name: 'Vem cá', link: 'https://www.youtube.com/watch?v=S95E-tAdyZk&list=RDMM&index=17'},
    ]

    return (
        <section>
            <div className="content">
                <h1>&raquo; Lista de musicas &laquo;</h1>

                <ul>
                    {list.map((lista,index) => {
                        return <ListItem key={index} list={lista} />
                    })}
                </ul>
            </div>
        </section>
    )
}

