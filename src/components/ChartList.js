import Reaact from "react";
import ChartItem from './ChartItem';

const ChartList= ({songs}) => {
    const chartItems = songs.map((song) => {
        return(
            <ChartItem song={song} key={song.id}/>
        )
    })
    
   return (
       <div className="chart-list">
           <ol>
               {chartItems}
           </ol>
       </div>
   )
}

export default ChartList;