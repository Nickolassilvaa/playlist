export function ListItem(props) {
    return (
        <li>
            <p>{props.list?.name} &hearts;</p>

            <a href={props.list?.link} target="_blank">
                Acessar musica &#187;
            </a>
        </li>
    )
}