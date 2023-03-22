import { Button, Grid } from "@mui/material";
import AltRouteIcon from '@mui/icons-material/AltRoute';
import GroupName from "../../components/group-name/GroupName"
export default function LandingPaging() {

    const groupNames = [
        { name: "CODE CRUSADERS", color: "#bd1e7d" },
        { name: "CODE MAESTROS", color: "#26d124" },
        { name: "GROUP X", color: "#de551f" },
        { name: "PIXEL KNIGHTS", color: "#4329f0" },
    ];

    return (
        <div style={{ width: "50%", backgroundColor: "GrayText" }}>

            <Grid container spacing={4} justifyContent="center" direction="row" alignItems="center">
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                    <Button variant="contained" color="primary" fullWidth startIcon=<AltRouteIcon /> >
                        <em>Click me</em>
                    </Button>
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <Button variant="contained" color="primary" fullWidth startIcon=<AltRouteIcon /> >
                        <em>Click me</em>
                    </Button>
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <Button variant="contained" color="primary" fullWidth startIcon=<AltRouteIcon /> >
                        <em>Click me</em>
                    </Button>
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <Button variant="contained" color="primary" fullWidth startIcon=<AltRouteIcon /> >
                        <em>Click me</em>
                    </Button>
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <Button variant="contained" color="primary" fullWidth startIcon=<AltRouteIcon /> >
                        <em>Click me</em>
                    </Button>
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <Button variant="contained" color="primary" fullWidth startIcon=<AltRouteIcon /> >
                        <em>Click me</em>
                    </Button>
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <Button variant="contained" color="primary" fullWidth startIcon=<AltRouteIcon /> >
                        <em>Click me</em>
                    </Button>
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <Button variant="contained" color="primary" fullWidth startIcon=<AltRouteIcon /> >
                        <em>Click me</em>
                    </Button>
                </Grid>
            </Grid>


            {/* <Button variant="contained" color="primary" fullWidth startIcon=<AltRouteIcon /> >
                <em>Click me</em>
            </Button>
            <Button variant="contained" color="primary" fullWidth startIcon=<AltRouteIcon /> >
                <em>Click me</em>
            </Button>
            <Button variant="contained" color="primary" fullWidth startIcon=<AltRouteIcon /> >
                <em>Click me</em>
            </Button> */}




            {/* {
                groupNames.map((item, key) => {
                    return <GroupName key={key + 1} name={item.name} color={item.color} />
                })
            } */}


        </div>
    )
}