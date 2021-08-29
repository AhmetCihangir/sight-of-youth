import { Grid, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import TeamMate from './TeamMate'

const proje = "Proje", tasarim = "Tasarım", sosyalMedya = "Sosyal Medya", halkIleIlişkiler = "Halk İle İlİşkİler"

const team = [
    {team : proje, members : [
      { name : "Öykü Tabak", src : "/pp/Oyku.jpg" },{ name : "Ece Eregez", src : "/pp/Ece.jpg" },{ name : "Berna Özcan", src : "/pp/Berna.jpg" },{ name : "Meriç Uçarlar", src : "/pp/Meric.jpg" },{ name : "Minel Başarır", src : "/pp/Minel.jpg" },{ name : "Elif Yumuşakhuylu", src : "Elif Yumuşakhuylu" },{ name : "Mine Özdemir", src : "Mine Özdemir" }
    ]},
    {team : tasarim, members : [
      { name : "Beyza Özdemir", src : "/pp/Beyza.jpg" },{ name : "Zehra Aygür", src : "/pp/Zehra.jpg" },{ name : "Sinem Ünlü", src : "/pp/Sinem.jpg" },{ name : "Yusuf Çuhadar", src : "Yusuf Çuhadar" },{ name : "A.Cihangir Gündoğdu", src : "/pp/Ahmet.jpg" }
    ]},
    {team : sosyalMedya, members : [
      { name : "Azra Aydemir", src : "/pp/Azra.png" },{ name : "Beyza Özdemir", src : "/pp/Beyza.jpg" },{ name : "Pınar Gündüz", src : "/pp/Pinar.jpg" },{ name : "Uygar Çatal", src : "/pp/Uygar.jpg" }
    ]},
    {team : halkIleIlişkiler, members : [
      { name : "Zeynep Acar", src : "/pp/Zeynep.jpg" },{ name : "Aylin Karabulut", src : "/pp/Aylin.jpg" },{ name : "Duru Gülsüm", src : "/pp/Duru.jpg" },{ name : "Eylül Özten", src : "/pp/Eylul.jpg" },{ name : "Meliha Aydan Yücel", src : "/pp/Meliha.jpg" },{ name : "Melis Keskin", src : "Melis Keskin" },{ name : "Nehir Nida Arslan", src : "/pp/Nehir.jpg" }
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
