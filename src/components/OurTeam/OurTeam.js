import { Grid, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import TeamMate from './TeamMate'

const proje = "Proje", tasarim = "Tasarım", sosyalMedya = "Sosyal Medya", halkIleIlişkiler = "Halk İle İlİşkİler"

const team = [
    {team : proje, members : [
      "Öykü Tabak","Ece Eregez","Berna Özcan", "Meriç Uçarlar","Minel Başarır","Elif Yumuşakhuylu","Ravza Su Özer","Mine Özdemir",
    ]},
    {team : tasarim, members : [
        "Beyza Özdemir","Zehra Aygür","Sinem Ünlü","Yusuf Çuhadar","A.Cihangir Gündoğdu"
    ]},
    {team : sosyalMedya, members : [
        "Azra Aydemir","Beyza Özdemir","Pınar Gündüz","Uygar Çatal"
    ]},
    {team : halkIleIlişkiler, members : [
      "Zeynep Acar","Aylin Karabulut","Duru Gülsüm","Eylül Özten","Meliha Aydan Yücel","Melis Keskin","Nehir Nida Arslan"
    ]},
]


const OurTeam = () => {
    const [value, setValue] = useState(0)

    return (
      <Grid container justify="center" alignContent="center">
        <Grid container item xs={12} sm={8} direction="column">
          <Grid container justify="center" alignContent="center" style={{margin: "5rem 0"}}>
            <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
              {team.map((t) => (
                <Tab label={t.team} key={t.team} />
              ))}
            </Tabs>
          </Grid>

          <Grid container justify="center" alignContent="center">

            { team[value].members.map((m,index) => (
              <Grid item xs={3} key={index} style={{margin :"1rem"}}>
                <TeamMate m={m} />
              </Grid>
            ))}

          </Grid>
        </Grid>
      </Grid>
    );
}




export default OurTeam
