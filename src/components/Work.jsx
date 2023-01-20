//pick a few things from the github
import Tile from "./Tile";
import stuff from "../data";
import { Card} from 'evergreen-ui';

const Work = () => {
    return (
        <Card flex="1">
            {/* {console.log(stuff)} */}
            {stuff.map((item,index) =>{

                return <Tile key={index} props={item}/>
            })}
        </Card>
    );
}

export default Work;