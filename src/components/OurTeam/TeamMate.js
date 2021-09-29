import { Avatar, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'


const useStyles = makeStyles(theme => ({
    cardStyles : {
      width : 200,
      height : 200,
      [theme.breakpoints.down("sm")]: {
          height : 150,
          width : 150
      },
      [theme.breakpoints.down("xs")]: {
          height : 100,
          width : 100
      }
    },
    nameStyles : {
      marginTop : "5rem",
      [theme.breakpoints.down("sm")]: {
        marginTop : "3rem",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop : "1rem",
        fontSize : "1rem"
      }
    },
    managerStyles : {
      width : 200,
      position : "absolute",
      top : 10,
      [theme.breakpoints.down("sm")]: {
          width : 150,
          top : 5
      },
      [theme.breakpoints.down("xs")]: {
          width : 100,
          top : 0
      }
    },
    managerTextStyles : {
      fontSize : 20,
      [theme.breakpoints.down("sm")]: {
        fontSize : 15
      },
      [theme.breakpoints.down("xs")]: {
        fontSize : 10

      }
      } 
}))

const TeamMate = ({m}) => {
    const [hover, setHover] = useState(false)
    const styles = useStyles()

    return (
      <ReactCardFlip
        isFlipped={hover}
        flipDirection="vertical"
        containerClassName={styles.cardStyles}
        flipSpeedBackToFront=".7"
      >
        <div
          style={{ width: "100%", height: "100%" }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onTouchStart={() => setHover(true)}
          onTouchEnd={() => setHover(false)}
        >
          {m.name === m.src ? (
            <Avatar style={{ width: "100%", height: "100%"}}> {m.name} </Avatar>
            ) : (
              
              <Avatar style={{ width: "100%", height: "100%"}}  imgProps={{loading : "lazy"}} src={m.src} />
          )}
        </div>

        <div
          style={{ width: "100%", height: "100%", backgroundColor: "#F9B5C0",display : "flex",alignContent : "center",justifyContent : "center",borderRadius : "28px",position : "relative" }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onTouchStart={() => setHover(true)}
          onTouchEnd={() => setHover(false)}
        >
          {m.manager && (
            <div className={styles.managerStyles}>
              <Typography variant="h6" className={styles.managerTextStyles}  style={{textAlign : "center"}}>Yönetici</Typography>
              <div style={{height : 1.5,width : "75%", backgroundColor : "gray", marginLeft : "auto", marginRight : "auto"}} />
            </div>
                  
          )}
          <Typography variant="h6" className={styles.nameStyles} >{m.name}</Typography>
        </div>
      </ReactCardFlip>
    );
}

export default TeamMate
