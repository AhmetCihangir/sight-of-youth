import { Grid } from '@material-ui/core'
import React from 'react'
import Department from './Department'

//Departments: Halkla iliskiler, Tasarim , Sosyal Medya , Proje Uretim

const departments = [
    {
        dpName : 'Halkla İlişkiler',
        dpDescription : "Halkla İlişkiler ekibimizin amacı topluluk üyeleriyle ve gerekli kurumlar/kişiler ile iletişime geçmektir.",
        dpImage : "/illustrations/community-service.svg"
    },
    {
        dpName : 'Tasarım',
        dpDescription : "Tasarım ekibi, sosyal medya için fotoğrafları, videoları ve yazıları tasarlar. Dijital ortamda yayımlayacağımız paylaşımları editler.",
        dpImage : "/illustrations/design.svg"
    },
    {
        dpName : 'Sosyal Medya Yönetimi',
        // dpDescription : "Sosyal Medya ekibinin amacı topluluğumuzun aktif rol alacağı platformlarda paylış yapmak, sosyal medya üzerinden gelecek soruları yanıtlamak ve topluluğumuzun bu platformdaki hesaplarını aktif bir şekilde kullanarak geliştirmektedir.",
        dpDescription : "Sosyal Medya ekibinin amacı topluluğumuzun aktif rol alacağı platformdaki hesaplarını aktif bir şekilde kullanarak geliştirmektedir.",
        dpImage : "/illustrations/social-media-management.svg"
    },
    {
        dpName : 'Proje Üretim',
        dpDescription : "Proje üretim ekibi, topluluğumuzda gerçekleştireceğimiz etkinliklerin fikirlerini geliştirir ve hayata geçmesini sağlar.",
        dpImage : "/illustrations/project-product.svg"
    },
]

const Departments = () => {
    
    return (
        <>
            <Grid container justify="space-evenly" style={{margin : "2rem 0"}} >
                {departments.map(dp => (
                    <Department dpName={dp.dpName} key={dp.dpName} dpDescription={dp.dpDescription} dpImage={dp.dpImage} />  
                ))}
            </Grid>
        </>
    )
}

export default Departments
