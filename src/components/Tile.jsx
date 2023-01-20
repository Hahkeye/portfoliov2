import { Card } from 'evergreen-ui';
const Tile = ({props}) => {
    return (
        <Card border="solid" width='fit-content' margin="auto">
            <h3><a href={`${props.link}`} target="_blank">{props.title}</a></h3>
            <p>{props.desc}</p>
            {
                props.img &&
                <img width="250px" height="250px" src={`/imgs/${props.img}`}></img>
            }
            
        </Card>
    );
}

export default Tile;