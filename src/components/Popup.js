import {Dialog, useMediaQuery, useTheme} from "@mui/material";
import {SimpleButton} from "./SimpleButton";
import Valid from "./Valid";

export function Popup({openProps, handleClose, message}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('lg')); // lg => 1200px
    return <div>
        <Dialog
            disableScrollLock
            fullScreen={fullScreen}
            open={openProps}
            onClose={handleClose}
        >
            <div className={styles.popupBlock}>
                <Valid />
                <p>
                    {message}
                </p>
                <SimpleButton content={"Back"} onClick={handleClose}/>
            </div>
        </Dialog>
    </div>
}
