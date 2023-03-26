import Head from 'next/head'
import React from 'react';
import { Inter } from 'next/font/google'
import '../styles/Home.module.css'
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const inter = Inter({ subsets: ['latin'] })


export default function pag_estadistica_canton() {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'red',
              'blue',
              'green',
              'pink',
              'orange',
              'yellow',
            ],
            borderColor: [
                'red',
                'blue',
                'green',
                'pink',
                'orange',
                'yellow',
            ],
            borderWidth: 1,
           
          },
        ],
        
      };


      

      const Doughnut1: React.FC = () => {
        return (
          <div>
            <Doughnut data={data} />
          </div>
        );
      };



    return (
        <>
        {/* Título del tab de la página */}
       <Head>
        <title>QRCodeTEC</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
        <div className="ui fixed borderless huge menu">
  
        {/* Barra navbar con el logo y el título de la institución (no alterar, usar en las otras páginas) */}
        <div className="item">
            <img className= "ui tiny image" src="/iei_logo.jpg"/>
        </div>
            <a className="header item"><h1>Instituto de Educación Integral</h1></a>
        </div>

            
    {/* Linebreaks para formato de la página, ignorar */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>   
    <br/>
    <br/>
    <br/>
    <br/>

    {/* Título del encabezado de la página */}
    <div className="ui container">
    <center><h1 className="ui header header-text"><u>Generador de códigos</u></h1></center>
    </div>

    {/* Inicio del cuadro con la información principal de la página */}

    {/* Fila con el nombre de la sección de la página, en este caso dice nombre de la página porque es la homepage */}
    <br/>
    <div className="ui container border-1">
    <div className="ui container fluid">
    <center>
    <div className="ui inverted segment">
    <h2>Estadísticas por cantón</h2>
    </div>
    </center>
    </div>
    <br/>
    <br/>
    <br/>
    <center>
    <div  style={{height: '50%' , width: '50%'}} >
        <Doughnut1 />
    </div>
    </center>
    <div className="one wide column">
      <button className="ui small button">
      <a href="/"><h3>Regresar</h3></a>
      </button>
    </div>

    </div>
        </>

        

    )
}