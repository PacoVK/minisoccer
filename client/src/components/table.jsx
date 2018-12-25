import React, {Component} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/Stars';


class HighscoreTable extends Component {

    renderRanks(realIndex){
        let index = realIndex +1;
        switch (index) {
            case (1):
                return <StarIcon fontSize={"large"}/>;
            case (2):
                return <h3>{index}</h3>;
            case (3):
                return <h4>{index}</h4>;
            default:
                return index
        }
    }

    render(){
        return(
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{maxWidth: 0}}>
                                Rank
                            </TableCell>
                            <TableCell style={{maxWidth: 0}}>
                                Team
                            </TableCell>
                            <TableCell style={{maxWidth: 0}}>
                                Getränke
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map((row,index) => {
                            return (
                                <TableRow key={row.team}>
                                    <TableCell style={{maxWidth: 0}}>
                                        {this.renderRanks(index)}
                                    </TableCell>
                                    <TableCell style={{maxWidth: 0}}>
                                        {row.team}
                                    </TableCell>
                                    <TableCell numeric style={{maxWidth: 0}}>
                                        {row.total}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
}

}

export default HighscoreTable;
