import { Grid, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import TeamMate from './TeamMate'

const proje = "Proje", tasarim = "Tasarım", sosyalMedya = "Sosyal Medya", halkIleIlişkiler = "Halk İle İlİşkİler"

const team = [
    {team : proje, members : [
      { name : "Öykü Tabak", src : "/pp/Oyku.jpg", manager : true },{ name : "Ece Eregez", src : "/pp/Ece.jpg", manager : true },{ name : "Berna Özcan", src : "/pp/Berna.jpg", manager : false },{ name : "Meriç Uçarlar", src : "/pp/Meric.jpg", manager : false },{ name : "Minel Başarır", src : "/pp/Minel.jpg", manager : false },{ name : "Elif Yumuşakhuylu", src : "Elif Yumuşakhuylu", manager : false },{ name : "Mine Özdemir", src : "Mine Özdemir", manager : false }
    ]},
    {team : tasarim, members : [
      { name : "Beyza Özdemir", src : "/pp/Beyza.jpg", manager : false },{ name : "Zehra Aygür", src : "/pp/Zehra.jpg", manager : false },{ name : "Sinem Ünlü", src : "/pp/Sinem.jpg", manager : false },{ name : "Yusuf Çuhadar", src : "Yusuf Çuhadar", manager : false },{ name : "A.Cihangir Gündoğdu", src : "/pp/Ahmet.jpg", manager : false }
    ]},
    {team : sosyalMedya, members : [
      { name : "Azra Aydemir", src : "/pp/Azra.png", manager : true },{ name : "Uygar Çatal", src : "/pp/Uygar.jpg", manager : true },{ name : "Beyza Özdemir", src : "/pp/Beyza.jpg", manager : false },{ name : "Pınar Gündüz", src : "/pp/Pinar.jpg", manager : false }
    ]},
    {team : halkIleIlişkiler, members : [
      { name : "Zeynep Acar", src : "/pp/Zeynep.jpg", manager : true },{ name : "Aylin Karabulut", src : "/pp/Aylin.jpg", manager : false },{ name : "Duru Gülsüm", src : "/pp/Duru.jpg", manager : false },{ name : "Eylül Özten", src : "/pp/Eylul.jpg", manager : false },{ name : "Meliha Aydan Yücel", src : "/pp/Meliha.jpg", manager : false },{ name : "Melis Keskin", src : "Melis Keskin", manager : false },{ name : "Nehir Nida Arslan", src : "/pp/Nehir.jpg", manager : false }
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
